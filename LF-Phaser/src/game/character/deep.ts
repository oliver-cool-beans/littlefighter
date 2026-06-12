/**
 * Deep — character id 13.
 *
 * Extends the base Character class with Deep-specific id_update hooks:
 *   state3_frame    — frame 267 adds upward velocity (flip kick momentum)
 *   state15_crouch  — suppress extra wait when landing out of flip kick frames
 *   genericCombo    — hit_Fj combo forces a direction switch before the move
 */

import Character from './index.js'
import deepData from '../../data/deep.js'
import type { ObjectConfig } from '../../types/index.js'

export class Deep extends Character {
  constructor(config: ObjectConfig) {
    super(config, deepData, 13)
  }

  override id_update(event: string, ...args: unknown[]): unknown {
    switch (event) {

      case 'state3_frame':
        if (this.frame.N === 267) {
          this.physics.velocityY += 1
        }
        break

      case 'state15_crouch': {
        const pn = this.frame.PN
        if (pn >= 267 && pn <= 272) {
          this.trans.incWait(-1)
        }
        break
      }

      case 'genericCombo': {
        const K   = args[0] as string
        const tag = args[1] as string
        if (tag === 'hit_Fj') {
          this.switchFacing(K === 'D>J' || K === 'D>AJ' ? 'right' : 'left')
        }
        break
      }

    }
    return undefined
  }
}

export function createDeep(config: ObjectConfig): Deep {
  return new Deep(config)
}
