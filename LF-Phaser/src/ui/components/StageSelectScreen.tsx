/**
 * StageSelectScreen — full-screen stage picker.
 *
 * Flow: character-select → stage-select → vs
 *
 * Thin wrapper over VerticalPickerLayout.
 */

import { useState }  from 'react'
import { useRouter } from '../router.js'
import { bus }       from '../bus.js'
import { STAGE_DEFS } from '../../data/stages.js'
import { ScreenOverlay }          from '../primitives/ScreenOverlay.js'
import { VerticalPickerLayout }   from '../primitives/VerticalPickerLayout.js'
import type { LobbyConfig }       from '../types.js'
import { FONT, GOLD_DIM }         from '../theme.js'

const CONTROL_HINTS = [
  { key: '↑↓',   action: 'SELECT' },
  { key: 'ENTER', action: 'CONFIRM' },
  { key: 'ESC',   action: 'BACK' },
]

const STAGE_ITEMS = STAGE_DEFS.map(s => ({
  id:           s.id,
  name:         s.name,
  badge:        String(s.id).padStart(2, '0'),
  previewImage: s.previewImage,
}))

export function StageSelectScreen() {
  const navigate   = useRouter(s => s.navigate)
  const params     = useRouter(s => s.params)

  const pendingConfig = params['lobbyConfig'] as LobbyConfig | undefined
  const initStageId   = pendingConfig?.stageId ?? STAGE_DEFS[0]!.id
  const initIdx       = Math.max(0, STAGE_DEFS.findIndex(s => s.id === initStageId))

  const [selectedIdx, setSelectedIdx] = useState(initIdx)

  function confirm() {
    if (!pendingConfig) return
    const stage  = STAGE_DEFS[selectedIdx]!
    const config: LobbyConfig = { ...pendingConfig, stageId: stage.id }
    bus.emit('game:lobby-confirm', config)
    navigate('vs', { lobbyConfig: config })
  }

  return (
    <ScreenOverlay>
      <VerticalPickerLayout
        title="SELECT STAGE"
        items={STAGE_ITEMS}
        selectedIdx={selectedIdx}
        onSelectIdx={setSelectedIdx}
        onConfirm={confirm}
        onBack={() => navigate('character-select', pendingConfig ? { lobbyConfig: pendingConfig } : {})}
        controlHints={CONTROL_HINTS}
        renderPreview={item => (
          <div
            style={{
              position:      'relative',
              fontFamily:    FONT,
              fontSize:      '22px',
              color:         GOLD_DIM,
              letterSpacing: '6px',
            }}
          >
            STAGE {String(item.id).padStart(2, '0')}
          </div>
        )}
      />
    </ScreenOverlay>
  )
}
