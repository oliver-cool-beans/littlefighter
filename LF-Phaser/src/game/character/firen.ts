/**
 * Firen — character id 16.
 *
 * Extends Character with no extra id_update overrides;
 * all behaviour is handled by the generic state machine.
 */

import Character from './index.js'
import firenData from '../../data/firen.js'
import type { ObjectConfig } from '../../types/index.js'

export class Firen extends Character {
  constructor(config: ObjectConfig) {
    super(config, firenData, 16)
  }
}

export function createFiren(config: ObjectConfig): Firen {
  return new Firen(config)
}
