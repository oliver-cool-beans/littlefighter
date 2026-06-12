import Weapon from './weapon.js'
import type { WeaponActions, ObjectConfig } from '../../types/index.js'
import weapon1Data from '../../data/weapon1.js'

export class Stone extends Weapon {
  override readonly weightClass = 'heavy' as const

  override readonly actions: WeaponActions = {}

  constructor(config: ObjectConfig) {
    super(config, weapon1Data, 150)
  }
}

export function createStone(config: ObjectConfig): Stone {
  return new Stone(config)
}
