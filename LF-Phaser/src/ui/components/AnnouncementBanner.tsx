import { useEffect, useState } from 'react'
import { bus } from '../bus.js'
import type { AnnounceEvent } from '../types.js'
import { FONT_GAME, GOLD, BLOOD_BRIGHT, GOTHIC_PURPLE_LIGHT, BONE } from '../theme.js'

const STYLE_MAP: Record<AnnounceEvent['style'], { color: string; shadow: string }> = {
  round:   { color: BONE,               shadow: `0 0 20px ${BLOOD_BRIGHT}80, 0 0 60px rgba(100,0,20,0.6)` },
  fight:   { color: BONE,               shadow: `0 0 24px ${GOTHIC_PURPLE_LIGHT}, 0 0 70px rgba(80,0,120,0.7)` },
  ko:      { color: BLOOD_BRIGHT,       shadow: `0 0 30px ${BLOOD_BRIGHT}, 0 0 80px rgba(120,0,0,0.8)` },
  win:     { color: GOLD,               shadow: `0 0 20px ${GOLD}, 0 0 50px rgba(180,120,0,0.6)` },
  perfect: { color: GOTHIC_PURPLE_LIGHT,shadow: `0 0 30px ${GOTHIC_PURPLE_LIGHT}, 0 0 80px rgba(80,0,160,0.7)` },
}

interface BannerState {
  text:  string
  style: AnnounceEvent['style']
  phase: 'in' | 'hold' | 'out'
}

export function AnnouncementBanner() {
  const [banner, setBanner] = useState<BannerState | null>(null)

  useEffect(() => {
    const handler = (event: AnnounceEvent) => {
      setBanner({ text: event.text, style: event.style, phase: 'in' })

      const holdTimer = setTimeout(() => {
        setBanner(prev => prev ? { ...prev, phase: 'hold' } : null)
      }, 200)

      const outTimer = setTimeout(() => {
        setBanner(prev => prev ? { ...prev, phase: 'out' } : null)
      }, (event.duration ?? 1500) - 300)

      const clearTimer = setTimeout(() => {
        setBanner(null)
      }, event.duration ?? 1500)

      return () => {
        clearTimeout(holdTimer)
        clearTimeout(outTimer)
        clearTimeout(clearTimer)
      }
    }

    bus.on('ui:announce', handler)
    return () => bus.off('ui:announce', handler)
  }, [])

  if (!banner) return null

  const ss = STYLE_MAP[banner.style]

  function phaseScale(): number {
    if (banner.phase === 'in')   return 1.3
    if (banner.phase === 'hold') return 1
    return 0.8
  }

  const scale   = phaseScale()
  const opacity = banner.phase === 'out' ? 0 : 1

  return (
    <div style={{
      position:       'absolute',
      inset:          0,
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      pointerEvents:  'none',
      zIndex:         50,
    }}>
      <div style={{
        fontFamily:    FONT_GAME,
        fontSize:      '96px',
        color:         ss.color,
        textShadow:    ss.shadow,
        letterSpacing: '8px',
        transform:     `scale(${scale})`,
        opacity,
        transition:    'transform 200ms ease-out, opacity 300ms ease-out',
        whiteSpace:    'nowrap',
      }}>
        {banner.text}
      </div>
    </div>
  )
}
