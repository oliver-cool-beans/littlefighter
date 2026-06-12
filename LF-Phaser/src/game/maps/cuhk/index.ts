import { Stage } from '../index.js'
import cuhkBgData from '../../../data/cuhk_bg.js'
import type Phaser from 'phaser'

export class CUHK extends Stage {
  readonly id    = 2
  readonly music = 'stage2'

  constructor(scene: Phaser.Scene) {
    super(scene, cuhkBgData)
  }
}
