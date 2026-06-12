/**
 * Sound engine type definitions.
 *
 * `SoundId` includes:
 *  - Semantic event names used directly in game code ('hit', 'jump', etc.)
 *  - Raw soundpack sprite IDs in '1/NNN' format used by frame data
 *  - UI sound names ('ui_confirm', 'ui_cursor')
 */

/** Semantic and raw sound identifier. */
export type SoundId =
  | 'hit'
  | 'heavy_hit'
  | 'punch'
  | 'jump'
  | 'land'
  | 'step'
  | 'pick'
  | 'throw'
  | 'energy'
  | 'ui_confirm'
  | 'ui_cursor'
  | 'ui_cancel'
  | (string & {})   // allow raw frame-data strings like '1/003'

export type ChannelName = 'sfx' | 'music' | 'ui'

export interface PlayOptions {
  volume?: number   // 0–1, defaults to channel volume
  rate?:   number   // playback rate, default 1.0
  pan?:    number   // stereo pan -1 (left) to +1 (right)
  loop?:   boolean
}
