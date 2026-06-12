import Character from './index.js'
import janData from '../../data/jan.js'
import type { ObjectConfig } from '../../types/index.js'

export class Jan extends Character {
  constructor(config: ObjectConfig) {
    super(config, janData, 23)
  }
}

export function createJan(config: ObjectConfig): Jan {
  return new Jan(config)
}
