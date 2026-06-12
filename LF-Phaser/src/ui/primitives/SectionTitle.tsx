import type { ReactNode } from 'react'
import { FONT, BLOOD, SIZE_HEADING } from '../theme.js'

interface SectionTitleProps {
  children: ReactNode
  size?:    string
}

export function SectionTitle({ children, size = SIZE_HEADING }: SectionTitleProps) {
  return (
    <div
      style={{
        display:       'flex',
        alignItems:    'center',
        gap:           '12px',
        paddingBottom: '8px',
        borderBottom:  `1px solid ${BLOOD}35`,
        marginBottom:  '12px',
      }}
    >
      <div style={{ width: '4px', height: size, background: BLOOD, flexShrink: 0 }} />
      <span
        style={{
          fontFamily:    FONT,
          fontSize:      size,
          color:         BLOOD,
          letterSpacing: '4px',
          lineHeight:    1,
        }}
      >
        {children}
      </span>
    </div>
  )
}
