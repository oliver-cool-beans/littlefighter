/**
 * AI/controller.ts — software controller driven by AI scripts.
 *
 * AI scripts call key() and keypress() to buffer inputs each TU.
 * fetch() dispatches the buffer to child listeners (e.g. ComboDec)
 * and updates state, matching the ControllerLike interface expected
 * by the Character constructor.
 *
 * Ported from F.LF/LF/AI.js :: AIcon. AMD wrapper stripped.
 */

import type { ChildListener } from '../controller.js'

export class AIController {
  state: Record<string, number> = {}
  child: ChildListener[] = []
  private buf: Array<[string, number]> = []

  /** Buffer a raw key event. down=1 for keydown, down=0 for keyup. */
  key(name: string, down: number): void {
    this.buf.push([name, down])
  }

  /**
   * Simulate a press/release sequence using LF2's original keypress semantics:
   *   keypress(key)        → press-and-release (default)
   *   keypress(key, 1, 0)  → same as default
   *   keypress(key, 1, 1)  → hold (keydown only, if not already down)
   *   keypress(key, 0, 0)  → release (keyup only, if currently down)
   */
  keypress(name: string, x?: number, y?: number): void {
    if ((x === undefined && y === undefined) || (x === 1 && y === 0)) {
      if (this.state[name]) this.key(name, 0)
      this.key(name, 1)
      this.key(name, 0)
    } else if (x === 1 && y === 1) {
      if (!this.state[name]) this.key(name, 1)
    } else if (x === 0 && y === 0) {
      if (this.state[name]) this.key(name, 0)
    }
  }

  /** Press a sequence of keys one by one. */
  keyseq(seq: string[]): void {
    for (const k of seq) this.keypress(k)
  }

  /** Dispatch buffered events to child listeners and update state. */
  fetch(): void {
    for (const [name, down] of this.buf) {
      for (const child of this.child) {
        child.key(name, down)
      }
      this.state[name] = down
    }
    this.buf.length = 0
  }

  /** Discard buffered events without dispatching. */
  flush(): void {
    this.buf.length = 0
  }

  destroy(): void {
    this.flush()
    this.child.length = 0
  }
}
