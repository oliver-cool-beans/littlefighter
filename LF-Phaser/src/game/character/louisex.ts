import Character from './index.js'
import louisexData from '../../data/louisex.js'
import type { ObjectConfig } from '../../types/index.js'

export class LouisEX extends Character {
  constructor(config: ObjectConfig) {
    super(config, louisexData, 34)
  }
}

export function createLouisEX(config: ObjectConfig): LouisEX {
  return new LouisEX(config)
}
