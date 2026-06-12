/**
 * settings.ts — persistent game settings backed by Zustand + localStorage.
 *
 * Call `loadSettings()` once at app startup before rendering React.
 * All mutations auto-save to localStorage immediately.
 */

import { create } from 'zustand'

export interface KeyBindings {
  up:    string
  down:  string
  left:  string
  right: string
  def:   string
  jump:  string
  att:   string
}

export interface Settings {
  // Audio
  masterVolume:    number
  bgmVolume:       number
  sfxVolume:       number
  muteOnFocusLoss: boolean

  // Controls
  p1Keys: KeyBindings
  p2Keys: KeyBindings
  inputBufferWindow: number  // ticks (default 9, range 5–15)

  // Display
  fullscreen:     boolean
  screenShake:    boolean
  showFpsCounter: boolean
  showHitboxes:   boolean
  hudOpacity:     number   // 0.5–1.0

  // Gameplay
  aiReactionDelay: number  // 0–10 ticks
  damageNumbers:   boolean
  announcements:   boolean
}

const DEFAULT_P1_KEYS: KeyBindings = {
  up: 'w', down: 's', left: 'a', right: 'd', def: 'z', jump: 'c', att: 'x',
}
const DEFAULT_P2_KEYS: KeyBindings = {
  up: 'up', down: 'down', left: 'left', right: 'right', def: '0', jump: '2', att: '1',
}

const DEFAULTS: Settings = {
  masterVolume:    0.8,
  bgmVolume:       0.7,
  sfxVolume:       1.0,
  muteOnFocusLoss: true,

  p1Keys: DEFAULT_P1_KEYS,
  p2Keys: DEFAULT_P2_KEYS,
  inputBufferWindow: 9,

  fullscreen:     false,
  screenShake:    true,
  showFpsCounter: false,
  showHitboxes:   false,
  hudOpacity:     1.0,

  aiReactionDelay: 0,
  damageNumbers:   true,
  announcements:   true,
}

const STORAGE_KEY = 'lf2-settings'

function loadFromStorage(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULTS }
    return { ...DEFAULTS, ...JSON.parse(raw) } as Settings
  } catch {
    return { ...DEFAULTS }
  }
}

function saveToStorage(s: Settings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
  } catch {
    // ignore quota / private-mode errors
  }
}

interface SettingsStore extends Settings {
  set<K extends keyof Settings>(key: K, value: Settings[K]): void
  setP1Key(action: keyof KeyBindings, key: string): void
  setP2Key(action: keyof KeyBindings, key: string): void
  resetP1Keys(): void
  resetP2Keys(): void
  /** Shallow-merges remote prefs without triggering a cloud write-back. */
  merge(partial: Partial<Settings>): void
}

export const useSettings = create<SettingsStore>((set, get) => ({
  ...loadFromStorage(),

  set(key, value) {
    const next = { ...get(), [key]: value }
    saveToStorage(next)
    set({ [key]: value })
    import('../auth/authStore.js').then(({ useAuthStore }) => {
      const user = useAuthStore.getState().user
      if (!user) return
      import('../auth/settingsSync.js').then(({ settingsSync }) => {
        settingsSync.upsert(user.id, next as Settings)
      })
    })
  },

  setP1Key(action, key) {
    const p1Keys = { ...get().p1Keys, [action]: key }
    const next = { ...get(), p1Keys }
    saveToStorage(next)
    set({ p1Keys })
  },

  setP2Key(action, key) {
    const p2Keys = { ...get().p2Keys, [action]: key }
    const next = { ...get(), p2Keys }
    saveToStorage(next)
    set({ p2Keys })
  },

  resetP1Keys() {
    const next = { ...get(), p1Keys: { ...DEFAULT_P1_KEYS } }
    saveToStorage(next)
    set({ p1Keys: { ...DEFAULT_P1_KEYS } })
  },

  resetP2Keys() {
    const next = { ...get(), p2Keys: { ...DEFAULT_P2_KEYS } }
    saveToStorage(next)
    set({ p2Keys: { ...DEFAULT_P2_KEYS } })
  },

  merge(partial) {
    const next = { ...get(), ...partial }
    saveToStorage(next)
    set(partial)
  },
}))

/**
 * Call once at app startup. Hydrates persisted settings into the store.
 * (The Zustand store reads localStorage on creation, so this is a no-op
 * in practice — kept for explicit startup ordering clarity.)
 */
export function loadSettings(): void {
  // Already loaded in create(); no additional action needed.
}
