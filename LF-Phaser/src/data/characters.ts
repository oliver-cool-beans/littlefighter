import type { CharacterMeta } from '../ui/types.js'

/**
 * Registry of all playable characters.
 * id matches the LF2 character number used in opoint / scene logic.
 *
 * headSprite paths are relative to `public/` — loaded as `<img>` tags
 * via the `public/sprite/` symlink to LF2_19 assets.
 */
export const CHARACTERS: CharacterMeta[] = [
  // Original LF2 characters
  { id: 11, name: 'Davis',    headSprite: 'sprite/davis_f.png',    headW: 36, headH: 36 },
  { id: 12, name: 'Dennis',   headSprite: 'sprite/dennis_f.png',   headW: 36, headH: 36 },
  { id: 13, name: 'Deep',     headSprite: 'sprite/deep_f.png',     headW: 36, headH: 36 },
  { id: 14, name: 'John',     headSprite: 'sprite/john_f.png',     headW: 36, headH: 36 },
  { id: 15, name: 'Henry',    headSprite: 'sprite/henry_f.png',    headW: 36, headH: 36 },
  { id: 16, name: 'Firen',    headSprite: 'sprite/firen_f.png',    headW: 36, headH: 36 },
  { id: 17, name: 'Freeze',   headSprite: 'sprite/freeze_f.png',   headW: 36, headH: 36 },
  { id: 18, name: 'Louis',    headSprite: 'sprite/louis_f.png',    headW: 36, headH: 36 },
  { id: 19, name: 'Rudolf',   headSprite: 'sprite/rudolf_f.png',   headW: 36, headH: 36 },
  { id: 20, name: 'Julian',   headSprite: 'sprite/julian_f.png',   headW: 36, headH: 36 },
  { id: 21, name: 'Bandit',   headSprite: 'sprite/bandit_f.png',   headW: 36, headH: 36 },
  { id: 22, name: 'Woody',    headSprite: 'sprite/woody_f.png',    headW: 36, headH: 36 },
  { id: 37, name: 'Knight',   headSprite: 'sprite/knight_f.png',   headW: 36, headH: 36 },
  // R-LF2 new characters
  { id: 23, name: 'Jan',      headSprite: 'sprite/jan_f.png',      headW: 36, headH: 36 },
  { id: 24, name: 'Firzen',   headSprite: 'sprite/firzen_f.png',   headW: 36, headH: 36 },
  { id: 25, name: 'Richter',  headSprite: 'sprite/richter_f.png',  headW: 36, headH: 36 },
  { id: 26, name: 'CL',       headSprite: 'sprite/cl_f.png',       headW: 36, headH: 36 },
  { id: 27, name: 'Justin',   headSprite: 'sprite/justin_f.png',   headW: 36, headH: 36 },
  { id: 28, name: 'Monk',     headSprite: 'sprite/monk_f.png',     headW: 36, headH: 36 },
  { id: 29, name: 'Mark',     headSprite: 'sprite/mark_f.png',     headW: 36, headH: 36 },
  { id: 30, name: 'Hunter',   headSprite: 'sprite/hunter_f.png',   headW: 36, headH: 36 },
  { id: 31, name: 'Jack',     headSprite: 'sprite/jack_f.png',     headW: 36, headH: 36 },
  { id: 32, name: 'Sorcerer', headSprite: 'sprite/sorcerer_f.png', headW: 36, headH: 36 },
  { id: 33, name: 'Bat',      headSprite: 'sprite/bat_f.png',      headW: 36, headH: 36 },
  { id: 34, name: 'LouisEX',  headSprite: 'sprite/louisEX_f.png',  headW: 36, headH: 36 },
  { id: 35, name: 'BanditEX', headSprite: 'sprite/bandit_f.png',   headW: 36, headH: 36 },
  { id: 50, name: 'Guardian', headSprite: 'sprite/guardian_f.png', headW: 36, headH: 36 },
]
