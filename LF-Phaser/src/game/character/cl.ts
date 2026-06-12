import Character from './index.js'
import clData from '../../data/cl.js'
import type { ObjectConfig } from '../../types/index.js'

export class CL extends Character {
  constructor(config: ObjectConfig) {
    super(config, clData, 26)
  }
}

export function createCL(config: ObjectConfig): CL {
  return new CL(config)
}
