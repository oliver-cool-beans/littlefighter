/**
 * combodec.ts
 *
 * Combo detector — ported from F.LF/core/combodec.js.
 * AMD wrapper stripped, exported as ES module.
 * Logic is numerically identical to the original.
 */

import type { ComboEntry, ComboConfig, ControllerLike } from '../types/index.js'

export type { ComboEntry, ComboConfig }

interface SeqEntry {
  k: string
  t: number
}

export class ComboDec {
  time     = 1
  timeout  = 0
  comboout = 0

  private readonly con:    ControllerLike
  private readonly seq:    SeqEntry[]
  private readonly config: ComboConfig
  private combo:           ComboEntry[] | null

  constructor(controller: ControllerLike, config: ComboConfig, combo: ComboEntry[] | null) {
    this.con    = controller
    this.seq    = []
    this.config = config
    this.combo  = combo
    controller.child.push(this as unknown as { key(name: string, down: number): void })
  }

  key(K: string, down: number): void {
    if (!down) return

    const seq  = this.seq
    const push = this._shouldPush(K, seq)

    this._updateTimers()

    if (push) seq.push({ k: K, t: this.time })

    if (this.combo && push) {
      for (const combo of this.combo) {
        if (this._matchCombo(combo, seq)) {
          this.config.callback(combo)
          const clearNow = combo.clear_on_combo ?? this.config.clear_on_combo
          if (clearNow) this.clearSeq()
        }
      }
    }
  }

  private _shouldPush(K: string, seq: SeqEntry[]): boolean {
    if (this.con.state[K]) return false
    const rp = this.config.rp
    if (rp?.[K] !== undefined) {
      let cc = 0
      for (let i = seq.length - 1; i >= 0 && seq[i].k === K; i--) cc++
      if (cc >= rp[K]) return false
    }
    return true
  }

  private _updateTimers(): void {
    if (this.config.timeout)  this.timeout  = this.time + this.config.timeout
    if (this.config.comboout) this.comboout = this.time + this.config.comboout
  }

  private _matchCombo(combo: ComboEntry, seq: SeqEntry[]): boolean {
    const start = seq.length - combo.seq.length
    if (start < 0) return false
    const last = seq.at(-1) as SeqEntry
    for (let k = 0; k < combo.seq.length; k++) {
      const entry = seq[start + k]
      if (combo.seq[k] !== entry.k) return false
      if (combo.maxtime != null && last.t - entry.t > combo.maxtime) return false
    }
    return true
  }

  /** Remove all combos with the given name from the active combo list. */
  removeCombo(name: string): void {
    if (this.combo) this.combo = this.combo.filter(c => c.name !== name)
  }

  clearSeq(): void {
    this.seq.length = 0
    this.timeout  = this.time - 1
    this.comboout = this.time - 1
  }

  /** Advance the internal clock by one physics tick. */
  frame(): void {
    if (this.time === this.timeout)  this.clearSeq()
    if (this.time === this.comboout) this.seq.push({ k: '_', t: this.time })
    this.time++
  }
}

/**
 * Build the full combo list used by a character controller.
 */
export function buildCharacterComboList(
  globalComboList: Array<{ name: string; seq: string[]; clear_on_combo?: boolean }>
): ComboEntry[] {
  const list: ComboEntry[] = [
    { name: 'left',        seq: ['left'],         clear_on_combo: false },
    { name: 'right',       seq: ['right'],        clear_on_combo: false },
    { name: 'up',          seq: ['up'],           clear_on_combo: false },
    { name: 'down',        seq: ['down'],         clear_on_combo: false },
    { name: 'def',         seq: ['def'],          clear_on_combo: false },
    { name: 'jump',        seq: ['jump'],         clear_on_combo: false },
    { name: 'att',         seq: ['att'],          clear_on_combo: false },
    { name: 'left-left',   seq: ['left',  'left'],  maxtime: 9 },
    { name: 'right-right', seq: ['right', 'right'], maxtime: 9 },
    { name: 'jump-att',    seq: ['jump',  'att'],   maxtime: 2, clear_on_combo: false }
  ]
  return list.concat(globalComboList)
}
