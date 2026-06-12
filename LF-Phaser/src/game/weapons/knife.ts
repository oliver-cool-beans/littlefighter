import Weapon from './weapon.js'
import type { WeaponActions, ObjectConfig } from '../../types/index.js'
import weapon4Data from '../../data/weapon4.js'

export class Knife extends Weapon {
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
    super(config, weapon4Data, 120)
  }
}

export function createKnife(config: ObjectConfig): Knife {
  return new Knife(config)
}
