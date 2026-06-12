/**
 * router.ts — tiny client-side screen router backed by Zustand.
 *
 * No URL changes — the app is single-page and fully self-contained.
 * Use `navigate(screen)` to transition; `currentScreen` to read the active screen.
 * `from` stores the previous screen for Back navigation.
 * `params` carries arbitrary per-navigation data (e.g. characterId for profile).
 */

import { create } from 'zustand'

export type Screen =
  | 'login'
  | 'main-menu'
  | 'stage-select'
  | 'character-select'
  | 'vs'
  | 'match'
  | 'result'
  | 'continue'
  | 'settings'
  | 'character-profile'
  | 'online'

interface RouterState {
  currentScreen:  Screen
  from:           Screen | null
  params:         Record<string, unknown>
  navigate:       (screen: Screen, params?: Record<string, unknown>) => void
  goBack:         () => void
}

export const useRouter = create<RouterState>((set, get) => ({
  currentScreen: 'main-menu',
  from:          null,
  params:        {},

  navigate(screen, params = {}) {
    set({ currentScreen: screen, from: get().currentScreen, params })
  },

  goBack() {
    const { from } = get()
    if (from) set({ currentScreen: from, from: null, params: {} })
  },
}))
