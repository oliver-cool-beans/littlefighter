import Character from './index.js'
import criminalData from '../../data/criminal.js'
import type { ObjectConfig } from '../../types/index.js'

export class Criminal extends Character {
  constructor(config: ObjectConfig) {
    super(config, criminalData, 51)
  }
}

export function createCriminal(config: ObjectConfig): Criminal {
  return new Criminal(config)
}
