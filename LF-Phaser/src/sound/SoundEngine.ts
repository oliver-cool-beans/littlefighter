/**
 * SoundEngine — singleton that owns all Howl instances and channels.
 *
 * Architecture:
 *   - One Howl instance loaded as an audio sprite (soundpack.mp3/ogg)
 *   - Three SoundChannels: sfx, music, ui
 *   - Per-frame sfx batching: play() accumulates requests; flushFrame() deduplicates
 *     and plays at most MAX_UNIQUE_SFX_PER_FRAME unique sounds per game tick.
 *     This keeps CPU cost O(unique sound types) instead of O(entity count) when
 *     hundreds of enemies trigger the same sfx simultaneously.
 *   - Per-key cooldown: isolated (count=1) sfx cannot re-trigger for SFX_COOLDOWN_MS;
 *     mass events (count>1) bypass the cooldown so they always register.
 *   - Active-voice cap: at most MAX_CONCURRENT_SFX simultaneous sfx voices;
 *     oldest is stopped before a new one starts.
 *   - All volume settings persisted to localStorage.
 *
 * Usage:
 *   SoundEngine.init()             // call once before game boots
 *   SoundEngine.play('hit')        // semantic ID — buffered until flushFrame()
 *   SoundEngine.play('1/007')      // raw frame-data ID
 *   SoundEngine.play('jump', { pan: 0.4 })
 *   SoundEngine.flushFrame()       // call once per game tick (MatchScene._tick)
 */

import { Howl, Howler } from 'howler'
import { SoundChannel }                                   from './SoundChannel.js'
import { SOUNDPACK_SPRITE, RLF2_SPRITE, resolveSpriteKey } from './SoundBank.js'
import type { SoundId, PlayOptions, ChannelName }         from './types.js'

/** Maximum simultaneously active Web Audio voices for sfx. */
const MAX_CONCURRENT_SFX = 6

/**
 * Maximum unique sfx sprite keys that will actually play per game tick.
 * Requests beyond this limit are discarded (lowest-count ones first).
 * Keeps CPU cost O(unique sounds) rather than O(entity count).
 */
const MAX_UNIQUE_SFX_PER_FRAME = 4

/**
 * Minimum milliseconds between plays of the same sprite key.
 * Prevents identical sounds from firing on every consecutive tick when
 * many enemies share a state transition (e.g. landing, hit-react).
 */
const SFX_COOLDOWN_MS = 80

const STORAGE_KEY = 'lf2_sound_volumes'

interface PendingSfx {
  count:  number   // how many requests arrived this frame
  volume: number   // loudest requested volume (or 1 if none specified)
  pan:    number   // average pan weighted by count
}

interface VolumeSave {
  master: number
  sfx:    number
  music:  number
  ui:     number
}

function loadVolumes(): VolumeSave {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as VolumeSave
  } catch {
    // ignore parse errors
  }
  return { master: 1, sfx: 1, music: 0.7, ui: 0.9 }
}

function saveVolumes(v: VolumeSave): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(v))
  } catch {
    // ignore storage errors (private browsing etc.)
  }
}

class SoundEngineClass {
  readonly sfx:   SoundChannel = new SoundChannel('sfx')
  readonly music: SoundChannel = new SoundChannel('music')
  readonly ui:    SoundChannel = new SoundChannel('ui')

  private _masterVolume: number       = 1
  private _sfxQueue: number[]         = []   // active sfx sound IDs (oldest first)
  private _musicId: number            = -1   // current soundpack music sprite ID
  private readonly _trackHowls: Map<string, Howl> = new Map()  // cached Howl per track ID
  private _activeTrackId: string | null  = null        // currently playing track ID
  private _ready:    boolean           = false
  private _rlf2Howl: Howl | null       = null  // second Howl for R-LF2 extra sounds 103-116

  // Per-frame batching: sfx requests accumulate here; flushFrame() plays them.
  private readonly _sfxPending: Map<string, PendingSfx> = new Map()
  // Cooldown tracking: spriteKey → timestamp of last actual play
  private readonly _sfxLastPlayed: Map<string, number>  = new Map()

  /** Initialise Howler and register all sounds.  Call once at app startup. */
  init(): void {
    if (this._ready) return

    const vols = loadVolumes()
    this._masterVolume = vols.master
    Howler.volume(vols.master)

    this.sfx.setVolume(vols.sfx)
    this.music.setVolume(vols.music)
    this.ui.setVolume(vols.ui)

    // Build sprite map accepted by Howler: { key: [offset_ms, duration_ms, loop?] }
    const sprite: Record<string, [number, number] | [number, number, boolean]> = {}
    for (const [key, entry] of Object.entries(SOUNDPACK_SPRITE)) {
      const [start, dur, loop] = entry
      sprite[key] = loop !== undefined ? [start, dur, loop] : [start, dur]
    }

    const howl = new Howl({
      src: [
        'sound/soundpack.ogg',
        'sound/soundpack.mp3',
        'sound/soundpack.m4a',
        'sound/soundpack.ac3',
      ],
      sprite,
      preload: true,
      html5:   false,
    })

    this.sfx.setHowl(howl)
    this.music.setHowl(howl)
    this.ui.setHowl(howl)

    // Load R-LF2 extra sounds (103–116) as a second sprite.
    const rlf2Sprite: Record<string, [number, number]> = {}
    for (const [key, entry] of Object.entries(RLF2_SPRITE)) {
      rlf2Sprite[key] = [entry[0], entry[1]]
    }
    this._rlf2Howl = new Howl({
      src:     ['sound/rlf2sounds.ogg', 'sound/rlf2sounds.mp3'],
      sprite:  rlf2Sprite,
      preload: true,
      html5:   false,
    })

    this._ready = true

    // Browsers suspend AudioContext until a user gesture occurs.
    // Register a one-time unlock on the first click or keydown so sound
    // starts working as soon as the player interacts with the page.
    const unlock = () => {
      if (Howler.ctx && Howler.ctx.state === 'suspended') {
        void Howler.ctx.resume()
      }
    }
    document.addEventListener('click',   unlock, { once: true, capture: true })
    document.addEventListener('keydown', unlock, { once: true, capture: true })
    document.addEventListener('touchstart', unlock, { once: true, capture: true })
  }

  /** Play a sound.  Returns the Howl sound ID or -1. */
  play(id: SoundId, opts: PlayOptions = {}): number {
    if (!this._ready) return -1

    // Lazy-resume on any play call that arrives after a user gesture.
    if (Howler.ctx && Howler.ctx.state === 'suspended') {
      void Howler.ctx.resume()
    }

    const resolved = resolveSpriteKey(id)
    if (!resolved) return -1
    const { key: spriteKey, pack } = resolved

    const channel = this._channelForId(id)
    if (channel === this.music) return this._playMusic(spriteKey, opts)
    if (channel === this.ui)    return this.ui.play(spriteKey, opts)

    // sfx — buffer into the pending map keyed by "pack:spriteKey".
    const pendingKey = `${pack}:${spriteKey}`
    const volume = opts.volume ?? 1
    const pan    = opts.pan    ?? 0
    const existing = this._sfxPending.get(pendingKey)
    if (existing) {
      existing.count++
      if (volume > existing.volume) existing.volume = volume
      existing.pan += (pan - existing.pan) / existing.count
    } else {
      this._sfxPending.set(pendingKey, { count: 1, volume, pan })
    }
    return -1
  }

  /**
   * Flush the per-frame sfx buffer and play at most MAX_UNIQUE_SFX_PER_FRAME
   * unique sounds.  Must be called once per game tick from the match loop.
   *
   * Deduplication strategy:
   *   - Multiple requests for the same key → played exactly once
   *   - Volume is boosted slightly when > 3 entities triggered the sound
   *     (simulates layering without extra voices)
   *   - Pan is the weighted average of all requestors' positions
   *   - Keys on cooldown are skipped if count ≤ 1 (single quiet entity);
   *     if count > 1 (mass event) the cooldown is bypassed so big impacts land
   */
  flushFrame(): void {
    if (this._sfxPending.size === 0) return

    const now = performance.now()

    // Sort by count descending so the most-requested sounds take priority.
    const sorted = [...this._sfxPending.entries()].sort(
      ([, a], [, b]) => b.count - a.count
    )

    let played = 0
    for (const [pendingKey, pending] of sorted) {
      if (played >= MAX_UNIQUE_SFX_PER_FRAME) break

      if (pending.count === 1) {
        const lastPlayed = this._sfxLastPlayed.get(pendingKey) ?? 0
        if (now - lastPlayed < SFX_COOLDOWN_MS) continue
      }

      const boostedVolume = pending.count > 3
        ? Math.min(1, pending.volume * 1.2)
        : pending.volume

      // pendingKey format: "pack:spriteKey"
      const colon     = pendingKey.indexOf(':')
      const pack      = pendingKey.slice(0, colon) as 'main' | 'rlf2'
      const spriteKey = pendingKey.slice(colon + 1)

      this._playSfxNow(spriteKey, pack, { volume: boostedVolume, pan: pending.pan })
      this._sfxLastPlayed.set(pendingKey, now)
      played++
    }

    this._sfxPending.clear()
  }

  /** Stop all instances of a semantic or raw sound ID. */
  stop(id: SoundId): void {
    const resolved = resolveSpriteKey(id)
    if (!resolved) return
    const channel = this._channelForId(id)
    channel.stopAll()
  }

  /**
   * Play an external music track (separate file, not soundpack sprite).
   * `trackId` must match a filename in `public/sound/` (e.g. `'stage1'` → `sound/stage1.ogg`).
   * Passing `null` stops any playing track without starting a new one.
   */
  playTrack(trackId: string | null): void {
    if (trackId === this._activeTrackId) return

    const activeHowl = this._activeTrackId ? this._trackHowls.get(this._activeTrackId) : null
    if (activeHowl) {
      activeHowl.stop()
    }
    this._activeTrackId = null

    if (!trackId) return

    // Resume AudioContext if needed (may not have had a gesture yet)
    if (Howler.ctx && Howler.ctx.state === 'suspended') {
      void Howler.ctx.resume()
    }

    if (!this._trackHowls.has(trackId)) {
      const howl = new Howl({
        src:    [`sound/${trackId}.ogg`, `sound/${trackId}.mp3`],
        loop:   true,
        volume: this.music.volume,
        html5:  true,
      })
      this._trackHowls.set(trackId, howl)
    }

    const howl = this._trackHowls.get(trackId)!
    howl.volume(this.music.volume)
    howl.play()
    this._activeTrackId = trackId
  }

  /** Stop the currently playing external music track. */
  stopTrack(): void {
    this.playTrack(null)
  }

  /** Stop all sounds on all channels. */
  stopAll(): void {
    this._sfxPending.clear()
    this._sfxLastPlayed.clear()
    this.sfx.stopAll()
    this.music.stopAll()
    this.ui.stopAll()
    this._sfxQueue = []
    this._musicId  = -1
    this.playTrack(null)
  }

  /** Set master volume for all output (0–1). Persists to localStorage. */
  setMasterVolume(v: number): void {
    this._masterVolume = Math.max(0, Math.min(1, v))
    Howler.volume(this._masterVolume)
    this._persist()
  }

  get masterVolume(): number { return this._masterVolume }

  channel(name: ChannelName): SoundChannel {
    return name === 'sfx' ? this.sfx : name === 'music' ? this.music : this.ui
  }

  /** Update a channel's volume and persist. */
  setChannelVolume(name: ChannelName, v: number): void {
    this.channel(name).setVolume(v)
    if (name === 'music' && this._activeTrackId) {
      this._trackHowls.get(this._activeTrackId)?.volume(v)
    }
    this._persist()
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  /** Immediately play a single sfx voice, enforcing the active-voice limit. */
  private _playSfxNow(spriteKey: string, pack: 'main' | 'rlf2', opts: PlayOptions): number {
    if (this._sfxQueue.length >= MAX_CONCURRENT_SFX) {
      const oldest = this._sfxQueue.shift()!
      this.sfx.stopId(oldest)
    }

    let soundId: number
    if (pack === 'rlf2' && this._rlf2Howl) {
      const vol = (opts.volume ?? 1) * this.sfx.volume
      soundId = this._rlf2Howl.play(spriteKey)
      if (soundId !== -1) {
        this._rlf2Howl.volume(vol, soundId)
        if (opts.pan !== undefined) this._rlf2Howl.stereo(opts.pan, soundId)
      }
    } else {
      soundId = this.sfx.play(spriteKey, opts)
    }

    if (soundId !== -1) this._sfxQueue.push(soundId)
    return soundId
  }

  private _playMusic(spriteKey: string, opts: PlayOptions): number {
    if (this._musicId !== -1) {
      this.music.stopId(this._musicId)
    }
    this._musicId = this.music.play(spriteKey, { ...opts, loop: true })
    return this._musicId
  }

  private _channelForId(id: string): SoundChannel {
    if (id.startsWith('music_')) return this.music
    if (id === 'ui_confirm' || id === 'ui_cursor' || id === 'ui_cancel' ||
        id.startsWith('ui_')) return this.ui
    return this.sfx
  }

  private _persist(): void {
    saveVolumes({
      master: this._masterVolume,
      sfx:    this.sfx.volume,
      music:  this.music.volume,
      ui:     this.ui.volume,
    })
  }
}

export const SoundEngine = new SoundEngineClass()
