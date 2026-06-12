import Character from './index.js'
import jackData from '../../data/jack.js'
import type { ObjectConfig } from '../../types/index.js'

export class Jack extends Character {
  constructor(config: ObjectConfig) {
    super(config, jackData, 31)
  }
}

export function createJack(config: ObjectConfig): Jack {
  return new Jack(config)
}
