import Character from './index.js'
import dragonData from '../../data/dragon.js'
import type { ObjectConfig } from '../../types/index.js'

export class Dragon extends Character {
  constructor(config: ObjectConfig) {
    super(config, dragonData, 52)
  }
}

export function createDragon(config: ObjectConfig): Dragon {
  return new Dragon(config)
}
