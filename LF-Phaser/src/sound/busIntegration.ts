/**
 * busIntegration.ts — subscribes to UIEventBus events and drives SoundEngine.
 *
 * Call `initBusAudio()` once from main.ts after SoundEngine.init().
 * This module is the only place that connects sound to navigation events.
 */

import { bus }          from '../ui/bus.js'
import { SoundEngine }  from './SoundEngine.js'
import { useRouter }    from '../ui/router.js'

export function initBusAudio(): void {
  bus.on('game:start', () => {
    SoundEngine.play('ui_confirm')
  })

  bus.on('game:quit', () => {
    SoundEngine.stopAll()
    SoundEngine.playTrack('main')
  })

  // Play main menu music whenever the router lands on the main menu.
  useRouter.subscribe((state, prev) => {
    if (state.currentScreen === 'main-menu' && prev.currentScreen !== 'main-menu') {
      SoundEngine.playTrack('main')
    }
    // Stop menu music when heading into an active game screen.
    const gameScreens = new Set(['match', 'vs'])
    if (gameScreens.has(state.currentScreen) && !gameScreens.has(prev.currentScreen)) {
      SoundEngine.stopTrack()
    }
  })
}
