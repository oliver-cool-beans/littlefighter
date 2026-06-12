import Character from './index.js'
import hunterData from '../../data/hunter.js'
import type { ObjectConfig } from '../../types/index.js'

export class Hunter extends Character {
  constructor(config: ObjectConfig) {
    super(config, hunterData, 30)
  }
}

export function createHunter(config: ObjectConfig): Hunter {
  return new Hunter(config)
}
