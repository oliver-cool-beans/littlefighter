import Character from './index.js'
import justinData from '../../data/justin.js'
import type { ObjectConfig } from '../../types/index.js'

export class Justin extends Character {
  constructor(config: ObjectConfig) {
    super(config, justinData, 27)
  }
}

export function createJustin(config: ObjectConfig): Justin {
  return new Justin(config)
}
