/**
 * network/index.ts — public API + initialiser.
 * Call initNetwork() once after boot.
 */

export { gameClient, roomListClient, RoomListClient } from './NetworkClient.js'
export { encodeKeys, decodeKeys, INPUT_BITS }         from './types.js'
export type {
  C2SMessage, S2CMessage, PlayerSlot, LobbyStatus,
  RoomInfo, EntityStateNet, RoomListS2C,
}                                                     from './types.js'

import { initLobbyManager } from './LobbyManager.js'

export function initNetwork(): void {
  initLobbyManager()
}
