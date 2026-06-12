import { Stage } from '../index.js'
import qiBgData from '../../../data/qi_bg.js'
import type Phaser from 'phaser'

export class QueensIsland extends Stage {
  readonly id    = 6
  readonly music = 'stage1'

  constructor(scene: Phaser.Scene) {
    super(scene, qiBgData)
  }
}
