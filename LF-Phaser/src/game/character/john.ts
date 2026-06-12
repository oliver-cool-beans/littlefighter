/**
 * John — character id 14.
 *
 * Extends Character with no extra id_update overrides;
 * all behaviour is handled by the generic state machine.
 */

import Character from './index.js'
import johnData from '../../data/john.js'
import type { ObjectConfig } from '../../types/index.js'

export class John extends Character {
  constructor(config: ObjectConfig) {
    super(config, johnData, 14)
  }
}

export function createJohn(config: ObjectConfig): John {
  return new John(config)
}
