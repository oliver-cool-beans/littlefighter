/**
 * Louis — character id 18.
 *
 * Extends the base Character class with Louis-specific id_update hooks:
 *   genericCombo — suppresses the hit_ja combo tag (disables transform-related input)
 */

import Character from './index.js'
import louisData from '../../data/louis.js'
import type { ObjectConfig } from '../../types/index.js'

export class Louis extends Character {
  constructor(config: ObjectConfig) {
    super(config, louisData, 18)
  }

  override id_update(event: string, ...args: unknown[]): unknown {
    switch (event) {

      case 'genericCombo': {
        const tag = args[1] as string
        if (tag === 'hit_ja') return 1  // suppress: disable transform combo
        break
      }

    }
    return undefined
  }
}

export function createLouis(config: ObjectConfig): Louis {
  return new Louis(config)
}
