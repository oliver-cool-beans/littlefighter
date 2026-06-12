/**
 * Bat — light weapon (weapon0).
 *
 * WeaponActions frame numbers match davis.ts attack frames:
 *   standAttack : 20 or 25  (random — handled in states.ts using randomStandAttacks)
 *   runAttack   : 35
 *   jumpAttack  : 30
 *   dashAttack  : 40
 *   standThrow  : 45  (directional)
 *   runThrow    : 45
 *   jumpThrow   : 52  (directional)
 */
import Weapon from './weapon.js'
import type { WeaponActions, CharacterData, ObjectConfig } from '../../types/index.js'
import weapon0Data from '../../data/weapon0.js'

export class Bat extends Weapon {
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
    super(config, weapon0Data, 0)
  }
}

/** Convenience factory. */
export function createBat(config: ObjectConfig): Bat {
  return new Bat(config)
}
