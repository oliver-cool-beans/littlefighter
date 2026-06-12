import { LivingObject } from '../livingobject.js'
import type { CharacterData, ObjectConfig, StateMap } from '../../types/index.js'

/** Visual effect object — plays a one-shot animation and self-destructs on frame 1000. */
export class Effect extends LivingObject {
  override readonly type = 'effect'

  constructor(config: ObjectConfig, data: CharacterData, id: number) {
    super(config, data, id)
    this.mech.mass = 0
    this.team = 0
    this.setup()
  }

  init(config: { x: number; y: number; z: number; frame?: number }): void {
    this.setPosition(config.x, config.y, config.z)
    this.trans.frame(config.frame ?? 0, 10)
    this.trans.trans()
  }

  override states: StateMap = {}
}

export function createEffect(config: ObjectConfig, data: CharacterData, id: number): Effect {
  return new Effect(config, data, id)
}
