/**
 * NetworkClient.ts — manages a single WebSocket connection to a GameRoom party.
 *
 * High-frequency game messages (state, input) are sent and received as compact
 * binary frames via codec.ts. All lobby/control messages stay as JSON.
 *
 * Usage:
 *   gameClient.on('lobby', handler)
 *   gameClient.connect('ABCDEF', 'localhost:1999')
 *   gameClient.send({ type: 'join', displayName: 'Oliver' })
 *   gameClient.sendBinary(encodeInput(tick, keys))
 *   gameClient.disconnect()
 */

import type { C2SMessage, S2CMessage } from './types.js'
import { MSG_STATE, MSG_INPUT, decodeState, decodeInput } from './codec.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyHandler = (arg?: any) => void

export class NetworkClient {
  private readonly _msgHandlers = new Map<string, AnyHandler[]>()
  private readonly _evtHandlers = new Map<string, AnyHandler[]>()
  private _ws:       WebSocket | null = null
  private _roomCode  = ''

  get roomCode() { return this._roomCode }
  get connected() { return this._ws?.readyState === WebSocket.OPEN }

  connect(roomCode: string, host: string, isPrivate = false): void {
    this.disconnect()
    this._roomCode = roomCode
    const proto = host.startsWith('localhost') ? 'ws' : 'wss'
    const priv  = isPrivate ? '&private=1' : ''
    const url   = `${proto}://${host}/parties/gameroom/${roomCode}?_pk=lf2${priv}`
    this._ws = new WebSocket(url)
    this._ws.binaryType = 'arraybuffer'   // receive binary frames as ArrayBuffer, not Blob

    this._ws.onopen    = () => this._fireEvt('open')
    this._ws.onclose   = () => this._fireEvt('close')
    this._ws.onerror   = () => this._fireEvt('error')
    this._ws.onmessage = (e) => {
      if (e.data instanceof ArrayBuffer) {
        this._handleBinary(e.data)
        return
      }
      try {
        const msg = JSON.parse(e.data as string) as S2CMessage
        this._fireMsgHandler('*', msg)
        this._fireMsgHandler(msg.type, msg)
      } catch { /* ignore malformed */ }
    }
  }

  /** Send a JSON control message (join, chat, pause, etc.). */
  send(msg: C2SMessage): void {
    if (this._ws?.readyState === WebSocket.OPEN) {
      this._ws.send(JSON.stringify(msg))
    }
  }

  /** Send a pre-encoded binary game message (state or input). */
  sendBinary(buf: ArrayBuffer): void {
    if (this._ws?.readyState === WebSocket.OPEN) {
      this._ws.send(buf)
    }
  }

  disconnect(): void {
    this._ws?.close()
    this._ws = null
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event: string, handler: (arg?: any) => void): void {
    const isEvt = ['open', 'close', 'error'].includes(event)
    const map   = isEvt ? this._evtHandlers : this._msgHandlers
    const arr   = map.get(event) ?? []
    arr.push(handler)
    map.set(event, arr)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off(event: string, handler: (arg?: any) => void): void {
    const isEvt = ['open', 'close', 'error'].includes(event)
    const map   = isEvt ? this._evtHandlers : this._msgHandlers
    map.set(event, (map.get(event) ?? []).filter(h => h !== handler))
  }

  /**
   * Decode a binary frame and fire it through the same named-event system used
   * by JSON messages, so LobbyManager handlers work for both encodings.
   */
  private _handleBinary(buf: ArrayBuffer): void {
    const type = new Uint8Array(buf)[0]
    if (type === MSG_STATE) {
      // Fires as 'state' — picked up by LobbyManager's _onServerState handler
      this._fireMsgHandler('state', decodeState(buf) as unknown as S2CMessage)
    } else if (type === MSG_INPUT) {
      // Fires as 'input' — picked up by LobbyManager's _onRemoteInput handler
      this._fireMsgHandler('input', decodeInput(buf) as unknown as S2CMessage)
    }
  }

  private _fireMsgHandler(type: string, msg: S2CMessage): void {
    for (const h of this._msgHandlers.get(type) ?? []) h(msg)
  }

  private _fireEvt(type: string): void {
    for (const h of this._evtHandlers.get(type) ?? []) h()
  }
}

/** Singleton WebSocket client for the current game room. */
export const gameClient = new NetworkClient()

/** Singleton WebSocket client for the room list. */
export class RoomListClient {
  private _ws: WebSocket | null = null
  private _handlers: Array<(rooms: import('./types.js').RoomInfo[]) => void> = []

  connect(host: string): void {
    this.disconnect()
    const proto = host.startsWith('localhost') ? 'ws' : 'wss'
    this._ws = new WebSocket(`${proto}://${host}/parties/roomlist/registry`)
    this._ws.onmessage = (e) => {
      try {
        const msg = JSON.parse(e.data as string)
        if (msg.type === 'rooms') {
          for (const h of this._handlers) h(msg.rooms)
        }
      } catch { /* ignore */ }
    }
  }

  onRooms(handler: (rooms: import('./types.js').RoomInfo[]) => void): void {
    this._handlers.push(handler)
  }

  offRooms(handler: (rooms: import('./types.js').RoomInfo[]) => void): void {
    this._handlers = this._handlers.filter(h => h !== handler)
  }

  disconnect(): void {
    this._ws?.close()
    this._ws = null
  }
}

export const roomListClient = new RoomListClient()
