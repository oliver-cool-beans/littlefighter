import { Stage } from '../index.js'
import thvBgData from '../../../data/thv_bg.js'
import type Phaser from 'phaser'

export class TaiHomVillage extends Stage {
  readonly id    = 8
  readonly music = 'stage3'

  constructor(scene: Phaser.Scene) {
    super(scene, thvBgData)
  }
}
