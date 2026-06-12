/**
 * character/index.ts — LF2 character (player/NPC) class.
 *
 * Ported from F.LF/LF/character.js (AMD wrapper stripped).
 * Extends LivingObject with full state machine, combo processing, and combat.
 */

import { LivingObject }                            from '../livingobject.js'
import { ComboDec, buildCharacterComboList }       from '../combodec.js'
import { make_array, lookup_abs }                  from '../util.js'
import Global                                      from '../global.js'
import { SoundEngine }                             from '../../sound/SoundEngine.js'
import { states, statesFacingFollowsInput } from './states.js'
import type { CharacterData, ItrSpec, CpointSpec, WpointSpec, OpointSpec, ObjectConfig } from '../../types/index.js'
import { effectNumToDamageType } from '../../types/index.js'
const gameplay = Global.gameplay

export class Character extends LivingObject {
  override readonly type = 'character'

  override states = states
  override statesFacingFollowsInput = statesFacingFollowsInput

  hold:   { obj: unknown }
  parent: Character | null
  comboBuffer: { combo: string | null; timeout: number }

  stat: { attack: number; picking: number; kill: number; hitsLanded: number; biggestHit: number }
  override counter: { disappearCount: number; deadBlinkCount: number }

  transformCharacter: unknown
  caughtThrowInjury: number | null

  /** Match tick at which the white hit-tint should be cleared. */
  private _hitTintExpiry = 0

  /** Accumulated bdefend damage required to stagger this character out of a block. */
  staggerResistance: number

  /** Multiplier applied to outgoing injury on every hit this character deals (default 1). */
  outgoingDamageMultiplier: number

  /** Multiplier applied to the bdefend (stagger pressure) value on every hit this character deals (default 1). */
  staggerDamageMultiplier: number

  /** Multiplier applied to the fall (knockdown pressure) value on every hit this character deals (default 1). */
  knockdownMultiplier: number

  constructor(config: ObjectConfig, data: CharacterData, thisID: number) {
    super(config, data, thisID)

    this.mech.clampXToBounds = true

    this.con = config.controller ?? undefined

    this.comboBuffer = { combo: null, timeout: 0 }

    if (this.con) {
      const comboEvent = (kobj: { name: string }) => {
        const K = kobj.name
        if (K === 'left' || K === 'right') {
          if (this.allowFacingFollowsInput) this.switchFacing(K as 'left' | 'right')
        }
        const curPri = Global.combo_priority[this.comboBuffer.combo ?? ''] ?? 0
        const newPri = Global.combo_priority[K]                           ?? 0
        if (this.comboBuffer.timeout > 0 && newPri < curPri) return
        this.comboBuffer.combo   = K
        this.comboBuffer.timeout = gameplay.combo.timeout
      }

      const comboList = buildCharacterComboList(Global.combo_list)
      this.combodec = new ComboDec(this.con, { clear_on_combo: true, callback: comboEvent }, comboList)
    }

    this.hold   = { obj: null }
    this.parent = (config as unknown as Record<string, unknown>).parent as Character | null ?? null

    this.staggerResistance        = data.bmp.staggerResistance       ?? gameplay.defend.break_limit
    this.outgoingDamageMultiplier = data.bmp.outgoingDamageMultiplier ?? 1
    this.staggerDamageMultiplier  = data.bmp.staggerDamageMultiplier  ?? 1
    this.knockdownMultiplier      = data.bmp.knockdownMultiplier      ?? 1

    // Character-specific health values
    this.health.bdefend = 0
    this.health.fall    = 0
    this.health.hp      = this.health.hpFull = this.health.hpBound =
      (this.proper('hp') as number | undefined) ?? gameplay.default.health.hpFull
    this.health.hpLost  = 0
    this.health.mpFull  = gameplay.default.health.mpFull
    this.health.mp      = gameplay.default.health.mpStart
    this.health.mpUsage = 0

    this.stat = { attack: 0, picking: 0, kill: 0, hitsLanded: 0, biggestHit: 0 }

    this.counter = { disappearCount: -1, deadBlinkCount: -1 }

    this.transformCharacter = null
    this.caughtThrowInjury  = 0

    // Override trans.frame to check MP cost before allowing the transition
    const baseTransFrame = this.trans.frame.bind(this.trans)
    this.trans.frame = (next: number, au?: number): void => {
      if (next === 0 || next === 999) {
        this.trans.setNext(next, au)
        this.trans.setWait(0, au)
        return
      }
      const nextF = this.data.frame[next]
      if (!nextF) return
      let dmp = 0
      if (nextF.mp && nextF.mp > 0) dmp = nextF.mp % 1000
      if (this.health.mp - dmp >= 0) {
        this.health.mp    -= dmp
        this.health.mpUsage = dmp
        this.trans.setNext(next, au)
        this.trans.setWait(0, au)
      }
    }
    void baseTransFrame  // suppress unused-variable warning

    this.mech.onLandCallback = () => {
      const speed = Math.abs(this.physics.velocityX) + Math.abs(this.physics.velocityZ)
      if (speed > 1) {
        this.match.spawn_land_dust?.(this.physics.x, this.physics.z, speed)
      }
    }

    this.setup()
  }

  override destroy(): void {
    super.destroy()
  }

  // ── Combo processing ────────────────────────────────────────────────────────

  override combo_update(): void {
    let K = this.comboBuffer.combo || null
    if (this.comboBuffer.combo === 'jump-att') K = 'jump'

    const res = this.stateUpdate('combo', K)
    this.stateUpdate('post_combo')

    if (this.comboBuffer.combo === 'jump-att') {
      if (res) this.comboBuffer.combo = 'att'
    } else {
      if (res || K === 'left' || K === 'right' || K === 'up' || K === 'down') {
        this.comboBuffer.combo = null
      }
    }
  }

  // ── Combat hooks (Phase 7) ──────────────────────────────────────────────────

  /**
   * pre_interaction — runs before the frame transition, uses *next* frame's itr.
   * Handles kind 1/3 (catch) and kind 2/7 (weapon pick-up).
   */
  pre_interaction(): void {
    const ITR_LIST = make_array(this.trans.nextFrameData().itr as ItrSpec | ItrSpec[] | null)
    for (const ITR of ITR_LIST) {
      const vol = this.mech.buildVolume(ITR as unknown as ItrSpec)
      vol.zwidth = 0
      const hit = this.scene.query(vol, this, { tag: 'body' })

      switch (ITR.kind) {
        case 1: // catch (target must be in dance-of-pain, state 16)
        case 3: { // super catch (any target)
          for (const target of hit) {
            const t = target as Character
            if (t.team === this.team || t.type !== 'character') continue
            if (ITR.kind === 1 && t.state() !== 16) continue
            if (this.itr.arest) continue
            const dir = t.caught_a(ITR as ItrSpec & { catchingact: number[] }, this,
              { x: this.physics.x, y: this.physics.y, z: this.physics.z })
            if (dir) {
              this.itrArestUpdate(ITR)
              this.trans.frame(dir === 'front'
                ? (ITR.catchingact as number[])[0]
                : (ITR.catchingact as number[])[1], 10)
              this.catching = t
              break
            }
          }
          break
        }

        case 7: // pick-up (only when att key held)
          if (!this.con?.state['att']) break
          // fall through
        case 2: { // pick up weapon
          if (this.hold.obj) break
          for (const target of hit) {
            const t = target as { type: string; pick?: (p: Character) => boolean }
            if (ITR.kind === 7 && (target as { type: string }).type === 'heavyweapon') continue
            if (t.type !== 'lightweapon' && t.type !== 'heavyweapon') continue
            if (!t.pick?.(this)) continue
            this.stat.picking++
            this.itrArestUpdate(ITR)
            if (ITR.kind === 2) {
              this.trans.frame(t.type === 'lightweapon' ? 115 : 116, 10)
            }
            this.hold.obj = target
            break
          }
          break
        }
      }
    }
  }

  /**
   * post_interaction — runs after the frame transition, uses *current* frame's itr.
   * Implements itr kind 0 (normal attack) and kind 4 (falling attack).
   */
  post_interaction(): void {
    const ITR_LIST = make_array(this.frame.D.itr as ItrSpec | ItrSpec[] | null)
    for (const ITR of ITR_LIST) {
      const vol = this.mech.buildVolume(ITR as unknown as ItrSpec)
      vol.zwidth = 0
      const hit = this.scene.query(vol, this, { tag: 'body' })

      switch (ITR.kind) {
        case 0: // normal attack
        case 4: { // falling
          for (const target of hit) {
            const t = target as Character
            let canhit = true
            const effectNum = ITR.effect !== undefined ? ITR.effect : gameplay.default.effect.num
            if (effectNum === 0 || effectNum === 1) {
              if (t.type === 'character' && t.team === this.team) canhit = false
              if ((t as unknown as { type: string }).type === 'specialattack' && t.team === this.team) canhit = false
            }
            if (ITR.kind === 4 && this.itr.attacker &&
                this.itr.attacker.uid === t.uid) canhit = false

            if (canhit && !this.itr.arest) {
              const scaleInjury    = this.outgoingDamageMultiplier !== 1 && ITR.injury  != null
              const scaleBdefend   = this.staggerDamageMultiplier  !== 1 && ITR.bdefend != null
              const scaleFall      = this.knockdownMultiplier       !== 1 && ITR.fall    != null
              const effectiveITR = (scaleInjury || scaleBdefend || scaleFall)
                ? {
                    ...ITR,
                    ...(scaleInjury  ? { injury:  Math.round(ITR.injury!  * this.outgoingDamageMultiplier) } : {}),
                    ...(scaleBdefend ? { bdefend: Math.round(ITR.bdefend! * this.staggerDamageMultiplier)  } : {}),
                    ...(scaleFall    ? { fall:    Math.round(ITR.fall!    * this.knockdownMultiplier)       } : {}),
                  }
                : ITR
              const result = t.hit(effectiveITR, this, { x: this.physics.x, y: this.physics.y, z: this.physics.z }, vol)
              if (this.attacked(result)) {
                this.itrArestUpdate(ITR)
                if (!this.stateUpdate('hit_stop')) {
                  switch (this.frame.N) {
                    case 86: case 87: case 91:
                      this.effect_stuck(0, 2)
                      this.trans.incWait(1)
                      break
                    default:
                      this.effect_stuck(0, gameplay.default.itr.hit_stop)
                  }
                }
                if (ITR.arest) break
              }
            }
          }
          break
        }
      }
    }
  }

  override wpoint(): void {
    if (!this.hold.obj || !this.frame.D.wpoint) return
    const wp = this.frame.D.wpoint as WpointSpec
    if (wp.kind === 1) {
      const weapon = this.hold.obj as { act(p: Character, wp: WpointSpec, pt: { x: number; y: number; z: number }): { thrown?: boolean; hit?: number | null } }
      const act = weapon.act(this, wp, this.mech.toWorldPoint(wp))
      if (act.thrown) this.hold.obj = null
      if (act.hit != null) {
        this.itrArestUpdate(act as unknown as ItrSpec)
        this.trans.incWait(gameplay.default.itr.hit_stop, 10)
      }
    } else if (wp.kind === 3) {
      this.dropWeapon()
    }
  }

  override opoint(): void {
    if (!this.frame.D.opoint) return
    const ops = make_array(this.frame.D.opoint as OpointSpec | OpointSpec[])
    for (const op of ops) {
      if (Math.abs(op.facing ?? 1) > 10) {
        this.match.create_multiple_objects?.(op, this,
          Math.floor(Math.abs(op.facing ?? 1) / 10), op.dvz ?? 3)
      } else {
        this.match.create_object(op, this)
      }
    }
  }

  /**
   * hit — called on the *victim* when an enemy's itr overlaps this body.
   */
  hit(ITR: ItrSpec, att: Character, attps: { x: number; y: number; z: number }, _vol: unknown): number | boolean {
    if (!this.itrVrestTest(att.uid)) return false

    let accepthit  = false
    let defended   = false
    let efDvx      = 0
    let efDvy      = 0
    let inj        = 0
    let effectNum  = gameplay.default.effect.num
    const wasStateFrozen = this.state() === 13

    if (this.state() === 14) {
      // lying — unhittable
    } else if (
      ITR.kind === undefined || ITR.kind === 0 ||
      ITR.kind === 4 || ITR.kind === 9
    ) {
      accepthit = true
      const compen  = this.physics.y === 0 ? 1 : 0
      const attdir  = att.physics.velocityX === 0 ? att.dirh() : (att.physics.velocityX > 0 ? 1 : -1)
      efDvx = ITR.dvx ? attdir * (ITR.dvx - compen) : 0
      efDvy = ITR.dvy ? ITR.dvy : 0
      effectNum = ITR.effect !== undefined ? ITR.effect : gameplay.default.effect.num

      const attackedFromFront = (attps.x > this.physics.x) === (this.physics.facing === 'right')

      if (this.state() === 7 && attackedFromFront) {
        // Defending — blocked
        if (ITR.injury)  inj += gameplay.defend.injury.factor * ITR.injury
        if (ITR.bdefend) this.health.bdefend = (this.health.bdefend ?? 0) + ITR.bdefend

        if ((this.health.bdefend ?? 0) > this.staggerResistance) {
          this.match.spawn_guard_break?.(this.physics.x, this.physics.z, this.physics.y)
          this.trans.frame(112, 20)
        } else {
          this.trans.frame(111, 20)
        }

        if (efDvx) efDvx += (efDvx > 0 ? -1 : 1) * lookup_abs(gameplay.defend.absorb, efDvx)
        efDvy = 0

        if (this.health.hp - inj <= 0) {
          this.falldown(ITR, efDvx, efDvy, inj, attps)
        } else {
          defended = true
        }
      } else {
        if (ITR.injury) inj += ITR.injury

        this.health.bdefend = 45
        this.fall(ITR, efDvx, efDvy, inj, attps)
        if (this.health.fall! > 0) {
          if (!wasStateFrozen && (effectNum === 3 || effectNum === 30)) {
            this.trans.frame(201, 38)
          } else if (effectNum === 2 || (effectNum >= 20 && effectNum <= 23)) {
            this.trans.frame(203, 36)
          }
        }
      }

      const vanish = gameplay.effect.duration - 1
      this.effect_create(-1, vanish, efDvx, efDvy)
    }

    if (accepthit) {
      this.itr.attacker = att
      this.itrVrestUpdate(att.uid, ITR)

      // Hit sound — mirrors the original posteffect() + visualeffect_create() logic:
      //   defended        → '002' (block thud)
      //   fire effect     → '070' (fire grunt)
      //   ice effect      → '065' fresh freeze / '066' already frozen
      //   normal hit      → '006' big (knockdown) / '001' small (stagger)
      const stageWidth = this.background.width
      const pan = Math.max(-0.9, Math.min(0.9, (this.physics.x / stageWidth) * 2 - 1))

      if (defended) {
        SoundEngine.play('1/002', { pan })
      } else if (effectNum === 2 || effectNum === 20 || effectNum === 21 || effectNum === 22 || effectNum === 23) {
        SoundEngine.play('1/070', { pan })
      } else if (effectNum === 3 || effectNum === 30) {
        SoundEngine.play(wasStateFrozen ? '1/066' : '1/065', { pan })
      } else {
        // falldown() resets health.fall to 0 → knockdown; stagger leaves it > 0
        const isKnockdown = (this.health.fall ?? 0) === 0
        SoundEngine.play(isKnockdown ? '1/006' : '1/001', { pan })
      }
    }
    this.injury(inj)
    if (accepthit) {
      if (inj > 0) {
        const damageType = ITR.damageType ?? effectNumToDamageType(effectNum)
        this.match.spawn_damage_number?.(this.physics.x, this.physics.z, this.physics.y, inj, damageType, defended)
        const severity = inj >= 40 ? 'heavy' as const : inj >= 20 ? 'medium' as const : 'light' as const
        this.match.spawn_hit_particles?.(this.physics.x, this.physics.z, this.physics.y, efDvx, efDvy, severity, damageType)
        const attFrameName = (att.frame.D.name ?? '') as string
        const isBigHit = /^(jump_|sky_|super_)/.test(attFrameName)
        if (isBigHit) {
          this.match.screen_shake?.(severity)
          const hitstopFrames = severity === 'heavy' ? 5 : severity === 'medium' ? 3 : 1
          this.match.trigger_hitstop?.(hitstopFrames)
        }
        this.match.notify_hit?.(att.team ?? 0)
        // White flash on the victim sprite (2 ticks)
        this.bodySprite.setTint(0xFFFFFF)
        this._hitTintExpiry = this.match.time.t + 2
      }
      return inj
    }
    return false
  }

  private fall(ITR: ItrSpec, efDvx: number, efDvy: number, inj: number, attps: { x: number; y: number; z: number }): void {
    const amount = ITR.fall !== undefined ? ITR.fall : gameplay.default.fall.value
    this.health.fall = (this.health.fall ?? 0) + amount
    const fv = this.health.fall!

    if (this.state() === 13) {
      this.falldown(ITR, efDvx, efDvy, inj, attps)
    } else if (this.physics.y < 0 || this.physics.velocityY < 0) {
      this.falldown(ITR, efDvx, efDvy, inj, attps)
    } else if (this.health.hp - inj <= 0) {
      this.falldown(ITR, efDvx, efDvy, inj, attps)
    } else if (fv > 0  && fv <= 20) { this.trans.frame(220, 20)
    } else if (fv > 20 && fv <= 30) { this.trans.frame(222, 20)
    } else if (fv > 30 && fv <= 40) { this.trans.frame(224, 20)
    } else if (fv > 40 && fv <= 60) { this.trans.frame(226, 20)
    } else if (gameplay.fall.KO < fv) {
      this.falldown(ITR, efDvx, efDvy, inj, attps)
    }
  }

  private falldown(ITR: ItrSpec, _efDvx: number, efDvy: number, _inj: number, attps: { x: number; y: number; z: number }): void {
    if (ITR.dvy === undefined) efDvy = gameplay.default.fall.dvy
    this.health.fall = 0
    this.physics.velocityY = 0
    const front = (attps.x > this.physics.x) === (this.physics.facing === 'right')
    if (front && (ITR.dvx ?? 0) < 0 && (ITR.bdefend ?? 0) >= 60) {
      this.trans.frame(186, 21)
    } else if (front) {
      this.trans.frame(180, 21)
    } else {
      this.trans.frame(186, 21)
    }
    void efDvy  // applied by effect_create at call site
  }

  override injury(inj: number): void {
    this.health.hp       -= inj
    this.health.hpLost    = (this.health.hpLost ?? 0) + inj
    this.health.hpBound   = (this.health.hpBound ?? this.health.hp) - Math.ceil(inj / 3)
  }

  attacked(inj: number | boolean): boolean {
    if (inj === true) return true
    if (typeof inj === 'number' && inj > 0) {
      const target = (this.is_npc && this.parent) ? this.parent.stat : this.stat
      target.attack     += inj
      target.hitsLanded += 1
      if (inj > target.biggestHit) target.biggestHit = inj
      return true
    }
    return false
  }

  override heal(amount: number): boolean {
    this.effect.heal = amount
    return true
  }

  override offset_attack(inj: number): void {
    this.stat.attack -= inj
  }

  override killed(): void {
    if (this.is_npc && this.parent) this.parent.stat.kill++
    else                            this.stat.kill++
  }

  override die(): void {
    if (!this.is_npc) this.itr.attacker?.killed()
  }

  hold_weapon(wea: unknown): void {
    this.hold.obj = wea
  }

  dropWeapon(dvx?: number, dvy?: number): void {
    if (!this.hold.obj) return
    const weapon = this.hold.obj as { drop(dvx?: number, dvy?: number): void }
    weapon.drop(dvx, dvy)
    this.hold.obj = null
  }

  caught_a(ITR: ItrSpec, att: LivingObject, attps: { x: number; y: number; z: number }): 'front' | 'back' | undefined {
    if (!((ITR.kind === 1 && this.state() === 16) || ITR.kind === 3)) return undefined
    const front = (attps.x > this.physics.x) === (this.physics.facing === 'right')
    this.trans.frame(front ? (ITR.caughtact as number[])[0] : (ITR.caughtact as number[])[1], 22)
    this.health.fall = 0
    this.catching      = att
    this.itr.attacker  = att
    this.dropWeapon()
    return front ? 'front' : 'back'
  }

  caught_b(holdpoint: { x: number; y: number }, cpoint: CpointSpec, adir: 'left' | 'right', vdir: number): void {
    const self = this as unknown as Record<string, unknown>
    self.caughtBHoldpoint = holdpoint
    self.caughtBCpoint    = cpoint
    self.caughtBAdir      = adir
    self.caughtBVdir      = vdir
  }

  caught_cpointkind(): number {
    const cp = this.frame.D.cpoint as CpointSpec | undefined
    return cp ? (cp.kind ?? 0) : 0
  }

  caught_cpointhurtable(): number {
    const cp = this.frame.D.cpoint as CpointSpec | undefined
    return cp?.hurtable !== undefined ? cp.hurtable : gameplay.default.cpoint.hurtable
  }

  caught_throw(cpoint: CpointSpec, vdir: number): void {
    this.trans.frame(cpoint.vaction !== undefined ? cpoint.vaction : gameplay.default.cpoint.vaction, 22)
    ;(this as unknown as Record<string, unknown>).caughtThrowZ = vdir
  }

  caught_release(): void {
    this.catching      = null
    this.trans.frame(181, 22)
    this.effect.dvx    = 3
    this.effect.dvy    = -3
    this.effect.timein  = -1
    this.effect.timeout = 0
  }

  /** Override in subclasses to handle character-specific events from the state machine. */
  id_update(_event: string, ..._args: unknown[]): unknown {
    return undefined
  }

  override TU_update(): void {
    super.TU_update()
    if (this._hitTintExpiry > 0 && this.match.time.t >= this._hitTintExpiry) {
      this._hitTintExpiry = 0
      this.bodySprite.clearTint()
    }
  }
}

export default Character
