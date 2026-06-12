import { FONT, VOID, BLOOD, GREY_LIGHT, SIZE_KEY_HINT } from '../theme.js'

export interface ControlHint {
  key:    string
  action: string
}

interface ControlBarProps {
  hints: ControlHint[]
}

export function ControlBar({ hints }: ControlBarProps) {
  return (
    <div
      style={{
        position:       'absolute',
        bottom:         0,
        left:           0,
        right:          0,
        height:         '44px',
        background:     VOID,
        borderTop:      '1px solid rgba(80,10,40,0.40)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            '28px',
        padding:        '0 20px',
        zIndex:         100,
        pointerEvents:  'none',
      }}
    >
      {hints.map(({ key, action }) => (
        <span
          key={key + action}
          style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '6px',
            fontFamily: FONT,
            fontSize:   SIZE_KEY_HINT,
          }}
        >
          <span style={{
            color:      BLOOD,
            background: `${BLOOD}18`,
            border:     `1px solid ${BLOOD}50`,
            padding:    '1px 6px',
            clipPath:   'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
            lineHeight: 1.3,
          }}>
            [{key}]
          </span>
          <span style={{ color: GREY_LIGHT }}>{action}</span>
        </span>
      ))}
    </div>
  )
}
