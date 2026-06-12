import { LivingObject } from '../livingobject.js'
import Global from '../global.js'
import type { CharacterData, ObjectConfig, StateMap } from '../../types/index.js'

const gameplay = Global.gameplay

/** Tumbling broken-weapon shard — scattered when a weapon's HP reaches 0. */
export class BrokenWeapon extends LivingObject {
  override readonly type = 'broken'

  private _lifetime = 120

  constructor(config: ObjectConfig, data: CharacterData, id: number) {
    super(config, data, id)
    this.team = 0
    this.setup()
  }

  init(config: { x: number; y: number; z: number; dvx: number; dvy: number; dvz: number; frame: number }): void {
    this.setPosition(config.x, config.y, config.z)
    this.physics.velocityX = config.dvx
    this.physics.velocityY = config.dvy
    this.physics.velocityZ = config.dvz
    this.trans.frame(config.frame, 10)
    this.trans.trans()
  }

  override states: StateMap = {
    generic: (event) => {
      if (event !== 'TU') return
      this.mech.tickPhysics()
      this._lifetime--
      if (this._lifetime <= 0) {
        this.trans.frame(1000)
        return
      }
      if (this.physics.y === 0 && this.physics.velocityY >= 0) {
        const bounceSpeed = gameplay.weapon.bounceup.speed
        if (Math.abs(this.physics.velocityY) > bounceSpeed.y * 0.3) {
          this.physics.velocityY = -bounceSpeed.y * 0.4
        } else {
          this.physics.velocityY = 0
        }
        this.physics.velocityX *= 0.6
        this.physics.velocityZ *= 0.6
      }
    },
  }
}

export function createBrokenWeapon(config: ObjectConfig, data: CharacterData, id: number): BrokenWeapon {
  return new BrokenWeapon(config, data, id)
}
