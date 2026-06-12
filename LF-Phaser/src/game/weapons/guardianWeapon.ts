import Weapon from './weapon.js'
import type { WeaponActions, ObjectConfig } from '../../types/index.js'
import weapon12Data from '../../data/weapon12.js'

export class GuardianWeapon extends Weapon {
  override readonly weightClass = 'heavy' as const

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
    super(config, weapon12Data, 325)
  }
}

export function createGuardianWeapon(config: ObjectConfig): GuardianWeapon {
  return new GuardianWeapon(config)
}
