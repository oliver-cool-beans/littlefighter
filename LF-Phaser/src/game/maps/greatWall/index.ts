import { Stage } from '../index.js'
import gwBgData from '../../../data/gw_bg.js'
import type Phaser from 'phaser'

export class GreatWall extends Stage {
  readonly id    = 3
  readonly music = 'stage3'

  constructor(scene: Phaser.Scene) {
    super(scene, gwBgData)
  }
}
