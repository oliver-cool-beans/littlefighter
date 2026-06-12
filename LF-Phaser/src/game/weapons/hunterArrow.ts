import Weapon from './weapon.js'
import type { WeaponActions, ObjectConfig } from '../../types/index.js'
import weapon14Data from '../../data/weapon14.js'

export class HunterArrow extends Weapon {
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
    super(config, weapon14Data, 313)
  }
}

export function createHunterArrow(config: ObjectConfig): HunterArrow {
  return new HunterArrow(config)
}
