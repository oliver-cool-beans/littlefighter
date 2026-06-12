/**
 * VSScreen — pre-match cinematic shown after lobby confirmation.
 *
 * Both character portraits slide in from their edges in 200ms.
 * A gradient diagonal divider separates the two sides.
 * Auto-advances after 3s; any keypress skips.
 */

import { useEffect, useRef, useState } from 'react'
import { useRouter }   from '../router.js'
import { CHARACTERS }  from '../../data/characters.js'
import { STAGE_DEFS }  from '../../data/stages.js'
import type { LobbyConfig } from '../types.js'
import {
  FONT, FONT_LABEL, BLOOD, BLOOD_DIM, CRIMSON, ELECTRIC_BLUE,
  GREY_LIGHT, GREY_MID, DEEP_VOID, glow,
} from '../theme.js'

export function VSScreen() {
  const navigate = useRouter(s => s.navigate)
  const params   = useRouter(s => s.params)
  const [mounted, setMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const config    = params['lobbyConfig'] as LobbyConfig | undefined
  const blueSlot  = config?.teams[0]?.slots[0]
  const redSlots  = config?.teams[1]?.slots ?? []
  const p1Char    = CHARACTERS.find(c => c.id === (blueSlot?.characterId ?? 11))
  const cpuChars  = redSlots.map(s => CHARACTERS.find(c => c.id === s.characterId)).filter(Boolean) as typeof CHARACTERS
  const cpuChar   = cpuChars[0] ?? CHARACTERS.find(c => c.id === 11)
  const stage     = STAGE_DEFS.find(s => s.id === (config?.stageId ?? 1))
  const isOnline  = config?.networkMode ?? false
  const p2Label   = isOnline ? 'PLAYER 2' : 'CPU'

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
    timerRef.current = setTimeout(() => advance(), 3000)
    const handleKey = () => advance()
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  function advance() {
    if (timerRef.current) clearTimeout(timerRef.current)
    navigate('match', params)
  }

  const BODY_SCALE = 3
  const FRAME_W    = p1Char?.bodyFrameW ?? 80
  const FRAME_H    = p1Char?.bodyFrameH ?? 80

  return (
    <div
      onClick={advance}
      style={{
        position:       'absolute',
        inset:          0,
        background:     DEEP_VOID,
        pointerEvents:  'auto',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        overflow:       'hidden',
        userSelect:     'none',
      }}
    >
      {/* P1 panel */}
      <div style={{
        flex:           1,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        transform:      mounted ? 'translateX(0)' : 'translateX(-120%)',
        transition:     'transform 200ms cubic-bezier(0.2, 0, 0.1, 1)',
        padding:        '20px',
        background:     `radial-gradient(ellipse 80% 70% at 40% 50%, ${ELECTRIC_BLUE}38 0%, transparent 65%)`,
        position:       'relative',
        alignSelf:      'stretch',
      }}>
        {p1Char && (
          <div style={{
            width:              `${FRAME_W * BODY_SCALE}px`,
            height:             `${FRAME_H * BODY_SCALE}px`,
            backgroundImage:    `url(${p1Char.bodySprite})`,
            backgroundPosition: '0 0',
            backgroundRepeat:   'no-repeat',
            backgroundSize:     `${FRAME_W * BODY_SCALE * 10}px ${FRAME_H * BODY_SCALE * 7}px`,
            imageRendering:     'pixelated',
            marginBottom:       '20px',
          }} />
        )}
        <div style={{
          fontFamily:    FONT,
          fontSize:      '44px',
          color:         ELECTRIC_BLUE,
          letterSpacing: '4px',
          textShadow:    glow(ELECTRIC_BLUE, 18),
        }}>
          {p1Char?.name.toUpperCase() ?? '???'}
        </div>
        <div style={{
          fontFamily:    FONT_LABEL,
          fontWeight:    700,
          fontSize:      '13px',
          color:         GREY_LIGHT,
          letterSpacing: '6px',
          marginTop:     '6px',
          textTransform: 'uppercase',
        }}>
          Player 1
        </div>
      </div>

      {/* Gradient diagonal divider */}
      <div aria-hidden style={{
        position:      'absolute',
        top:           0,
        bottom:        0,
        left:          '50%',
        width:         '4px',
        transform:     'translateX(-50%) skewX(-6deg)',
        background:    `linear-gradient(to bottom, ${BLOOD_DIM}, ${BLOOD})`,
        boxShadow:     `0 0 22px ${BLOOD}80, 0 0 44px ${BLOOD_DIM}60`,
        zIndex:        10,
        pointerEvents: 'none',
      }} />

      {/* VS + stage centre */}
      <div style={{
        position:       'absolute',
        left:           '50%',
        top:            '50%',
        transform:      'translate(-50%, -50%)',
        zIndex:         20,
        textAlign:      'center',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:            '10px',
        pointerEvents:  'none',
      }}>
        <div style={{
          fontFamily:    FONT,
          fontSize:      '120px',
          color:         BLOOD,
          textShadow:    `${glow(BLOOD, 32)}, 0 0 20px ${BLOOD_DIM}, 0 0 60px rgba(100,0,0,0.6)`,
          lineHeight:    1,
          letterSpacing: '8px',
          transform:     mounted ? 'scale(1)' : 'scale(0)',
          transition:    'transform 120ms cubic-bezier(0.2, 0, 0.1, 1)',
        }}>
          VS
        </div>
        {stage && (
          <div style={{
            fontFamily:    FONT,
            fontSize:      '16px',
            color:         BLOOD,
            letterSpacing: '12px',
            opacity:       mounted ? 1 : 0,
            transform:     mounted ? 'translateY(0)' : 'translateY(6px)',
            transition:    'opacity 200ms 80ms ease, transform 200ms 80ms ease',
          }}>
            {stage.name.toUpperCase()}
          </div>
        )}
        <div style={{
          marginTop:     '14px',
          fontFamily:    FONT_LABEL,
          fontSize:      '13px',
          color:         GREY_MID,
          letterSpacing: '3px',
          fontWeight:    600,
        }}>
          ANY KEY TO SKIP
        </div>
      </div>

      {/* CPU panel */}
      <div style={{
        flex:           1,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        transform:      mounted ? 'translateX(0)' : 'translateX(120%)',
        transition:     'transform 200ms cubic-bezier(0.2, 0, 0.1, 1)',
        padding:        '20px',
        background:     `radial-gradient(ellipse 80% 70% at 60% 50%, ${CRIMSON}38 0%, transparent 65%)`,
        position:       'relative',
        alignSelf:      'stretch',
      }}>
        {cpuChar && (
          <div style={{
            width:              `${FRAME_W * BODY_SCALE}px`,
            height:             `${FRAME_H * BODY_SCALE}px`,
            backgroundImage:    `url(${cpuChar.bodySprite})`,
            backgroundPosition: '0 0',
            backgroundRepeat:   'no-repeat',
            backgroundSize:     `${FRAME_W * BODY_SCALE * 10}px ${FRAME_H * BODY_SCALE * 7}px`,
            imageRendering:     'pixelated',
            transform:          'scaleX(-1)',
            marginBottom:       '20px',
          }} />
        )}
        <div style={{
          fontFamily:    FONT,
          fontSize:      '44px',
          color:         CRIMSON,
          letterSpacing: '4px',
          textShadow:    glow(CRIMSON, 18),
        }}>
          {cpuChar?.name.toUpperCase() ?? '???'}
        </div>
        <div style={{
          fontFamily:    FONT_LABEL,
          fontWeight:    700,
          fontSize:      '13px',
          color:         GREY_LIGHT,
          letterSpacing: '6px',
          marginTop:     '6px',
          textTransform: 'uppercase',
        }}>
          {p2Label}
        </div>
        {/* Additional CPU opponents (2nd and 3rd) */}
        {cpuChars.length > 1 && (
          <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
            {cpuChars.slice(1).map(c => (
              <div key={c.id} style={{ textAlign: 'center' }}>
                <img
                  src={c.headSprite}
                  alt={c.name}
                  style={{
                    width: '44px', height: '44px',
                    imageRendering: 'pixelated',
                    border: `2px solid ${CRIMSON}`,
                    display: 'block',
                  }}
                />
                <div style={{ fontFamily: FONT_LABEL, fontSize: '9px', color: GREY_MID, letterSpacing: '1px', marginTop: '3px' }}>
                  {c.name.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
