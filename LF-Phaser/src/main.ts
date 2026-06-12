import Phaser from 'phaser'
import { createRoot }               from 'react-dom/client'
import { createElement }            from 'react'
import { BootScene }                from './scenes/BootScene.js'
import { PreloadScene }             from './scenes/PreloadScene.js'
import { MatchScene, pendingLobbyConfig } from './scenes/MatchScene.js'
import { bus }                      from './ui/bus.js'
import { App }                      from './ui/App.js'
import { SoundEngine }              from './sound/SoundEngine.js'
import { initBusAudio }             from './sound/busIntegration.js'
import { useAuthStore }             from './auth/authStore.js'
import { useRouter }                from './ui/router.js'
import { initNetwork }              from './network/index.js'
import type { LobbyConfig } from './ui/types.js'
import './index.css'

// ── Sound ─────────────────────────────────────────────────────────────────
SoundEngine.init()
initBusAudio()

// ── Network ───────────────────────────────────────────────────────────────
initNetwork()

// ── Auth: restore session before rendering React ──────────────────────────
await useAuthStore.getState().init()

useRouter.getState().navigate('main-menu')

// ── React UI ────────────────────────────────────────────────────────────────
const uiRoot = document.getElementById('ui-root')!
createRoot(uiRoot).render(createElement(App))

// ── Bus: React→Phaser ────────────────────────────────────────────────────────
function showGameCanvas() {
  const container = document.getElementById('game-container')
  if (container) container.style.visibility = 'visible'
}

function hideGameCanvas() {
  const container = document.getElementById('game-container')
  if (container) container.style.visibility = 'hidden'
}

bus.on('game:quit', () => { hideGameCanvas() })

bus.on('game:lobby-confirm', (config: LobbyConfig) => {
  showGameCanvas()
  Object.assign(pendingLobbyConfig, config)
  const game = (window as unknown as { __phaserGame: Phaser.Game }).__phaserGame
  game.scene.stop('PreloadScene')
  if (!game.scene.isSleeping('MatchScene')) {
    game.scene.stop('MatchScene')
  }
  game.scene.start('MatchScene')
})

/**
 * LF2 replatformed on Phaser 3.
 *
 * Game canvas is 780×420 — the original F.LF window size.
 * pixelArt + roundPixels keeps the classic pixel-sharp look.
 */
const config: Phaser.Types.Core.GameConfig = {
  type:            Phaser.AUTO,
  width:           780,
  height:          420,
  backgroundColor: '#000000',
  pixelArt:        true,
  roundPixels:     true,
  fps: { smoothStep: false },
  scene: [
    BootScene,
    PreloadScene,
    MatchScene,
  ],
  parent: document.getElementById('game-container') ?? document.body,
  scale: {
    mode:       Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config);
(window as unknown as { __phaserGame: Phaser.Game }).__phaserGame = game

