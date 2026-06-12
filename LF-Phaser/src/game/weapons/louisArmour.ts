import Weapon from './weapon.js'
import type { WeaponActions, ObjectConfig } from '../../types/index.js'
import weapon10Data from '../../data/weapon10.js'
import weapon11Data from '../../data/weapon11.js'

export class LouisArmour extends Weapon {
  override readonly weightClass = 'heavy' as const
  override readonly actions: WeaponActions = {}

  constructor(config: ObjectConfig, private readonly variant: 10 | 11 = 10) {
    super(config, variant === 10 ? weapon10Data : weapon11Data, variant === 10 ? 217 : 218)
  }
}

export function createLouisArmour(config: ObjectConfig, variant: 10 | 11 = 10): LouisArmour {
  return new LouisArmour(config, variant)
}
