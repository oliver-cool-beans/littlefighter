import { Stage } from '../index.js'
import hkcBgData from '../../../data/hkc_bg.js'
import type Phaser from 'phaser'

export class HKColiseum extends Stage {
  readonly id    = 4
  readonly music = 'stage4'

  constructor(scene: Phaser.Scene) {
    super(scene, hkcBgData)
  }
}
