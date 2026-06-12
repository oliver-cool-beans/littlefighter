import { Stage } from '../index.js'
import spBgData from '../../../data/sp_bg.js'
import type Phaser from 'phaser'

export class StanleyPrison extends Stage {
  readonly id    = 7
  readonly music = 'stage2'

  constructor(scene: Phaser.Scene) {
    super(scene, spBgData)
  }
}
