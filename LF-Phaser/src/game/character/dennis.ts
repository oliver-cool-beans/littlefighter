/**
 * Dennis — character id 12.
 *
 * Extends Character with no extra id_update overrides;
 * all behaviour is handled by the generic state machine.
 */

import Character from './index.js'
import dennisData from '../../data/dennis.js'
import type { ObjectConfig } from '../../types/index.js'

export class Dennis extends Character {
  constructor(config: ObjectConfig) {
    super(config, dennisData, 12)
  }
}

export function createDennis(config: ObjectConfig): Dennis {
  return new Dennis(config)
}
