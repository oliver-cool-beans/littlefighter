import Character from './index.js'
import markData from '../../data/mark.js'
import type { ObjectConfig } from '../../types/index.js'

export class Mark extends Character {
  constructor(config: ObjectConfig) {
    super(config, markData, 29)
  }
}

export function createMark(config: ObjectConfig): Mark {
  return new Mark(config)
}
