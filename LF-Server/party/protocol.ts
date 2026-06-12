/**
 * protocol.ts — canonical wire types for the LF2 multiplayer server.
 * Supports up to MAX_PLAYERS players with flexible team/bot configuration.
 */

export const MAX_PAUSES  = 3
export const MAX_PLAYERS = 20

export type LobbyStatus =
  | 'waiting'     // room open, awaiting players
  | 'ready'       // all joined human slots have selected characters
  | 'countdown'   // 3-second countdown running
  | 'playing'     // match in progress
  | 'finished'    // match over

// ── Slot definitions ──────────────────────────────────────────────────────────

/** Full slot state broadcast to all clients in lobby messages. */
export interface PlayerSlot {
  playerIndex:  number                        // stable 0-based index for the whole match
  team:         number                        // 0-based team index
  isBot:        boolean
  displayName:  string                        // empty = unfilled human slot
  characterId:  number | null
  ready:        boolean                       // characterId is set
  aiDifficulty: 'easy' | 'medium' | 'hard'
}

/** Sent by the host to pre-configure the slot layout before the match. */
export interface SlotDef {
  isBot:         boolean
  team:          number
  aiDifficulty?: 'easy' | 'medium' | 'hard'
  characterId?:  number    // for bots; defaults to 11 (Davis)
}

export interface RoomInfo {
  code:    string
  players: number          // current human count
  status:  LobbyStatus
  private: boolean
}

// ---------------------------------------------------------------------------
// Client → Server
// ---------------------------------------------------------------------------
export type C2SMessage =
  | { type: 'join';        displayName: string; characterId?: number }
  | { type: 'character';   characterId: number }
  | { type: 'room-config'; slots: SlotDef[] }    // host sets team/bot layout
  | { type: 'start' }                            // host triggers countdown
  | { type: 'input';       tick: number; playerIndex: number; keys: number }
  | { type: 'state';       tick: number; entities: EntityStateNet[] }
  | { type: 'chat';        text: string }
  | { type: 'pause' }
  | { type: 'resume' }
  | { type: 'ping';        timestamp: number }

// ---------------------------------------------------------------------------
// Server → Client
// ---------------------------------------------------------------------------
export type S2CMessage =
  | { type: 'lobby';     code: string; slots: PlayerSlot[]; status: LobbyStatus }
  | { type: 'countdown'; seconds: number }
  | { type: 'start';     seed: number; playerIndex: number }
  | { type: 'input';     tick: number; playerIndex: number; keys: number }
  | { type: 'state';     tick: number; entities: EntityStateNet[] }
  | { type: 'end';       winnerTeam: number }
  | { type: 'chat';      playerIndex: number; displayName: string; text: string }
  | { type: 'pause';     playerIndex: number; pausesRemaining: number }
  | { type: 'resume' }
  | { type: 'pong';      timestamp: number; serverTime: number }
  | { type: 'error';     code: string; message: string }

// ---------------------------------------------------------------------------
// Room list protocol (roomlist party)
// ---------------------------------------------------------------------------
export type RoomListC2S = | { type: 'list' }
export type RoomListS2C = | { type: 'rooms'; rooms: RoomInfo[] }

// ---------------------------------------------------------------------------
// Shared sub-types
// ---------------------------------------------------------------------------
export interface EntityStateNet {
  index:    number
  x?:       number
  z?:       number
  y?:       number
  vx?:      number
  vy?:      number
  vz?:      number
  facing?:  1 | -1
  frame?:   number
  hp?:      number
  mp?:      number
}

// Input bitmask bit positions
export const INPUT_BITS = {
  left:  0,
  right: 1,
  up:    2,
  down:  3,
  att:   4,
  jump:  5,
  def:   6,
} as const

export type InputKey = keyof typeof INPUT_BITS

export function encodeKeys(state: Record<string, number>): number {
  let mask = 0
  for (const [key, bit] of Object.entries(INPUT_BITS)) {
    if (state[key]) mask |= 1 << bit
  }
  return mask
}

export function decodeKeys(mask: number): Record<InputKey, number> {
  const result = {} as Record<InputKey, number>
  for (const [key, bit] of Object.entries(INPUT_BITS)) {
    result[key as InputKey] = (mask >> bit) & 1
  }
  return result
}
