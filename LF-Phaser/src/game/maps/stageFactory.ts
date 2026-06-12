/**
 * stageFactory.ts — creates a Stage instance by numeric stage ID.
 *
 * Each entry is a lazy import so only the selected stage's data is loaded.
 * Mirrors characterFactory.ts.
 */

import { Stage } from './index.js'
import type Phaser from 'phaser'

const STAGE_LOADERS: Record<number, (scene: Phaser.Scene) => Promise<Stage>> = {
  1: async (scene) => {
    const { ForbiddenTower } = await import('./forbiddenTower/index.js')
    return new ForbiddenTower(scene)
  },
  2: async (scene) => {
    const { CUHK } = await import('./cuhk/index.js')
    return new CUHK(scene)
  },
  3: async (scene) => {
    const { GreatWall } = await import('./greatWall/index.js')
    return new GreatWall(scene)
  },
  4: async (scene) => {
    const { HKColiseum } = await import('./hkColiseum/index.js')
    return new HKColiseum(scene)
  },
  5: async (scene) => {
    const { LionForest } = await import('./lionForest/index.js')
    return new LionForest(scene)
  },
  6: async (scene) => {
    const { QueensIsland } = await import('./queensIsland/index.js')
    return new QueensIsland(scene)
  },
  7: async (scene) => {
    const { StanleyPrison } = await import('./stanleyPrison/index.js')
    return new StanleyPrison(scene)
  },
  8: async (scene) => {
    const { TaiHomVillage } = await import('./taiHomVillage/index.js')
    return new TaiHomVillage(scene)
  },
}

export async function createStageById(id: number, scene: Phaser.Scene): Promise<Stage> {
  const loader = STAGE_LOADERS[id]
  if (!loader) throw new Error(`Unknown stage id: ${id}`)
  return loader(scene)
}

/** All registered stage IDs. */
export const STAGE_IDS = Object.keys(STAGE_LOADERS).map(Number)
