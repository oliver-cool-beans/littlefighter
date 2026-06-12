import Weapon from './weapon.js'
import type { WeaponActions, ObjectConfig } from '../../types/index.js'
import weapon13Data from '../../data/weapon13.js'

export class DragonWeapon extends Weapon {
  override readonly weightClass = 'heavy' as const
  override readonly actions: WeaponActions = {}

  constructor(config: ObjectConfig) {
    super(config, weapon13Data, 339)
  }
}

export function createDragonWeapon(config: ObjectConfig): DragonWeapon {
  return new DragonWeapon(config)
}
