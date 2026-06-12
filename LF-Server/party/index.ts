/**
 * party/index.ts — GameRoom party server.
 *
 * Supports up to MAX_PLAYERS players with flexible team/bot configuration.
 * Host = the first player to join (their playerIndex stays 0 for the session).
 *
 * Game relay model:
 *   - Host runs the full simulation including AI for bots.
 *   - Host sends entity state each tick; server fans it out to all non-hosts.
 *   - Each non-host sends their input; server fans it out to ALL other peers
 *     (host needs it to apply inputs; other non-hosts need it for CSP).
 */

import type * as Party from 'partykit/server'
import {
  MAX_PAUSES,
  MAX_PLAYERS,
  type C2SMessage,
  type S2CMessage,
  type PlayerSlot,
  type LobbyStatus,
} from './protocol'

export default class GameRoom implements Party.Server {
  private slots:      PlayerSlot[] = []
  private readonly connToIdx   = new Map<string, number>()  // connId → playerIndex (humans only)
  private readonly pausesUsed  = new Map<number, number>()  // playerIndex → pause count
  private hostConnId  = ''
  private status:     LobbyStatus = 'waiting'
  private seed        = 0
  private isPaused    = false
  private isPrivate   = false
  private countdown   = 0

  constructor(readonly room: Party.Room) {}

  async onConnect(conn: Party.Connection, ctx: Party.ConnectionContext) {
    const url = new URL(ctx.request.url)
    if (this.connToIdx.size === 0 && this.slots.length === 0) {
      this.isPrivate = url.searchParams.get('private') === '1'
      this.hostConnId = conn.id
    }

    if (this.connToIdx.size >= MAX_PLAYERS) {
      conn.send(this._msg({ type: 'error', code: 'room_full', message: `Room is full (max ${MAX_PLAYERS} players)` }))
      conn.close()
      return
    }

    this._assignHumanSlot(conn.id)
    conn.send(this._msg({ type: 'lobby', code: this.room.id, slots: this.slots, status: this.status }))
    this._broadcastExcept(conn.id, { type: 'lobby', code: this.room.id, slots: this.slots, status: this.status })
    await this._notifyRegistry()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async onMessage(message: any, sender: Party.Connection) {
    if (message instanceof ArrayBuffer || ArrayBuffer.isView(message)) {
      this._handleBinary(message instanceof ArrayBuffer ? message : message.buffer, sender)
      return
    }
    let msg: C2SMessage
    try { msg = JSON.parse(message as string) } catch { return }
    const playerIndex = this.connToIdx.get(sender.id)
    if (playerIndex === undefined) return

    switch (msg.type) {
      case 'join':        this._onJoin(msg, playerIndex);              break
      case 'character':   this._onCharacter(msg, playerIndex);         break
      case 'room-config': this._onRoomConfig(msg, playerIndex, sender); break
      case 'start':       await this._onStart(playerIndex, sender);    break
      case 'chat':        this._onChat(msg, playerIndex);              break
      case 'pause':       this._onPause(playerIndex, sender);          break
      case 'resume':      this._onResume();                            break
      case 'ping':
        sender.send(this._msg({ type: 'pong', timestamp: msg.timestamp, serverTime: Date.now() }))
        break
    }
  }

  private _handleBinary(buf: ArrayBuffer, sender: Party.Connection): void {
    const playerIndex = this.connToIdx.get(sender.id)
    if (playerIndex === undefined || this.status !== 'playing') return
    const msgType = new Uint8Array(buf)[0]
    // State: only the host (playerIndex 0) broadcasts; relay to all non-hosts
    if (msgType === 0x01 && playerIndex === 0) {
      this._broadcastBinaryExcept(sender.id, buf)
      return
    }
    // Input: relay to ALL other peers — host needs it to apply, non-hosts need it for CSP
    if (msgType === 0x02 && !this.isPaused) {
      this._broadcastBinaryExcept(sender.id, buf)
    }
  }

  private _assignHumanSlot(connId: string): void {
    // Fill the first vacant human slot (displayName === '') if any
    const vacant = this.slots.find(s => !s.isBot && s.displayName === '')
    if (vacant) {
      vacant.displayName = `Player ${this.connToIdx.size + 1}`
      this.connToIdx.set(connId, vacant.playerIndex)
      this._updateLobbyStatus()
      return
    }
    // Auto-create a new human slot on team 0 (default for open rooms)
    const playerIndex = this.slots.length
    this.slots.push({
      playerIndex,
      team:         0,
      isBot:        false,
      displayName:  `Player ${this.connToIdx.size + 1}`,
      characterId:  null,
      ready:        false,
      aiDifficulty: 'medium',
    })
    this.connToIdx.set(connId, playerIndex)
    this._updateLobbyStatus()
  }

  private _onJoin(msg: C2SMessage & { type: 'join' }, playerIndex: number): void {
    const slot = this._slotAt(playerIndex)
    if (!slot) return
    const raw = msg.displayName?.trim() ?? ''
    slot.displayName = raw.slice(0, 20) || slot.displayName
    if (msg.characterId !== undefined) {
      slot.characterId = msg.characterId
      slot.ready       = true
    }
    this._updateLobbyStatus()
    this._broadcast({ type: 'lobby', code: this.room.id, slots: this.slots, status: this.status })
  }

  private _onCharacter(msg: C2SMessage & { type: 'character' }, playerIndex: number): void {
    const slot = this._slotAt(playerIndex)
    if (!slot) return
    slot.characterId = msg.characterId
    slot.ready       = true
    this._updateLobbyStatus()
    this._broadcast({ type: 'lobby', code: this.room.id, slots: this.slots, status: this.status })
  }

  private _onRoomConfig(msg: C2SMessage & { type: 'room-config' }, playerIndex: number, sender: Party.Connection): void {
    if (sender.id !== this.hostConnId) {
      sender.send(this._msg({ type: 'error', code: 'not_allowed', message: 'Only the host can configure the room' }))
      return
    }
    if (this.status !== 'waiting') {
      sender.send(this._msg({ type: 'error', code: 'not_allowed', message: 'Cannot reconfigure after lobby is ready' }))
      return
    }
    if (msg.slots.length > MAX_PLAYERS) {
      sender.send(this._msg({ type: 'error', code: 'too_many', message: `Max ${MAX_PLAYERS} slots` }))
      return
    }

    // Retain existing human connections in join order
    const existingConns = Array.from(this.connToIdx.keys())
    this.slots     = []
    this.connToIdx.clear()

    let humanConnIdx = 0
    for (let i = 0; i < msg.slots.length; i++) {
      const def = msg.slots[i]
      if (def.isBot) {
        this.slots.push({
          playerIndex:  i,
          team:         def.team,
          isBot:        true,
          displayName:  `Bot`,
          characterId:  def.characterId ?? 11,
          ready:        true,
          aiDifficulty: def.aiDifficulty ?? 'medium',
        })
      } else {
        const connId = existingConns[humanConnIdx]
        this.slots.push({
          playerIndex:  i,
          team:         def.team,
          isBot:        false,
          displayName:  connId ? `Player ${humanConnIdx + 1}` : '',
          characterId:  null,
          ready:        false,
          aiDifficulty: 'medium',
        })
        if (connId) this.connToIdx.set(connId, i)
        humanConnIdx++
      }
    }

    this._updateLobbyStatus()
    this._broadcast({ type: 'lobby', code: this.room.id, slots: this.slots, status: this.status })
  }

  private async _onStart(playerIndex: number, sender: Party.Connection): Promise<void> {
    if (sender.id !== this.hostConnId || this.status !== 'ready') {
      sender.send(this._msg({ type: 'error', code: 'not_allowed', message: 'Only the host can start when all human slots are ready' }))
      return
    }
    await this._beginCountdown()
  }

  private _onChat(msg: C2SMessage & { type: 'chat' }, playerIndex: number): void {
    const slot = this._slotAt(playerIndex)
    if (!slot) return
    const text = msg.text?.trim().slice(0, 120)
    if (text) this._broadcast({ type: 'chat', playerIndex, displayName: slot.displayName, text })
  }

  private _onPause(playerIndex: number, sender: Party.Connection): void {
    if (this.status !== 'playing' || this.isPaused) return
    const used = this.pausesUsed.get(playerIndex) ?? 0
    if (used >= MAX_PAUSES) {
      sender.send(this._msg({ type: 'error', code: 'no_pauses', message: 'No pauses remaining' }))
      return
    }
    this.pausesUsed.set(playerIndex, used + 1)
    this.isPaused = true
    this._broadcast({ type: 'pause', playerIndex, pausesRemaining: MAX_PAUSES - (used + 1) })
  }

  private _onResume(): void {
    if (!this.isPaused) return
    this.isPaused = false
    this._broadcast({ type: 'resume' })
  }

  async onClose(conn: Party.Connection) {
    const playerIndex = this.connToIdx.get(conn.id)
    this.connToIdx.delete(conn.id)
    if (playerIndex !== undefined) {
      const slot = this._slotAt(playerIndex)
      if (slot) slot.displayName = ''
    }

    if (this.connToIdx.size === 0) {
      await this.room.storage.deleteAll()
      await this._notifyRegistry()
      return
    }

    if (this.status === 'playing' || this.status === 'countdown') {
      // Declare the team(s) that still have live human connections as winners
      const survivingTeams = new Set(
        Array.from(this.connToIdx.values())
          .map(pi => this._slotAt(pi)?.team ?? 0)
      )
      const winnerTeam = survivingTeams.values().next().value ?? 0
      this._broadcast({ type: 'end', winnerTeam })
      this.status = 'finished'
    } else {
      this.status = 'waiting'
    }

    this.isPaused = false
    this._broadcast({ type: 'lobby', code: this.room.id, slots: this.slots, status: this.status })
    await this._notifyRegistry()
  }

  async onRequest(req: Party.Request): Promise<Response> {
    if (req.method === 'GET') {
      return Response.json({
        code:    this.room.id,
        players: this.connToIdx.size,
        status:  this.status,
        private: this.isPrivate,
      })
    }
    return new Response('Not Found', { status: 404 })
  }

  // ── Countdown ─────────────────────────────────────────────────────────────

  async onAlarm() {
    if (this.status !== 'countdown') return
    if (this.countdown > 0) {
      this._broadcast({ type: 'countdown', seconds: this.countdown })
      this.countdown--
      await this.room.storage.setAlarm(Date.now() + 1000)
    } else {
      await this._launchMatch()
    }
  }

  private async _beginCountdown(): Promise<void> {
    this.status    = 'countdown'
    this.countdown = 3
    this._broadcast({ type: 'lobby', code: this.room.id, slots: this.slots, status: this.status })
    this._broadcast({ type: 'countdown', seconds: this.countdown })
    this.countdown--
    await this.room.storage.setAlarm(Date.now() + 1000)
    await this._notifyRegistry()
  }

  private async _launchMatch(): Promise<void> {
    this.status = 'playing'
    this.seed   = Math.trunc(Math.random() * 0xFFFFFF)
    for (const [connId, playerIndex] of this.connToIdx) {
      this.room.getConnection(connId)?.send(this._msg({ type: 'start', seed: this.seed, playerIndex }))
    }
    await this._notifyRegistry()
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private _slotAt(playerIndex: number): PlayerSlot | undefined {
    return this.slots.find(s => s.playerIndex === playerIndex)
  }

  private _updateLobbyStatus(): void {
    if (['playing', 'countdown', 'finished'].includes(this.status)) return
    const joinedHumans = this.slots.filter(s => !s.isBot && s.displayName !== '')
    this.status = joinedHumans.length > 0 && joinedHumans.every(s => s.ready) ? 'ready' : 'waiting'
  }

  private _broadcast(msg: S2CMessage): void {
    this.room.broadcast(this._msg(msg))
  }

  private _broadcastExcept(exceptId: string, msg: S2CMessage): void {
    this.room.broadcast(this._msg(msg), [exceptId])
  }

  private _broadcastBinaryExcept(exceptId: string, buf: ArrayBuffer): void {
    for (const [connId] of this.connToIdx) {
      if (connId !== exceptId) this.room.getConnection(connId)?.send(buf)
    }
  }

  private _msg(msg: S2CMessage): string {
    return JSON.stringify(msg)
  }

  private async _notifyRegistry(): Promise<void> {
    try {
      const registry = this.room.context.parties['roomlist'].get('registry')
      await registry.fetch('/update', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          code:    this.room.id,
          players: this.connToIdx.size,
          status:  this.status,
          private: this.isPrivate,
          remove:  this.connToIdx.size === 0,
        }),
      })
    } catch { /* non-fatal */ }
  }
}
