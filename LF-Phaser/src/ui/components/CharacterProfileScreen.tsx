/**
 * CharacterProfileScreen — shows a character's body sprite, bio, and moves list.
 * Navigated to from CharacterSelectScreen via the I key.
 */

import { useEffect, useRef } from 'react'
import { useRouter }    from '../router.js'
import { CHARACTERS }  from '../../data/characters.js'
import { ScreenOverlay } from '../primitives/ScreenOverlay.js'
import { SectionTitle }  from '../primitives/SectionTitle.js'
import { ControlBar }    from '../primitives/ControlBar.js'
import {
  FONT, FONT_MONO, GOLD, ELECTRIC_BLUE, ACID_GREEN,
  VOID, PANEL, PANEL_BORDER, GREY_LIGHT, GREY_MID, GREY_DIM,
} from '../theme.js'

export function CharacterProfileScreen() {
  const goBack       = useRouter(s => s.goBack)
  const params       = useRouter(s => s.params)
  const charId       = params['characterId'] as number | undefined
  const containerRef = useRef<HTMLDivElement>(null)

  const character = CHARACTERS.find(c => c.id === charId) ?? CHARACTERS[0]

  const BODY_SCALE = 4
  const FRAME_W    = character.bodyFrameW
  const FRAME_H    = character.bodyFrameH

  useEffect(() => { containerRef.current?.focus() }, [])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') { e.preventDefault(); goBack() }
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        position:      'absolute',
        inset:         0,
        background:    VOID,
        pointerEvents: 'auto',
        display:       'flex',
        flexDirection: 'column',
        outline:       'none',
        color:         GREY_LIGHT,
      }}>
      {/* Header */}
      <div style={{
        height:       '54px',
        background:   PANEL,
        borderBottom: `1px solid ${PANEL_BORDER}`,
        display:      'flex',
        alignItems:   'center',
        padding:      '0 24px',
        flexShrink:   0,
      }}>
        <button
          onClick={() => goBack()}
          style={{ fontFamily: FONT, fontSize: '18px', color: GREY_MID, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '2px' }}
        >
          ← BACK
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <SectionTitle size="22px">CHARACTER PROFILE</SectionTitle>
        </div>
        <div style={{ width: '80px' }} />
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', gap: '0', padding: '0' }}>
        {/* Left: portrait */}
        <div style={{
          width:          '320px',
          background:     PANEL,
          borderRight:    `1px solid ${PANEL_BORDER}`,
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          padding:        '32px 16px',
          flexShrink:     0,
        }}>
          <div style={{
            width:              `${FRAME_W * BODY_SCALE}px`,
            height:             `${FRAME_H * BODY_SCALE}px`,
            backgroundImage:    `url(${character.bodySprite})`,
            backgroundPosition: '0 0',
            backgroundRepeat:   'no-repeat',
            backgroundSize:     `${FRAME_W * BODY_SCALE * 10}px ${FRAME_H * BODY_SCALE * 7}px`,
            imageRendering:     'pixelated',
            marginBottom:       '20px',
          }} />
          <div style={{ fontFamily: FONT, fontSize: '36px', color: GREY_LIGHT, letterSpacing: '6px' }}>
            {character.name}
          </div>
          <div style={{ fontFamily: FONT_MONO, fontSize: '12px', color: GREY_DIM, marginTop: '4px' }}>
            ID #{character.id}
          </div>
        </div>

        {/* Right: bio + moves */}
        <div style={{ flex: 1, padding: '32px 36px', overflowY: 'auto' }}>
          {/* Bio */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontFamily: FONT, fontSize: '20px', color: GOLD, letterSpacing: '4px', marginBottom: '10px' }}>
              BIOGRAPHY
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: '13px', color: GREY_MID, lineHeight: 1.7 }}>
              {character.bio}
            </div>
          </div>

          {/* Moves */}
          <div>
            <div style={{ fontFamily: FONT, fontSize: '20px', color: GOLD, letterSpacing: '4px', marginBottom: '10px' }}>
              SPECIAL MOVES
            </div>
            {character.moves.length === 0 ? (
              <div style={{ fontFamily: FONT_MONO, fontSize: '12px', color: GREY_DIM }}>
                No special moves listed.
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Move', 'Input', 'Description', 'Energy'].map(h => (
                      <th key={h} style={{
                        fontFamily:    FONT,
                        fontSize:      '14px',
                        color:         GREY_DIM,
                        letterSpacing: '2px',
                        textAlign:     'left',
                        paddingBottom: '8px',
                        borderBottom:  `1px solid ${PANEL_BORDER}`,
                      }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {character.moves.map((move, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${PANEL_BORDER}` }}>
                      <td style={{ fontFamily: FONT, fontSize: '16px', color: GREY_LIGHT, letterSpacing: '1px', padding: '9px 0' }}>
                        {move.name}
                      </td>
                      <td style={{ fontFamily: FONT_MONO, fontSize: '12px', color: ELECTRIC_BLUE, padding: '9px 14px' }}>
                        {move.input}
                      </td>
                      <td style={{ fontFamily: FONT_MONO, fontSize: '11px', color: GREY_MID, padding: '9px 14px' }}>
                        {move.description}
                      </td>
                      <td style={{ fontFamily: FONT_MONO, fontSize: '12px', color: move.energy !== undefined ? ACID_GREEN : GREY_DIM, padding: '9px 0', whiteSpace: 'nowrap' }}>
                        {move.energy !== undefined ? `${move.energy} MP` : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
