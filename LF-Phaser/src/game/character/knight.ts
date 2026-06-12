/**
 * Knight — character id 37 (R-LF2 original character).
 */

import Character from './index.js'
import knightData from '../../data/knight.js'
import type { ObjectConfig } from '../../types/index.js'

export class Knight extends Character {
  constructor(config: ObjectConfig) {
    super(config, knightData, 37)
  }
}
