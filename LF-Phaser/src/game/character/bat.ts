import Character from './index.js'
import batData from '../../data/bat.js'
import type { ObjectConfig } from '../../types/index.js'

export class Bat extends Character {
  constructor(config: ObjectConfig) {
    super(config, batData, 33)
  }
}

export function createBat(config: ObjectConfig): Bat {
  return new Bat(config)
}
