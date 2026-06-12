/**
 * DamageNumbers.ts — floating damage number display layer.
 *
 * Spawns small bold numbers above a hit character with a squash→stretch→
 * settle animation, ease-out upward float, and a final fade.
 * Styled after Dungeon Fighter Online (gradient fill, thick black outline).
 * Each DamageType gets a distinct colour palette.
 */

import type { DamageType } from '../types/index.js'
import { useSettings } from '../ui/settings.js'

// Lifetime
const LIFETIME_MS    = 900
const FADE_START_MS  = 550

// Rise: ease-out using exponential decay.  The number travels RISE_TOTAL_PX
// pixels total; RISE_EASE_MS controls how quickly it covers most of that distance.
const RISE_TOTAL_PX = 28
const RISE_EASE_MS  = 450

// Squash → stretch → settle phases (all in ms from spawn)
const SQUASH_END_MS  = 55
const STRETCH_END_MS = 130
const SETTLE_END_MS  = 240

// Per-phase scale targets [scaleX, scaleY]
const SCALE_SQUASH  = [1.6, 0.55] as const
const SCALE_STRETCH = [0.72, 1.55] as const
const SCALE_NORMAL  = [1.0,  1.0 ] as const

const BASE_DEPTH = 700

/** Vertical gradient colour stops [top → bottom] for each damage type. */
const DAMAGE_GRADIENTS: Record<DamageType, readonly string[]> = {
  physical: ['#FFFFFF', '#FFE566', '#FF8800', '#FF3300'],
  fire:     ['#FFFFFF', '#FFDD44', '#FF6600', '#CC0000'],
  ice:      ['#FFFFFF', '#CCEFFF', '#44AAFF', '#0044CC'],
  magic:    ['#FFFFFF', '#EEB8FF', '#CC44FF', '#6600CC'],
}

interface ActiveNumber {
  text:    Phaser.GameObjects.Text
  elapsed: number
  baseY:   number
}

/** Linearly interpolate between two [sx, sy] pairs. */
function lerpScale(
  a: readonly [number, number],
  b: readonly [number, number],
  t: number,
): [number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]
}

/**
 * Manages all live damage number text objects for a single match.
 * Call `update(deltaMs)` every Phaser frame to animate them.
 */
export class DamageNumberLayer {
  private readonly _scene: Phaser.Scene
  private _active: ActiveNumber[] = []
  private _spawnCount = 0

  constructor(scene: Phaser.Scene) {
    this._scene = scene
  }

  /**
   * Spawn a new damage number at the given screen-space position.
   * Newer numbers always render in front of older ones (higher depth).
   */
  spawn(screenX: number, screenY: number, amount: number, damageType: DamageType = 'physical', isBlocked = false): void {
    if (!useSettings.getState().damageNumbers) return

    const label = Math.round(amount).toString()

    const text = this._scene.add.text(screenX, screenY, label, {
      fontFamily:      "'Monster Bites', Impact, Arial Black, sans-serif",
      fontSize:        '22px',
      fontStyle:       'normal',
      color:           '#FFFFFF',
      stroke:          '#000000',
      strokeThickness: 4,
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color:   '#000000',
        blur:    3,
        stroke:  true,
        fill:    true,
      },
    })

    text.setOrigin(0.5, 1)
    text.setDepth(BASE_DEPTH + this._spawnCount++)
    text.setScale(SCALE_SQUASH[0], SCALE_SQUASH[1])

    if (isBlocked) {
      text.setFill('#888888')
    } else {
      const stops = DAMAGE_GRADIENTS[damageType]
      const gradient = text.context.createLinearGradient(0, 0, 0, text.height)
      const step = 1 / (stops.length - 1)
      stops.forEach((colour, i) => gradient.addColorStop(i * step, colour))
      text.setFill(gradient)
    }

    this._active.push({ text, elapsed: 0, baseY: screenY })
  }

  /** Spawn a green floating heal number. */
  spawnHeal(screenX: number, screenY: number, amount: number): void {
    if (!useSettings.getState().damageNumbers) return

    const label = `+${Math.round(amount)}`
    const text = this._scene.add.text(screenX, screenY, label, {
      fontFamily:      "'Monster Bites', Impact, Arial Black, sans-serif",
      fontSize:        '20px',
      fontStyle:       'normal',
      color:           '#88FF88',
      stroke:          '#004400',
      strokeThickness: 3,
    })
    text.setOrigin(0.5, 1)
    text.setDepth(BASE_DEPTH + this._spawnCount++)
    text.setScale(SCALE_SQUASH[0], SCALE_SQUASH[1])
    this._active.push({ text, elapsed: 0, baseY: screenY })
  }

  /** Advance all active number animations. Call once per Phaser frame. */
  update(deltaMs: number): void {
    for (let i = this._active.length - 1; i >= 0; i--) {
      const num = this._active[i]
      num.elapsed += deltaMs

      // Ease-out rise: approaches RISE_TOTAL_PX asymptotically
      const riseProgress = 1 - Math.exp(-num.elapsed / RISE_EASE_MS)
      num.text.y = num.baseY - RISE_TOTAL_PX * riseProgress

      // Squash → stretch → settle
      if (num.elapsed < SQUASH_END_MS) {
        num.text.setScale(SCALE_SQUASH[0], SCALE_SQUASH[1])
      } else if (num.elapsed < STRETCH_END_MS) {
        const t = (num.elapsed - SQUASH_END_MS) / (STRETCH_END_MS - SQUASH_END_MS)
        const [sx, sy] = lerpScale(SCALE_SQUASH, SCALE_STRETCH, t)
        num.text.setScale(sx, sy)
      } else if (num.elapsed < SETTLE_END_MS) {
        const t = (num.elapsed - STRETCH_END_MS) / (SETTLE_END_MS - STRETCH_END_MS)
        const [sx, sy] = lerpScale(SCALE_STRETCH, SCALE_NORMAL, t)
        num.text.setScale(sx, sy)
      } else {
        num.text.setScale(SCALE_NORMAL[0], SCALE_NORMAL[1])
      }

      // Fade out in the final portion of the lifetime
      if (num.elapsed > FADE_START_MS) {
        const fadeProgress = (num.elapsed - FADE_START_MS) / (LIFETIME_MS - FADE_START_MS)
        num.text.setAlpha(1 - fadeProgress)
      }

      // Remove when expired
      if (num.elapsed >= LIFETIME_MS) {
        num.text.destroy()
        this._active.splice(i, 1)
      }
    }
  }

  destroy(): void {
    for (const num of this._active) num.text.destroy()
    this._active = []
  }
}
