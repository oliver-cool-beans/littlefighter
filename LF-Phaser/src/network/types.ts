/**
 * network/types.ts — client-side mirrors of the server wire types.
 * Keep in sync with LF-Server/party/protocol.ts.
 */

export const MAX_PAUSES  = 3
export const MAX_PLAYERS = 20

export type LobbyStatus =
  | 'waiting'
  | 'ready'
  | 'countdown'
  | 'playing'
  | 'finished'

export interface PlayerSlot {
  playerIndex:  number
  team:         number
  isBot:        boolean
  displayName:  string
  characterId:  number | null
  ready:        boolean
  aiDifficulty: 'easy' | 'medium' | 'hard'
}

export interface SlotDef {
  isBot:         boolean
  team:          number
  aiDifficulty?: 'easy' | 'medium' | 'hard'
  characterId?:  number
}

export interface RoomInfo {
  code:    string
  players: number
  status:  LobbyStatus
  private: boolean
}

export interface EntityStateNet {
  index:   number
  x?:      number
  z?:      number
  y?:      number
  vx?:     number
  vy?:     number
  vz?:     number
  facing?: 1 | -1
  frame?:  number
  hp?:     number
  mp?:     number
}

// C2S
export type C2SMessage =
  | { type: 'join';        displayName: string; characterId?: number }
  | { type: 'character';   characterId: number }
  | { type: 'room-config'; slots: SlotDef[] }
  | { type: 'start' }
  | { type: 'input';       tick: number; playerIndex: number; keys: number }
  | { type: 'state';       tick: number; entities: EntityStateNet[] }
  | { type: 'chat';        text: string }
  | { type: 'cursor';      characterId: number }
  | { type: 'pause' }
  | { type: 'resume' }
  | { type: 'ping';        timestamp: number }

// S2C
export type S2CMessage =
  | { type: 'lobby';     code: string; slots: PlayerSlot[]; status: LobbyStatus }
  | { type: 'countdown'; seconds: number }
  | { type: 'start';     seed: number; playerIndex: number }
  | { type: 'input';     tick: number; playerIndex: number; keys: number }
  | { type: 'state';     tick: number; entities: EntityStateNet[] }
  | { type: 'end';       winnerTeam: number }
  | { type: 'chat';      playerIndex: number; displayName: string; text: string }
  | { type: 'cursor';    playerIndex: number; characterId: number }
  | { type: 'pause';     playerIndex: number; pausesRemaining: number }
  | { type: 'resume' }
  | { type: 'pong';      timestamp: number; serverTime: number }
  | { type: 'error';     code: string; message: string }

// Room list
export type RoomListS2C = | { type: 'rooms'; rooms: RoomInfo[] }

// Input bitmask
export const INPUT_BITS: Record<string, number> = {
  left: 0, right: 1, up: 2, down: 3, att: 4, jump: 5, def: 6,
}

export function encodeKeys(state: Record<string, number>): number {
  let mask = 0
  for (const [key, bit] of Object.entries(INPUT_BITS)) {
    if (state[key]) mask |= 1 << bit
  }
  return mask
}

export function decodeKeys(mask: number): Record<string, number> {
  const result: Record<string, number> = {}
  for (const [key, bit] of Object.entries(INPUT_BITS)) {
    result[key] = (mask >> bit) & 1
  }
  return result
}
