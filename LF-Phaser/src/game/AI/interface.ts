/**
 * AI/interface.ts — adapts a LivingObject for old-school AI scripts.
 *
 * AI scripts receive a `self` object; they call `self.AI.facing()`,
 * `self.AI.blink()`, `self.AI.type()`, etc. This class provides those
 * methods by reading from the wrapped LivingObject.
 *
 * Ported from F.LF/LF/AI.js :: AIin. AMD wrapper stripped.
 */

import { make_array } from '../util.js'
import type { LivingObject } from '../livingobject.js'

export class AIInterface {
  private readonly self: LivingObject
  private cache: { N?: number; O: Record<string, unknown> } = { O: {} }

  constructor(character: LivingObject) {
    this.self = character
  }

  /** Returns true if the character is facing left. */
  facing(): boolean {
    return this.self.physics.facing === 'left'
  }

  /** Returns the LF2 numeric type identifier for this object. */
  type(): number {
    switch (this.self.type) {
      case 'character':     return 0
      case 'lightweapon':   return 1
      case 'heavyweapon':   return 2
      case 'specialattack': return 3
      case 'baseball':      return 4
      case 'criminal':      return 5
      case 'drink':         return 6
      default:              return 0
    }
  }

  /** Returns blink timer (>0 when character is blinking after injury). */
  blink(): number {
    const e = this.self.effect
    if (e.blink) return Math.round(e.timeout / 2)
    return 0
  }

  /** Returns positive shake timer when oscillating, negative when frozen. */
  shake(): number {
    const e = this.self.effect
    if (e.oscillate) return e.timeout * (e.dvx || e.dvy ? 1 : -1)
    return 0
  }

  /** Returns a deterministic random integer in [0, i). */
  rand(i: number): number {
    return Math.floor(this.self.match.random() * i)
  }

  /**
   * Returns a frame data summary for frame N, with array fields
   * expanded to count/list pairs (e.g. bdy_count + bdys).
   * Results are cached per frame number.
   */
  frame(N: number): Record<string, unknown> {
    if (this.cache.N === N) return this.cache.O
    this.cache.N = N
    const O: Record<string, unknown> = {}
    this.cache.O = O
    const expandedArrayFields: Record<string, boolean> = { bdy: true, itr: true }
    const frameData = this.self.data.frame[N] as Record<string, unknown> | undefined
    if (frameData) {
      for (const key in frameData) {
        const val = frameData[key]
        if (typeof val === 'object' && val !== null && expandedArrayFields[key]) {
          const arr = make_array(val as Record<string, unknown>)
          O[key + '_count'] = arr.length
          O[key + 's'] = arr
        } else if (typeof val === 'object' && val !== null) {
          O[key] = val
        } else {
          O[key] = val
        }
      }
    } else {
      for (const t in expandedArrayFields) {
        O[t + '_count'] = 0
      }
    }
    return O
  }
}
