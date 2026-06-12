/**
 * FrameTransistor.ts — controls LF2 frame transitions.
 *
 * Extracted verbatim from the frame_transistor closure in F.LF/LF/livingobject.js.
 *
 * Authority levels (higher = stronger, overrides lower):
 *   0  — natural (frame data's default wait/next)
 *  10  — move, defend, jump, punch, catching, caught
 *  11  — special moves
 *  15  — environmental interactions (landing, knockback)
 *  20  — being punched (hit reaction)
 *  21  — fall
 *  30  — effect type 0
 *  35  — blast
 *  36  — fire
 *  38  — ice
 *  99  — sentinel: "always matches the current lock level exactly"
 */

import type { LivingObject } from './livingobject.js'

export class FrameTransistor {
  private readonly _parent:              LivingObject
  private          _wait:                number
  private          _next:                number
  private          _lock:                number
  private          _lockout:             number
  private          _switchDirAfterTrans: boolean

  constructor(parent: LivingObject) {
    this._parent              = parent
    this._wait                = 1
    this._next                = 999
    this._lock                = 0
    this._lockout             = 1
    this._switchDirAfterTrans = false
  }

  /** Schedule an immediate transition to frame F with authority au. */
  frame(F: number, au?: number): void {
    this.setNext(F, au)
    this.setWait(0, au)
  }

  setWait(value: number, au?: number, out?: number): void {
    if (!au)       au  = 0
    if (au === 99) au  = this._lock
    if (!out)      out = 1
    if (au >= this._lock) {
      this._lock    = au
      this._lockout = (out === 99) ? this._wait : out
      this._wait    = value
      if (this._wait < 0) this._wait = 0
    }
  }

  incWait(inc: number, au?: number, out?: number): void {
    if (!au)       au  = 0
    if (au === 99) au  = this._lock
    if (!out)      out = 1
    if (au >= this._lock) {
      this._lock    = au
      this._lockout = (out === 99) ? this._wait : out
      this._wait   += inc
      if (this._wait < 0) this._wait = 0
    }
  }

  setNext(value: number, au?: number, out?: number): void {
    if (!au)       au  = 0
    if (au === 99) au  = this._lock
    if (!out)      out = 1
    if (au >= this._lock) {
      this._lock    = au
      this._lockout = (out === 99) ? this._wait : out
      if (value < 0) {
        value = -value
        this._switchDirAfterTrans = true
      }
      this._next = value
    }
  }

  next(): number   { return this._next }
  wait(): number   { return this._wait }

  resetLock(au?: number): void {
    if (!au)       au = 0
    if (au === 99) au = this._lock
    if (au >= this._lock) this._lock = 0
  }

  nextFrameData() {
    let n = this._next
    if (n === 999 || n === 1280) n = 0
    return this._parent.data.frame[n]
  }

  /** Advance by one tick — transitions the frame when wait reaches zero. */
  trans(): void {
    const parent  = this._parent
    const oldLock = this._lock

    this._lockout--
    if (this._lockout === 0) this._lock = 0

    if (this._wait === 0) {
      if (this._next === 0) {
        // Already at frame 0 with wait=0 — no-op
      } else {
        let next = this._next

        if (next === 1000) {
          parent.stateUpdate('destroy')
          parent.match.destroy_object(parent)
          return
        }

        // Dead characters locked in state 14 stay there
        if (parent.health.hp <= 0 && parent.frame.D.state === 14) return

        if (next === 999 || next === 1280) next = 0

        parent.frame.PN = parent.frame.N
        parent.frame.N  = next
        parent.stateUpdate('frame_exit')

        // Detect state transition
        const nextFrameData = parent.data.frame[next]
        if (!nextFrameData) {
          console.warn(`FrameTransistor: frame ${next} missing in ${parent.constructor.name}, falling back to frame 0`)
          next = 0
          parent.frame.N = 0
        }

        const isTrans = parent.frame.D.state !== parent.data.frame[next].state
        if (isTrans) parent.stateUpdate('state_exit')

        parent.frame.D = parent.data.frame[next]

        if (isTrans) {
          for (const key in parent.statemem) parent.statemem[key] = undefined

          const oldAllow = parent.allowFacingFollowsInput
          const table    = parent.statesFacingFollowsInput
          const stateKey = parent.frame.D.state ?? 0
          parent.allowFacingFollowsInput = (table && table[stateKey] !== undefined)
            ? table[stateKey]
            : false

          parent.stateUpdate('state_entry')

          if (!this._switchDirAfterTrans && parent.allowFacingFollowsInput && !oldAllow) {
            if (parent.con) {
              if (parent.con.state['left'])  parent.switchFacing('left')
              if (parent.con.state['right']) parent.switchFacing('right')
            }
          }
        }

        if (this._switchDirAfterTrans) {
          this._switchDirAfterTrans = false
          parent.switchFacing(parent.physics.facing === 'right' ? 'left' : 'right')
        }

        parent.frame_update()

        if (oldLock === 10 || oldLock === 11) {
          if (this._wait > 0) this._wait -= 1
        }
      }
    } else {
      this._wait--
    }
  }
}
