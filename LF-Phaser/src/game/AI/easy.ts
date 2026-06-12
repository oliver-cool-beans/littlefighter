/**
 * AI/easy.ts — the simplest possible AI script, purely for demonstration.
 *
 * Chases the nearest opponent, attacks when close, occasionally wanders.
 * Ported from LF2_19/AI/dumbass.js. AMD wrapper stripped; C-style loops
 * replaced with JS idioms.
 */

import type { LivingObject } from '../livingobject.js'
import type { AIController } from './controller.js'
import type { AIMatchContext } from './types.js'

const DIR = ['left', 'right', 'up', 'down'] as const

export class EasyAI {
  static readonly type = 'AIscript'
  readonly type       = 'AIscript'

  private cc     = 0
  private dir    = 1
  private target: LivingObject | null = null

  private readonly self:       LivingObject
  private readonly match:      AIMatchContext
  private readonly controller: AIController

  constructor(self: LivingObject, match: AIMatchContext, controller: AIController) {
    this.self       = self
    this.match      = match
    this.controller = controller
    this.loadTarget()
  }

  TU(): void {
    if (this.cc % 100 === 0) this.loadTarget()
    if (!this.target || this.target.health.hp <= 0) { this.cc++; return }

    const dx    = this.target.physics.x - this.self.physics.x
    const dz    = this.target.physics.z - this.self.physics.z
    const absDx = dx > 0 ? dx : -dx
    const absDz = dz > 0 ? dz : -dz

    // Attack if target is close and in front, or very nearby
    const facingTarget = (dx > 0 ? 1 : -1) === this.self.dirh()
    const inAttackRange = facingTarget && absDx < 200 && absDz < 10 &&
      (this.self.state() === 2 || this.self.state() === 5)
    const veryClose = absDx < 50 && absDz < 10

    if ((inAttackRange || veryClose) && this.target.state() !== 14) {
      this.controller.keypress(DIR[dx > 0 ? 1 : 0])
      this.controller.keypress('att')
      this.cc++
      return
    }

    // Chase or flee depending on health; re-evaluate direction every 5 ticks
    if (this.cc % 5 === 0) {
      const chase = this.self.health.hp > 150
      if (absDx < 200) {
        this.controller.key(DIR[this.dir], 0)
        if (this.rand(3) === 0) {
          this.dir = this.rand(4)
        } else if (absDx > absDz) {
          this.dir = (dx > 0) === chase ? 1 : 0
        } else {
          this.dir = (dz > 0) === chase ? 3 : 2
        }
        this.controller.key(DIR[this.dir], 1)
      } else {
        this.controller.key(DIR[this.dir], 0)
        this.dir = dx > 0 ? 1 : 0
        this.controller.keypress(DIR[this.dir])
        this.controller.keypress(DIR[this.dir]) // double-tap = run
      }
    }

    // Random action every 10 ticks
    if (this.cc % 10 === 0) {
      switch (this.rand(4)) {
        case 0: break
        case 1: this.controller.keypress('def');  break
        case 2: this.controller.keypress('jump'); break
        case 3: this.controller.keypress('att');  break
      }
    }

    this.cc++
  }

  private rand(i: number): number {
    return Math.floor(this.match.random() * i)
  }

  private loadTarget(): void {
    const objects    = this.match.get_living_object()
    const candidates: Array<{ dist: number; obj: LivingObject }> = []

    for (const obj of objects) {
      if (obj.type === 'character' && obj.team !== this.self.team && obj.health.hp > 0) {
        const dx = obj.physics.x - this.self.physics.x
        const dz = obj.physics.z - this.self.physics.z
        candidates.push({ dist: Math.sqrt(dx * dx + dz * dz), obj })
      }
    }

    candidates.sort((a, b) => a.dist - b.dist)
    if (candidates.length === 0) { this.target = null; return }

    this.target = this.rand(2) === 0
      ? candidates[this.rand(candidates.length)].obj
      : candidates[0].obj
  }
}
