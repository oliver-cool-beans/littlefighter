/**
 * SettingsPanel — volume control overlay shown during gameplay.
 * Toggle visibility via `isOpen` / `onClose` props.
 */

import { useState, useCallback, useEffect, useRef } from 'react'
import { SoundEngine } from '../../sound/SoundEngine.js'
import {
  FONT, FONT_MONO, GOLD, CRIMSON,
  PANEL, PANEL_BORDER, GREY_LIGHT, GREY_MID,
  glow,
} from '../theme.js'

interface Props {
  isOpen:  boolean
  onClose: () => void
}

interface Volumes {
  master: number
  sfx:    number
  music:  number
  ui:     number
}

function readVolumes(): Volumes {
  return {
    master: SoundEngine.masterVolume,
    sfx:    SoundEngine.sfx.volume,
    music:  SoundEngine.music.volume,
    ui:     SoundEngine.ui.volume,
  }
}

export function SettingsPanel({ isOpen, onClose }: Props) {
  const [volumes, setVolumes] = useState<Volumes>(readVolumes)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) panelRef.current?.focus()
  }, [isOpen])

  const handleChange = useCallback((key: keyof Volumes, raw: string) => {
    const v = parseFloat(raw)
    setVolumes(prev => ({ ...prev, [key]: v }))

    if (key === 'master') {
      SoundEngine.setMasterVolume(v)
    } else {
      SoundEngine.setChannelVolume(key, v)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div
      ref={panelRef}
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Escape') { e.preventDefault(); onClose() } }}
      style={{
        position:        'fixed',
        inset:           0,
        backgroundColor: 'rgba(0,0,0,0.75)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        zIndex:          100,
        pointerEvents:   'auto',
        outline:         'none',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background:  PANEL,
          border:      `1px solid ${PANEL_BORDER}`,
          boxShadow:   glow(GOLD, 20),
          padding:     '28px 32px',
          minWidth:    '320px',
          color:       GREY_LIGHT,
          clipPath:    'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{
          fontFamily:    FONT,
          fontSize:      '24px',
          color:         GOLD,
          letterSpacing: '6px',
          marginBottom:  '20px',
          textAlign:     'center',
        }}>
          SOUND SETTINGS
        </div>

        {(
          [
            { key: 'master', label: 'Master Volume' },
            { key: 'sfx',    label: 'SFX' },
            { key: 'music',  label: 'Music' },
            { key: 'ui',     label: 'UI' },
          ] as const
        ).map(({ key, label }) => (
          <div key={key} style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <label style={{ fontFamily: FONT, fontSize: '15px', letterSpacing: '2px', color: GREY_MID }}>
                {label}
              </label>
              <span style={{ fontFamily: FONT_MONO, fontSize: '13px', color: GREY_MID }}>
                {Math.round(volumes[key] * 100)}%
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volumes[key]}
              onChange={e => handleChange(key, e.target.value)}
              style={{ width: '100%', accentColor: GOLD, cursor: 'pointer' }}
            />
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
          <button
            onClick={onClose}
            style={{
              fontFamily:    FONT,
              fontSize:      '16px',
              letterSpacing: '3px',
              padding:       '8px 24px',
              background:    `${CRIMSON}22`,
              border:        `1px solid ${CRIMSON}`,
              color:         GREY_LIGHT,
              cursor:        'pointer',
              clipPath:      'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}
