import type { ReactNode } from 'react'
import { DEEP_VOID, BLOOD } from '../theme.js'
import { Scanlines } from './Scanlines.js'

interface ScreenOverlayProps {
  children?:  ReactNode
  scanlines?: boolean
  noEffects?: boolean
  style?:     React.CSSProperties
}

export function ScreenOverlay({ children, scanlines = true, noEffects = false, style }: ScreenOverlayProps) {
  return (
    <div
      style={{
        position:      'absolute',
        inset:         0,
        background:    DEEP_VOID,
        overflow:      'hidden',
        pointerEvents: 'auto',
        animation:     'screen-enter 200ms ease both',
        ...style,
      }}
    >
      {!noEffects && (
        <>
          {/* Deep purple atmospheric centre glow */}
          <div
            aria-hidden
            style={{
              position:      'absolute',
              inset:         0,
              background:    'radial-gradient(ellipse 90% 70% at 50% 40%, rgba(30,5,55,0.85) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Top-edge blood light strip */}
          <div
            aria-hidden
            style={{
              position:      'absolute',
              top:           0,
              left:          0,
              right:         0,
              height:        '140px',
              background:    `linear-gradient(to bottom, ${BLOOD}0C, transparent)`,
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      {scanlines && !noEffects && <Scanlines />}

      {children}
    </div>
  )
}
