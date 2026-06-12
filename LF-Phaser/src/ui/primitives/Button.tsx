import type { ReactNode } from 'react'
import { FONT, BLOOD, BLOOD_BRIGHT, BLOOD_DIM, BONE, PANEL_BORDER, GREY_LIGHT, glow } from '../theme.js'

interface ButtonProps {
  children:   ReactNode
  onClick?:   () => void
  variant?:   'confirm' | 'cancel'
  disabled?:  boolean
  autoFocus?: boolean
  size?:      'md' | 'lg'
}

export function Button({
  children,
  onClick,
  variant   = 'confirm',
  disabled  = false,
  autoFocus = false,
  size      = 'md',
}: ButtonProps) {
  const isConfirm = variant === 'confirm'
  const fontSize  = size === 'lg' ? '36px' : '28px'
  const padding   = size === 'lg' ? '14px 36px' : '10px 28px'

  function background(): string {
    if (disabled)   return 'rgba(255,255,255,0.04)'
    if (isConfirm)  return `linear-gradient(135deg, ${BLOOD_BRIGHT} 0%, ${BLOOD_DIM} 100%)`
    return 'rgba(255,255,255,0.05)'
  }

  function color(): string {
    if (disabled)  return 'rgba(255,255,255,0.25)'
    if (isConfirm) return BONE
    return GREY_LIGHT
  }

  function borderColor(): string {
    if (disabled)  return PANEL_BORDER
    if (isConfirm) return BLOOD
    return 'rgba(255,255,255,0.12)'
  }

  return (
    <button
      autoFocus={autoFocus}
      disabled={disabled}
      onClick={() => !disabled && onClick?.()}
      style={{
        fontFamily:    FONT,
        fontSize,
        letterSpacing: '3px',
        padding,
        background:    background(),
        border:        `1px solid ${borderColor()}`,
        color:         color(),
        clipPath:      'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
        cursor:        disabled ? 'not-allowed' : 'pointer',
        opacity:       disabled ? 0.5 : 1,
        transition:    'box-shadow 100ms ease, opacity 100ms ease, transform 80ms ease',
        outline:       'none',
        lineHeight:    1,
        transform:     'scale(1)',
      }}
      onFocus={e => {
        if (!disabled) e.currentTarget.style.boxShadow = glow(BLOOD, 18)
      }}
      onBlur={e => {
        e.currentTarget.style.boxShadow = 'none'
      }}
      onMouseEnter={e => {
        if (!disabled) e.currentTarget.style.transform = 'scale(1.02)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
      onMouseDown={e => {
        if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'
      }}
      onMouseUp={e => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      {children}
    </button>
  )
}
