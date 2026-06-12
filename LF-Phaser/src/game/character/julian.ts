import Character from './index.js'
import julianData from '../../data/julian.js'
import type { ObjectConfig } from '../../types/index.js'

export class Julian extends Character {
  constructor(config: ObjectConfig) {
    super(config, julianData, 20)
  }
}

export function createJulian(config: ObjectConfig): Julian {
  return new Julian(config)
}
