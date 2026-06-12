import Weapon from './weapon.js'
import type { WeaponActions, ObjectConfig } from '../../types/index.js'
import weapon9Data from '../../data/weapon9.js'

export class Bottle extends Weapon {
  override readonly weightClass = 'light' as const

  override readonly actions: WeaponActions = {
    standAttack:    20,
    standAttackAlt: 25,
    runAttack:      35,
    jumpAttack:     30,
    dashAttack:     40,
    standThrow:     45,
    runThrow:       45,
    jumpThrow:      52,
  }

  constructor(config: ObjectConfig) {
    super(config, weapon9Data, 124)
  }
}

export function createBottle(config: ObjectConfig): Bottle {
  return new Bottle(config)
}
