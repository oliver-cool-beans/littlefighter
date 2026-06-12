/**
 * controller.ts
 *
 * LF2 buffered keyboard controller using Phaser.Input.Keyboard.
 * Ported from F.LF/core/controller.js — AMD wrapper replaced with ES module.
 *
 * Two-player key layouts (default):
 *   P1: { up:'w', down:'s', left:'a', right:'d', def:'z', jump:'u', att:'i' }
 *   P2: { up:'up', down:'down', left:'left', right:'right', def:'0', jump:'1', att:'2' }
 *
 * Usage (inside a Phaser.Scene.create()):
 *   const con = new Controller(this, { up:'w', ... })
 *   con.child.push(myComboDetector)  // optional listener
 *
 * Per-tick (inside Phaser.Scene.update() physics tick):
 *   con.fetch()   // dispatch buffered inputs to children, update state
 *
 * Cleanup (inside Phaser.Scene.shutdown()):
 *   con.destroy()
 */

export type KeyConfig = Record<string, string | number>

export interface ChildListener {
  key(name: string, down: number): void
}

/**
 * Convert a key name string (as used in LF2 configs) to the Phaser key string
 * accepted by Phaser.Input.Keyboard.KeyCodes or addKey().
 */
function toPhaserKey(name: string | number): string | number {
  if (typeof name === 'number') return name
  const n = name.toLowerCase()
  switch (n) {
    case 'left':  return 'LEFT'
    case 'right': return 'RIGHT'
    case 'up':    return 'UP'
    case 'down':  return 'DOWN'
    case 'esc':   return 'ESC'
    case 'space': return 'SPACE'
    case 'ctrl':  return 'CTRL'
  }
  if (n.length === 1) {
    const c = n.codePointAt(0) as number
    if (c >= 97 && c <= 122) return n.toUpperCase()  // a-z → A-Z
    const DIGIT_NAMES = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE']
    if (c >= 48 && c <= 57)  return DIGIT_NAMES[c - 48]
  }
  if (/^f\d+$/.test(n)) return n.toUpperCase()
  return name.toUpperCase()
}

export class Controller {
  readonly config: KeyConfig
  state: Record<string, number>
  child: ChildListener[]

  private buf: Array<[string, number]>
  private readonly _keys:   Record<string, Phaser.Input.Keyboard.Key>
  private readonly _onDown: Record<string, () => void>
  private readonly _onUp:   Record<string, () => void>

  constructor(scene: Phaser.Scene, config: KeyConfig) {
    this.config = config
    this.state  = {}
    this.child  = []
    this.buf    = []

    for (const name in config) this.state[name] = 0

    this._keys   = {}
    this._onDown = {}
    this._onUp   = {}

    const kb = scene.input.keyboard as Phaser.Input.Keyboard.KeyboardPlugin

    for (const name in config) {
      const phaserKey = toPhaserKey(config[name])
      const key = kb.addKey(phaserKey as string)

      const onDown = () => this.buf.push([name, 1])
      const onUp   = () => this.buf.push([name, 0])

      key.on('down', onDown)
      key.on('up',   onUp)

      this._keys[name]   = key
      this._onDown[name] = onDown
      this._onUp[name]   = onUp
    }
  }

  /** Dispatch all buffered inputs to child listeners, update state, clear buffer. */
  fetch(): void {
    // Sort keydown events to match LF2 combo sequence order: def → direction → att/jump.
    // This ensures combos like D>A=[def,right,att] fire correctly even when all
    // three keys are pressed "simultaneously" within the same physics tick.
    const keyOrder: Record<string, number> = {
      def: 0,
      up: 1, down: 1, left: 1, right: 1,
      att: 2, jump: 2,
    }
    this.buf.sort(([nameA, downA], [nameB, downB]) => {
      if (downA !== 1 || downB !== 1) return 0  // only reorder keydowns
      return (keyOrder[nameA] ?? 1) - (keyOrder[nameB] ?? 1)
    })
    for (const [name, down] of this.buf) {
      for (const child of this.child) {
        child.key(name, down)
      }
      this.state[name] = down
    }
    this.buf.length = 0
  }

  /** Discard buffered inputs without dispatching them. */
  flush(): void {
    this.buf.length = 0
  }

  /** Remove all Phaser key listeners. Call when the scene shuts down. */
  destroy(): void {
    for (const name in this._keys) {
      this._keys[name].off('down', this._onDown[name])
      this._keys[name].off('up',   this._onUp[name])
    }
  }
}

/** Default single-player config: arrow keys + Z (def) / X (att) / C (jump). */
export const DEFAULT_CONFIG: KeyConfig = {
  up: 'up', down: 'down', left: 'left', right: 'right',
  def: 'z', att: 'x', jump: 'c'
}
