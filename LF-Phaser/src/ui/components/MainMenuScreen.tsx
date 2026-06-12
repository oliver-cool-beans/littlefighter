import { useRouter }      from '../router.js'
import { ScreenOverlay }  from '../primitives/ScreenOverlay.js'
import { MenuList }       from '../primitives/MenuList.js'
import { ControlBar }     from '../primitives/ControlBar.js'
import { UserBadge }      from './UserBadge.js'
import { ShootingStars }  from './ShootingStars.js'
import { ThunderFlash }   from './ThunderFlash.js'
import {
  FONT_MONO, SIZE_DEBUG, GREY_MID,
} from '../theme.js'

import type { MenuListItem } from '../primitives/MenuList.js'

const CONTROL_HINTS = [
  { key: '↑↓',   action: 'MOVE'   },
  { key: 'ENTER', action: 'SELECT' },
]

// Sequence: bg fades in over 1.8s, then logo at 1.9s, then menu at 2.3s
const BG_DURATION   = '1.8s'
const LOGO_DELAY    = '1.9s'
const MENU_DELAY    = '2.3s'
const CONTENT_DUR   = '0.7s'

function buildMenuItems(): MenuListItem[] {
  return [
    { id: 'single',   label: 'Single Player' },
    { id: 'online',   label: 'Online Play'   },
    { id: 'settings', label: 'Settings'      },
  ]
}

export function MainMenuScreen() {
  const navigate = useRouter(s => s.navigate)

  function handleConfirm(id: string) {
    switch (id) {
      case 'single':    navigate('character-select'); break
      case 'settings':  navigate('settings');         break
      case 'online':    navigate('online');            break
    }
  }

  return (
    <ScreenOverlay noEffects style={{ animation: 'none' }}>

      {/* Background image — fades in from black */}
      <div
        aria-hidden
        style={{
          position:           'absolute',
          inset:              0,
          backgroundImage:    'url(/images/main-background.png)',
          backgroundSize:     'cover',
          backgroundPosition: 'center',
          backgroundRepeat:   'no-repeat',
          animation:          `menu-bg-in ${BG_DURATION} ease both`,
          pointerEvents:      'none',
        }}
      />

      {/* Shooting star rain */}
      <ShootingStars />

      {/* Lightning bolts + screen flash */}
      <ThunderFlash />

      {/* User badge — top right */}
      <UserBadge />

      {/* Centre column — logo stacked above menu */}
      <div style={{
        position:       'absolute',
        inset:          0,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            '24px',
        userSelect:     'none',
      }}>
        {/* Splash logo */}
        <img
          src="/images/spash-logo.png"
          alt="Little Fighter 2"
          style={{
            maxWidth:       '720px',
            width:          '80%',
            display:        'block',
            opacity:        0,
            animation:      `menu-fade-in ${CONTENT_DUR} ease both`,
            animationDelay: LOGO_DELAY,
          }}
        />

        {/* Glass menu panel */}
        <div style={{
          width:               '340px',
          background:          'rgba(10, 4, 20, 0.90)',
          backdropFilter:      'blur(14px)',
          WebkitBackdropFilter:'blur(14px)',
          border:              '1px solid rgba(140, 20, 40, 0.22)',
          boxShadow:           '0 8px 48px rgba(0,0,0,0.70), 0 0 0 1px rgba(120,0,30,0.08)',
          clipPath:            'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
          padding:             '4px 0',
          opacity:             0,
          animation:           `menu-fade-in ${CONTENT_DUR} ease both`,
          animationDelay:      MENU_DELAY,
        }}>
          <MenuList
            items={buildMenuItems()}
            onConfirm={handleConfirm}
          />
        </div>
      </div>

      {/* Version label — fades with menu */}
      <div style={{
        position:          'absolute',
        bottom:            '52px',
        left:              '16px',
        fontFamily:        FONT_MONO,
        fontSize:          SIZE_DEBUG,
        color:             GREY_MID,
        letterSpacing:     '1px',
        pointerEvents:     'none',
        opacity:           0,
        animation:         `menu-fade-in ${CONTENT_DUR} ease both`,
        animationDelay:    MENU_DELAY,
      }}>
        v0.1.0
      </div>

      <ControlBar hints={CONTROL_HINTS} />
    </ScreenOverlay>
  )
}
