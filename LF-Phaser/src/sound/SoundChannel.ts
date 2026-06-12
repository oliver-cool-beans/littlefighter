/**
 * SoundChannel — a named group of Howl instances with independent volume.
 *
 * Three channels are instantiated by SoundEngine:
 *   sfx   — combat / movement sounds (short, many concurrent)
 *   music — looping stage tracks (one at a time)
 *   ui    — menu / UI sounds
 */

import { Howl } from 'howler'

export class SoundChannel {
  readonly name:  string
  private _volume: number = 1
  private _muted:  boolean = false
  private _howl:   Howl | null = null

  constructor(name: string) {
    this.name = name
  }

  /** Attach the shared Howl instance (set once during SoundEngine.init). */
  setHowl(howl: Howl): void {
    this._howl = howl
  }

  get volume(): number { return this._volume }

  setVolume(v: number): void {
    this._volume = Math.max(0, Math.min(1, v))
  }

  mute(): void   { this._muted = true  }
  unmute(): void { this._muted = false }
  get muted(): boolean { return this._muted }

  /**
   * Play a sprite by key.  Returns the Howl sound instance ID (for cancellation)
   * or -1 if nothing played.
   */
  play(
    spriteKey: string,
    opts: { volume?: number; rate?: number; pan?: number; loop?: boolean } = {}
  ): number {
    if (!this._howl || this._muted) return -1

    const vol = (opts.volume ?? 1) * this._volume
    const id  = this._howl.play(spriteKey)
    if (typeof id !== 'number') return -1

    this._howl.volume(vol, id)
    if (opts.rate !== undefined) this._howl.rate(opts.rate, id)
    if (opts.pan  !== undefined) this._howl.stereo(opts.pan, id)
    if (opts.loop !== undefined) this._howl.loop(opts.loop, id)
    return id
  }

  /** Stop a specific Howl sound instance. */
  stopId(id: number): void {
    this._howl?.stop(id)
  }

  /** Stop all sounds playing on this channel's Howl. */
  stopAll(): void {
    this._howl?.stop()
  }

  /** Fade the channel volume over `ms` milliseconds. */
  fadeTo(targetVol: number, ms: number): void {
    if (!this._howl) return
    const from = this._volume
    this._howl.fade(from, targetVol, ms)
    this._volume = targetVol
  }
}
