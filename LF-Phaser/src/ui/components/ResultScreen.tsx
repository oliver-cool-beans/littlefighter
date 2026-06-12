import { useEffect, useRef, useState } from 'react'
import { bus }          from '../bus.js'
import { useRouter }    from '../router.js'
import { SoundEngine }  from '../../sound/SoundEngine.js'
import type { LobbyConfig, MatchStats } from '../types.js'
import {
  FONT, FONT_LABEL, GOLD, BLOOD, BLOOD_BRIGHT, CRIMSON, GOTHIC_PURPLE_LIGHT,
  ELECTRIC_BLUE, GREY_MID, BONE, glow,
} from '../theme.js'

const SHOW_DELAY_MS = 3500

const RESULT_ACTIONS = ['rematch', 'change', 'quit'] as const
type ResultAction = typeof RESULT_ACTIONS[number]

const ACTION_LABELS: Record<ResultAction, string> = {
  rematch: 'REMATCH',
  change:  'CHANGE CHARS',
  quit:    'QUIT',
}

const ACTION_COLORS: Record<ResultAction, string> = {
  rematch: GOTHIC_PURPLE_LIGHT,
  change:  BLOOD_BRIGHT,
  quit:    CRIMSON,
}

export function ResultScreen() {
  const navigate  = useRouter(s => s.navigate)
  const params    = useRouter(s => s.params)
  const [winner,   setWinner]   = useState<'p1' | 'p2' | null>(null)
  const [p1Stats,  setP1Stats]  = useState<MatchStats | null>(null)
  const [p2Stats,  setP2Stats]  = useState<MatchStats | null>(null)
  const [focusIdx, setFocusIdx] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = ({ winner: w, p1Stats: s1, p2Stats: s2 }: { winner: 'p1' | 'p2'; p1Stats?: MatchStats; p2Stats?: MatchStats }) => {
      const timer = setTimeout(() => {
        SoundEngine.play('m_end')
        setWinner(w)
        setP1Stats(s1 ?? null)
        setP2Stats(s2 ?? null)
        setFocusIdx(0)
        setTimeout(() => containerRef.current?.focus(), 50)
      }, SHOW_DELAY_MS)
      return () => clearTimeout(timer)
    }
    bus.on('ui:match-end', handler)
    return () => bus.off('ui:match-end', handler)
  }, [])

  if (winner === null) return null

  const isVictory   = winner === 'p1'
  const winnerLabel = winner === 'p1' ? 'PLAYER 1' : 'CPU'
  const lobbyConfig = params['lobbyConfig'] as LobbyConfig | undefined

  const accentColor = isVictory ? GOLD : BLOOD

  function rematch() {
    setWinner(null)
    if (lobbyConfig) {
      bus.emit('game:lobby-confirm', lobbyConfig)
      navigate('vs', params)
    } else {
      bus.emit('game:rematch', undefined)
      navigate('match')
    }
  }

  function changeCharacters() {
    setWinner(null)
    navigate('character-select')
  }

  function quit() {
    setWinner(null)
    bus.emit('game:quit', undefined)
    navigate('main-menu')
  }

  const actionHandlers = { rematch, change: changeCharacters, quit }

  function confirmFocused() {
    const action: ResultAction = RESULT_ACTIONS[focusIdx]!
    actionHandlers[action]()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        setFocusIdx(i => Math.max(0, i - 1))
        break
      case 'ArrowRight':
        e.preventDefault()
        setFocusIdx(i => Math.min(RESULT_ACTIONS.length - 1, i + 1))
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        confirmFocused()
        break
      case 'Escape':
        e.preventDefault()
        quit()
        break
    }
  }

  return (
    <div
      style={{
        position:       'absolute',
        inset:          0,
        background:     'rgba(4, 5, 12, 0.92)',
        pointerEvents:  'auto',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            '0px',
        outline:        'none',
        animation:      'screen-enter 250ms ease both',
      }}
      tabIndex={0}
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      {/* Large ghost text behind panel */}
      <div aria-hidden style={{
        position:      'absolute',
        fontFamily:    FONT,
        fontSize:      '220px',
        color:         accentColor,
        opacity:       0.04,
        letterSpacing: '12px',
        userSelect:    'none',
        pointerEvents: 'none',
        lineHeight:    1,
        top:           '50%',
        left:          '50%',
        transform:     'translate(-50%, -55%)',
        whiteSpace:    'nowrap',
      }}>
        {isVictory ? 'WIN' : 'KO'}
      </div>

      <div style={{
        display:             'flex',
        flexDirection:       'column',
        alignItems:          'center',
        gap:                 '24px',
        padding:             '40px 56px',
        background:          'rgba(10, 4, 20, 0.94)',
        backdropFilter:      'blur(16px)',
        WebkitBackdropFilter:'blur(16px)',
        border:              `1px solid ${accentColor}40`,
        boxShadow:           `0 0 40px ${accentColor}20, 0 12px 48px rgba(0,0,0,0.7)`,
        clipPath:            'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
        position:            'relative',
      }}>
        {/* K.O. text */}
        <div style={{
          fontFamily:          FONT,
          fontSize:            '96px',
          background:          `linear-gradient(135deg, ${BONE} 0%, ${accentColor} 60%)`,
          WebkitBackgroundClip:'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip:      'text',
          textShadow:          'none',
          letterSpacing:       '10px',
          lineHeight:          1,
        }}>
          K.O.!
        </div>

        {/* Winner label */}
        <div style={{
          fontFamily:    FONT,
          fontSize:      '32px',
          color:         accentColor,
          letterSpacing: '8px',
          textShadow:    glow(accentColor, 12),
        }}>
          {winnerLabel} WINS
        </div>

        {/* Accent divider */}
        <div style={{
          width:      '80px',
          height:     '2px',
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          opacity:    0.7,
        }} />

        {/* Match stats table */}
        {(p1Stats || p2Stats) && (
          <div style={{
            display:       'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap:           '4px 16px',
            alignItems:    'center',
            width:         '100%',
            maxWidth:      '380px',
          }}>
            {/* Header row */}
            <div style={{ fontFamily: FONT, fontSize: '13px', letterSpacing: '2px', color: ELECTRIC_BLUE, textAlign: 'right' }}>P1</div>
            <div style={{ fontFamily: FONT_LABEL, fontSize: '9px', letterSpacing: '3px', color: GREY_MID, textAlign: 'center', textTransform: 'uppercase' }}> </div>
            <div style={{ fontFamily: FONT, fontSize: '13px', letterSpacing: '2px', color: CRIMSON, textAlign: 'left' }}>CPU</div>

            {([
              ['DMG DEALT',  p1Stats?.damageDealt ?? 0, p2Stats?.damageDealt ?? 0],
              ['HITS',       p1Stats?.hitsLanded  ?? 0, p2Stats?.hitsLanded  ?? 0],
              ['BIGGEST HIT',p1Stats?.biggestHit  ?? 0, p2Stats?.biggestHit  ?? 0],
              ['MAX COMBO',  p1Stats?.maxCombo    ?? 0, p2Stats?.maxCombo    ?? 0],
            ] as [string, number, number][]).map(([label, v1, v2]) => {
              const p1Best = v1 >= v2
              const p2Best = v2 >= v1
              return [
                <div key={`${label}-p1`} style={{ fontFamily: FONT, fontSize: '17px', color: p1Best ? BLOOD_BRIGHT : GREY_MID, textAlign: 'right' }}>{v1}</div>,
                <div key={`${label}-lbl`} style={{ fontFamily: FONT_LABEL, fontSize: '8px', letterSpacing: '2px', color: GREY_MID, textAlign: 'center', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{label}</div>,
                <div key={`${label}-p2`} style={{ fontFamily: FONT, fontSize: '17px', color: p2Best ? BLOOD_BRIGHT : GREY_MID, textAlign: 'left' }}>{v2}</div>,
              ]
            })}
          </div>
        )}

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
          {RESULT_ACTIONS.map((action, idx) => {
            const color   = ACTION_COLORS[action]
            const focused = focusIdx === idx
            return (
              <button
                key={action}
                onClick={actionHandlers[action]}
                style={{
                  fontFamily:    FONT,
                  fontSize:      '20px',
                  letterSpacing: '3px',
                  padding:       '12px 24px',
                  background:    focused ? `${color}28` : 'rgba(255,255,255,0.04)',
                  color:         focused ? color : GREY_MID,
                  border:        `1px solid ${focused ? color : 'rgba(255,255,255,0.1)'}`,
                  boxShadow:     focused ? glow(color, 16) : 'none',
                  cursor:        'pointer',
                  clipPath:      'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                  transition:    'all 80ms ease',
                  transform:     focused ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                {focused && '▶ '}{ACTION_LABELS[action]}
              </button>
            )
          })}
        </div>

        {/* Control hint */}
        <div style={{
          fontFamily:    FONT_LABEL,
          fontSize:      '12px',
          color:         GREY_MID,
          letterSpacing: '2px',
          fontWeight:    600,
          opacity:       0.7,
        }}>
          ← → SELECT  ·  ENTER CONFIRM
        </div>
      </div>
    </div>
  )
}
