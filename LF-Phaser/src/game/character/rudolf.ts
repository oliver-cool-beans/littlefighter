/**
 * Rudolf — character id 19.
 *
 * Extends the base Character class with Rudolf-specific id_update hooks:
 *   state3_frame        — frames 273–276 apply upward velocity (-6.8) for the jump-sword rise
 *   rudolfTransform     — catch-and-transform mechanic (stub; requires match.create_transform_character)
 *   revertTransform     — revert a previous transform (stub; same dependency)
 *   state1280_disappear — triggers the disappear/teleport animation at frame 257
 */

import Character from './index.js'
import rudolfData from '../../data/rudolf.js'
import type { ObjectConfig } from '../../types/index.js'

export class Rudolf extends Character {
  constructor(config: ObjectConfig) {
    super(config, rudolfData, 19)
  }

  override id_update(event: string, ..._args: unknown[]): unknown {
    switch (event) {

      case 'state3_frame':
        if (this.frame.N >= 273 && this.frame.N <= 276) {
          this.physics.velocityY = -6.8
        }
        break

      case 'rudolfTransform':
        // Full transform requires match.create_transform_character which is not yet
        // part of MatchContext — implement when the transform system lands.
        break

      case 'revertTransform':
        // Mirror of rudolfTransform — same gating dependency.
        break

      case 'state1280_disappear':
        if (this.frame.N === 257) {
          this.bodySprite.hide()
          if (this.shadowSprite) this.shadowSprite.hide()
          this.effect.super        = true
          this.counter.disappearCount = 0
        }
        break

    }
    return undefined
  }
}

export function createRudolf(config: ObjectConfig): Rudolf {
  return new Rudolf(config)
}
