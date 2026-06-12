import { Stage } from '../index.js'
import lfBgData from '../../../data/lf_bg.js'
import type Phaser from 'phaser'

export class LionForest extends Stage {
  readonly id    = 5
  readonly music = 'stage5'

  constructor(scene: Phaser.Scene) {
    super(scene, lfBgData)
  }
}
