/**
 * EnemyHealthBarLayer — single shared Phaser.GameObjects.Graphics that draws
 * overhead HP bars for all enemies in one pass.
 *
 * Optimisations:
 *   1. One Graphics object for all enemies — no per-enemy scene-graph node.
 *   2. Full-HP and dead bars are skipped entirely.
 *   3. Off-screen bars are culled.
 *   4. Dirty flag — GPU redraw is skipped when nothing changed and no
 *      tracer is still animating.
 */

// Mirror of theme constants — avoids a CSS import in a Phaser module
const COLOR_BORDER  = 0x3a3f70  // PANEL_BORDER
const COLOR_TRACK   = 0x2a2f55  // GREY_DIM
const COLOR_GREEN   = 0x50ff7a  // ACID_GREEN
const COLOR_CRIMSON = 0xff4060  // CRIMSON
const COLOR_GOLD    = 0xffe040  // GOLD

const BAR_W    = 44
const BAR_H    = 5
const SKEW     = 3
const BORDER   = 1
const Y_GAP    = 6

const TRACER_DELAY_MS = 700

/** Minimal structural type — avoids importing LivingObject to prevent cycles. */
export interface EnemyRef {
  health:     { hp?: number; hpFull?: number; hpBound?: number }
  physics:    { screenX: number; screenY: number; screenZ: number }
  bodySprite: { w: number }
}

interface BarState {
  tracerPct:   number
  targetPct:   number
  tracerTimer: number
  prevHpPct:   number
  prevCenterX: number
  prevTopY:    number
}

const _rhomboidPts = [
  new Phaser.Geom.Point(), new Phaser.Geom.Point(),
  new Phaser.Geom.Point(), new Phaser.Geom.Point(),
]
function rhomboid(
  x: number, y: number, w: number, h: number, skew: number,
): Phaser.Geom.Point[] {
  _rhomboidPts[0].setTo(x + skew,     y)
  _rhomboidPts[1].setTo(x + w,        y)
  _rhomboidPts[2].setTo(x + w - skew, y + h)
  _rhomboidPts[3].setTo(x,            y + h)
  return _rhomboidPts
}

export class EnemyHealthBarLayer {
  private readonly _graphics: Phaser.GameObjects.Graphics
  private readonly _states   = new Map<EnemyRef, BarState>()

  constructor(scene: Phaser.Scene) {
    this._graphics = scene.add.graphics()
    this._graphics.setDepth(620)
  }

  add(enemy: EnemyRef): void {
    this._states.set(enemy, {
      tracerPct:   1,
      targetPct:   1,
      tracerTimer: 0,
      prevHpPct:   1,
      prevCenterX: 0,
      prevTopY:    0,
    })
  }

  remove(enemy: EnemyRef): void {
    this._states.delete(enemy)
  }

  update(deltaMs: number, sceneWidth: number, groundY: number): void {
    let dirty = false

    for (const [enemy, state] of this._states) {
      const h     = enemy.health
      const maxHp = h.hpFull ?? h.hpBound ?? h.hp ?? 1
      const hpPct = Math.max(0, (h.hp ?? 0) / Math.max(1, maxHp))

      if (hpPct < state.targetPct) {
        state.tracerTimer = TRACER_DELAY_MS
        state.targetPct   = hpPct
        dirty = true
      }
      if (state.tracerTimer > 0) {
        state.tracerTimer -= deltaMs
        dirty = true
      } else if (state.tracerPct > state.targetPct) {
        state.tracerPct = Math.max(state.targetPct, state.tracerPct - deltaMs / TRACER_DELAY_MS)
        dirty = true
      }
      if (hpPct !== state.prevHpPct) {
        state.prevHpPct = hpPct
        dirty = true
      }

      // Mark dirty if the enemy has moved since the last draw.
      const curCenterX = enemy.physics.screenX + enemy.bodySprite.w / 2
      const curTopY    = groundY + enemy.physics.screenY + enemy.physics.screenZ
      if (curCenterX !== state.prevCenterX || curTopY !== state.prevTopY) {
        state.prevCenterX = curCenterX
        state.prevTopY    = curTopY
        dirty = true
      }
    }

    if (!dirty) return

    const g = this._graphics
    g.clear()

    for (const [enemy, state] of this._states) {
      const h     = enemy.health
      const maxHp = h.hpFull ?? h.hpBound ?? h.hp ?? 1
      const hpPct = Math.max(0, (h.hp ?? 0) / Math.max(1, maxHp))

      if (hpPct <= 0 || hpPct >= 1) continue

      const physics = enemy.physics
      const centerX = state.prevCenterX
      if (centerX < -BAR_W || centerX > sceneWidth + BAR_W) continue

      const topY  = state.prevTopY
      const x     = Math.floor(centerX - BAR_W / 2)
      const y     = Math.floor(topY - Y_GAP - BAR_H)
      const tx    = x + BORDER + 1
      const ty    = y + BORDER
      const tw    = BAR_W - (BORDER + 1) * 2
      const th    = BAR_H - BORDER * 2
      const tSkew = Math.round(SKEW * (th / BAR_H))

      g.fillStyle(COLOR_BORDER, 0.6)
      g.fillPoints(rhomboid(x, y, BAR_W, BAR_H, SKEW), true)

      g.fillStyle(COLOR_TRACK, 0.7)
      g.fillPoints(rhomboid(tx, ty, tw, th, tSkew), true)

      if (state.tracerPct > hpPct) {
        const tracerW = Math.max(0, Math.floor(tw * state.tracerPct))
        g.fillStyle(COLOR_GOLD, 0.3)
        g.fillPoints(rhomboid(tx, ty, tracerW, th, tSkew), true)
      }

      const fillW = Math.max(0, Math.floor(tw * hpPct))
      g.fillStyle(hpPct < 0.3 ? COLOR_CRIMSON : COLOR_GREEN, 0.75)
      g.fillPoints(rhomboid(tx, ty, fillW, th, tSkew), true)
    }
  }

  destroy(): void {
    this._states.clear()
    this._graphics.destroy()
  }
}

