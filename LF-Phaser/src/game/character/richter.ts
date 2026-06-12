import Character from './index.js'
import richterData from '../../data/richter.js'
import type { ObjectConfig } from '../../types/index.js'

export class Richter extends Character {
  constructor(config: ObjectConfig) {
    super(config, richterData, 25)
  }
}

export function createRichter(config: ObjectConfig): Richter {
  return new Richter(config)
}
