/**
 * party/roomlist.ts — RoomRegistry party.
 *
 * Single instance (ID = 'registry'). Maintains the list of all active public
 * rooms. GameRoom POSTs to /update on every status change. Clients connect
 * via WebSocket to receive the live room list.
 */

import type * as Party from 'partykit/server'
import type { RoomInfo, RoomListC2S, RoomListS2C } from './protocol'

export default class RoomRegistry implements Party.Server {
  private rooms = new Map<string, RoomInfo>()

  constructor(readonly room: Party.Room) {}

  onConnect(conn: Party.Connection) {
    conn.send(JSON.stringify({ type: 'rooms', rooms: this._publicRooms() } satisfies RoomListS2C))
  }

  onMessage(message: string, sender: Party.Connection) {
    let msg: RoomListC2S
    try { msg = JSON.parse(message as string) } catch { return }
    if (msg.type === 'list') {
      sender.send(JSON.stringify({ type: 'rooms', rooms: this._publicRooms() } satisfies RoomListS2C))
    }
  }

  onClose() {}

  async onRequest(req: Party.Request): Promise<Response> {
    const url = new URL(req.url)

    if (req.method === 'POST' && url.pathname.endsWith('/update')) {
      const body = await req.json() as RoomInfo & { remove?: boolean }
      if (body.remove || body.players === 0) {
        this.rooms.delete(body.code)
      } else {
        this.rooms.set(body.code, {
          code:    body.code,
          players: body.players,
          status:  body.status,
          private: body.private ?? false,
        })
      }
      // Broadcast updated list to all connected subscribers
      this.room.broadcast(
        JSON.stringify({ type: 'rooms', rooms: this._publicRooms() } satisfies RoomListS2C)
      )
      return new Response('OK')
    }

    if (req.method === 'GET') {
      return Response.json({ rooms: this._publicRooms() })
    }

    return new Response('Not Found', { status: 404 })
  }

  private _publicRooms(): RoomInfo[] {
    return Array.from(this.rooms.values()).filter(r => !r.private && r.status !== 'finished')
  }
}
