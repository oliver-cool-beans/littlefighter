import type { ReactNode, CSSProperties } from 'react'
import { SKEW_DEG, glow, BLOOD, BORDER_SUBTLE } from '../theme.js'

interface PanelProps {
  children?:  ReactNode
  focused?:   boolean
  skewed?:    boolean
  style?:     CSSProperties
  className?: string
}

export function Panel({ children, focused = false, skewed = false, style, className }: PanelProps) {
  return (
    <div
      className={className}
      style={{
        background:          'rgba(10, 4, 20, 0.92)',
        backdropFilter:      'blur(12px)',
        WebkitBackdropFilter:'blur(12px)',
        border:              `1px solid ${focused ? BLOOD : BORDER_SUBTLE}`,
        boxShadow:           focused
          ? `${glow(BLOOD, 14)}, 0 8px 32px rgba(0,0,0,0.6)`
          : `0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(120,0,30,0.06)`,
        transform:           skewed ? `skewX(${SKEW_DEG}deg)` : undefined,
        position:            'relative',
        overflow:            'hidden',
        transition:          'border-color 120ms ease, box-shadow 120ms ease',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
