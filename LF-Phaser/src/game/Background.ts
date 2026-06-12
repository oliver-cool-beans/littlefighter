/**
 * Background.ts — parallax background manager for LF2 stages.
 *
 * Port of F.LF/LF/background.js.
 * Renders each parallax group as a Phaser Container holding Image and Rectangle
 * game objects. Containers are manually scrolled — no Phaser camera used.
 *
 * Scroll formula (same as original):
 *   container.x = -Math.round(cameraX * ratio)
 *   where ratio = (groupWidth - SCREEN_W) / (stageWidth - SCREEN_W)
 *
 * Camera tracking uses the original Azriel algorithm:
 *   https://www.lf-empire.de/forum/archive/index.php/thread-4597.html
 */

import Phaser from 'phaser'
import Global from './global.js'
import type { Background as BackgroundInterface, BackgroundData, LayerData } from '../types/index.js'

const SCREEN_WIDTH    = Global.application.window.width      // 794
const SCREEN_HEIGHT   = Global.application.window.height     // 550
const CAMERA_SPEED    = Global.application.camera.speed_factor // 1/18

// ── Internal types ────────────────────────────────────────────────────────

type LayerSprite = Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle

interface ParallaxGroup {
  container: Phaser.GameObjects.Container
  ratio:     number
  timed:     TimedEntry[]
}

interface TimedEntry {
  sprite: LayerSprite
  cc:     number
  c1:     number
  c2:     number
}

/** Duck-type for character objects passed to setChasing(). */
interface ChasingObject {
  physics: { x: number }
  dirh():  number
}

// ── Background class ──────────────────────────────────────────────────────

export class Background implements BackgroundInterface {
  readonly zboundary: [number, number]
  readonly width:     number
  readonly shadow:    { x: number; y: number }

  /**
   * Y offset applied to all layer containers to shift the original 550px
   * coordinate space into our smaller canvas (Phaser canvas height − 550).
   * Characters must add this to their groundY so they land in the same place.
   */
  readonly worldOffsetY: number

  cameraX: number = 0

  private readonly _data:   BackgroundData
  private readonly _scene:  Phaser.Scene
  private readonly _groups: ParallaxGroup[] = []
  private _timer:   number = 0
  private _chasing: ChasingObject[] = []

  constructor(scene: Phaser.Scene, data: BackgroundData) {
    this._scene       = scene
    this._data        = data
    this.zboundary    = data.zboundary
    this.width        = data.width
    this.shadow       = { x: 0, y: 0 }   // shadow image is centered; no pixel offset needed
    this.worldOffsetY = scene.scale.height - SCREEN_HEIGHT   // e.g. 420 − 550 = −130
    this._buildLayers()
  }

  // ── Setup ───────────────────────────────────────────────────────────────

  private _buildLayers(): void {
    // Group layers by their `width` value; width determines the parallax ratio.
    const groupMap = new Map<number, LayerData[]>()
    for (const layer of this._data.layer) {
      const existing = groupMap.get(layer.width) ?? []
      existing.push(layer)
      groupMap.set(layer.width, existing)
    }

    // Sort ascending so distant layers (lower width) get lower depth values.
    const sorted = [...groupMap.entries()].sort(([a], [b]) => a - b)

    const stageScrollRange = this._data.width - SCREEN_WIDTH

    sorted.forEach(([groupWidth, layers], depthIndex) => {
      // When stage width equals screen width the stage cannot scroll at all;
      // avoid 0/0 = NaN by clamping the ratio to 0 (no parallax movement).
      const ratio     = stageScrollRange === 0 ? 0 : (groupWidth - SCREEN_WIDTH) / stageScrollRange
      const container = this._scene.add.container(0, this.worldOffsetY)
      container.setDepth(depthIndex)

      const timed: TimedEntry[] = []
      for (const layer of layers) {
        this._addLayer(container, layer, timed, ratio)
      }

      this._groups.push({ container, ratio, timed })
    })
  }

  private _addLayer(
    container: Phaser.GameObjects.Container,
    layer:     LayerData,
    timed:     TimedEntry[],
    ratio:     number
  ): void {
    const sprites: LayerSprite[] = []

    if (!layer.loop && !layer.tile) {
      sprites.push(this._createSprite(container, layer, layer.x, layer.y))
    } else {
      let left: number, right: number, interval: number

      if (layer.loop) {
        // Tiles must cover the full container x range after maximum scroll.
        // Maximum container shift = -(stageWidth - SCREEN_WIDTH) * ratio.
        // Add one extra tile on each side as safety margin.
        const maxShift = (this._data.width - SCREEN_WIDTH) * ratio
        left     = layer.x - Math.ceil(maxShift / layer.loop) * layer.loop - layer.loop
        right    = layer.width + layer.loop
        interval = layer.loop
      } else {
        const tileAbs = Math.abs(layer.tile!)
        left     = layer.x - layer.width * tileAbs
        right    = layer.width + layer.width * tileAbs
        interval = layer.width
      }

      let k = -1
      for (let xx = left; xx < right; xx += interval, k++) {
        const sprite = this._createSprite(container, layer, xx, layer.y)
        if (layer.tile !== undefined && layer.tile < 0 && sprite instanceof Phaser.GameObjects.Image) {
          sprite.setFlipX(!(k % 2 === 0))
        }
        sprites.push(sprite)
      }
    }

    if (layer.cc !== undefined) {
      for (const sprite of sprites) {
        sprite.setVisible(false)
        timed.push({ sprite, cc: layer.cc, c1: layer.c1!, c2: layer.c2! })
      }
    }
  }

  private _createSprite(
    container: Phaser.GameObjects.Container,
    layer:     LayerData,
    x:         number,
    y:         number
  ): LayerSprite {
    if (layer.pic && layer.rect === undefined) {
      const img = this._scene.add.image(x, y, layer.pic).setOrigin(0, 0)
      container.add(img)
      return img
    }

    const color = layer.rect !== undefined ? convertColor(layer.rect) : 0x000000
    const w     = layer.width  ?? 100
    const h     = layer.height ?? 100
    const rect  = this._scene.add.rectangle(x, y, w, h, color).setOrigin(0, 0)
    container.add(rect)
    return rect
  }

  // ── Public API ──────────────────────────────────────────────────────────

  /**
   * Register the character objects whose average position drives the camera.
   * Objects must expose `{ physics: { x: number }, dirh(): number }`.
   */
  setChasing(objects: ChasingObject[]): void {
    this._chasing = objects
  }

  /** Advance one game tick: update camera + timed layers. Called by the scene. */
  TU(): void {
    this._updateCamera()
    this._updateTimedLayers()
    this._timer++
  }

  /** Directly set the camera position and scroll all groups. */
  scroll(x: number): void {
    this.cameraX = x
    for (const group of this._groups) {
      group.container.setPosition(-Math.floor(this.cameraX * group.ratio), this.worldOffsetY)
    }
  }

  /** Returns true if an object's world X is outside the stage boundaries. */
  leaving(obj: unknown): boolean {
    const o = obj as { physics?: { x: number } }
    const x = o.physics?.x ?? 0
    return x < -200 || x > this.width + 200
  }

  destroy(): void {
    for (const group of this._groups) {
      group.container.destroy()
    }
    this._groups.length = 0
  }

  // ── Private ─────────────────────────────────────────────────────────────

  private _updateCamera(): void {
    if (this._chasing.length === 0) return

    let avgX   = 0
    let facing = 0
    for (const obj of this._chasing) {
      avgX   += obj.physics.x
      facing += obj.dirh()
    }
    avgX /= this._chasing.length

    // Azriel camera algorithm (http://www.lf-empire.de/forum/thread-4597.html)
    let targetX = (facing * SCREEN_WIDTH / 24) + (avgX - SCREEN_WIDTH / 2)
    targetX     = Math.max(0, Math.min(targetX, this.width - SCREEN_WIDTH))

    const spdX = (targetX - this.cameraX) * CAMERA_SPEED
    if (Math.abs(spdX) < 0.05) {
      this.cameraX = targetX
    } else {
      this.cameraX += spdX
    }

    this.scroll(this.cameraX)
  }

  private _updateTimedLayers(): void {
    for (const group of this._groups) {
      for (const entry of group.timed) {
        const frame = this._timer % entry.cc
        entry.sprite.setVisible(frame >= entry.c1 && frame <= entry.c2)
      }
    }
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────

/**
 * Convert an LF2 background color value to a Phaser 0xRRGGBB integer.
 *
 * LF2 encodes colors in a 16-bit BGR565 format (with some quirks).
 * CSS strings ("rgb(...)" or "#rrggbb") are also accepted for extended data.
 */
function convertColor(rect: number | string): number {
  if (typeof rect === 'string') {
    if (rect.startsWith('#')) return parseInt(rect.slice(1), 16)
    const m = rect.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/)
    if (m) return (parseInt(m[1]) << 16) | (parseInt(m[2]) << 8) | parseInt(m[3])
    return 0
  }
  // 16-bit BGR565-based encoding from original background.js color_conversion()
  const r = (rect >> 11 << 3)
  const g = (rect >> 6 & 31) << 3
  const b = ((rect & 31) << 3)
  return (r << 16) | (g << 8) | b
}
