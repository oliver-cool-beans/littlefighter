import Weapon from './weapon.js'
import type { WeaponActions, ObjectConfig } from '../../types/index.js'
import weapon3Data from '../../data/weapon3.js'

export class WoodenBox extends Weapon {
  override readonly weightClass = 'heavy' as const

  override readonly actions: WeaponActions = {}

  constructor(config: ObjectConfig) {
    super(config, weapon3Data, 151)
  }
}

export function createWoodenBox(config: ObjectConfig): WoodenBox {
  return new WoodenBox(config)
}
