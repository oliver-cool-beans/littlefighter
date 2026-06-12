import { useState, useEffect } from 'react'
import { useRouter } from '../router.js'
import { bus }       from '../bus.js'
import {
  FONT, BLOOD, BLOOD_BRIGHT, CRIMSON,
  GREY_MID, GREY_LIGHT, BONE,
} from '../theme.js'

interface Props {
  isOpen:  boolean
  onClose: () => void
}

const ITEMS = ['RESUME', 'SETTINGS', 'QUIT'] as const
type Item = typeof ITEMS[number]

export function EscapeMenu({ isOpen, onClose }: Props) {
  const navigate          = useRouter(s => s.navigate)
  const [focus, setFocus] = useState<number>(0)

  useEffect(() => {
    if (!isOpen) return
    setFocus(0)

    function onKey(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault()
          e.stopPropagation()
          setFocus(i => (i - 1 + ITEMS.length) % ITEMS.length)
          break
        case 'ArrowDown':
          e.preventDefault()
          e.stopPropagation()
          setFocus(i => (i + 1) % ITEMS.length)
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          e.stopPropagation()
          setFocus(i => { select(ITEMS[i]!); return i })
          break
      }
    }
    window.addEventListener('keydown', onKey, { capture: true })
    return () => window.removeEventListener('keydown', onKey, { capture: true })
  }, [isOpen])

  function select(item: Item) {
    switch (item) {
      case 'RESUME':
        onClose()
        break
      case 'SETTINGS':
        onClose()
        navigate('settings')
        break
      case 'QUIT':
        onClose()
        bus.emit('game:quit')
        navigate('main-menu')
        break
    }
  }

  if (!isOpen) return null

  return (
    <div
      style={{
        position:        'fixed',
        inset:           0,
        backgroundColor: 'rgba(0,0,0,0.80)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        zIndex:          200,
        pointerEvents:   'auto',
      }}
    >
      <div style={{
        background:          'rgba(8, 3, 16, 0.97)',
        backdropFilter:      'blur(18px)',
        WebkitBackdropFilter:'blur(18px)',
        border:              '1px solid rgba(140,20,40,0.22)',
        boxShadow:           '0 0 60px rgba(192,10,28,0.10), 0 24px 64px rgba(0,0,0,0.85)',
        clipPath:            'polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)',
        padding:             '44px 56px 40px',
        display:             'flex',
        flexDirection:       'column',
        alignItems:          'center',
        gap:                 '10px',
        minWidth:            '300px',
      }}>
        <div style={{
          fontFamily:    FONT,
          fontSize:      '28px',
          color:         BLOOD,
          letterSpacing: '8px',
          marginBottom:  '20px',
        }}>
          PAUSED
        </div>

        {ITEMS.map((item, i) => {
          const active      = focus === i
          const isQuit      = item === 'QUIT'
          const accentColor = isQuit ? CRIMSON : BLOOD_BRIGHT
          const activeColor = isQuit ? CRIMSON : BONE
          const labelColor  = active ? activeColor : GREY_MID
          return (
            <button
              key={item}
              onClick={() => select(item)}
              onMouseEnter={() => setFocus(i)}
              style={{
                width:         '100%',
                fontFamily:    FONT,
                fontSize:      '22px',
                letterSpacing: '4px',
                padding:       '12px 0',
                background:    active ? `${accentColor}15` : 'transparent',
                border:        `1px solid ${active ? accentColor : 'rgba(80,10,40,0.30)'}`,
                color:         labelColor,
                cursor:        'pointer',
                clipPath:      'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                transition:    'all 80ms ease',
                outline:       'none',
              }}
            >
              {item}
            </button>
          )
        })}

        <div style={{
          marginTop:     '16px',
          fontFamily:    FONT,
          fontSize:      '12px',
          color:         GREY_LIGHT,
          opacity:       0.35,
          letterSpacing: '2px',
        }}>
          ESC TO RESUME
        </div>
      </div>
    </div>
  )
}
