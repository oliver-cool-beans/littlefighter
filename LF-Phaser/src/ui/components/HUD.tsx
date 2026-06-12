import { useEffect, useRef, useState } from 'react'
import { bus }                         from '../bus.js'
import type { PlayerHUDState }         from '../types.js'
import { HPBar }                       from './HPBar.js'
import { MPBar }                       from './MPBar.js'
import { EscapeMenu }                  from './EscapeMenu.js'
import {
  FONT, FONT_GAME, FONT_LABEL, ELECTRIC_BLUE, CRIMSON, ACID_GREEN,
  PANEL, PANEL_BORDER, GREY_LIGHT, GREY_MID, GREY_DIM,
  glassSurface, glow,
} from '../theme.js'
import { MAX_PAUSES } from '../../network/types.js'

const EMPTY_STATE: PlayerHUDState = { name: '', hp: 500, maxHp: 500, mp: 500, maxMp: 500 }
const PORTRAIT_SIZE = 60

interface PlayerPanelProps {
  state:    PlayerHUDState
  reversed: boolean
  label:    string
}

function PlayerPanel({ state, reversed, label }: PlayerPanelProps) {
  const teamColor = reversed ? CRIMSON : ELECTRIC_BLUE

  return (
    <div style={{
      display:       'flex',
      flexDirection: reversed ? 'row-reverse' : 'row',
      alignItems:    'flex-end',
      gap:           '6px',
    }}>
      <div style={{
        width:          `${PORTRAIT_SIZE}px`,
        height:         `${PORTRAIT_SIZE}px`,
        border:         `3px solid ${teamColor}`,
        boxShadow:      glow(teamColor, 12),
        background:     GREY_DIM,
        flexShrink:     0,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        overflow:       'hidden',
        clipPath:       reversed
          ? 'polygon(0% 0%, calc(100% - 10px) 0%, 100% 100%, 10px 100%)'
          : 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
      }}>
        {state.headSprite && (
          <img src={state.headSprite} alt="" style={{ width: '100%', height: '100%', imageRendering: 'pixelated', objectFit: 'cover' }} draggable={false} />
        )}
      </div>
      <div style={{
        display:       'flex',
        flexDirection: 'column',
        alignItems:    reversed ? 'flex-end' : 'flex-start',
        gap:           '3px',
      }}>
        <div style={{
          background:    PANEL,
          border:        `1px solid ${PANEL_BORDER}`,
          borderBottom:  `2px solid ${teamColor}`,
          paddingInline: '6px',
          paddingBlock:  '1px',
          marginBottom:  '3px',
        }}>
          <div style={{ fontFamily: FONT, fontSize: '20px', letterSpacing: '2px', color: GREY_LIGHT, lineHeight: 1 }}>
            {state.name}
          </div>
          <div style={{ fontFamily: FONT, fontSize: '11px', letterSpacing: '1px', color: teamColor, lineHeight: 1 }}>
            {label}
          </div>
        </div>
        <HPBar state={state} reversed={reversed} />
        <MPBar state={state} reversed={reversed} />
      </div>
    </div>
  )
}

// ── In-game chat input ───────────────────────────────────────────────────────

function ChatInput({ onClose }: { onClose: () => void }) {
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  function submit() {
    const t = text.trim()
    if (t) bus.emit('net:send-chat', { text: t })
    onClose()
  }

  return (
    <div style={{
      position:   'absolute',
      bottom:     '52px',
      left:       '50%',
      transform:  'translateX(-50%)',
      display:    'flex',
      gap:        '0',
      width:      '340px',
      background: glassSurface(0.85),
      border:     `1px solid ${ELECTRIC_BLUE}44`,
      boxShadow:  glow(ELECTRIC_BLUE, 6),
    }}>
      <input
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value.slice(0, 80))}
        onKeyDown={e => {
          if (e.key === 'Enter') { e.preventDefault(); submit() }
          if (e.key === 'Escape') { e.preventDefault(); onClose() }
          e.stopPropagation()
        }}
        placeholder="Say something…"
        maxLength={80}
        style={{
          flex:       1,
          background: 'transparent',
          border:     'none',
          outline:    'none',
          padding:    '6px 10px',
          fontFamily: FONT_LABEL,
          fontSize:   '13px',
          color:      GREY_LIGHT,
        }}
      />
      <button
        onClick={submit}
        style={{
          background:  `${ELECTRIC_BLUE}22`,
          border:      'none',
          borderLeft:  `1px solid ${ELECTRIC_BLUE}33`,
          padding:     '0 10px',
          fontFamily:  FONT_LABEL,
          fontSize:    '11px',
          letterSpacing: '2px',
          color:       ELECTRIC_BLUE,
          cursor:      'pointer',
        }}
      >
        SEND
      </button>
    </div>
  )
}

// ── Pause overlay ────────────────────────────────────────────────────────────

function PauseOverlay({
  pausedBy, pausesLeft, isNetworkMatch, onResume,
}: {
  pausedBy:      string
  pausesLeft:    number
  isNetworkMatch: boolean
  onResume:      () => void
}) {
  return (
    <div style={{
      position:       'absolute',
      inset:          0,
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      gap:            '12px',
      background:     'rgba(0,0,0,0.55)',
      pointerEvents:  'auto',
    }}>
      <div style={{
        fontFamily:  FONT,
        fontSize:    '56px',
        color:       GOLD,
        letterSpacing: '12px',
        textShadow:  glow(GOLD, 18),
      }}>
        PAUSED
      </div>
      <div style={{
        fontFamily:  FONT_LABEL,
        fontSize:    '14px',
        color:       GREY_LIGHT,
        letterSpacing: '3px',
      }}>
        Paused by {pausedBy} · {pausesLeft}/{MAX_PAUSES} pauses remaining
      </div>
      <button
        onClick={onResume}
        style={{
          marginTop:     '8px',
          fontFamily:    FONT,
          fontSize:      '20px',
          letterSpacing: '4px',
          padding:       '8px 28px',
          background:    `${ACID_GREEN}22`,
          border:        `1px solid ${ACID_GREEN}80`,
          color:         ACID_GREEN,
          cursor:        'pointer',
          transition:    'background 100ms',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = `${ACID_GREEN}38`)}
        onMouseLeave={e => (e.currentTarget.style.background = `${ACID_GREEN}22`)}
      >
        RESUME
      </button>
      {!isNetworkMatch && (
        <div style={{ fontFamily: FONT_LABEL, fontSize: '11px', color: GREY_MID, letterSpacing: '2px' }}>
          Press P to resume
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Pause indicator dots (top-centre when not paused)
// ---------------------------------------------------------------------------
function PauseDots({ localPausesUsed, remotePausesUsed }: { localPausesUsed: number; remotePausesUsed: number }) {
  function dots(used: number, color: string) {
    return Array.from({ length: MAX_PAUSES }, (_, i) => (
      <div key={i} style={{
        width: '6px', height: '6px', borderRadius: '50%',
        background: i < (MAX_PAUSES - used) ? color : GREY_DIM,
        border: `1px solid ${i < (MAX_PAUSES - used) ? color : PANEL_BORDER}`,
      }} />
    ))
  }
  return (
    <div style={{
      position:       'absolute',
      top:            '8px',
      left:           '50%',
      transform:      'translateX(-50%)',
      display:        'flex',
      alignItems:     'center',
      gap:            '8px',
    }}>
      <div style={{ display: 'flex', gap: '3px', flexDirection: 'row-reverse' }}>
        {dots(localPausesUsed, ELECTRIC_BLUE)}
      </div>
      <div style={{ fontFamily: FONT_LABEL, fontSize: '8px', color: GREY_DIM, letterSpacing: '2px' }}>
        PAUSES
      </div>
      <div style={{ display: 'flex', gap: '3px' }}>
        {dots(remotePausesUsed, CRIMSON)}
      </div>
    </div>
  )
}

// ── Colour token for GOLD (not exported by theme but used here) ───────────
const GOLD = '#FFE040'

// ── Combo counter ─────────────────────────────────────────────────────────────

interface ComboState {
  attackerTeam: number
  count:        number
  key:          number   // incremented on each new hit to re-trigger the animation
}

function ComboCounter() {
  const [combo,   setCombo]   = useState<ComboState | null>(null)
  const [fading,  setFading]  = useState(false)
  const keyRef = useRef(0)

  useEffect(() => {
    const handler = (event: { attackerTeam: number; count: number } | null) => {
      if (!event) {
        setFading(true)
      } else {
        keyRef.current++
        setFading(false)
        setCombo({ attackerTeam: event.attackerTeam, count: event.count, key: keyRef.current })
      }
    }
    bus.on('ui:combo-update', handler)
    return () => bus.off('ui:combo-update', handler)
  }, [])

  if (!combo || combo.count < 2) return null

  const teamColor = combo.attackerTeam === 1 ? ELECTRIC_BLUE : CRIMSON
  const side      = combo.attackerTeam === 1 ? { left: '14px' } : { right: '14px' }

  return (
    <div style={{
      position:       'absolute',
      bottom:         '72px',
      ...side,
      display:        'flex',
      flexDirection:  'column',
      alignItems:     combo.attackerTeam === 1 ? 'flex-start' : 'flex-end',
      pointerEvents:  'none',
      animation:      fading ? 'combo-fade 300ms ease-out forwards' : 'none',
    }}
    onAnimationEnd={() => { if (fading) setCombo(null) }}
    >
      <div
        key={combo.key}
        style={{
          fontFamily:    FONT_GAME,
          fontSize:      '72px',
          lineHeight:    1,
          color:         teamColor,
          textShadow:    `0 0 16px ${teamColor}, 0 0 40px ${teamColor}80, 2px 2px 0 #000`,
          animation:     'combo-pop 280ms cubic-bezier(0.22,1,0.36,1) both',
        }}
      >
        {combo.count}
      </div>
      <div style={{
        fontFamily:    FONT_GAME,
        fontSize:      '22px',
        letterSpacing: '6px',
        color:         teamColor,
        textShadow:    `0 0 8px ${teamColor}80`,
        marginTop:     '-6px',
      }}>
        HIT!
      </div>
    </div>
  )
}

// ── Match timer ──────────────────────────────────────────────────────────────

function TimerDisplay({ seconds }: { seconds: number }) {
  const isUrgent = seconds <= 10
  return (
    <div style={{
      fontFamily:    FONT,
      fontSize:      '38px',
      lineHeight:    1,
      letterSpacing: '4px',
      color:         isUrgent ? CRIMSON : GOLD,
      textShadow:    isUrgent
        ? `0 0 10px ${CRIMSON}, 0 0 24px ${CRIMSON}80, 2px 2px 0 #000`
        : `0 0 8px ${GOLD}80, 2px 2px 0 #000`,
      minWidth:      '3ch',
      textAlign:     'center',
      animation:     isUrgent ? 'vignette-danger 0.7s ease-in-out infinite' : 'none',
    }}>
      {seconds}
    </div>
  )
}

// ── Main HUD ─────────────────────────────────────────────────────────────────

export function HUD() {
  const [p1,           setP1]           = useState<PlayerHUDState>(EMPTY_STATE)
  const [p2,           setP2]           = useState<PlayerHUDState>(EMPTY_STATE)
  const [timeLeft,     setTimeLeft]     = useState<number>(99)
  const [escOpen,       setEscOpen]       = useState(false)
  const [chatOpen,      setChatOpen]      = useState(false)
  const [isPaused,      setIsPaused]      = useState(false)
  const [resultVisible, setResultVisible] = useState(false)
  const [pausedBy,     setPausedBy]     = useState('')
  const [pausesLeft,   setPausesLeft]   = useState(MAX_PAUSES)
  const [isNetMatch,   setIsNetMatch]   = useState(false)
  const [p1PausesUsed, setP1PausesUsed] = useState(0)
  const [p2PausesUsed, setP2PausesUsed] = useState(0)
  const escOpenRef = useRef(false)

  // HUD updates from Phaser
  useEffect(() => {
    const handler = ({ p1: next1, p2: next2, timeLeft: tl }: { p1: PlayerHUDState; p2: PlayerHUDState; timeLeft?: number }) => {
      setP1(next1); setP2(next2)
      if (tl !== undefined) setTimeLeft(tl)
    }
    bus.on('ui:hud-update', handler)
    return () => bus.off('ui:hud-update', handler)
  }, [])

  // Detect network match from net:match-start
  useEffect(() => {
    const onStart = () => setIsNetMatch(true)
    const onQuit  = () => { setIsNetMatch(false); setIsPaused(false); setP1PausesUsed(0); setP2PausesUsed(0) }
    bus.on('net:match-start', onStart)
    bus.on('game:quit', onQuit)
    return () => { bus.off('net:match-start', onStart); bus.off('game:quit', onQuit) }
  }, [])

  // Track result screen visibility so ESC doesn't open the escape menu behind it
  useEffect(() => {
    const onMatchEnd = () => setResultVisible(true)
    const onQuit     = () => setResultVisible(false)
    bus.on('ui:match-end', onMatchEnd)
    bus.on('game:quit',    onQuit)
    return () => { bus.off('ui:match-end', onMatchEnd); bus.off('game:quit', onQuit) }
  }, [])

  // Network pause events
  useEffect(() => {
    const onPause = ({ playerIndex, pausesRemaining }: { playerIndex: number; pausesRemaining: number }) => {
      setIsPaused(true)
      setPausedBy(playerIndex === 0 ? (p1.name || 'P1') : (p2.name || 'P2'))
      setPausesLeft(pausesRemaining)
      if (playerIndex === 0) setP1PausesUsed(MAX_PAUSES - pausesRemaining)
      else setP2PausesUsed(MAX_PAUSES - pausesRemaining)
    }
    const onResume = () => setIsPaused(false)
    bus.on('net:game-paused',  onPause)
    bus.on('net:game-resumed', onResume)
    return () => {
      bus.off('net:game-paused',  onPause)
      bus.off('net:game-resumed', onResume)
    }
  }, [p1.name, p2.name])

  // ESC menu key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (chatOpen) return
      if (resultVisible) return  // ResultScreen has its own ESC handler
      if (e.key !== 'Escape') return
      e.preventDefault()
      if (escOpenRef.current) {
        escOpenRef.current = false
        setEscOpen(false)
      } else {
        escOpenRef.current = true
        setEscOpen(true)
      }
    }
    globalThis.addEventListener('keydown', onKey)
    return () => globalThis.removeEventListener('keydown', onKey)
  }, [chatOpen, resultVisible])

  // T key opens chat during a network match
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isNetMatch) return
      if (chatOpen) return
      if (escOpen) return
      if (e.key === 't' || e.key === 'T') {
        e.preventDefault()
        setChatOpen(true)
      }
      // P or F5 to pause
      if ((e.key === 'p' || e.key === 'P') && !isPaused) {
        e.preventDefault()
        bus.emit('net:pause-request', undefined)
      }
    }
    globalThis.addEventListener('keydown', onKey)
    return () => globalThis.removeEventListener('keydown', onKey)
  }, [isNetMatch, chatOpen, escOpen, isPaused])

  function handleResume() {
    bus.emit('net:resume-request', undefined)
  }

  const p2Label = isNetMatch ? 'P2' : 'CPU'

  const p1Low = p1.maxHp > 0 && p1.hp / p1.maxHp < 0.25
  const p2Low = p2.maxHp > 0 && p2.hp / p2.maxHp < 0.25
  const dangerActive = p1Low || p2Low

  const vignetteColor = CRIMSON

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>

      {/* Low-health danger vignette */}
      {dangerActive && (
        <div style={{
          position:   'absolute',
          inset:      0,
          background: `radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, ${vignetteColor}55 100%)`,
          animation:  'vignette-danger 1.1s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex:     1,
        }} />
      )}

      {/* Player panels */}
      <div style={{ position: 'absolute', top: '8px', left: '10px', zIndex: 2 }}>
        <PlayerPanel state={p1} reversed={false} label="P1" />
      </div>
      <div style={{ position: 'absolute', top: '8px', right: '10px', zIndex: 2 }}>
        <PlayerPanel state={p2} reversed={true} label={p2Label} />
      </div>

      {/* Combo counter */}
      <ComboCounter />

      {/* Center top: timer + optional pause dots */}
      <div style={{
        position:       'absolute',
        top:            '8px',
        left:           '50%',
        transform:      'translateX(-50%)',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:            '4px',
        zIndex:         2,
        pointerEvents:  'none',
      }}>
        <TimerDisplay seconds={timeLeft} />
        {isNetMatch && !isPaused && (
          <PauseDots localPausesUsed={p1PausesUsed} remotePausesUsed={p2PausesUsed} />
        )}
      </div>

      {/* Chat hint (network match, not paused, not chat-open) */}
      {isNetMatch && !chatOpen && !isPaused && (
        <div style={{
          position:    'absolute',
          bottom:      '10px',
          left:        '50%',
          transform:   'translateX(-50%)',
          fontFamily:  FONT_LABEL,
          fontSize:    '9px',
          letterSpacing: '3px',
          color:       GREY_DIM,
          pointerEvents: 'none',
          textTransform: 'uppercase',
        }}>
          T = Chat &nbsp;·&nbsp; P = Pause
        </div>
      )}

      {/* In-game chat input */}
      {chatOpen && (
        <div style={{ pointerEvents: 'auto' }}>
          <ChatInput onClose={() => setChatOpen(false)} />
        </div>
      )}

      {/* Pause overlay (network) */}
      {isPaused && isNetMatch && (
        <div style={{ pointerEvents: 'auto' }}>
          <PauseOverlay
            pausedBy={pausedBy}
            pausesLeft={pausesLeft}
            isNetworkMatch={isNetMatch}
            onResume={handleResume}
          />
        </div>
      )}

      {/* ESC menu */}
      <EscapeMenu isOpen={escOpen} onClose={() => { escOpenRef.current = false; setEscOpen(false) }} />
    </div>
  )
}
