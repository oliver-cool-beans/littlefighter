/**
 * StageSelectPanel — right-column stage picker embedded in CharacterSelectScreen.
 *
 * Each stage card has:
 *  - A thumbnail background (public/bg/<id>/preview.jpg)  
 *  - Stage name in Bebas Neue, bottom-left
 *  - Active: 2px gold left border + brightness(1.15)
 *  - Inactive: brightness(0.55) + dark overlay
 *  - Angular clip-path cut on bottom-right corner
 *
 * When a stage is focused/hovered it emits `ui:stage-preview` to Phaser.
 */

import { bus }         from '../bus.js'
import { STAGE_DEFS }  from '../../data/stages.js'

const FONT = "'Bebas Neue', sans-serif"
const GOLD = '#FFD700'

interface Props {
  selectedId: number
  onSelect:   (id: number) => void
}

export function StageSelectPanel({ selectedId, onSelect }: Props) {
  function activate(id: number) {
    onSelect(id)
    bus.emit('ui:stage-preview', { stageId: id })
  }

  return (
    <div style={{
      height:        '100%',
      display:       'flex',
      flexDirection: 'column',
      padding:       '10px 8px',
      gap:           '8px',
      overflowY:     'auto',
      background:    '#0A0A0A',
    }}>
      <div style={{
        fontFamily:    FONT,
        fontSize:      '16px',
        color:         '#666',
        letterSpacing: '3px',
        paddingBottom: '6px',
        borderBottom:  '1px solid #222',
        flexShrink:    0,
      }}>
        STAGE SELECT
      </div>

      {STAGE_DEFS.map(stage => {
        const active = stage.id === selectedId
        return (
          <div
            key={stage.id}
            onClick={() => activate(stage.id)}
            onMouseEnter={() => bus.emit('ui:stage-preview', { stageId: stage.id })}
            style={{
              position:       'relative',
              height:         '72px',
              backgroundImage:  stage.previewImage ? `url(${stage.previewImage})` : undefined,
              backgroundColor:  stage.previewImage ? undefined : '#1A1A1A',
              backgroundSize:   'cover',
              backgroundPosition: 'center',
              clipPath:       'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
              cursor:         'pointer',
              borderLeft:     active ? `2px solid ${GOLD}` : '2px solid transparent',
              filter:         active ? 'brightness(1.15)' : 'brightness(0.55)',
              transition:     'filter 0.2s, border-color 0.2s',
              flexShrink:     0,
            }}
          >
            {/* Dark overlay for inactive */}
            {!active && (
              <div style={{
                position:   'absolute',
                inset:      0,
                background: 'rgba(0,0,0,0.35)',
              }} />
            )}

            {/* Stage name */}
            <div style={{
              position:      'absolute',
              bottom:        '8px',
              left:          '8px',
              fontFamily:    FONT,
              fontSize:      '18px',
              color:         '#FFF',
              letterSpacing: '2px',
              textShadow:    '0 1px 4px rgba(0,0,0,0.9)',
              zIndex:        1,
            }}>
              {stage.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}
