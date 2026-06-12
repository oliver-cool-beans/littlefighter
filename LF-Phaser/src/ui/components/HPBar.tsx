import { useEffect, useRef, useState } from 'react'
import type { PlayerHUDState } from '../../ui/types.js'
import {
  CRIMSON, ACID_GREEN, BLOOD,
  PANEL_BORDER, GREY_DIM,
} from '../theme.js'

interface HPBarProps {
  state:    PlayerHUDState
  reversed: boolean
}

const OUTER_W  = 210
const OUTER_H  = 22
const DIAGONAL = 14
const BORDER   = 3

function rhomboidClip(diagonal: number, mirrored: boolean): string {
  if (mirrored) {
    return `polygon(0% 0%, calc(100% - ${diagonal}px) 0%, 100% 100%, ${diagonal}px 100%)`
  }
  return `polygon(${diagonal}px 0%, 100% 0%, calc(100% - ${diagonal}px) 100%, 0% 100%)`
}

export function HPBar({ state, reversed }: HPBarProps) {
  const pct      = Math.max(0, state.maxHp > 0 ? state.hp / state.maxHp : 0)
  const boundPct = Math.max(0, state.maxHp > 0 ? (state.hpBound ?? state.maxHp) / state.maxHp : 0)
  const isLow = pct < 0.3

  const [tracerPct, setTracerPct] = useState(pct)
  const [shaking,   setShaking]   = useState(false)
  const [flashing,  setFlashing]  = useState(false)
  const prevHpRef                 = useRef(state.hp)

  useEffect(() => {
    const newPct = Math.max(0, state.maxHp > 0 ? state.hp / state.maxHp : 0)
    if (state.hp < prevHpRef.current) {
      setShaking(true)
      setFlashing(true)
      const timer = setTimeout(() => setTracerPct(newPct), 100)
      prevHpRef.current = state.hp
      return () => clearTimeout(timer)
    } else {
      prevHpRef.current = state.hp
      setTracerPct(newPct)
    }
  }, [state.hp, state.maxHp])

  const outerStyle: React.CSSProperties = {
    position:   'relative',
    width:      `${OUTER_W}px`,
    height:     `${OUTER_H}px`,
    background: PANEL_BORDER,
    clipPath:   rhomboidClip(DIAGONAL, reversed),
    animation:  shaking ? 'bar-shake 0.4s ease-out' : 'none',
  }

  const trackStyle: React.CSSProperties = {
    position:   'absolute',
    top:        `${BORDER}px`,
    bottom:     `${BORDER}px`,
    left:       `${BORDER + 1}px`,
    right:      `${BORDER + 1}px`,
    background: GREY_DIM,
    overflow:   'hidden',
  }

  const boundBarStyle: React.CSSProperties = {
    position:   'absolute',
    top:        0,
    bottom:     0,
    [reversed ? 'right' : 'left']: 0,
    width:      `${boundPct * 100}%`,
    background: '#707070',
  }

  const tracerBarStyle: React.CSSProperties = {
    position:   'absolute',
    top:        0,
    bottom:     0,
    [reversed ? 'right' : 'left']: 0,
    width:      `${tracerPct * 100}%`,
    background: `${BLOOD}99`,
    transition: 'width 700ms ease-out',
  }

  const activeBarStyle: React.CSSProperties = {
    position:   'absolute',
    top:        0,
    bottom:     0,
    [reversed ? 'right' : 'left']: 0,
    width:      `${pct * 100}%`,
    background: isLow ? CRIMSON : ACID_GREEN,
    transition: 'width 80ms linear',
  }

  return (
    <div style={outerStyle} onAnimationEnd={() => setShaking(false)}>
      <div style={trackStyle}>
        <div style={boundBarStyle} />
        <div style={tracerBarStyle} />
        <div style={activeBarStyle} />
        {flashing && (
          <div
            style={{
              position:  'absolute',
              inset:     0,
              background: '#FFFFFF',
              animation: 'hp-damage-flash 300ms ease-out forwards',
              pointerEvents: 'none',
            }}
            onAnimationEnd={() => setFlashing(false)}
          />
        )}
      </div>
    </div>
  )
}
