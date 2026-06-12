import Weapon from './weapon.js'
import type { WeaponActions, ObjectConfig } from '../../types/index.js'
import weapon2Data from '../../data/weapon2.js'

export class Hoe extends Weapon {
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
    super(config, weapon2Data, 101)
  }
}

export function createHoe(config: ObjectConfig): Hoe {
  return new Hoe(config)
}
