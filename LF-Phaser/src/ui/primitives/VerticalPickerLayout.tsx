/**
 * VerticalPickerLayout — shared layout for vertical item-picker screens
 * (stage select, stage select, etc.).
 *
 * Left column: scrollable card list.
 * Right panel: large preview image + custom content (via renderPreview).
 *
 * Keyboard: ↑↓ navigate, Enter/Space confirm, Escape back.
 */

import { useEffect, useRef, type ReactNode } from 'react'
import { ControlBar }  from './ControlBar.js'
import {
  FONT, GOLD, PANEL_BORDER, GREY_MID, GREY_DIM, glow,
} from '../theme.js'

export interface PickerItem {
  id:           string | number
  /** Primary label shown in the list card and passed to renderPreview. */
  name:         string
  /** Small badge in the top-right of the list card (e.g. "01" or "WAVE 3"). */
  badge:        string
  previewImage: string
  /** When true the card is displayed grey and cannot be confirmed. */
  locked?:      boolean
}

interface VerticalPickerLayoutProps {
  title:          string
  items:          PickerItem[]
  selectedIdx:    number
  onSelectIdx:    (idx: number) => void
  onConfirm:      () => void
  onBack:         () => void
  controlHints:   Array<{ key: string; action: string }>
  /** Extra content rendered inside the right preview panel below the stage name. */
  renderPreview?: (item: PickerItem) => ReactNode
}

export function VerticalPickerLayout({
  title,
  items,
  selectedIdx,
  onSelectIdx,
  onConfirm,
  onBack,
  controlHints,
  renderPreview,
}: VerticalPickerLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef      = useRef<HTMLDivElement>(null)

  useEffect(() => { containerRef.current?.focus() }, [])

  useEffect(() => {
    const item = listRef.current?.children[selectedIdx] as HTMLElement | undefined
    item?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedIdx])

  function handleKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        setTo(Math.max(0, selectedIdx - 1))
        break
      case 'ArrowDown':
        e.preventDefault()
        setTo(Math.min(items.length - 1, selectedIdx + 1))
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (!items[selectedIdx]?.locked) onConfirm()
        break
      case 'Escape':
        e.preventDefault()
        onBack()
        break
    }
  }

  function setTo(idx: number) {
    onSelectIdx(idx)
  }

  const selected = items[selectedIdx]

  return (
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
      {/* Header */}
      <div
        style={{
          display:      'flex',
          alignItems:   'center',
          gap:          '16px',
          padding:      '20px 36px 16px',
          borderBottom: `1px solid ${PANEL_BORDER}`,
          flexShrink:   0,
        }}
      >
        <div style={{ width: '4px', height: '40px', background: GOLD, flexShrink: 0 }} />
        <span style={{ fontFamily: FONT, fontSize: '40px', color: GOLD, letterSpacing: '4px' }}>
          {title}
        </span>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>

        {/* Card list */}
        <div
          ref={listRef}
          style={{
            width:       '360px',
            flexShrink:  0,
            overflowY:   'auto',
            borderRight: `1px solid ${PANEL_BORDER}`,
            padding:     '12px 0',
          }}
        >
          {items.map((item, idx) => {
            const active = idx === selectedIdx
            return (
              <div
                key={item.id}
                onClick={() => !item.locked && onSelectIdx(idx)}
                style={{
                  position:           'relative',
                  height:             '88px',
                  margin:             '0 16px 8px',
                  backgroundImage:    item.previewImage ? `url(${item.previewImage})` : undefined,
                  backgroundColor:    item.previewImage ? undefined : active ? '#1C1A12' : '#0E0E0E',
                  backgroundSize:     'cover',
                  backgroundPosition: 'center',
                  borderLeft:         active ? `3px solid ${GOLD}` : item.locked ? `3px solid ${GREY_DIM}` : '3px solid transparent',
                  filter:             item.locked ? 'brightness(0.25) saturate(0)' : active ? 'brightness(1.1)' : 'brightness(0.55)',
                  cursor:             item.locked ? 'default' : 'pointer',
                  boxShadow:          active && !item.locked ? glow(GOLD, 18) : 'none',
                  transition:         'filter 0.15s, border-color 0.15s, box-shadow 0.15s',
                  clipPath:           'polygon(0 0, 100% 0, 100% 82%, 94% 100%, 0 100%)',
                }}
              >
                {!active && (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
                )}

                {/* Badge — top right */}
                <div
                  style={{
                    position:      'absolute',
                    top:           '10px',
                    right:         '14px',
                    fontFamily:    FONT,
                    fontSize:      '20px',
                    color:         item.locked ? GREY_DIM : active ? GOLD : GREY_MID,
                    letterSpacing: '2px',
                    zIndex:        1,
                    transition:    'color 0.15s',
                  }}
                >
                  {item.locked ? '🔒' : item.badge}
                </div>

                {/* Name — bottom left */}
                <div
                  style={{
                    position:       'absolute',
                    bottom:         '10px',
                    left:           '14px',
                    fontFamily:     FONT,
                    fontSize:       '22px',
                    color:          item.locked ? GREY_DIM : active ? '#FFF' : GREY_MID,
                    letterSpacing:  '2px',
                    textShadow:     '0 1px 6px rgba(0,0,0,0.9)',
                    zIndex:         1,
                    transition:     'color 0.15s',
                  }}
                >
                  {item.name.toUpperCase()}
                </div>
              </div>
            )
          })}
        </div>

        {/* Preview panel */}
        <div
          style={{
            flex:               1,
            display:            'flex',
            flexDirection:      'column',
            alignItems:         'center',
            justifyContent:     'center',
            gap:                '16px',
            padding:            '40px',
            backgroundImage:    selected?.previewImage ? `url(${selected.previewImage})` : undefined,
            backgroundSize:     'cover',
            backgroundPosition: 'center',
            position:           'relative',
          }}
        >
          <div
            style={{
              position:   'absolute',
              inset:       0,
              background:  selected?.previewImage
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.55) 100%)'
                : '#12152A',
            }}
          />

          {selected && (
            <>
              <div
                style={{
                  position:      'relative',
                  fontFamily:    FONT,
                  fontSize:      '72px',
                  color:         selected.locked ? GREY_MID : '#FFFFFF',
                  letterSpacing: '4px',
                  textAlign:     'center',
                  textShadow:    selected.locked ? 'none' : `0 0 40px ${GOLD}66, 0 2px 12px rgba(0,0,0,0.9)`,
                  lineHeight:    1,
                }}
              >
                {selected.name.toUpperCase()}
              </div>

              {renderPreview?.(selected)}

              {!selected.locked && (
                <div
                  style={{
                    position:      'relative',
                    marginTop:     '24px',
                    fontFamily:    FONT,
                    fontSize:      '18px',
                    color:         `${GOLD}99`,
                    letterSpacing: '3px',
                  }}
                >
                  PRESS ENTER TO CONFIRM
                </div>
              )}

              {selected.locked && (
                <div
                  style={{
                    position:      'relative',
                    marginTop:     '24px',
                    fontFamily:    FONT,
                    fontSize:      '18px',
                    color:         GREY_MID,
                    letterSpacing: '3px',
                  }}
                >
                  COMPLETE EARLIER WAVES TO UNLOCK
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Footer spacer for ControlBar */}
      <div style={{ paddingBottom: '44px', flexShrink: 0 }} />
      <ControlBar hints={controlHints} />
    </div>
  )
}
