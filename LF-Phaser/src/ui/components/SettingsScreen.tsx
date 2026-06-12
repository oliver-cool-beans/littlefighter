/**
 * SettingsScreen — 4-tab settings panel (Audio, Controls, Display, Gameplay).
 * Uses useSettings zustand store; changes are persisted immediately.
 */

import { useState, useEffect, useRef } from 'react'
import { useRouter }   from '../router.js'
import { useSettings } from '../settings.js'
import type { KeyBindings } from '../settings.js'
import { ScreenOverlay } from '../primitives/ScreenOverlay.js'
import { SectionTitle }  from '../primitives/SectionTitle.js'
import { TabBar }        from '../primitives/TabBar.js'
import { ControlBar }    from '../primitives/ControlBar.js'
import {
  FONT, FONT_LABEL, FONT_MONO, GOLD, ELECTRIC_BLUE, CRIMSON, ACID_GREEN,
  PANEL_BORDER, GREY_LIGHT, GREY_MID, GREY_DIM,
} from '../theme.js'

type Tab = 'audio' | 'controls' | 'display' | 'gameplay'

const TABS: { id: Tab; label: string }[] = [
  { id: 'audio',    label: 'Audio'    },
  { id: 'controls', label: 'Controls' },
  { id: 'display',  label: 'Display'  },
  { id: 'gameplay', label: 'Gameplay' },
]

const ACTION_LABELS: Record<keyof KeyBindings, string> = {
  up:    'Up',
  down:  'Down',
  left:  'Left',
  right: 'Right',
  def:   'Defend',
  jump:  'Jump',
  att:   'Attack',
}

function VolumeSlider({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <span style={{ fontFamily: FONT, fontSize: '18px', color: GREY_LIGHT, width: '160px', letterSpacing: '2px' }}>
        {label}
      </span>
      <input
        type="range"
        min={0} max={1} step={0.05}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ flex: 1, accentColor: GOLD }}
      />
      <span style={{ fontFamily: FONT_MONO, fontSize: '13px', color: GOLD, width: '40px', textAlign: 'right' }}>
        {Math.round(value * 100)}%
      </span>
    </div>
  )
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', padding: '12px 16px', cursor: 'pointer', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', transition: 'background 100ms', width: '100%', textAlign: 'left' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}
    >
      <div style={{
        width:      '44px',
        height:     '24px',
        background: value ? `${ACID_GREEN}30` : GREY_DIM,
        border:     `1px solid ${value ? ACID_GREEN : PANEL_BORDER}`,
        position:   'relative',
        flexShrink: 0,
        transition: 'background 150ms, border-color 150ms',
        clipPath:   'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
      }}>
        <div style={{
          position:   'absolute',
          top:        '3px',
          left:       value ? '20px' : '3px',
          width:      '16px',
          height:     '16px',
          background: value ? ACID_GREEN : GREY_MID,
          transition: 'left 150ms',
          clipPath:   'polygon(3px 0%, 100% 0%, calc(100% - 3px) 100%, 0% 100%)',
        }} />
      </div>
      <span style={{ fontFamily: FONT, fontSize: '18px', color: GREY_LIGHT, letterSpacing: '2px' }}>
        {label}
      </span>
      <span style={{ marginLeft: 'auto', fontFamily: FONT, fontSize: '16px', color: value ? ACID_GREEN : GREY_MID, letterSpacing: '2px' }}>
        {value ? 'ON' : 'OFF'}
      </span>
    </button>
  )
}

function KeyRow({
  action, binding, onCapture,
}: {
  action:    keyof KeyBindings
  binding:   string
  onCapture: (action: keyof KeyBindings, key: string) => void
}) {
  const [listening, setListening] = useState(false)

  function startCapture() {
    setListening(true)
    const handle = (e: KeyboardEvent) => {
      e.preventDefault()
      if (e.key !== 'Escape') onCapture(action, e.key.toLowerCase())
      setListening(false)
      window.removeEventListener('keydown', handle)
    }
    window.addEventListener('keydown', handle)
  }

  const display = binding.length > 1 ? binding : binding.toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', padding: '10px 16px', background: 'rgba(255,255,255,0.03)', border: `1px solid ${listening ? ELECTRIC_BLUE + '40' : 'rgba(255,255,255,0.06)'}`, transition: 'border-color 100ms' }}>
      <span style={{ fontFamily: FONT, fontSize: '17px', color: GREY_LIGHT, width: '100px', letterSpacing: '2px' }}>
        {ACTION_LABELS[action]}
      </span>
      <button
        onClick={startCapture}
        style={{
          fontFamily: FONT_MONO,
          fontSize:   '13px',
          padding:    '5px 18px',
          background: listening ? `${ELECTRIC_BLUE}22` : 'rgba(255,255,255,0.05)',
          color:      listening ? ELECTRIC_BLUE : GREY_LIGHT,
          border:     `1px solid ${listening ? ELECTRIC_BLUE : 'rgba(255,255,255,0.12)'}`,
          cursor:     'pointer',
          minWidth:   '90px',
          textAlign:  'center',
          clipPath:   'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
          transition: 'all 100ms',
        }}
      >
        {listening ? '[ press key ]' : display}
      </button>
    </div>
  )
}

export function SettingsScreen() {
  const goBack       = useRouter(s => s.goBack)
  const settings     = useSettings()
  const [tab, setTab] = useState<Tab>('audio')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => { containerRef.current?.focus() }, [])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault()
      goBack()
      return
    }
    const target = e.target as HTMLElement
    if (target !== containerRef.current) return
    const tabIdx = TABS.findIndex(t => t.id === tab)
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        setTab(TABS[Math.max(0, tabIdx - 1)]!.id)
        break
      case 'ArrowRight':
        e.preventDefault()
        setTab(TABS[Math.min(TABS.length - 1, tabIdx + 1)]!.id)
        break
    }
  }

  return (
    <ScreenOverlay>
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        style={{
          position:      'absolute',
          inset:         0,
          display:       'flex',
          flexDirection: 'column',
          outline:       'none',
        }}
      >
        {/* Glass header */}
        <div style={{
          height:              '58px',
          background:          'rgba(14, 17, 38, 0.90)',
          backdropFilter:      'blur(12px)',
          WebkitBackdropFilter:'blur(12px)',
          borderBottom:        '1px solid rgba(61, 232, 255, 0.12)',
          display:             'flex',
          alignItems:          'center',
          padding:             '0 24px',
          gap:                 '16px',
          flexShrink:          0,
        }}>
          <button
            onClick={() => goBack()}
            style={{
              fontFamily:    FONT_LABEL,
              fontWeight:    600,
              fontSize:      '14px',
              color:         GREY_MID,
              background:    'none',
              border:        'none',
              cursor:        'pointer',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition:    'color 100ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = GREY_LIGHT }}
            onMouseLeave={e => { e.currentTarget.style.color = GREY_MID }}
          >
            ← Back
          </button>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <SectionTitle size="22px">SETTINGS</SectionTitle>
          </div>
          <div style={{ width: '80px' }} />
        </div>

        {/* Tabs */}
        <TabBar
          tabs={TABS.map(t => ({ id: t.id, label: t.label }))}
          activeId={tab}
          onChange={id => setTab(id as Tab)}
        />

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '28px 40px' }}>
          {tab === 'audio' && (
            <div>
              <VolumeSlider label="Master" value={settings.masterVolume} onChange={v => settings.set('masterVolume', v)} />
              <VolumeSlider label="Music"  value={settings.bgmVolume}    onChange={v => settings.set('bgmVolume', v)} />
              <VolumeSlider label="SFX"    value={settings.sfxVolume}    onChange={v => settings.set('sfxVolume', v)} />
              <Toggle label="Mute on focus loss" value={settings.muteOnFocusLoss} onChange={v => settings.set('muteOnFocusLoss', v)} />
            </div>
          )}

          {tab === 'controls' && (
            <div>
              <div style={{ fontFamily: FONT, fontSize: '20px', color: ELECTRIC_BLUE, letterSpacing: '4px', marginBottom: '16px' }}>
                PLAYER 1
              </div>
              {(Object.keys(ACTION_LABELS) as (keyof KeyBindings)[]).map(action => (
                <KeyRow
                  key={action}
                  action={action}
                  binding={settings.p1Keys[action]}
                  onCapture={(a, k) => settings.setP1Key(a, k)}
                />
              ))}
              <button
                onClick={() => settings.resetP1Keys()}
                style={{
                  fontFamily:    FONT_LABEL,
                  fontWeight:    600,
                  fontSize:      '14px',
                  color:         GREY_MID,
                  background:    'rgba(255,255,255,0.04)',
                  border:        `1px solid rgba(255,255,255,0.1)`,
                  padding:       '8px 18px',
                  cursor:        'pointer',
                  letterSpacing: '2px',
                  marginTop:     '10px',
                  textTransform: 'uppercase',
                  clipPath:      'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                  transition:    'color 100ms, border-color 100ms',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = CRIMSON
                  e.currentTarget.style.borderColor = `${CRIMSON}60`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = GREY_MID
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                }}
              >
                Reset Defaults
              </button>
            </div>
          )}

          {tab === 'display' && (
            <div>
              <Toggle label="Screen shake"     value={settings.screenShake}    onChange={v => settings.set('screenShake', v)} />
              <Toggle label="Show FPS counter" value={settings.showFpsCounter} onChange={v => settings.set('showFpsCounter', v)} />
              <Toggle label="Show hitboxes"    value={settings.showHitboxes}   onChange={v => settings.set('showHitboxes', v)} />
              <VolumeSlider label="HUD opacity" value={settings.hudOpacity} onChange={v => settings.set('hudOpacity', v)} />
            </div>
          )}

          {tab === 'gameplay' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontFamily: FONT, fontSize: '18px', color: GREY_LIGHT, width: '200px', letterSpacing: '2px' }}>
                  AI reaction delay
                </span>
                <input
                  type="range"
                  min={0} max={10} step={1}
                  value={settings.aiReactionDelay}
                  onChange={e => settings.set('aiReactionDelay', Number(e.target.value))}
                  style={{ flex: 1, accentColor: GOLD }}
                />
                <span style={{ fontFamily: FONT_MONO, fontSize: '13px', color: GOLD, width: '40px', textAlign: 'right' }}>
                  {settings.aiReactionDelay}t
                </span>
              </div>
              <Toggle label="Damage numbers" value={settings.damageNumbers} onChange={v => settings.set('damageNumbers', v)} />
              <Toggle label="Announcements"  value={settings.announcements} onChange={v => settings.set('announcements', v)} />
            </div>
          )}
        </div>

        <ControlBar hints={[
          { key: '←→', action: 'SWITCH TAB' },
          { key: 'TAB', action: 'NAVIGATE' },
          { key: 'ESC', action: 'BACK' },
        ]} />
      </div>
    </ScreenOverlay>
  )
}
