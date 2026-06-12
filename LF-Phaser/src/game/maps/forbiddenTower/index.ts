/**
 * forbiddenTower/index.ts — Forbidden Tower stage (bg id 1).
 *
 * Bundles ft_bg visual data and stage defaults (music, etc.).
 * Mirrors the pattern used by Bat in weapons/bat.ts.
 */

import { Stage } from '../index.js'
import ftBgData  from '../../../data/ft_bg.js'
import type Phaser from 'phaser'

export class ForbiddenTower extends Stage {
  static readonly stageId = 1

  readonly id    = 1
  readonly music = 'stage1'

  constructor(scene: Phaser.Scene) {
    super(scene, ftBgData)
  }
}

/** Convenience factory. */
export function createForbiddenTower(scene: Phaser.Scene): ForbiddenTower {
  return new ForbiddenTower(scene)
}
