import { FONT, BLOOD, PANEL, GREY_LIGHT } from '../theme.js'

interface KeyHintProps {
  label:    string
  size?:    'sm' | 'lg'
  gamepad?: string
}

export function KeyHint({ label, size = 'sm', gamepad }: KeyHintProps) {
  const fontSize = size === 'lg' ? '20px' : '16px'
  const padding  = size === 'lg' ? '4px 10px' : '2px 7px'

  return (
    <span
      style={{
        display:    'inline-flex',
        alignItems: 'center',
        gap:        '5px',
        fontFamily: FONT,
        fontSize,
        color:      GREY_LIGHT,
        background: PANEL,
        border:     `1px solid ${BLOOD}70`,
        padding,
        clipPath:   'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
        whiteSpace: 'nowrap',
        lineHeight: 1.2,
      }}
    >
      {gamepad && <span style={{ color: BLOOD, fontSize: '14px' }}>{gamepad}</span>}
      <span style={{ color: BLOOD }}>[{label}]</span>
    </span>
  )
}
