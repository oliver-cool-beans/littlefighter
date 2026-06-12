/**
 * ProgressBar — skewed fill bar used for HP, MP, and any ratio display.
 *
 * Props:
 *  value     — current value
 *  max       — maximum value
 *  color     — fill colour (defaults to ACID_GREEN)
 *  reversed  — if true the bar fills from the right
 *  lag       — if true shows a delayed "tracer" layer (pending damage effect)
 */

import { useState, useEffect, useRef } from 'react'
import { GREY_DIM, ACID_GREEN, GOLD, SKEW_DEG } from '../theme.js'

interface ProgressBarProps {
  value:     number
  max:       number
  color?:    string
  reversed?: boolean
  lag?:      boolean
  width?:    number
  height?:   number
}

const DIAGONAL = 14  // px — matches existing bar shape

function rhomboidClip(mirrored: boolean): string {
  if (mirrored) {
    return `polygon(0% 0%, calc(100% - ${DIAGONAL}px) 0%, 100% 100%, ${DIAGONAL}px 100%)`
  }
  return `polygon(${DIAGONAL}px 0%, 100% 0%, calc(100% - ${DIAGONAL}px) 100%, 0% 100%)`
}

export function ProgressBar({
  value,
  max,
  color    = ACID_GREEN,
  reversed = false,
  lag      = false,
  width    = 210,
  height   = 22,
}: ProgressBarProps) {
  const pct = Math.max(0, max > 0 ? value / max : 0)

  const [tracerPct, setTracerPct] = useState(pct)
  const [shaking,   setShaking  ] = useState(false)
  const prevValueRef              = useRef(value)

  useEffect(() => {
    const newPct = Math.max(0, max > 0 ? value / max : 0)
    if (lag && value < prevValueRef.current) {
      setShaking(true)
      const timer = setTimeout(() => setTracerPct(newPct), 100)
      prevValueRef.current = value
      return () => clearTimeout(timer)
    }
    prevValueRef.current = value
    setTracerPct(newPct)
  }, [value, max, lag])

  const side = reversed ? 'right' : 'left'
  const BORDER = 3

  return (
    <div
      style={{
        position:  'relative',
        width:     `${width}px`,
        height:    `${height}px`,
        background: '#FFFFFF',
        clipPath:  rhomboidClip(reversed),
        animation: shaking ? 'bar-shake 0.4s ease-out' : 'none',
        transform: `skewX(${SKEW_DEG}deg)`,
      }}
      onAnimationEnd={() => setShaking(false)}
    >
      {/* Dark track */}
      <div style={{
        position: 'absolute',
        top:      `${BORDER}px`,
        bottom:   `${BORDER}px`,
        left:     `${BORDER + 1}px`,
        right:    `${BORDER + 1}px`,
        background: GREY_DIM,
        overflow: 'hidden',
      }}>
        {/* Tracer / lag layer */}
        {lag && (
          <div style={{
            position:   'absolute',
            inset:      0,
            [side]:     0,
            width:      `${tracerPct * 100}%`,
            background: `${GOLD}99`,
            transition: 'width 700ms ease-out',
          }} />
        )}
        {/* Active fill */}
        <div style={{
          position:   'absolute',
          inset:      0,
          [side]:     0,
          width:      `${pct * 100}%`,
          background: color,
          boxShadow:  `0 0 6px ${color}`,
          transition: 'width 80ms linear',
        }} />
      </div>
    </div>
  )
}
