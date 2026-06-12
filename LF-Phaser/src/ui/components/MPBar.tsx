import { useEffect, useRef, useState } from 'react'
import type { PlayerHUDState } from '../../ui/types.js'
import {
  ELECTRIC_BLUE, PANEL_BORDER, GREY_DIM,
} from '../theme.js'

interface MPBarProps {
  state:    PlayerHUDState
  reversed: boolean
}

const OUTER_W  = 210
const OUTER_H  = 14
const DIAGONAL = 9
const BORDER   = 3

function rhomboidClip(diagonal: number, mirrored: boolean): string {
  if (mirrored) {
    return `polygon(0% 0%, calc(100% - ${diagonal}px) 0%, 100% 100%, ${diagonal}px 100%)`
  }
  return `polygon(${diagonal}px 0%, 100% 0%, calc(100% - ${diagonal}px) 100%, 0% 100%)`
}

export function MPBar({ state, reversed }: MPBarProps) {
  const pct    = Math.max(0, state.maxMp > 0 ? state.mp / state.maxMp : 0)
  const isFull = pct >= 1

  const [tracerPct,  setTracerPct]  = useState(pct)
  const [shimmering, setShimmering] = useState(false)
  const prevMpRef                   = useRef(state.mp)
  const prevFullRef                 = useRef(isFull)

  useEffect(() => {
    const newPct  = Math.max(0, state.maxMp > 0 ? state.mp / state.maxMp : 0)
    const nowFull = newPct >= 1
    if (state.mp < prevMpRef.current) {
      const timer = setTimeout(() => setTracerPct(newPct), 100)
      prevMpRef.current = state.mp
      prevFullRef.current = nowFull
      return () => clearTimeout(timer)
    } else {
      // MP increased — run shimmer if we just crossed into full
      if (!prevFullRef.current && nowFull) {
        setShimmering(true)
      }
      prevMpRef.current = state.mp
      prevFullRef.current = nowFull
      setTracerPct(newPct)
    }
  }, [state.mp, state.maxMp])

  const outerStyle: React.CSSProperties = {
    position:   'relative',
    width:      `${OUTER_W}px`,
    height:     `${OUTER_H}px`,
    background: PANEL_BORDER,
    clipPath:   rhomboidClip(DIAGONAL, reversed),
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

  const tracerBarStyle: React.CSSProperties = {
    position:   'absolute',
    top:        0,
    bottom:     0,
    [reversed ? 'right' : 'left']: 0,
    width:      `${tracerPct * 100}%`,
    background: `${ELECTRIC_BLUE}60`,
    transition: 'width 700ms ease-out',
  }

  const activeBarStyle: React.CSSProperties = {
    position:   'absolute',
    top:        0,
    bottom:     0,
    [reversed ? 'right' : 'left']: 0,
    width:      `${pct * 100}%`,
    background: ELECTRIC_BLUE,
    transition: 'width 80ms linear',
  }

  return (
    <div style={outerStyle}>
      <div style={trackStyle}>
        <div style={tracerBarStyle} />
        <div style={activeBarStyle} />

        {/* Shimmer sweep on charge-full */}
        {shimmering && (
          <div
            style={{
              position:   'absolute',
              top:        0,
              bottom:     0,
              left:       0,
              width:      '60%',
              background: `linear-gradient(90deg, transparent, ${ELECTRIC_BLUE}CC, transparent)`,
              animation:  'mp-shimmer 500ms ease-in-out forwards',
              pointerEvents: 'none',
            }}
            onAnimationEnd={() => setShimmering(false)}
          />
        )}

        {/* Steady ready-pulse when bar is full */}
        {isFull && !shimmering && (
          <div
            style={{
              position:   'absolute',
              inset:      0,
              background: `${ELECTRIC_BLUE}`,
              animation:  'mp-ready-pulse 1.2s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>
    </div>
  )
}
