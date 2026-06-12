import type { ReactNode } from 'react'
import { FONT, BLOOD, BONE, GREY_LIGHT, GREY_MID } from '../theme.js'

interface MenuItemProps {
  label:      string
  active:     boolean
  disabled?:  boolean
  right?:     ReactNode
  onClick?:   () => void
  animDelay?: number
}

function cursorGlyph(disabled: boolean, active: boolean): string {
  if (disabled) return '—'
  if (active)   return '▶'
  return ' '
}

function textColor(disabled: boolean, active: boolean): string {
  if (disabled) return GREY_MID
  if (active)   return BONE
  return GREY_LIGHT
}

export function MenuItem({ label, active, disabled = false, right, onClick, animDelay = 0 }: MenuItemProps) {
  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={() => !disabled && onClick?.()}
      style={{
        display:    'flex',
        alignItems: 'center',
        minHeight:  '60px',
        padding:    '0 20px 0 0',
        background: active
          ? 'linear-gradient(90deg, rgba(192,10,28,0.20) 0%, rgba(192,10,28,0.06) 60%, transparent 100%)'
          : 'transparent',
        borderLeft:  `5px solid ${active ? BLOOD : 'transparent'}`,
        transform:   active ? 'translateX(4px)' : 'translateX(0)',
        cursor:      disabled ? 'not-allowed' : 'pointer',
        userSelect:  'none',
        outline:     'none',
        transition:  'background 80ms ease, border-color 80ms ease, transform 80ms ease',
        animation:   `item-reveal 280ms ease ${animDelay}ms both`,
      }}
    >
      {/* Cursor glyph */}
      <div style={{
        width:      '30px',
        textAlign:  'center',
        fontFamily: FONT,
        fontSize:   '20px',
        color:      BLOOD,
        animation:  active && !disabled ? 'cursor-blink 1s step-end infinite' : 'none',
        flexShrink: 0,
      }}>
        {cursorGlyph(disabled, active)}
      </div>

      {/* Label */}
      <div style={{
        fontFamily:    FONT,
        fontSize:      active ? '34px' : '32px',
        color:         textColor(disabled, active),
        letterSpacing: '2px',
        lineHeight:    1,
        flex:          1,
        transition:    'font-size 80ms ease, color 80ms ease',
      }}>
        {label}
      </div>

      {right && (
        <div style={{ marginLeft: '12px', flexShrink: 0 }}>
          {right}
        </div>
      )}
    </div>
  )
}
