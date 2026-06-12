import mitt from 'mitt'
import type { UIEvents } from './types.js'

/**
 * Singleton typed event bus shared between Phaser (game logic) and React (UI).
 * Neither side imports from the other — both only import this module.
 */
export const bus = mitt<UIEvents>()
