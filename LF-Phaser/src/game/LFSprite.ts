/**
 * LFSprite.ts — renders one LF2 character sprite using Phaser 3.
 *
 * Frame mapping:
 *   LF2 data stores a `pic` number that is the absolute frame index across
 *   all sprite sheets for a character.  Each sheet's bmp.file entry carries a
 *   "file(start-end)" key that defines the pic range it covers.  Given a pic:
 *
 *     Find the sheet whose [start, end] contains pic.
 *     frameIndex = pic - start
 *
 *   When all sheets are uniform-size (legacy single-sheet data), the range
 *   keys may be absent and we fall back to the original framesPerSheet formula.
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

function picToSheet(ranges: SheetRange[], pic: number): { sheet: number; frame: number } {
  for (const r of ranges) {
    if (pic >= r.start && pic <= r.end) return { sheet: r.index, frame: pic - r.start }
  }
  return { sheet: 0, frame: 0 }
}

export class LFSprite {
  private readonly _keyPrefix: string
  private readonly _ranges: SheetRange[]
  private readonly _shadow: Phaser.GameObjects.Image
  private readonly _sprite: Phaser.GameObjects.Sprite

  /**
   * @param scene      Phaser scene
   * @param x          initial screen x (top-left of sprite cell)
   * @param y          initial screen y (top-left of sprite cell)
   * @param bmp        character bmp block from data file
   * @param keyPrefix  Phaser texture key prefix (e.g. 'davis')
   */
  constructor(scene: Phaser.Scene, x: number, y: number, bmp: BmpData, keyPrefix: string) {
    this._keyPrefix = keyPrefix
    this._ranges    = buildRanges(bmp.file)

    this._shadow = scene.add.image(x, y, 'shadow').setOrigin(0.5, 0.5)
    this._shadow.setDepth(0)

    this._sprite = scene.add.sprite(x, y, `${keyPrefix}_0`, 0).setOrigin(0, 0)
    this._sprite.setDepth(1)
  }

  /**
   * Map an LF2 absolute `pic` number to the correct Phaser sheet + frame,
   * then update the displayed frame.
   */
  setLFFrame(pic: number): void {
    const { sheet, frame } = picToSheet(this._ranges, pic)
    this._sprite.setTexture(`${this._keyPrefix}_${sheet}`, frame)
  }

  /**
   * Horizontally flip the sprite.  flip=true means facing left.
   */
  setFlipX(flipped: boolean): void {
    this._sprite.setFlipX(flipped)
  }

  /**
   * Set the render-order depth used for z-sorting.
   * Character body and shadow are placed at depth and depth-1 respectively.
   */
  setDepth(depth: number): void {
    this._sprite.setDepth(depth)
    this._shadow.setDepth(depth - 1)
  }

  /**
   * Move the sprite and position the shadow at the character's feet.
   */
  setPosition(x: number, y: number, centerx: number, centery: number): void {
    this._sprite.setPosition(x, y)
    this._shadow.setPosition(x + centerx, y + centery)
  }

  /**
   * Set body and shadow positions independently.
   * Used when the character is airborne.
   */
  setScreenPositions(bodyX: number, bodyY: number, shadowX: number, shadowY: number): void {
    this._sprite.setPosition(bodyX, bodyY)
    this._shadow.setPosition(shadowX, shadowY)
  }

  /** Show or hide the shadow. */
  setShadowVisible(visible: boolean): void {
    this._shadow.setVisible(visible)
  }

  destroy(): void {
    this._sprite.destroy()
    this._shadow.destroy()
  }
}
