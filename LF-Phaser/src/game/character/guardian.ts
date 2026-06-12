import Character from './index.js'
import guardianData from '../../data/guardian.js'
import type { ObjectConfig } from '../../types/index.js'

export class Guardian extends Character {
  constructor(config: ObjectConfig) {
    super(config, guardianData, 50)
  }
}

export function createGuardian(config: ObjectConfig): Guardian {
  return new Guardian(config)
}
