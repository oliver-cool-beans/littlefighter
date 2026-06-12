/**
 * Particles.ts — damage-type-aware combat particle effects layer.
 *
 * Physical: blood streaks + arcing drops + impact puff
 * Fire:     embers that float upward with heat
 * Ice:      crystal shards that fall hard
 * Magic:    swirling motes that drift
 *
 * Uses one persistent Graphics object; all animation is manual (no Tweens).
 * Call `update(deltaMs)` every Phaser frame; `destroy()` on scene shutdown.
 */

import type { DamageType, HitSeverity } from '../types/index.js'

// ── Depth ──────────────────────────────────────────────────────────────────

const PARTICLE_DEPTH = 650

// ── Physics ────────────────────────────────────────────────────────────────

const GRAVITY   = 0.00095   // px/ms² — baseline gravitational acceleration
const DRAG_STEP = 16        // ms per drag tick

// ── Impact spark constants ─────────────────────────────────────────────────

const SPARK_DRAG      = 0.78
const SPARK_LIFE_MIN  = 130
const SPARK_LIFE_MAX  = 295
const SPARK_SPEED_MIN = 0.22
const SPARK_SPEED_MAX = 0.56
const STREAK_TAIL_MS  = 14  // velocity × this = tail length in px

const SPARK_COUNT: Record<HitSeverity, number> = { light: 8, medium: 14, heavy: 22 }

const SPARK_RADIUS: Record<HitSeverity, number> = { light: 1.4, medium: 1.8, heavy: 2.2 }

/** Birth → mid → death colour ramps per damage type. */
const COLOURS: Record<DamageType, readonly [number, number, number]> = {
  physical: [0xFF4422, 0xBB1100, 0x550000],
  fire:     [0xFFFF99, 0xFF8800, 0xFF2200],
  ice:      [0xEEFFFF, 0x77CCFF, 0x2288BB],
  magic:    [0xFF99FF, 0xBB33FF, 0x6600CC],
}

/** Spread half-cone in radians. Magic fans the full circle. */
const CONE: Record<DamageType, number> = {
  physical: (65 * Math.PI) / 180,
  fire:     (75 * Math.PI) / 180,
  ice:      (55 * Math.PI) / 180,
  magic:    Math.PI,
}

/** Gravity scale per type: fire floats, ice sinks fast, magic drifts slowly. */
const GRAV_MULT: Record<DamageType, number> = {
  physical: 1,
  fire:     0.05,
  ice:      1.55,
  magic:    0.2,
}

/** Initial vertical bias added to every spark's vy (negative = upward). */
const VY_BIAS: Record<DamageType, number> = {
  physical: -0.05,
  fire:     -0.12,
  ice:       0.02,
  magic:    -0.04,
}

// ── Blood drop constants (physical medium/heavy only) ──────────────────────

const DROP_COUNT: Partial<Record<HitSeverity, number>> = { medium: 3, heavy: 7 }
const DROP_DRAG       = 0.84
const DROP_LIFE       = 340
const DROP_GRAV_MULT  = 1.05
const DROP_COLOUR     = 0x991100

// ── Smoke puff constants (physical only) ──────────────────────────────────

const PUFF_COUNT: Partial<Record<HitSeverity, number>> = { medium: 1, heavy: 2 }
const PUFF_LIFE   = 240
const PUFF_COLOUR = 0x886655
const PUFF_R_MIN  = 5
const PUFF_R_MAX  = 11

// ── Guard-break ring constants ─────────────────────────────────────────────

const RING_LIFE       = 340
const RING_MAX_RADIUS = 46
const RING_STAGGER_MS = 60   // ms delay between the two concentric rings

// ── Landing dust constants ─────────────────────────────────────────────────

const DUST_COUNT    = 8
const DUST_LIFE     = 180
const DUST_SPEED_X  = 0.07    // px/ms per game-velocity unit (velocityX is px/tick, not px/ms)
const DUST_SPEED_CAP = 0.25   // px/ms ceiling — prevents full-screen sweep on heavy landings
const DUST_COLOUR   = 0xC8B89A

// ── Particle interfaces ────────────────────────────────────────────────────

interface ImpactParticle {
  x: number; y: number
  vx: number; vy: number
  elapsed: number; lifetime: number
  radius: number
  colours: readonly [number, number, number]
  gravMult: number
}

interface DropParticle {
  x: number; y: number
  vx: number; vy: number
  elapsed: number
}

interface PuffParticle {
  x: number; y: number
  vx: number; vy: number
  elapsed: number
  maxRadius: number
}

interface RingParticle {
  x: number; y: number
  elapsed: number   // negative = not yet active (delayed ring)
}

interface DustParticle {
  x: number; y: number
  vx: number
  elapsed: number
}

// ── Colour helpers ─────────────────────────────────────────────────────────

function lerpColour(a: number, b: number, t: number): number {
  const ar = (a >> 16) & 0xFF; const ag = (a >> 8) & 0xFF; const ab = a & 0xFF
  const br = (b >> 16) & 0xFF; const bg = (b >> 8) & 0xFF; const bb = b & 0xFF
  return (Math.round(ar + (br - ar) * t) << 16) |
         (Math.round(ag + (bg - ag) * t) <<  8) |
          Math.round(ab + (bb - ab) * t)
}

function triColour(t: number, c: readonly [number, number, number]): number {
  return t < 0.5 ? lerpColour(c[0], c[1], t * 2) : lerpColour(c[1], c[2], (t - 0.5) * 2)
}

// ── ParticleLayer ─────────────────────────────────────────────────────────

export class ParticleLayer {
  private readonly _gfx: Phaser.GameObjects.Graphics
  private _impact: ImpactParticle[] = []
  private _drops:  DropParticle[]   = []
  private _puffs:  PuffParticle[]   = []
  private _rings:  RingParticle[]   = []
  private _dust:   DustParticle[]   = []

  constructor(scene: Phaser.Scene) {
    this._gfx = scene.add.graphics()
    this._gfx.setDepth(PARTICLE_DEPTH)
  }

  /**
   * Emit combat particles at a screen position.
   *
   * @param dvx  Victim's horizontal knockback (positive = knocked right).
   * @param dvy  Victim's vertical knockback (negative = launched upward in game-space).
   */
  spawnHitImpact(
    screenX: number,
    screenY: number,
    dvx: number,
    dvy: number,
    severity: HitSeverity,
    damageType: DamageType,
  ): void {
    const cols     = COLOURS[damageType]
    const gravMult = GRAV_MULT[damageType]
    const count    = SPARK_COUNT[severity]
    const radius   = SPARK_RADIUS[severity]
    const vyBias   = VY_BIAS[damageType]
    const cone     = CONE[damageType]

    // Base direction: align to knockback vector so sparks fan outward from impact.
    // dvy < 0 in game-space means "up" which is negative screen-Y — the atan2 sign is consistent.
    const baseAngle = (dvx === 0 && dvy === 0) ? -Math.PI / 2 : Math.atan2(dvy, dvx)

    for (let i = 0; i < count; i++) {
      // Magic fans the full circle; others spread within a directed cone.
      const spread = damageType === 'magic'
        ? (Math.random() * 2 - 1) * Math.PI
        : (Math.random() * 2 - 1) * cone

      const angle = baseAngle + spread
      const speed = SPARK_SPEED_MIN + Math.random() * (SPARK_SPEED_MAX - SPARK_SPEED_MIN)

      this._impact.push({
        x: screenX, y: screenY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + vyBias,
        elapsed: 0,
        lifetime: SPARK_LIFE_MIN + Math.random() * (SPARK_LIFE_MAX - SPARK_LIFE_MIN),
        radius,
        colours: cols,
        gravMult,
      })
    }

    // Blood drops: physical medium/heavy only — arc outward and fall with gravity.
    if (damageType === 'physical') {
      const dropCount = DROP_COUNT[severity] ?? 0
      const dropDir   = dvx >= 0 ? 1 : -1
      for (let i = 0; i < dropCount; i++) {
        this._drops.push({
          x: screenX + (Math.random() - 0.5) * 14,
          y: screenY + (Math.random() - 0.5) * 6,
          vx: dropDir * (0.1 + Math.random() * 0.26),
          vy: -(0.08 + Math.random() * 0.18),   // initial upward impulse
          elapsed: Math.random() * 30,            // stagger appearance
        })
      }
    }

    // Impact debris puff: physical only — hazy expansion at strike point.
    if (damageType === 'physical') {
      const puffCount = PUFF_COUNT[severity] ?? 0
      for (let i = 0; i < puffCount; i++) {
        this._puffs.push({
          x: screenX + (Math.random() - 0.5) * 10,
          y: screenY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.07,
          vy: -0.04 - Math.random() * 0.06,
          elapsed: 0,
          maxRadius: PUFF_R_MIN + Math.random() * (PUFF_R_MAX - PUFF_R_MIN),
        })
      }
    }
  }

  /** Guard-break shockwave — two staggered concentric rings. */
  spawnGuardBreak(screenX: number, screenY: number): void {
    this._rings.push(
      { x: screenX, y: screenY, elapsed: 0 },
      { x: screenX, y: screenY, elapsed: -RING_STAGGER_MS },
    )
  }

  /** Bilateral dust puff when a character lands. */
  spawnLandDust(screenX: number, screenY: number, speed: number): void {
    const base = Math.min(DUST_SPEED_CAP, Math.max(0.05, speed * DUST_SPEED_X))
    for (let i = 0; i < DUST_COUNT; i++) {
      const dir     = i < DUST_COUNT / 2 ? 1 : -1
      const scatter = 0.5 + Math.random() * 0.8
      this._dust.push({
        x: screenX + dir * Math.random() * 6,
        y: screenY,
        vx: dir * base * scatter,
        elapsed: Math.random() * 20,
      })
    }
  }

  update(deltaMs: number): void {
    this._gfx.clear()
    if (this._impact.length > 0) this._stepImpact(deltaMs)
    if (this._drops.length  > 0) this._stepDrops(deltaMs)
    if (this._puffs.length  > 0) this._stepPuffs(deltaMs)
    if (this._rings.length  > 0) this._stepRings(deltaMs)
    if (this._dust.length   > 0) this._stepDust(deltaMs)
  }

  destroy(): void {
    this._gfx.destroy()
    this._impact = []; this._drops = []; this._puffs = []
    this._rings  = []; this._dust  = []
  }

  // ── Private step methods ──────────────────────────────────────────────────

  private _stepImpact(deltaMs: number): void {
    const drag = Math.pow(SPARK_DRAG, deltaMs / DRAG_STEP)

    let i = this._impact.length - 1
    while (i >= 0) {
      const p = this._impact[i]
      p.elapsed += deltaMs
      if (p.elapsed >= p.lifetime) { this._impact.splice(i--, 1); continue }

      p.vx *= drag
      p.vy *= drag
      p.vy += GRAVITY * p.gravMult * deltaMs
      p.x  += p.vx * deltaMs
      p.y  += p.vy * deltaMs

      const t     = p.elapsed / p.lifetime
      const alpha = t < 0.5 ? 1 : 1 - (t - 0.5) / 0.5
      const col   = triColour(t, p.colours)

      // Velocity-projected streak tail — long when fast, dot when nearly stopped.
      const tailX = p.x - p.vx * STREAK_TAIL_MS
      const tailY = p.y - p.vy * STREAK_TAIL_MS
      const dx    = p.x - tailX
      const dy    = p.y - tailY

      if (dx * dx + dy * dy > 3) {
        this._gfx.lineStyle(p.radius * 2, col, alpha)
        this._gfx.lineBetween(tailX, tailY, p.x, p.y)
      } else {
        this._gfx.fillStyle(col, alpha)
        this._gfx.fillCircle(p.x, p.y, p.radius)
      }
      i--
    }
  }

  private _stepDrops(deltaMs: number): void {
    const drag = Math.pow(DROP_DRAG, deltaMs / DRAG_STEP)

    let i = this._drops.length - 1
    while (i >= 0) {
      const p = this._drops[i]
      p.elapsed += deltaMs
      if (p.elapsed >= DROP_LIFE) { this._drops.splice(i--, 1); continue }

      p.vx *= drag
      p.vy += GRAVITY * DROP_GRAV_MULT * deltaMs
      p.x  += p.vx * deltaMs
      p.y  += p.vy * deltaMs

      const t     = p.elapsed / DROP_LIFE
      const alpha = (1 - t * 0.6) * 0.88
      const speed = Math.abs(p.vx) + Math.abs(p.vy)

      if (speed > 0.08) {
        const scale = STREAK_TAIL_MS * 0.65
        this._gfx.lineStyle(2.2, DROP_COLOUR, alpha)
        this._gfx.lineBetween(p.x - p.vx * scale, p.y - p.vy * scale, p.x, p.y)
      } else {
        this._gfx.fillStyle(DROP_COLOUR, alpha)
        this._gfx.fillCircle(p.x, p.y, 1.8)
      }
      i--
    }
  }

  private _stepPuffs(deltaMs: number): void {
    let i = this._puffs.length - 1
    while (i >= 0) {
      const p = this._puffs[i]
      p.elapsed += deltaMs
      if (p.elapsed >= PUFF_LIFE) { this._puffs.splice(i--, 1); continue }

      p.x += p.vx * deltaMs
      p.y += p.vy * deltaMs

      const t     = p.elapsed / PUFF_LIFE
      const alpha = (1 - t) * (1 - t) * 0.28
      const r     = p.maxRadius * Math.sqrt(t)

      this._gfx.fillStyle(PUFF_COLOUR, alpha)
      this._gfx.fillCircle(p.x, p.y, r)
      i--
    }
  }

  private _stepRings(deltaMs: number): void {
    let i = this._rings.length - 1
    while (i >= 0) {
      const r = this._rings[i]
      r.elapsed += deltaMs
      if (r.elapsed >= RING_LIFE) { this._rings.splice(i--, 1); continue }
      if (r.elapsed < 0) { i--; continue }

      const t      = r.elapsed / RING_LIFE
      const radius = t * RING_MAX_RADIUS
      const alpha  = 1 - t

      this._gfx.lineStyle(3.5, 0xFFFFFF, alpha * 0.45)
      this._gfx.strokeCircle(r.x, r.y, radius * 0.62)
      this._gfx.lineStyle(2.5, 0xFF9A30, alpha * 0.95)
      this._gfx.strokeCircle(r.x, r.y, radius)
      i--
    }
  }

  private _stepDust(deltaMs: number): void {
    let i = this._dust.length - 1
    while (i >= 0) {
      const p = this._dust[i]
      p.elapsed += deltaMs
      if (p.elapsed >= DUST_LIFE) { this._dust.splice(i--, 1); continue }

      p.x  += p.vx * deltaMs
      p.vx *= Math.pow(0.88, deltaMs / 16)

      const t     = p.elapsed / DUST_LIFE
      const alpha = (1 - t) * 0.5
      const size  = 2 + t * 3

      this._gfx.fillStyle(DUST_COLOUR, alpha)
      this._gfx.fillCircle(p.x, p.y, size)
      i--
    }
  }
}
