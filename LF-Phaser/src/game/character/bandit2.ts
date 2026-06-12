import Character from './index.js'
import bandit2Data from '../../data/bandit2.js'
import type { ObjectConfig } from '../../types/index.js'

export class BanditEX extends Character {
  constructor(config: ObjectConfig) {
    super(config, bandit2Data, 35)
  }
}

export function createBanditEX(config: ObjectConfig): BanditEX {
  return new BanditEX(config)
}
