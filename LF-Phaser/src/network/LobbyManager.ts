/**
 * LobbyManager.ts — orchestrates the online lobby flow.
 *
 * Listens to bus events from the UI, manages the GameRoom WebSocket,
 * and emits bus events back to React + Phaser.
 *
 * Bus flow:
 *   React: net:create-lobby / net:join-lobby → LobbyManager.connect()
 *   Server → React: net:lobby-update / net:countdown / net:match-start
 *   React: net:send-chat → server
 *   React: net:pause-request / net:resume-request → server
 *   MatchScene: net:broadcast-state → server (host only)
 *   MatchScene: net:local-input → server
 *   Server → MatchScene: net:server-state / net:remote-input
 */

import { bus }                       from '../ui/bus.js'
import { gameClient, roomListClient } from './NetworkClient.js'
import type { S2CMessage, PlayerSlot, LobbyStatus, RoomInfo } from './types.js'
export { encodeKeys } from './types.js'
import type { LobbyConfig, TeamConfig, SlotConfig }           from '../ui/types.js'
import { pendingLobbyConfig }        from '../scenes/MatchScene.js'
import { encodeState, encodeInput }  from './codec.js'

const HOST = import.meta.env['VITE_PARTYKIT_HOST'] ?? 'localhost:1999'

const TEAM_COLORS = ['Blue', 'Red', 'Green', 'Yellow', 'Purple', 'Orange']

let _initialized      = false
let _localPlayerIndex = 0
let _currentSlots:    PlayerSlot[] = []
let _roomsHandler:    ((rooms: RoomInfo[]) => void) | null = null

export function initLobbyManager(): void {
  if (_initialized) return
  _initialized = true

  // ── React → network ──────────────────────────────────────────────────────

  bus.on('net:create-lobby', ({ displayName, characterId, isPrivate }) => {
    const code = _genCode()
    gameClient.connect(code, HOST, isPrivate)
    gameClient.on('open', () => {
      gameClient.send({ type: 'join', displayName, ...(characterId ? { characterId } : {}) })
    })
    _attachGameHandlers()
  })

  bus.on('net:join-lobby', ({ code, displayName, characterId }) => {
    gameClient.connect(code.toUpperCase(), HOST, false)
    gameClient.on('open', () => {
      gameClient.send({ type: 'join', displayName, ...(characterId ? { characterId } : {}) })
    })
    _attachGameHandlers()
  })

  bus.on('net:set-character', ({ characterId }) => {
    gameClient.send({ type: 'character', characterId })
  })

  bus.on('net:start', () => {
    gameClient.send({ type: 'start' })
  })

  bus.on('net:send-chat', ({ text }) => {
    gameClient.send({ type: 'chat', text })
  })

  bus.on('net:send-cursor', ({ characterId }) => {
    gameClient.send({ type: 'cursor', characterId })
  })

  bus.on('net:pause-request', () => {
    gameClient.send({ type: 'pause' })
  })

  bus.on('net:resume-request', () => {
    gameClient.send({ type: 'resume' })
  })

  bus.on('net:disconnect', () => {
    gameClient.disconnect()
    roomListClient.disconnect()
  })

  // ── MatchScene → network (host relay) ────────────────────────────────────

  bus.on('net:broadcast-state', ({ tick, entities, freezeFrames, shakeSeverity }) => {
    gameClient.sendBinary(encodeState(tick, entities, freezeFrames, shakeSeverity))
  })

  bus.on('net:local-input', ({ tick, keys }) => {
    gameClient.sendBinary(encodeInput(tick, keys, _localPlayerIndex))
  })

  bus.on('net:subscribe-rooms', () => {
    roomListClient.connect(HOST)
    if (_roomsHandler) roomListClient.offRooms(_roomsHandler)
    _roomsHandler = rooms => bus.emit('net:rooms-update', { rooms })
    roomListClient.onRooms(_roomsHandler)
  })

  bus.on('net:unsubscribe-rooms', () => {
    if (_roomsHandler) {
      roomListClient.offRooms(_roomsHandler)
      _roomsHandler = null
    }
    roomListClient.disconnect()
  })
}

function _attachGameHandlers(): void {
  gameClient.off('lobby',     _onLobby as never)
  gameClient.off('countdown', _onCountdown as never)
  gameClient.off('start',     _onStart as never)
  gameClient.off('state',     _onServerState as never)
  gameClient.off('input',     _onRemoteInput as never)
  gameClient.off('end',       _onEnd as never)
  gameClient.off('chat',      _onChat as never)
  gameClient.off('cursor',    _onCursor as never)
  gameClient.off('pause',     _onPause as never)
  gameClient.off('resume',    _onResume as never)
  gameClient.off('error',     _onError as never)
  gameClient.off('close',     _onClose as never)

  gameClient.on('lobby',     _onLobby)
  gameClient.on('countdown', _onCountdown)
  gameClient.on('start',     _onStart)
  gameClient.on('state',     _onServerState)
  gameClient.on('input',     _onRemoteInput)
  gameClient.on('end',       _onEnd)
  gameClient.on('chat',      _onChat)
  gameClient.on('cursor',    _onCursor)
  gameClient.on('pause',     _onPause)
  gameClient.on('resume',    _onResume)
  gameClient.on('error',     _onError)
  gameClient.on('close',     _onClose)
}

function _onLobby(msg: S2CMessage & { type: 'lobby' }): void {
  _currentSlots = msg.slots
  bus.emit('net:lobby-update', { code: msg.code, slots: msg.slots, status: msg.status })
}

function _onCountdown(msg: S2CMessage & { type: 'countdown' }): void {
  bus.emit('net:countdown', { seconds: msg.seconds })
}

function _onStart(msg: S2CMessage & { type: 'start' }): void {
  _localPlayerIndex = msg.playerIndex

  // Build LobbyConfig: group server slots by team, mark each as local/remote/bot
  const teamMap = new Map<number, PlayerSlot[]>()
  for (const slot of _currentSlots) {
    const arr = teamMap.get(slot.team) ?? []
    arr.push(slot)
    teamMap.set(slot.team, arr)
  }

  const teams: TeamConfig[] = []
  for (const [teamIdx, teamSlots] of [...teamMap.entries()].sort((a, b) => a[0] - b[0])) {
    const slots: SlotConfig[] = teamSlots.map(s => ({
      characterId:        s.characterId ?? 11,
      isHuman:            s.playerIndex === msg.playerIndex,
      aiDifficulty:       s.aiDifficulty,
      networkPlayerIndex: (!s.isBot && s.playerIndex !== msg.playerIndex) ? s.playerIndex : undefined,
    }))
    teams.push({ color: TEAM_COLORS[teamIdx] ?? 'Gray', slots })
  }

  const config: LobbyConfig = {
    stageId:          1,
    teams,
    networkMode:      true,
    localPlayerIndex: msg.playerIndex,
    seed:             msg.seed,
  }

  Object.assign(pendingLobbyConfig, config)

  bus.emit('net:match-start', {
    seed:        msg.seed,
    playerIndex: msg.playerIndex,
    lobbyState:  { code: gameClient.roomCode, slots: _currentSlots },
  })

  bus.emit('game:lobby-confirm', config)
}

function _onServerState(msg: S2CMessage & { type: 'state' } & { freezeFrames?: number; shakeSeverity?: number }): void {
  bus.emit('net:server-state', { tick: msg.tick, entities: msg.entities, freezeFrames: msg.freezeFrames ?? 0, shakeSeverity: msg.shakeSeverity ?? 0 })
}

function _onRemoteInput(msg: S2CMessage & { type: 'input' }): void {
  bus.emit('net:remote-input', { tick: msg.tick, playerIndex: msg.playerIndex, keys: msg.keys })
}

function _onEnd(msg: S2CMessage & { type: 'end' }): void {
  bus.emit('net:match-end', { winnerTeam: msg.winnerTeam })
}

function _onChat(msg: S2CMessage & { type: 'chat' }): void {
  bus.emit('net:chat-received', { playerIndex: msg.playerIndex, displayName: msg.displayName, text: msg.text })
}

function _onCursor(msg: S2CMessage & { type: 'cursor' }): void {
  bus.emit('net:cursor-update', { playerIndex: msg.playerIndex, characterId: msg.characterId })
}

function _onPause(msg: S2CMessage & { type: 'pause' }): void {
  bus.emit('net:game-paused', { playerIndex: msg.playerIndex, pausesRemaining: msg.pausesRemaining })
}

function _onResume(_msg: S2CMessage & { type: 'resume' }): void {
  bus.emit('net:game-resumed', undefined)
}

function _onError(msg: S2CMessage & { type: 'error' }): void {
  bus.emit('net:error', { code: msg.code, message: msg.message })
}

function _onClose(): void {
  const finished: LobbyStatus = 'finished'
  bus.emit('net:lobby-update', { code: gameClient.roomCode, slots: [], status: finished })
}

function _genCode(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase()
}

export function localPlayerIndex(): number { return _localPlayerIndex }
