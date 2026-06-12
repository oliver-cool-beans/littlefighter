/**
 * Davis — character id 11.
 *
 * Extends the base Character class with Davis-specific state-machine tweaks:
 *   state3_hit_stop  — extra stun frames during manyPunch combo
 *   state3_frameForce — suppress forced frame advance during manyPunch peaks
 */

import Character from './index.js'
import davisData from '../../data/davis.js'
import type { ObjectConfig } from '../../types/index.js'

export class Davis extends Character {
  constructor(config: ObjectConfig) {
    super(config, davisData, 11)
  }

  override id_update(event: string, ..._args: unknown[]): unknown {
    switch (event) {
      case 'state3_hit_stop':
        switch (this.frame.N) {
          case 271: case 276: case 280:
            this.effect_stuck(1, 2); this.trans.incWait(1); return 1
          case 273:
            this.effect_stuck(0, 2); return 1
        }
        break
      case 'state3_frameForce':
        switch (this.frame.N) {
          case 275: case 278: case 279: return 1
        }
        break
    }
    return undefined
  }
}

export function createDavis(config: ObjectConfig): Davis {
  return new Davis(config)
}
