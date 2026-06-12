/**
 * Shared character-grid tile components, used by CharacterSelectScreen
 * and CampaignSelectScreen. Dimensions are preserved from the original.
 */

import type { CharacterMeta } from '../types.js'
import { FONT, GOLD, GREY_MID, ELECTRIC_BLUE, glow } from '../theme.js'

export const TILE_W   = 94
export const TILE_H   = 180
export const SKEW_DEG = -12

export function CharTile({ char, cursorColor, flash = false, onClick }: {
  char:        CharacterMeta
  cursorColor: string | null
  flash?:      boolean
  onClick:     () => void
}) {
  const active = cursorColor !== null
  const borderColor = active ? (cursorColor ?? ELECTRIC_BLUE) : '#2A2F55'

  return (
    <div
      onClick={onClick}
      style={{
        position:   'relative',
        width:      `${TILE_W}px`,
        height:     `${TILE_H}px`,
        transform:  `skewX(${SKEW_DEG}deg) scale(${active ? 1.08 : 1})`,
        background: active ? '#1C2040' : '#111',
        border:     `${active ? 3 : 2}px solid ${borderColor}`,
        cursor:     'pointer',
        overflow:   'hidden',
        transition: 'transform 80ms ease, border-color 80ms ease, box-shadow 80ms ease',
        boxShadow:  active ? glow(cursorColor ?? ELECTRIC_BLUE, 20) : 'none',
      }}
    >
      <img
        src={char.headSprite}
        alt={char.name}
        style={{
          position:       'absolute',
          inset:          0,
          width:          '100%',
          height:         '100%',
          objectFit:      'cover',
          objectPosition: 'center top',
          imageRendering: 'pixelated',
          filter:         active ? 'none' : 'saturate(0.3) brightness(0.55)',
        }}
      />

      {/* Active: thin GOLD bottom bar */}
      {active && (
        <div style={{
          position:   'absolute',
          bottom:     0,
          left:       0,
          right:      0,
          height:     '3px',
          background: GOLD,
        }} />
      )}

      {/* Confirm flash overlay */}
      {flash && (
        <div style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          animation:     'flash-white 350ms ease-out both',
        }} />
      )}
    </div>
  )
}

export function TileLabel({ name, active }: { name: string; active: boolean }) {
  return (
    <div
      style={{
        fontFamily:    FONT,
        fontSize:      '13px',
        letterSpacing: '1px',
        color:         active ? GOLD : GREY_MID,
        textAlign:     'center',
        marginTop:     '5px',
        width:         `${TILE_W}px`,
        overflow:      'hidden',
        whiteSpace:    'nowrap',
        textOverflow:  'ellipsis',
        textTransform: 'uppercase',
      }}
    >
      {name}
    </div>
  )
}
