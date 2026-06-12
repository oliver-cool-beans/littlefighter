/**
 * Freeze — character id 17.
 *
 * Extends Character with no extra id_update overrides;
 * all behaviour is handled by the generic state machine.
 */

import Character from './index.js'
import freezeData from '../../data/freeze.js'
import type { ObjectConfig } from '../../types/index.js'

export class Freeze extends Character {
  constructor(config: ObjectConfig) {
    super(config, freezeData, 17)
  }
}

export function createFreeze(config: ObjectConfig): Freeze {
  return new Freeze(config)
}
