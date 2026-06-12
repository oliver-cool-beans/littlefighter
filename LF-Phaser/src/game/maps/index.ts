/**
 * maps/index.ts — abstract Stage base class.
 *
 * A Stage is a self-contained map module: it bundles its own BackgroundData
 * and default settings (music, etc.) — mirroring how Bat bundles weapon0Data
 * and WeaponActions inside the weapons/ module.
 *
 * Subclasses declare:
 *   readonly id:    number         — numeric stage ID
 *   readonly music: string | null  — sound sprite key, or null for silence
 *
 * and call super(scene, data) with their own imported data.
 *
 * Example:
 *   class ForbiddenTower extends Stage {
 *     readonly id    = 1
 *     readonly music = 'm_pass' as const
 *     constructor(scene: Phaser.Scene) { super(scene, ftBgData) }
 *   }
 */

import { Background } from '../Background.js'
import type { BackgroundData } from '../../types/index.js'
import type Phaser from 'phaser'

export abstract class Stage extends Background {
  /** Numeric stage ID (matches LF2's original bg ordering). */
  abstract readonly id: number

  /**
   * Sound sprite key to play as background music when this stage loads.
   * `null` means no music — silence.
   */
  abstract readonly music: string | null

  constructor(scene: Phaser.Scene, data: BackgroundData) {
    super(scene, data)
  }
}
