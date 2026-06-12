/**
 * Woody — character id 22.
 *
 * Extends the base Character class with Woody-specific id_update hooks:
 *   state3_fly_crash — clears the wait counter so the fly-crash frame exits immediately
 */

import Character from './index.js'
import woodyData from '../../data/woody.js'
import type { ObjectConfig } from '../../types/index.js'

export class Woody extends Character {
  constructor(config: ObjectConfig) {
    super(config, woodyData, 22)
  }

  override id_update(event: string, ..._args: unknown[]): unknown {
    switch (event) {

      case 'state3_fly_crash':
        this.trans.setWait(0)
        return 1

    }
    return undefined
  }
}

export function createWoody(config: ObjectConfig): Woody {
  return new Woody(config)
}
