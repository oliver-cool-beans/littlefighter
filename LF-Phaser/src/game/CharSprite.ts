/**
 * CharSprite.ts — body sprite adapter exposing the original F.LF sp API.
 * ShadowSprite  — shadow sprite adapter.
 *
 * Coordinate mapping (LF2 screen space → Phaser screen space):
 *   Phaser_x = sx
 *   Phaser_y = groundY + sysz
 *   where sysz = ps.sy + ps.sz = (ps.y − centery) + ps.z
 */

import type { BmpData, BmpFile } from '../types/index.js'

interface SheetRange { start: number; end: number; index: number }

function buildRanges(files: BmpFile[]): SheetRange[] {
  return files.map((sheet, i) => {
    const key = Object.keys(sheet).find(k => k.startsWith('file')) ?? ''
    const m   = /\((\d+)-(\d+)\)/.exec(key)
    if (m) return { start: +m[1], end: +m[2], index: i }
    const fps = (sheet.row ?? 1) * (sheet.col ?? 1)
    return { start: i * fps, end: (i + 1) * fps - 1, index: i }
  }).sort((a, b) => a.start - b.start)
}

export class CharSprite {
  readonly w: number

  private readonly _groundY: number
  private readonly _keyPrefix: string
  private readonly _ranges: SheetRange[]
  private readonly _sprite: Phaser.GameObjects.Sprite
  private _yOffset = 0
  private _curPic  = -1

  /**
   * @param scene      Phaser scene
   * @param bmp        character bmp block from the data file
   * @param keyPrefix  Phaser texture key prefix (e.g. 'davis')
   * @param groundY    screen Y coordinate for the ground plane (ps.y = 0)
   */
  constructor(scene: Phaser.Scene, bmp: BmpData, keyPrefix: string, groundY: number) {
    this._groundY   = groundY
    this._keyPrefix = keyPrefix
    this._ranges    = buildRanges(bmp.file)

    // LF2 stores visible frame width as (cell_width − 1); full cell = w+1 (last pixel is separator/padding)
    this.w = bmp.file[0].w + 1

    this._sprite = scene.add.sprite(0, 0, `${keyPrefix}_0`, 0).setOrigin(0, 0)
    this._sprite.setDepth(100)
  }

  setTint(color: number): void  { this._sprite.setTint(color) }
  clearTint(): void             { this._sprite.clearTint() }

  /** Apply a temporary Y nudge (e.g. idle breathing). Cleared by setting to 0. */
  setYOffset(offset: number): void { this._yOffset = offset }

  show_pic(pic: number): void {
    if (pic === this._curPic) return
    this._curPic = pic
    let sheet = 0
    let frame = pic
    for (const r of this._ranges) {
      if (pic >= r.start && pic <= r.end) { sheet = r.index; frame = pic - r.start; break }
    }
    this._sprite.setTexture(`${this._keyPrefix}_${sheet}`, frame)
  }

  switch_lr(dir: 'left' | 'right'): void { this._sprite.setFlipX(dir === 'left') }
  show(): void  { this._sprite.setVisible(true) }
  hide(): void  { this._sprite.setVisible(false) }

  set_x_y(sx: number, sysz: number): void {
    this._sprite.setPosition(sx, this._groundY + sysz + this._yOffset)
  }

  set_z(z: number): void {
    // +100 keeps characters above ground-decoration layers
    this._sprite.setDepth(100 + z)
  }

  destroy(): void { this._sprite.destroy() }
}

export class ShadowSprite {
  private readonly _groundY: number
  private readonly _img: Phaser.GameObjects.Image

  constructor(scene: Phaser.Scene, groundY: number) {
    this._groundY = groundY
    this._img     = scene.add.image(0, 0, 'shadow').setOrigin(0.5, 0.5)
    this._img.setDepth(99)
  }

  /** sha.set_x_y(ps.x − bg.shadow.x, ps.z − bg.shadow.y) */
  set_x_y(x: number, z: number): void {
    this._img.setPosition(x, this._groundY + z)
  }

  /** Scale the shadow uniformly (used to shrink it while airborne). */
  setScale(scale: number): void { this._img.setScale(scale) }

  set_z(z: number): void  { this._img.setDepth(99 + z) }
  show(): void             { this._img.setVisible(true) }
  hide(): void             { this._img.setVisible(false) }
  destroy(): void          { this._img.destroy() }
}
