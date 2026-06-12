import Character from './index.js'
import firzenData from '../../data/firzen.js'
import type { ObjectConfig } from '../../types/index.js'

export class Firzen extends Character {
  constructor(config: ObjectConfig) {
    super(config, firzenData, 24)
  }
}

export function createFirzen(config: ObjectConfig): Firzen {
  return new Firzen(config)
}
