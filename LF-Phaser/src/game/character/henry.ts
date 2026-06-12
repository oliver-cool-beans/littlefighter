/**
 * Henry — character id 15.
 *
 * Extends Character with no extra id_update overrides;
 * all behaviour is handled by the generic state machine.
 */

import Character from './index.js'
import henryData from '../../data/henry.js'
import type { ObjectConfig } from '../../types/index.js'

export class Henry extends Character {
  constructor(config: ObjectConfig) {
    super(config, henryData, 15)
  }
}

export function createHenry(config: ObjectConfig): Henry {
  return new Henry(config)
}
