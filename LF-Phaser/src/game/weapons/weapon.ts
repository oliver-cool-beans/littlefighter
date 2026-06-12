import { LivingObject } from '../livingobject.js'
import Global from '../global.js'
import { make_array } from '../util.js'
import type { ItrSpec, CharacterData, ObjectConfig, WeaponActions, StateMap } from '../../types/index.js'

const gameplay = Global.gameplay

export type WeaponWeightClass = 'light' | 'heavy'

export interface WeaponResult {
  thrown?: boolean
  hit?: number
  vrest?: number
  arest?: number
}

/**
 * Abstract base class for all weapons.
 *
 * Subclasses must declare:
 *   readonly weightClass: WeaponWeightClass
 *   readonly actions: WeaponActions
 *
 * and pass their data + id to super().
 *
 * Example:
 *   class Bat extends Weapon {
 *     readonly weightClass = 'light' as const
 *     readonly actions: WeaponActions = { standAttack: 20, runAttack: 35, ... }
 *     constructor(config, id) { super(config, batData, id) }
 *   }
 */
abstract class Weapon extends LivingObject {
  abstract readonly weightClass: WeaponWeightClass
  abstract readonly actions: WeaponActions

  override readonly type: 'lightweapon' | 'heavyweapon'
  hold: { obj: LivingObject | null; pre: LivingObject | null }

  constructor(config: ObjectConfig, data: CharacterData, id: number) {
    super(config, data, id)
    // type is derived at construction; subclasses set weightClass before super() isn't
    // possible, so we resolve it after — but TS abstract fields are set by the subclass
    // constructor before super() completes in the prototype chain.  We defer to a getter.
    this.hold = { obj: null, pre: null }
    this.health.hp = (data.bmp.weapon_hp ?? 200)
    // type is finalised in setup() after subclass has set weightClass
    this.type = undefined as unknown as 'lightweapon' | 'heavyweapon'
  }

  /** Called after construction — resolves type from weightClass and runs LivingObject setup. */
  override setup(): void {
    // Safe to read now: subclass constructor has run, weightClass is defined
    ;(this as { type: unknown }).type = this.weightClass === 'light' ? 'lightweapon' : 'heavyweapon'
    super.setup()
  }

  get light(): boolean { return this.weightClass === 'light' }
  get heavy(): boolean { return this.weightClass === 'heavy' }

  init(config: { opoint: { kind: number }; parent: LivingObject }): void {
    if (config.opoint.kind === 2) {
      (config.parent as unknown as { hold_weapon: (w: Weapon) => void }).hold_weapon(this)
      this.pick(config.parent)
    }
  }

  override interaction(): void {
    const itrs = make_array(this.frame.D.itr)
    if (this.team === 0) return
    if (!this.heavy && !(this.light && this.state() === 1002)) return

    for (const itr of itrs) {
      if ((itr as ItrSpec).kind !== 0) continue

      const vol = this.mech.buildVolume(itr)
      vol.zwidth = 0
      const targets = this.scene.query(vol, this, { tag: 'body', notTeam: this.team }) as LivingObject[]

      // Build the effective itr: guarantee a vrest value so the victim's
      // itrVrestUpdate actually sets a cooldown. Without this, frames whose
      // itr has no vrest field allow the weapon to hit the same target every tick.
      const frameItr = itr as ItrSpec
      const effectiveItr: ItrSpec = frameItr.vrest !== undefined
        ? frameItr
        : { ...frameItr, vrest: gameplay.default.weapon.vrest }

      for (const target of targets) {
        if (this.itr.arest) continue

        const didHit = this.attacked(
          target.hit(effectiveItr, this, { x: this.physics.x, y: this.physics.y, z: this.physics.z }, vol)
        )
        if (didHit) {
          const signVx = this.physics.velocityX === 0 ? 0 : (this.physics.velocityX > 0 ? 1 : -1)
          if (this.light) {
            this.physics.velocityX = signVx * gameplay.weapon.hit.vx
            this.physics.velocityY = gameplay.weapon.hit.vy
          }
          this.itrArestUpdate(effectiveItr)
          const timeout = this.light ? 2 : 4
          this.effect.dvx = 0
          this.effect.dvy = 0
          this.effect_stuck(0, timeout)
        }
      }
    }
  }

  override hit(ITR: ItrSpec, att: LivingObject, attps: { x: number; y: number; z: number }, rect: unknown): number | boolean {
    if (this.hold.obj) return false
    if (this.itr.vrest[att.uid]) return false

    if (ITR.kind === 15) {
      (this as unknown as { whirlwind_force: (r: unknown) => void }).whirlwind_force(rect)
      return true
    }
    if (ITR.kind === 10 || ITR.kind === 11) {
      (this as unknown as { flute_force: () => void }).flute_force()
      return true
    }

    const fall = ITR.fall !== undefined ? ITR.fall : gameplay.default.fall.value

    let accept = false
    if (this.light) {
      if (this.state() === 1002) {
        accept = true
        if ((att.dirh() > 0) !== (this.physics.velocityX > 0)) {
          this.physics.velocityX *= gameplay.weapon.reverse.factor.vx
        }
        this.physics.velocityY *= gameplay.weapon.reverse.factor.vy
        this.physics.velocityZ *= gameplay.weapon.reverse.factor.vz
        this.team = att.team
      } else if (this.state() === 1004) {
        if (att.type === 'lightweapon' || att.type === 'heavyweapon') {
          accept = true
          this.physics.velocityX = (this.physics.velocityX ? (this.physics.velocityX > 0 ? 1 : -1) : 0) * gameplay.weapon.bounceup.speed.x
          this.physics.velocityZ = (this.physics.velocityZ ? (this.physics.velocityZ > 0 ? 1 : -1) : 0) * gameplay.weapon.bounceup.speed.z
        }
      }
    }

    if (this.heavy) {
      if (this.state() === 2004) {
        accept = true
        if (fall < 30) {
          this.effect_create(0, gameplay.effect.duration)
        } else if (fall < gameplay.fall.KO) {
          this.physics.velocityY = gameplay.weapon.soft_bounceup.speed.y
        } else {
          this.physics.velocityY = gameplay.weapon.bounceup.speed.y
          if (att.physics.velocityX) this.physics.velocityX = (att.physics.velocityX > 0 ? 1 : -1) * gameplay.weapon.bounceup.speed.x
          if (att.physics.velocityZ) this.physics.velocityZ = (att.physics.velocityZ > 0 ? 1 : -1) * gameplay.weapon.bounceup.speed.z
          this.trans.frame(999)
        }
      } else if (this.state() === 2000) {
        if (fall >= gameplay.fall.KO) {
          accept = true
          if ((att.dirh() > 0) !== (this.physics.velocityX > 0)) {
            this.physics.velocityX *= gameplay.weapon.reverse.factor.vx
          }
          this.physics.velocityY *= gameplay.weapon.reverse.factor.vy
          this.physics.velocityZ *= gameplay.weapon.reverse.factor.vz
          this.team = att.team
        }
      }
    }

    if (accept) {
      this.visualeffect_create()
      if (ITR.vrest) this.itr.vrest[att.uid] = ITR.vrest
      if (ITR.injury) this.health.hp -= ITR.injury
      if (this.data.bmp.weapon_hit_sound) this.match.sound.play(this.data.bmp.weapon_hit_sound, this.physics.x)
    }
    return accept
  }

  /** Called each frame by the holding character to position/throw/attack with the weapon. */
  act(att: LivingObject, wpoint: Record<string, unknown>, holdpoint: { x: number; y: number }): WeaponResult {
    const result: WeaponResult = {}

    if (this.data.frame[wpoint.weaponact as number]) {
      this.trans.frame(wpoint.weaponact as number)
      this.trans.trans()
    }

    const fD = this.frame.D
    const currentWpoint = fD.wpoint as Record<string, unknown> | undefined
    if (currentWpoint?.kind === 2) {
      const dvx = wpoint.dvx as number | undefined
      const dvy = wpoint.dvy as number | undefined
      const dvz = wpoint.dvz as number | undefined

      if (dvx) this.physics.velocityX = att.dirh() * dvx
      if (dvz) this.physics.velocityZ = att.dirv() * dvz
      if (dvy) this.physics.velocityY = dvy

      if (this.physics.velocityX || this.physics.velocityY || this.physics.velocityZ) {
        const imx = this.light ? 58 : 48
        const imy = this.light ? -15 : -40
        this.mech.setPosition(
          att.physics.x + att.dirh() * imx,
          att.physics.y + imy,
          att.physics.z + this.physics.velocityZ
        )
        this.physics.zOrderOffset = 1
        this.trans.frame(this.light ? 40 : 999)
        this.trans.trans()
        this.hold.obj = null
        result.thrown = true
      }

      if (!result.thrown) {
        const wpointCover = currentWpoint.cover !== undefined
          ? (currentWpoint.cover as number)
          : gameplay.default.wpoint.cover

        this.physics.zOrderOffset = wpointCover === 1 ? -1 : 1
        this.switchFacing(att.physics.facing)
        this.physics.z = att.physics.z
        this.physics.screenZ = att.physics.z
        this.mech.alignPosition(holdpoint, this.mech.toWorldPoint(currentWpoint as { x: number; y: number }))

      }

      if (this.light && wpoint.attacking) {
        const itrs = make_array(fD.itr)
        for (const itr of itrs) {
          if ((itr as ItrSpec).kind !== 5) continue

          const vol = this.mech.buildVolume(itr)
          vol.zwidth = 0
          const targets = this.scene.query(vol, [this, att], { tag: 'body', notTeam: this.team }) as LivingObject[]

          for (const target of targets) {
            if (att.itr.arest) continue
            const wsl = this.data.weapon_strength_list
            const citr: ItrSpec = (wsl && wsl[wpoint.attacking as number])
              ? { ...(itr as ItrSpec), ...wsl[wpoint.attacking as number] }
              : (itr as ItrSpec)

            const didHit = this.attacked(
              target.hit(citr, att, { x: att.physics.x, y: att.physics.y, z: att.physics.z }, vol)
            )
            if (didHit) {
              if (citr.vrest) result.vrest = citr.vrest
              if (citr.arest) result.arest = citr.arest
              result.hit = target.uid
            }
          }
        }
      }
    }

    if (result.thrown && this.shadowSprite) this.shadowSprite.show()
    return result
  }

  drop(dvx?: number, dvy?: number): void {
    this.team = 0
    this.hold.obj = null
    if (dvx) this.physics.velocityX = dvx * 0.5
    if (dvy) this.physics.velocityY = dvy * 0.2
    this.physics.zOrderOffset = 0
    this.trans.frame(999)
    if (this.shadowSprite) this.shadowSprite.show()
  }

  pick(attacker: LivingObject): boolean {
    if (!this.hold.obj) {
      this.hold.obj = attacker
      this.hold.pre = attacker
      this.team = attacker.team
      if (this.shadowSprite) this.shadowSprite.hide()
      return true
    }
    return false
  }

  override attacked(inj: number | boolean): boolean {
    if (this.hold.pre) return this.hold.pre.attacked(inj)
    return inj !== false
  }

  override offset_attack(inj: number): void {
    this.hold.pre?.offset_attack(inj)
  }

  override killed(): void {
    this.hold.pre?.killed()
  }

  override states: StateMap = {
    generic: (event) => {
      if (event === 'TU') {
        this.interaction()
        const st = this.state()
        if (st !== 1001 && st !== 2001) {
          this.mech.tickPhysics()
        }
        if (this.physics.y === 0 && this.physics.velocityY > 0) {
          this.onLandedGround()
        }
        return
      }
      if (event === 'die') {
        this.trans.frame(1000)
        if (this.data.bmp.weapon_broken_sound) this.match.sound.play(this.data.bmp.weapon_broken_sound, this.physics.x)
        this.brokeneffect_create(this.id)
      }
    },
    1003: (event) => {
      if (event === 'frame' && this.frame.N === 70 && !this.frame.D.sound) {
        if (this.data.bmp.weapon_drop_sound) this.match.sound.play(this.data.bmp.weapon_drop_sound, this.physics.x)
      }
    },
    1004: (event) => {
      if (event === 'frame' && this.frame.N === 64) this.team = 0
    },
    2000: (event) => {
      if (event === 'frame' && this.frame.N === 21) {
        this.trans.setNext(20)
        if (!this.frame.D.sound && this.data.bmp.weapon_drop_sound) {
          this.match.sound.play(this.data.bmp.weapon_drop_sound, this.physics.x)
        }
      }
    },
    2004: (event) => {
      if (event === 'frame' && this.frame.N === 20) this.team = 0
    },
  }

  private onLandedGround(): void {
    const speed = this.mech.currentSpeed()
    if (speed > gameplay.weapon.bounceup.limit) {
      if (this.light) {
        this.physics.velocityY = 0
        this.trans.frame(70)
      }
      if (this.heavy) {
        this.physics.velocityY = gameplay.weapon.bounceup.speed.y
      }
      if (this.physics.velocityX) {
        this.physics.velocityX = (this.physics.velocityX > 0 ? 1 : -1) * gameplay.weapon.bounceup.speed.x
      }
      if (this.physics.velocityZ) {
        this.physics.velocityZ = (this.physics.velocityZ > 0 ? 1 : -1) * gameplay.weapon.bounceup.speed.z
      }
      this.health.hp -= (this.data.bmp.weapon_drop_hurt ?? 0)
    } else {
      this.team = 0
      this.physics.velocityY = 0
      if (this.light) this.trans.frame(70)
      if (this.heavy) this.trans.frame(21)
    }
    this.physics.zOrderOffset = 0
  }
}

export default Weapon

