/**
 * AI/medium.ts — aggressive AI that positions itself to dash-attack.
 *
 * Originally designed for Dennis; works with any LF2 character.
 * Ported from LF2_19/AI/Challangar.js. AMD wrapper stripped;
 * C-style patterns replaced with JS idioms.
 */

import type { LivingObject } from '../livingobject.js'
import type { AIController } from './controller.js'
import type { AIMatchContext } from './types.js'
import type { AIInterface } from './interface.js'

/** Character extended with the AI interface accessor (attached in MatchScene). */
interface AICharacter extends LivingObject {
  AI: AIInterface
}

export class MediumAI {
  static readonly type = 'AIscript'
  readonly type       = 'AIscript'
  readonly name       = 'Medium'

  private target: AICharacter | null = null

  private minDashDx      = 0
  private maxDashDx      = 0
  private minDashDz      = 0
  private maxDashDz      = 0
  private runStopDistance = 0

  private readonly self:       AICharacter
  private readonly match:      AIMatchContext
  private readonly controller: AIController
  private readonly bgWidth:    number
  private readonly bgZMin:     number
  private readonly bgZMax:     number

  constructor(self: LivingObject, match: AIMatchContext, controller: AIController) {
    this.self       = self as AICharacter
    this.match      = match
    this.controller = controller

    const bg         = match.background ?? { width: 4000, zboundary: [289, 510] as [number, number] }
    this.bgWidth     = (bg as { width: number }).width
    const zboundary  = (bg as { zboundary: [number, number] }).zboundary
    this.bgZMin      = zboundary[0]
    this.bgZMax      = zboundary[1]

    this.resetDashParams()
  }

  TU(): void {
    this.resetDashParams()
    this.releaseAllKeys()
    this.loadNearestOpponentTarget()

    if (!this.target) return

    if (this.readyToDash()) {
      if (this.self.state() === 2 && this.facingTarget()) {
        this.controller.keypress('jump')
        this.controller.keypress('att')
        this.targetwardZ()
      } else if (this.self.frame.N === 215) {
        this.controller.keypress('jump')
        this.controller.keypress('att')
        this.targetwardZ()
        this.targetward()
      } else if (this.self.state() === 2) {
        this.targetward(false)
        this.targetwardZ(false)
      } else {
        this.targetward(false)
      }
    } else if (this.self.state() === 12) {
      this.controller.keypress('jump')
    } else {
      this.moveIntoPosition()
    }
  }

  // ── Private helpers ──────────────────────────────────────────────────────

  private rand(i: number): number {
    return Math.floor(this.match.random() * i)
  }

  private about(x: number): number {
    return x + this.rand(x / 10) - x / 20
  }

  private resetDashParams(): void {
    this.minDashDx       = this.about(70)
    this.maxDashDx       = this.about(230)
    this.minDashDz       = this.about(5)
    this.maxDashDz       = this.about(40)
    this.runStopDistance = this.about(30)
  }

  private releaseAllKeys(): void {
    for (const key of ['att', 'def', 'jump', 'up', 'down', 'left', 'right']) {
      this.controller.keypress(key, 0, 0)
    }
  }

  private loadNearestOpponentTarget(): void {
    const objects = this.match.get_living_object()
    for (const obj of objects) {
      const char = obj as AICharacter
      if (
        char.type === 'character' &&
        char.uid !== this.self.uid &&
        char.health.hp > 0 &&
        char.id < 100 &&
        char.team !== this.self.team
      ) {
        this.target = char
        return
      }
    }
    this.target = null
  }

  private readyToDash(): boolean {
    if (!this.target) return false
    const dx   = Math.abs(this.target.physics.x - this.self.physics.x)
    const dz   = Math.abs(this.target.physics.z - this.self.physics.z)
    const selfState = this.self.state()
    const inPosition = (this.minDashDx <= dx && dx <= this.maxDashDx && this.minDashDz <= dz && dz <= this.maxDashDz) ||
                       (this.facingTarget() && selfState === 2)
    return (selfState === 0 || selfState === 1 || selfState === 2 || this.self.frame.N === 215) &&
           this.target.state() !== 14 &&
           (this.target.AI?.blink() ?? 0) < 2 &&
           inPosition
  }

  private facingTarget(): boolean {
    if (!this.target) return false
    return (this.self.AI.facing()  && this.target.physics.x < this.self.physics.x) ||
           (!this.self.AI.facing() && this.target.physics.x > this.self.physics.x)
  }

  private targetward(hold = true): void {
    if (!this.target) return
    const y = hold ? 1 : 0
    if (this.target.physics.x > this.self.physics.x) {
      this.controller.keypress('right', 1, y)
    } else {
      this.controller.keypress('left', 1, y)
    }
  }

  private targetwardZ(hold = true): void {
    if (!this.target) return
    const y = hold ? 1 : 0
    if (this.target.physics.z > this.self.physics.z) {
      this.controller.keypress('down', 1, y)
    } else {
      this.controller.keypress('up', 1, y)
    }
  }

  private dashFromLeft(): boolean {
    if (!this.target) return false
    if (this.target.physics.x < this.minDashDx)             return false
    if (this.bgWidth - this.target.physics.x < this.minDashDx) return true
    return this.self.physics.x < this.target.physics.x
  }

  private dashFromTop(): boolean {
    if (!this.target) return false
    if (this.target.physics.z - this.bgZMin < this.minDashDz) return false
    if (this.bgZMax - this.target.physics.z < this.minDashDz) return true
    return this.self.physics.z < this.target.physics.z
  }

  private moveIntoPosition(): void {
    if (!this.target) return
    let minX: number, maxX: number, minZ: number, maxZ: number

    if (this.dashFromLeft()) {
      minX = this.target.physics.x - this.maxDashDx
      maxX = this.target.physics.x - this.minDashDx
    } else {
      minX = this.target.physics.x + this.minDashDx
      maxX = this.target.physics.x + this.maxDashDx
    }
    if (this.dashFromTop()) {
      minZ = this.target.physics.z - this.maxDashDz
      maxZ = this.target.physics.z - this.minDashDz
    } else {
      minZ = this.target.physics.z + this.minDashDz
      maxZ = this.target.physics.z + this.maxDashDz
    }
    this.getTo(minX, maxX, minZ, maxZ)
  }

  private getTo(minX: number, maxX: number, minZ: number, maxZ: number): void {
    if (!this.target) return
    const dxOvershoot = Math.max(this.self.physics.x - maxX, minX - this.self.physics.x)
    const run = dxOvershoot > this.runStopDistance ||
                Math.abs(this.self.physics.x - this.target.physics.x) < 100 ? 0 : 1

    if (this.self.physics.x > maxX) {
      this.controller.keypress('left', 1, run)
      if (run === 0) this.controller.keypress('left', 1, run)
    } else if (this.self.physics.x < minX) {
      this.controller.keypress('right', 1, run)
      if (run === 0) this.controller.keypress('right', 1, run)
    }

    if (this.self.physics.z > maxZ) {
      this.controller.keypress('up', 1, run)
    } else if (this.self.physics.z < minZ) {
      this.controller.keypress('down', 1, run)
    }
  }
}
