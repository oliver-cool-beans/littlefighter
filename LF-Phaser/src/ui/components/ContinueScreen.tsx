/**
 * ContinueScreen — shown when P1 is eliminated.
 *
 * Counts down 9 → 0. YES restarts the match; NO goes to main menu.
 */

import { useEffect, useRef, useState } from 'react'
import { useRouter }    from '../router.js'
import { bus }          from '../bus.js'
import type { LobbyConfig } from '../types.js'
import {
  FONT, FONT_MONO, GOLD, CRIMSON, ACID_GREEN,
  PANEL_BORDER, GREY_MID,
  glow,
} from '../theme.js'

export function ContinueScreen() {
  const navigate       = useRouter(s => s.navigate)
  const params         = useRouter(s => s.params)
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(9)
  const [focusIdx, setFocusIdx] = useState(0)
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Show when Phaser fires ui:game-over
  useEffect(() => {
    const handler = () => {
      setCount(9)
      setFocusIdx(0)
      setVisible(true)
    }
    bus.on('ui:game-over', handler)
    return () => bus.off('ui:game-over', handler)
  }, [])

  useEffect(() => {
    if (visible) containerRef.current?.focus()
  }, [visible])

  // Countdown tick
  useEffect(() => {
    if (!visible) return
    intervalRef.current = setInterval(() => {
      setCount(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!)
          handleNo()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [visible])

  function handleYes() {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setVisible(false)
    const lobbyConfig = params['lobbyConfig'] as LobbyConfig | undefined
    if (lobbyConfig) {
      bus.emit('game:lobby-confirm', lobbyConfig)
    }
    navigate('match')
  }

  function handleNo() {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setVisible(false)
    navigate('main-menu')
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
        e.preventDefault()
        setFocusIdx(i => 1 - i)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (focusIdx === 0) handleYes()
        else handleNo()
        break
      case 'Escape':
        e.preventDefault()
        handleNo()
        break
    }
  }

  if (!visible) return null

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        position:       'absolute',
        inset:          0,
        background:     'rgba(0,0,0,0.88)',
        pointerEvents:  'auto',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            '24px',
        outline:        'none',
      }}
    >
      <div style={{ fontFamily: FONT, fontSize: '48px', color: GOLD, textShadow: glow(GOLD, 16), letterSpacing: '6px' }}>
        CONTINUE?
      </div>

      <div style={{ fontFamily: FONT, fontSize: '96px', color: CRIMSON, textShadow: glow(CRIMSON, 20), lineHeight: 1, minWidth: '80px', textAlign: 'center' }}>
        {count}
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={handleYes} style={{
          fontFamily:    FONT,
          fontSize:      '28px',
          letterSpacing: '4px',
          padding:       '10px 32px',
          background:    focusIdx === 0 ? `${ACID_GREEN}33` : 'transparent',
          color:         ACID_GREEN,
          border:        `2px solid ${focusIdx === 0 ? ACID_GREEN : PANEL_BORDER}`,
          cursor:        'pointer',
          boxShadow:     focusIdx === 0 ? glow(ACID_GREEN, 16) : 'none',
          clipPath:      'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
        }}>
          {focusIdx === 0 && '▶ '}YES
        </button>
        <button onClick={handleNo} style={{
          fontFamily:    FONT,
          fontSize:      '28px',
          letterSpacing: '4px',
          padding:       '10px 32px',
          background:    focusIdx === 1 ? `${CRIMSON}33` : 'transparent',
          color:         CRIMSON,
          border:        `2px solid ${focusIdx === 1 ? CRIMSON : PANEL_BORDER}`,
          cursor:        'pointer',
          boxShadow:     focusIdx === 1 ? glow(CRIMSON, 16) : 'none',
          clipPath:      'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
        }}>
          {focusIdx === 1 && '▶ '}NO
        </button>
      </div>

      <div style={{ fontFamily: FONT_MONO, fontSize: '12px', color: GREY_MID, marginTop: '8px' }}>
        ← → SELECT · ENTER CONFIRM · ESC QUIT · auto-quit on 0
      </div>
    </div>
  )
}
