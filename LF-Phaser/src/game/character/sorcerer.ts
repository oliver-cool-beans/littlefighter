import Character from './index.js'
import sorcererData from '../../data/sorcerer.js'
import type { ObjectConfig } from '../../types/index.js'

export class Sorcerer extends Character {
  constructor(config: ObjectConfig) {
    super(config, sorcererData, 32)
  }
}

export function createSorcerer(config: ObjectConfig): Sorcerer {
  return new Sorcerer(config)
}
