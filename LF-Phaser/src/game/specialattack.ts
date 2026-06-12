import { LivingObject } from './livingobject.js'
import Global from './global.js'
import { make_array } from './util.js'
import type { ItrSpec, CharacterData, ObjectConfig, StateMap } from '../types/index.js'

const gameplay = Global.gameplay

/** Return the itr effect for `frame.D.itr` handling both single and array forms. */
function firstItrEffect(itr: unknown): number | undefined {
  if (Array.isArray(itr)) return (itr[0] as ItrSpec | undefined)?.effect
  return (itr as ItrSpec | undefined)?.effect
}

/** Special-attack projectile. Port of F.LF/LF/specialattack.js. */
class SpecialAttack extends LivingObject {
  override readonly type = 'specialattack'
  parent!: LivingObject

  /** Remaining pierce charges: on each enemy hit, decrement instead of aresting. */
  remainingPierces = 0
  /** Remaining bounce charges: on each enemy hit in state 3000, reverse direction. */
  remainingBounces = 0

  // Chasing state (for kind:1 and kind:2 homing balls)
  private chasing?: {
    target: LivingObject | null
    chased: Record<number, number>
  }

  constructor(config: ObjectConfig, data: CharacterData, id: number) {
    super(config, data, id)
    this.team = config.team
    this.health.hp = (this.proper('hp') as number | undefined) || gameplay.default.health.hpFull
    if (!gameplay.specialattack_projectiles.includes(id)) {
      this.mech.mass = 0
    }
    this.setup()
  }

  init(config: {
    z: number
    dir: 'left' | 'right'
    opoint: { x: number; y: number; action: number; facing: number; dvx?: number; dvy?: number; kind?: number; oid?: number }
    dvz?: number
    pierceCount?: number
    bounceCount?: number
    parent: LivingObject
  }): void {
    const { z, dir: parentDir, opoint, dvz, pierceCount, bounceCount, parent } = config
    this.parent = parent

    const spawnPos = parent.mech.toWorldPoint({ x: opoint.x, y: opoint.y })
    this.mech.setPosition(0, 0, z)
    this.mech.alignPosition(spawnPos, this.mech.toWorldPoint({ x: this.frame.D.centerx ?? 0, y: this.frame.D.centery ?? 0 }))

    let face = opoint.facing
    if (face >= 20) face = face % 10

    let dir: 'left' | 'right'
    if (face === 0) {
      dir = parentDir
    } else if (face === 1) {
      dir = parentDir === 'right' ? 'left' : 'right'
    } else if (face >= 2 && face <= 10) {
      dir = 'right'
    } else {
      dir = 'left'
    }
    this.switchFacing(dir)

    this.trans.frame(opoint.action === 0 ? 999 : opoint.action)
    this.trans.trans()

    this.physics.velocityX = this.dirh() * (opoint.dvx ?? 0)
    this.physics.velocityY = opoint.dvy ?? 0
    this.physics.velocityZ = this.frame.D.dvx ? (dvz ?? 0) : 0

    this.remainingPierces = pierceCount ?? 0
    this.remainingBounces = bounceCount ?? 0
  }

  override interaction(): void {
    const itrs = make_array(this.frame.D.itr)
    if (this.team === 0) return

    for (const itrRaw of itrs) {
      const itr = itrRaw as ItrSpec
      const vol = this.mech.buildVolume(itr)

      // Allow zwidth override from per-id config
      const idZwidth = this.proper(String(this.id), 'zwidth') as number | undefined
      vol.zwidth = idZwidth ?? itr.zwidth ?? 0

      const targets = this.scene.query(vol, this, { tag: 'body' }) as LivingObject[]

      for (const target of targets) {
        // Never collide with sibling projectiles from the same parent character.
        if (target.type === 'specialattack' && (target as SpecialAttack).parent === this.parent) continue

        if (itr.kind === 0 || itr.kind === 9 || itr.kind === 15 || itr.kind === 16) {
          // Cannot attack characters of same team
          if (target.type === 'character' && target.team === this.team) continue
          // kind:0 can only attack same-team objects head-on
          if (itr.kind === 0 && target.type !== 'character' && target.team === this.team && target.physics.facing === this.physics.facing) continue

          if (!this.itr.arest) {
            const hitResult = target.hit(itr, this, { x: this.physics.x, y: this.physics.y, z: this.physics.z }, vol)
            if (this.attacked(hitResult)) {
              if (this.remainingPierces > 0) {
                this.remainingPierces--
                // Mark this target with vrest so it isn't re-hit while the projectile travels on
                this.itr.vrest[target.uid] = itr.vrest ?? 15
                this.stateUpdate('hit_others', itr, target)
              } else {
                this.itrArestUpdate(itr)
                this.stateUpdate('hit_others', itr, target)
                if (itr.arest) break
              }
              if (target.type === 'character' && itr.kind === 9) {
                // Shield hits a character: shield disintegrates
                this.health.hp = 0
              }
            }
          }
        } else if (itr.kind === 8) {
          // Heal effect
          if (target.type === 'character') {
            if (target.heal(itr.injury ?? 0)) {
              this.trans.frame(itr.dvx ?? 1000)
            }
          }
        }
      }
    }
  }

  override hit(ITR: ItrSpec, att: LivingObject, _attps: { x: number; y: number; z: number }, _rect: unknown): number | boolean {
    if (this.itr.vrest[att.uid]) return false
    // Ignore hits from sibling projectiles spawned by the same parent character.
    if (att.type === 'specialattack' && (att as SpecialAttack).parent === this.parent) return false
    if (ITR?.vrest) this.itr.vrest[att.uid] = ITR.vrest
    return this.stateUpdate('hit', ITR, att, _attps, _rect) ?? false
  }

  override attacked(inj: number | boolean): boolean {
    return this.parent.attacked(inj)
  }

  override offset_attack(inj: number): void {
    this.parent.offset_attack(inj)
  }

  override killed(): void {
    this.parent.killed()
  }

  private chase_target(): void {
    if (!this.chasing) {
      this.chasing = { target: null, chased: {} }
    }
    const targets = this.match.scene.query(null, this, {
      type:    'character',
      notTeam: this.team,
      sort:    (obj: unknown) => {
        const lo = obj as LivingObject
        const dx = lo.physics.x - this.physics.x
        const dz = lo.physics.z - this.physics.z
        let score = Math.sqrt(dx * dx + dz * dz)
        if (this.chasing!.chased[lo.uid]) score += 500 * this.chasing!.chased[lo.uid]
        return score
      }
    } as Record<string, unknown>) as LivingObject[]

    const target = targets[0] ?? null
    this.chasing.target = target
    if (target) {
      this.chasing.chased[target.uid] = (this.chasing.chased[target.uid] ?? 0) + 1
    }
  }

  override states: StateMap = {
    generic: (event, itrArg, attArg) => {
      switch (event) {
        case 'TU':
          this.interaction()
          this.mech.tickPhysics()
          if (this.frame.D.hit_a) this.health.hp -= this.frame.D.hit_a as number
          this.advanceChasingBall()
          break

        case 'frame':
          if (this.frame.D.opoint) this.match.create_object(this.frame.D.opoint, this)
          if (this.frame.D.sound) this.match.sound.play(this.frame.D.sound as string, this.physics.x)
          if (this.frame.N === 15) this.trans.frame(1000)
          break

        case 'TU_force':
        case 'frame_force':
          if (this.frame.D.hit_j) {
            this.physics.velocityZ = (this.frame.D.hit_j as number) - 50
          }
          break

        case 'leaving':
          // TU_update already triggers this only when leaving; destroy the projectile
          this.trans.frame(1000)
          break

        case 'hit':
        case 'hit_others':
          this.match.sound.play(this.data.bmp.weapon_broken_sound ?? '', this.physics.x)
          break

        case 'die':
          this.trans.frame((this.frame.D.hit_d as number | undefined) ?? 1000)
          break
      }

      // State 3000: handle hit/hit_others with ball interaction logic
      if (this.frame.D.state === 3000) {
        return this.handle3000(event, itrArg as ItrSpec | undefined, attArg as LivingObject | undefined)
      }
    },

    // ── State 1002: Special-attack projectile (e.g. phoenix kick ball) ────────
    1002: (event) => {
      switch (event) {
        case 'state_entry':
          (this as unknown as { nobounce: boolean }).nobounce = this.parent.physics.y === 0
          break
        case 'hit_others':
          this.physics.velocityX = 0
          this.trans.frame(10)
          break
        case 'TU': {
          const nobounce = (this as unknown as { nobounce?: boolean }).nobounce
          if (this.physics.y === 0 && this.physics.velocityY > 0) {
            if (nobounce) {
              this.trans.frame(1000)
            } else if (this.mech.currentSpeed() > gameplay.weapon.bounceup.limit) {
              this.trans.frame(10)
              this.physics.velocityY = gameplay.weapon.bounceup.speed.y
              if (this.physics.velocityX) this.physics.velocityX = (this.physics.velocityX > 0 ? 1 : -1) * gameplay.weapon.bounceup.speed.x
              if (this.physics.velocityZ) this.physics.velocityZ = (this.physics.velocityZ > 0 ? 1 : -1) * gameplay.weapon.bounceup.speed.z
            }
          }
          break
        }
      }
    },

    // State 3001: ball hitting — no special interaction rules
    3001: (_event) => {},

    // ── State 3006: ice column / specific ball states ─────────────────────────
    3006: (event, itrArg, attArg) => {
      const ITR = itrArg as ItrSpec | undefined
      const att = attArg as LivingObject | undefined
      switch (event) {
        case 'hit_others':
          if (att?.type === 'specialattack' && (att.state() === 3005 || att.state() === 3006)) {
            this.trans.frame(10)
            this.physics.velocityX = 0
            this.physics.velocityZ = 0
            return true
          }
          break
        case 'hit':
          if (ITR?.kind === 9) {
            this.physics.velocityX *= -1
            this.physics.z += 0.3
            return true
          }
          if (att?.type === 'specialattack' && (att.state() === 3005 || att.state() === 3006)) {
            this.trans.frame(20)
            this.physics.velocityX = 0
            this.physics.velocityZ = 0
            return true
          }
          if (att?.type === 'specialattack' && att.state() === 3000) {
            this.physics.velocityX = (this.physics.velocityX > 0 ? -1 : 1) * 7
            return true
          }
          if (ITR?.kind === 0) {
            this.physics.velocityX = (this.physics.velocityX > 0 ? -1 : 1) * 1
            if (ITR.bdefend && ITR.bdefend > gameplay.defend.break_limit) {
              this.health.hp = 0
            }
            return true
          }
          break
      }
    },

    // ── State 15: whirlwind ───────────────────────────────────────────────────
    15: (event) => {
      if (event === 'TU') {
        this.physics.velocityX = this.dirh() * (this.frame.D.dvx ?? 0)
      }
    },
  }

  /** State 3000 (flying ball) hit/hit_others interaction logic. */
  private handle3000(event: string, ITR: ItrSpec | undefined, att: LivingObject | undefined): boolean | undefined {
    const selfItrEffect = firstItrEffect(this.frame.D.itr)
    if (event === 'hit_others') {
      if (!att || !ITR) return

      // Bounce perk: reverse direction instead of dying
      if (this.remainingBounces > 0) {
        this.remainingBounces--
        this.physics.velocityX *= -1
        this.switchFacing(this.physics.velocityX >= 0 ? 'right' : 'left')
        this.itr.arest = 3   // brief cooldown to avoid immediately re-hitting the same enemy
        this.itr.vrest = {}  // reset per-target rest so bounced projectile can hit new targets
        return true
      }

      const attItrEffect = firstItrEffect(att.frame.D.itr)
      // Freeze ball hitting non-freeze, non-fire ball — skip
      if (selfItrEffect === 3 && att.type === 'specialattack' && att.state() === 3000 && attItrEffect !== 3 && attItrEffect !== 2) return
      // Non-freeze/fire ball hitting a freeze ball → spawn ice block
      if (selfItrEffect !== 3 && selfItrEffect !== 2 && att.type === 'specialattack' && attItrEffect === 3) {
        this.physics.velocityX = 0
        this.trans.frame(1000)
        this.match.create_object({ kind: 1, x: 41, y: 50, action: 0, dvx: 0, dvy: 0, oid: 209, facing: 0 }, att)
        return true
      }
      this.physics.velocityX = 0
      this.trans.frame(10)
      return
    }

    if (event === 'hit') {
      if (!att || !ITR) return
      const attItrEffect = firstItrEffect(att.frame.D.itr)
      if (ITR.kind === 14) { this.trans.setWait(0, 20); return true }
      if (att.team === this.team && att.physics.facing === this.physics.facing) return false
      if (selfItrEffect === 3 && att.type === 'specialattack' && att.state() === 3000 && attItrEffect !== 3 && attItrEffect !== 2) return true
      if (att.type === 'specialattack') {
        if (selfItrEffect !== 3 && selfItrEffect !== 2 && ITR.effect === 3) {
          this.physics.velocityX = 0
          this.trans.frame(1000)
          this.match.create_object({ kind: 1, x: 41, y: 50, action: 0, dvx: 0, dvy: 0, oid: 209, facing: 0 }, att)
          return true
        }
        if (ITR.kind === 0) { this.physics.velocityX = 0; this.trans.frame(20); return true }
      }
      if (att.state() === 19) { this.physics.velocityX = 0; this.trans.frame(20); return true }
      if (ITR.kind === 0 || ITR.kind === 9) {
        this.physics.velocityX = 0
        this.team = att.team
        this.trans.frame(30)
        this.trans.trans(); this.TU_update(); this.trans.trans(); this.TU_update()
        return true
      }
    }
  }

  /** Per-TU chasing-ball update (called from generic TU). */
  private advanceChasingBall(): void {
    const hitFa = this.frame.D.hit_Fa as number | undefined
    if (hitFa === 1 || hitFa === 2 || hitFa === 7 || hitFa === 4) {
      if (this.health.hp > 0) {
        this.chase_target()
        const target = this.chasing?.target
        if (!target) return
        const dx = target.physics.x - this.physics.x
        const dz = target.physics.z - this.physics.z
        if (this.physics.velocityX * (dx >= 0 ? 1 : -1) < 14) {
          this.physics.velocityX += (dx >= 0 ? 1 : -1) * 0.7
        }
        if (this.physics.velocityZ * (dz >= 0 ? 1 : -1) < 2.2) {
          this.physics.velocityZ += (dz >= 0 ? 1 : -1) * 0.4
        }
        this.switchFacing(this.physics.velocityX >= 0 ? 'right' : 'left')
      }
    } else if (hitFa === 10) {
      this.physics.velocityX = (this.physics.velocityX > 0 ? 1 : -1) * 17
      this.physics.velocityZ = 0
    }
  }
}

export function createSpecialAttack(config: ObjectConfig, data: CharacterData, id: number): SpecialAttack {
  return new SpecialAttack(config, data, id)
}

export default SpecialAttack

