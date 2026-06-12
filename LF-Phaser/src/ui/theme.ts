/**
 * Design tokens — single source of truth for all UI colour, typography,
 * spacing, animation, and geometry constants.
 *
 * Pure data: no logic, no imports.
 */

// ---------------------------------------------------------------------------
// Core backgrounds — near-black gothic
// ---------------------------------------------------------------------------
export const DEEP_VOID    = '#040209'   // absolute black-purple base
export const VOID         = '#0B0618'   // dark purple-black
export const PANEL        = '#130A24'   // dark purple panel
export const PANEL_BORDER = '#3C1260'   // muted purple border

// ---------------------------------------------------------------------------
// Gothic accent — primary active / interactive colour
// ---------------------------------------------------------------------------
export const BLOOD        = '#C00A1C'   // blood red  — replaces gold in UI chrome
export const BLOOD_BRIGHT = '#F01428'   // vivid blood — hover / glow
export const BLOOD_DIM    = '#6E0010'   // dark blood  — subtle fills

// ---------------------------------------------------------------------------
// Gothic purple — supporting accent
// ---------------------------------------------------------------------------
export const GOTHIC_PURPLE       = '#7B28AA'
export const GOTHIC_PURPLE_LIGHT = '#A848D8'

// ---------------------------------------------------------------------------
// Premium / legendary — used sparingly (WIN, PERFECT, boss moments)
// ---------------------------------------------------------------------------
export const GOLD     = '#FFE040'
export const GOLD_DIM = '#B89A20'

// ---------------------------------------------------------------------------
// Team / player colours — keep as functional identifiers
// ---------------------------------------------------------------------------
export const ELECTRIC_BLUE = '#3DE8FF'  // P1 / Blue team
export const CRIMSON       = '#CC1030'  // P2 / Red  team

export const TEAM_COLOR: Record<'Blue' | 'Red', string> = {
  Blue: ELECTRIC_BLUE,
  Red:  CRIMSON,
}

// ---------------------------------------------------------------------------
// Other game accents
// ---------------------------------------------------------------------------
export const ACID_GREEN = '#50FF7A'
export const ORANGE     = '#FF9A30'
export const PURPLE     = '#C060FF'

// ---------------------------------------------------------------------------
// Text hierarchy
// ---------------------------------------------------------------------------
export const WHITE      = '#FFFFFF'     // reserved for pure-white flashes
export const BONE       = '#D4C4B4'     // parchment — primary readable text
export const GREY_LIGHT = '#907898'     // muted label text
export const GREY_MID   = '#564660'     // dim / secondary text
export const GREY_DIM   = '#271840'     // barely-visible depth tones

// ---------------------------------------------------------------------------
// Decorative
// ---------------------------------------------------------------------------
export const SCANLINE = 'rgba(180,0,20,0.025)'  // blood-red CRT lines

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------
export const FONT       = "'Exo 2', sans-serif"
export const FONT_GAME  = "'Monster Bites', Impact, Arial Black, sans-serif"
export const FONT_LABEL = "'Exo 2', sans-serif"
export const FONT_MONO  = "'Courier New', Courier, monospace"

export const SIZE_TITLE     = '88px'
export const SIZE_HEADING   = '40px'
export const SIZE_MENU_ITEM = '32px'
export const SIZE_CHAR_NAME = '26px'
export const SIZE_TAG       = '18px'
export const SIZE_KEY_HINT  = '16px'
export const SIZE_HUD_NAME  = '24px'
export const SIZE_DEBUG     = '11px'
export const SIZE_DISPLAY   = '96px'
export const SIZE_SUBTITLE  = '18px'

// ---------------------------------------------------------------------------
// Motion durations (ms)
// ---------------------------------------------------------------------------
export const FAST     = 80    // focus cursor jumps
export const MED      = 180   // panel enters, state changes
export const SLOW     = 350   // screen transitions
export const ENTRANCE = 200   // screen entrance fade-slide

// ---------------------------------------------------------------------------
// Geometry
// ---------------------------------------------------------------------------
export const SKEW_DEG    = -12
export const SKEW        = `skewX(${SKEW_DEG}deg)`
export const CORNER_CLIP = 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'

// ---------------------------------------------------------------------------
// Glass surface helpers
// ---------------------------------------------------------------------------
export const SURFACE_GLASS = 'rgba(10, 4, 20, 0.92)'
export const SURFACE_LIGHT = 'rgba(18, 8, 35, 0.75)'
export const BORDER_SUBTLE = 'rgba(140, 20, 60, 0.18)'   // blood-purple edge

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/** Returns a CSS `box-shadow` glow string for the given colour. */
export function glow(color: string, spread = 14): string {
  const inner = Math.round(spread * 0.4)
  return `0 0 ${inner}px ${color}, 0 0 ${spread}px ${color}80`
}

/** Returns a CSS `transform: skewX(…)` string. */
export function skewPanel(deg = SKEW_DEG): string {
  return `skewX(${deg}deg)`
}

/** Semi-transparent dark-purple glass background with optional opacity override. */
export function glassSurface(opacity = 0.92): string {
  return `rgba(10, 4, 20, ${opacity})`
}

/** Radial atmospheric glow layer for a colour at a given opacity fraction. */
export function atmosphericRadial(color: string, opacityHex = '1A'): string {
  return `radial-gradient(ellipse 80% 65% at 50% 38%, ${color}${opacityHex} 0%, transparent 70%)`
}
