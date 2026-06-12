/**
 * Bandit — character id 21.
 *
 * Extends Character with no extra id_update overrides;
 * all behaviour is handled by the generic state machine.
 */

import Character from './index.js'
import banditData from '../../data/bandit.js'
import type { ObjectConfig } from '../../types/index.js'

export class Bandit extends Character {
  constructor(config: ObjectConfig) {
    super(config, banditData, 21)
  }
}

export function createBandit(config: ObjectConfig): Bandit {
  return new Bandit(config)
}
