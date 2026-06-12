import Character from './index.js'
import monkData from '../../data/monk.js'
import type { ObjectConfig } from '../../types/index.js'

export class Monk extends Character {
  constructor(config: ObjectConfig) {
    super(config, monkData, 28)
  }
}

export function createMonk(config: ObjectConfig): Monk {
  return new Monk(config)
}
