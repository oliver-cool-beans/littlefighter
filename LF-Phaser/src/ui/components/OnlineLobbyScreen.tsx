/**
 * OnlineLobbyScreen — full online multiplayer lobby UI.
 *
 * Views:
 *   setup   → name entry → create/join/browse
 *   browser → live list of public rooms
 *   room    → in-room: full character grid (same as singleplayer), player list, chat, start
 */

import { useEffect, useRef, useState } from 'react'
import { useRouter }       from '../router.js'
import { bus }             from '../bus.js'
import { CHARACTERS }      from '../../data/characters.js'
import { SoundEngine }     from '../../sound/SoundEngine.js'
import { CharTile, TileLabel, TILE_W } from './CharacterTile.js'
import { ScreenOverlay }   from '../primitives/ScreenOverlay.js'
import { ControlBar }      from '../primitives/ControlBar.js'
import type { PlayerSlot, LobbyStatus, RoomInfo } from '../../network/types.js'
import {
  FONT, FONT_LABEL, GOLD, CRIMSON, ELECTRIC_BLUE, ACID_GREEN, ORANGE,
  GREY_LIGHT, GREY_MID, GREY_DIM, PANEL, PANEL_BORDER, VOID,
  glow, glassSurface,
} from '../theme.js'

type View = 'setup' | 'browser' | 'room'

interface ChatMsg {
  playerIndex: number   // -1 = system notification
  displayName: string
  text:        string
  id:          number
  isSystem?:   boolean
}

let _chatSeq = 0

const COLS_MP = 5  // columns in the multiplayer character grid

const PLAYER_COLORS = [ELECTRIC_BLUE, CRIMSON, ACID_GREEN, GOLD, ORANGE]
function playerColor(pi: number): string {
  return PLAYER_COLORS[pi % PLAYER_COLORS.length] ?? ELECTRIC_BLUE
}

// ── Sub-components ──────────────────────────────────────────────────────────

function PlayerRow({
  slot, isLocal, cursorCharId,
}: {
  slot: PlayerSlot; isLocal: boolean; cursorCharId?: number | null
}) {
  const accent      = playerColor(slot.playerIndex)
  const displayId   = slot.ready ? slot.characterId : cursorCharId
  const char        = displayId != null ? CHARACTERS.find(c => c.id === displayId) : null
  const isBrowsing  = !slot.ready && cursorCharId != null
  return (
    <div style={{
      display:    'flex',
      alignItems: 'center',
      gap:        '12px',
      padding:    '8px 12px',
      background: `${accent}0A`,
      border:     `1px solid ${accent}33`,
    }}>
      <div style={{
        width: '44px', height: '44px', flexShrink: 0,
        background: GREY_DIM, border: `2px solid ${accent}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        {char
          ? <img src={char.headSprite} style={{ width: '36px', height: '36px', imageRendering: 'pixelated' }} />
          : <span style={{ color: GREY_MID, fontSize: '20px' }}>?</span>
        }
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT, fontSize: '20px', color: GREY_LIGHT, letterSpacing: '2px' }}>
          {slot.displayName}
          {isLocal && (
            <span style={{ fontSize: '10px', color: accent, marginLeft: '8px', fontFamily: FONT_LABEL, letterSpacing: '2px' }}>
              YOU
            </span>
          )}
        </div>
        <div style={{ fontFamily: FONT_LABEL, fontSize: '12px', color: GREY_MID, letterSpacing: '1px' }}>
          {slot.ready ? char?.name ?? 'Ready' : isBrowsing ? `Browsing: ${char?.name ?? '…'}` : 'Selecting…'}
        </div>
      </div>
      <div style={{
        fontFamily:    FONT,
        fontSize:      '12px',
        letterSpacing: '2px',
        color:         slot.ready ? ACID_GREEN : GREY_DIM,
        padding:       '2px 8px',
        border:        `1px solid ${slot.ready ? ACID_GREEN : GREY_DIM}`,
      }}>
        {slot.ready ? 'READY' : 'NOT READY'}
      </div>
    </div>
  )
}

function ChatPanel({
  messages, onSend,
}: { messages: ChatMsg[]; onSend: (text: string) => void }) {
  const [input, setInput] = useState('')
  const scrollRef         = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages])

  function submit() {
    const t = input.trim()
    if (!t) return
    onSend(t)
    setInput('')
  }

  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      background:    glassSurface(0.55),
      border:        `1px solid ${PANEL_BORDER}`,
      height:        '200px',
    }}>
      <div style={{
        fontFamily: FONT_LABEL, fontSize: '10px', letterSpacing: '4px',
        color: GREY_DIM, padding: '4px 10px', borderBottom: `1px solid ${PANEL_BORDER}`,
        textTransform: 'uppercase',
      }}>
        Chat
      </div>
      <div
        ref={scrollRef}
        style={{
          flex: 1, overflowY: 'auto', padding: '4px 10px',
          display: 'flex', flexDirection: 'column', gap: '2px',
        }}
      >
        {messages.length === 0 && (
          <span style={{ fontFamily: FONT_LABEL, fontSize: '11px', color: GREY_DIM, fontStyle: 'italic' }}>
            No messages yet…
          </span>
        )}
        {messages.map(m => {
          if (m.isSystem) {
            return (
              <div key={m.id} style={{
                fontFamily: FONT_LABEL, fontSize: '11px', color: GREY_DIM,
                fontStyle: 'italic', textAlign: 'center', padding: '1px 0',
              }}>
                — {m.text} —
              </div>
            )
          }
          const accent = playerColor(m.playerIndex)
          return (
            <div key={m.id} style={{ display: 'flex', gap: '6px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: FONT_LABEL, fontSize: '11px', color: accent, flexShrink: 0 }}>
                {m.displayName}:
              </span>
              <span style={{ fontFamily: FONT_LABEL, fontSize: '12px', color: GREY_LIGHT, wordBreak: 'break-word' }}>
                {m.text}
              </span>
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', borderTop: `1px solid ${PANEL_BORDER}` }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); submit() } }}
          maxLength={120}
          placeholder="Type a message…"
          style={{
            flex:       1,
            background: 'transparent',
            border:     'none',
            outline:    'none',
            padding:    '5px 10px',
            fontFamily: FONT_LABEL,
            fontSize:   '12px',
            color:      GREY_LIGHT,
          }}
        />
        <button
          onClick={submit}
          style={{
            fontFamily:    FONT_LABEL,
            fontSize:      '11px',
            letterSpacing: '2px',
            padding:       '0 12px',
            background:    `${ELECTRIC_BLUE}18`,
            border:        'none',
            borderLeft:    `1px solid ${PANEL_BORDER}`,
            color:         ELECTRIC_BLUE,
            cursor:        'pointer',
          }}
        >
          SEND
        </button>
      </div>
    </div>
  )
}

function RoomCard({ room, onJoin, focused }: { room: RoomInfo; onJoin: () => void; focused?: boolean }) {
  const statusColor = room.status === 'waiting' ? ACID_GREEN : room.status === 'playing' ? CRIMSON : GREY_MID
  return (
    <div style={{
      display:    'flex',
      alignItems: 'center',
      gap:        '12px',
      padding:    '10px 14px',
      background: focused ? `${ELECTRIC_BLUE}0A` : `${PANEL}cc`,
      border:     `1px solid ${focused ? ELECTRIC_BLUE : PANEL_BORDER}`,
      boxShadow:  focused ? glow(ELECTRIC_BLUE, 6) : 'none',
      cursor:     room.status === 'playing' ? 'not-allowed' : 'pointer',
      transition: 'border-color 80ms, box-shadow 80ms',
    }}
    onMouseEnter={e => { if (room.status !== 'playing') e.currentTarget.style.borderColor = ELECTRIC_BLUE }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = focused ? ELECTRIC_BLUE : PANEL_BORDER }}
    onClick={room.status !== 'playing' ? onJoin : undefined}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT, fontSize: '20px', color: GREY_LIGHT, letterSpacing: '3px' }}>
          {room.code}
        </div>
        <div style={{ fontFamily: FONT_LABEL, fontSize: '11px', color: GREY_MID }}>
          {room.players}/2 players
        </div>
      </div>
      <div style={{
        fontFamily:    FONT,
        fontSize:      '11px',
        letterSpacing: '2px',
        color:         statusColor,
        padding:       '2px 8px',
        border:        `1px solid ${statusColor}44`,
      }}>
        {room.status.toUpperCase()}
      </div>
    </div>
  )
}

// ── Main screen ─────────────────────────────────────────────────────────────

export function OnlineLobbyScreen() {
  const navigate = useRouter(s => s.navigate)
  const goBack   = useRouter(s => s.goBack)

  const [view,          setView]          = useState<View>('setup')
  const [name,          setName]          = useState('')
  const [charId,        setCharId]        = useState(CHARACTERS[0]?.id ?? 11)
  const [isPrivate,     setIsPrivate]     = useState(false)
  const [joinCode,      setJoinCode]      = useState('')
  const [rooms,         setRooms]         = useState<RoomInfo[]>([])
  const [lobbyCode,     setLobbyCode]     = useState('')
  const [players,       setPlayers]       = useState<PlayerSlot[]>([])
  const [status,        setStatus]        = useState<LobbyStatus>('waiting')
  const [chatMsgs,      setChatMsgs]      = useState<ChatMsg[]>([])
  const [countdown,     setCountdown]     = useState<number | null>(null)
  const [errorMsg,      setErrorMsg]      = useState('')
  const [localIdx,      setLocalIdx]      = useState<number>(0)
  const [browserIdx,    setBrowserIdx]    = useState(0)

  // Character grid state
  const defaultGridIdx = Math.max(0, CHARACTERS.findIndex(c => c.id === (CHARACTERS[0]?.id ?? 11)))
  const [gridIdx,       setGridIdx]       = useState(defaultGridIdx)
  const [confirmedIdx,  setConfirmedIdx]  = useState<number | null>(null)
  const [remoteCursors, setRemoteCursors] = useState<Map<number, number>>(new Map())

  const containerRef    = useRef<HTMLDivElement>(null)
  const gridScrollRef   = useRef<HTMLDivElement>(null)
  const playersRef      = useRef(players)
  const localIdxRef     = useRef(localIdx)
  const confirmTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => { containerRef.current?.focus() }, [view])
  useEffect(() => { playersRef.current  = players  }, [players])
  useEffect(() => { localIdxRef.current = localIdx }, [localIdx])
  useEffect(() => () => { if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current) }, [])

  // Scroll focused tile into view on keyboard nav
  useEffect(() => {
    const el = gridScrollRef.current?.querySelector<HTMLElement>(`[data-char-idx="${gridIdx}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [gridIdx])

  // ── Bus subscriptions ───────────────────────────────────────────────────

  useEffect(() => {
    const onLobby = ({ code, slots: p, status: s }: { code: string; slots: PlayerSlot[]; status: LobbyStatus }) => {
      const prev = playersRef.current

      // Detect joins — new slots with a display name
      const prevNames = new Set(prev.filter(pl => pl.displayName).map(pl => pl.displayName))
      for (const pl of p) {
        if (!pl.isBot && pl.displayName && !prevNames.has(pl.displayName)) {
          setChatMsgs(msgs => [...msgs.slice(-99), {
            playerIndex: -1, displayName: '', isSystem: true,
            text: `${pl.displayName} joined the room`, id: _chatSeq++,
          }])
          SoundEngine.play('ui_confirm')
        }
      }

      // Detect leaves — slots that had a name and no longer do
      const newNames = new Set(p.filter(pl => pl.displayName).map(pl => pl.displayName))
      for (const pl of prev) {
        if (!pl.isBot && pl.displayName && !newNames.has(pl.displayName)) {
          setChatMsgs(msgs => [...msgs.slice(-99), {
            playerIndex: -1, displayName: '', isSystem: true,
            text: `${pl.displayName} left the room`, id: _chatSeq++,
          }])
          // Remove their cursor
          setRemoteCursors(cur => {
            const next = new Map(cur)
            next.delete(pl.playerIndex)
            return next
          })
        }
      }

      // Detect new character selections by others
      const prevReady = new Map(prev.map(pl => [pl.playerIndex, pl.ready]))
      for (const slot of p) {
        if (slot.ready && !prevReady.get(slot.playerIndex) && slot.playerIndex !== localIdxRef.current) {
          const char = CHARACTERS.find(c => c.id === slot.characterId)
          if (char) {
            setChatMsgs(msgs => [...msgs.slice(-99), {
              playerIndex: -1, displayName: '', isSystem: true,
              text: `${slot.displayName} selected ${char.name}`, id: _chatSeq++,
            }])
          }
        }
      }

      setLobbyCode(code)
      setPlayers(p)
      setStatus(s)
      if (view !== 'room') setView('room')
    }

    const onCountdown = ({ seconds }: { seconds: number }) => setCountdown(seconds)

    const onMatchStart = () => navigate('vs')

    const onChat = (m: { playerIndex: number; displayName: string; text: string }) => {
      setChatMsgs(prev => [...prev.slice(-99), { ...m, id: _chatSeq++ }])
    }

    const onError = ({ message }: { message: string }) => {
      setErrorMsg(message)
      setTimeout(() => setErrorMsg(''), 4000)
    }

    const onRooms = ({ rooms: r }: { rooms: RoomInfo[] }) => setRooms(r)

    const onCursorUpdate = ({ playerIndex, characterId }: { playerIndex: number; characterId: number }) => {
      if (playerIndex === localIdxRef.current) return
      setRemoteCursors(prev => {
        const next = new Map(prev)
        next.set(playerIndex, characterId)
        return next
      })
    }

    bus.on('net:lobby-update',   onLobby)
    bus.on('net:countdown',      onCountdown)
    bus.on('net:match-start',    onMatchStart)
    bus.on('net:chat-received',  onChat)
    bus.on('net:error',          onError)
    bus.on('net:rooms-update',   onRooms)
    bus.on('net:cursor-update',  onCursorUpdate)

    return () => {
      bus.off('net:lobby-update',  onLobby)
      bus.off('net:countdown',     onCountdown)
      bus.off('net:match-start',   onMatchStart)
      bus.off('net:chat-received', onChat)
      bus.off('net:error',         onError)
      bus.off('net:rooms-update',  onRooms)
      bus.off('net:cursor-update', onCursorUpdate)
    }
  }, [navigate, view])

  // Identify local player by name match
  useEffect(() => {
    const mine = players.find(p => p.displayName === name.trim())
    if (mine) setLocalIdx(mine.playerIndex)
  }, [players, name])

  // ── Handlers ────────────────────────────────────────────────────────────

  function handleBack() {
    if (view === 'room') {
      bus.emit('net:disconnect', undefined)
      setChatMsgs([])
      setRemoteCursors(new Map())
      setView('setup')
    } else if (view === 'browser') {
      bus.emit('net:unsubscribe-rooms', undefined)
      setView('setup')
    } else {
      goBack()
    }
  }

  function handleCreate() {
    if (!name.trim()) { setErrorMsg('Enter a name first'); return }
    bus.emit('net:create-lobby', { displayName: name.trim(), characterId: charId, isPrivate })
  }

  function handleJoin(code = joinCode) {
    if (!name.trim()) { setErrorMsg('Enter a name first'); return }
    const c = code.trim().toUpperCase()
    if (!c) { setErrorMsg('Enter a room code'); return }
    bus.emit('net:join-lobby', { code: c, displayName: name.trim(), characterId: charId })
  }

  function handleSelectChar(id: number) {
    setCharId(id)
    bus.emit('net:set-character', { characterId: id })
  }

  function handleBrowse() {
    if (!name.trim()) { setErrorMsg('Enter a name first'); return }
    bus.emit('net:subscribe-rooms', undefined)
    setBrowserIdx(0)
    setView('browser')
  }

  function handleStart() {
    bus.emit('net:start', undefined)
  }

  function handleSendChat(text: string) {
    bus.emit('net:send-chat', { text })
  }

  // Character grid navigation for room view
  function moveGridMP(delta: number) {
    const next = Math.max(0, Math.min(CHARACTERS.length - 1, gridIdx + delta))
    if (next === gridIdx) return
    setGridIdx(next)
    const char = CHARACTERS[next]
    if (char) bus.emit('net:send-cursor', { characterId: char.id })
    SoundEngine.play('ui_cursor')
  }

  function confirmSelectMP() {
    const char = CHARACTERS[gridIdx]
    if (!char) return
    handleSelectChar(char.id)
    setConfirmedIdx(gridIdx)
    SoundEngine.play('ui_confirm')
    if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current)
    confirmTimerRef.current = setTimeout(() => setConfirmedIdx(null), 400)
  }

  // Determine highlight color for a grid tile
  function tileColorFor(charIdx: number): string | null {
    const char = CHARACTERS[charIdx]
    if (!char) return null
    // Local cursor
    if (charIdx === gridIdx) return playerColor(localIdx)
    // Remote cursors
    for (const [pi, cursorCharId] of remoteCursors) {
      if (CHARACTERS.findIndex(c => c.id === cursorCharId) === charIdx) return playerColor(pi)
    }
    // Local selection (ready)
    const localSlot = players.find(p => p.playerIndex === localIdx)
    if (localSlot?.ready && localSlot.characterId != null) {
      if (CHARACTERS.findIndex(c => c.id === localSlot.characterId) === charIdx) {
        return `${playerColor(localIdx)}88`
      }
    }
    // Remote selections
    for (const slot of players.filter(p => p.playerIndex !== localIdx && !p.isBot)) {
      if (slot.ready && slot.characterId != null) {
        if (CHARACTERS.findIndex(c => c.id === slot.characterId) === charIdx) {
          return `${playerColor(slot.playerIndex)}88`
        }
      }
    }
    return null
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
    switch (e.key) {
      case 'Escape':
        e.preventDefault(); handleBack(); break
      case 'ArrowUp':
        if (view === 'browser') { e.preventDefault(); setBrowserIdx(i => Math.max(0, i - 1)) }
        else if (view === 'room') { e.preventDefault(); moveGridMP(-COLS_MP) }
        break
      case 'ArrowDown':
        if (view === 'browser') { e.preventDefault(); setBrowserIdx(i => Math.min(rooms.length - 1, i + 1)) }
        else if (view === 'room') { e.preventDefault(); moveGridMP(COLS_MP) }
        break
      case 'ArrowLeft':
        if (view === 'room') { e.preventDefault(); moveGridMP(-1) }
        break
      case 'ArrowRight':
        if (view === 'room') { e.preventDefault(); moveGridMP(1) }
        break
      case 'Enter':
        if (view === 'browser') {
          const room = rooms[browserIdx]
          if (room && room.status !== 'playing') { e.preventDefault(); handleJoin(room.code) }
        } else if (view === 'room') {
          e.preventDefault(); confirmSelectMP()
        }
        break
    }
  }

  const isHost   = localIdx === 0
  const canStart = isHost && status === 'ready'

  // ── Render ────────────────────────────────────────────────────────────────

  const gridWidth = COLS_MP * (TILE_W + 8) - 8

  return (
    <ScreenOverlay>
      {/* Atmospheric glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '5%', left: '50%',
        transform: 'translateX(-50%)',
        width: '700px', height: '500px',
        background: `radial-gradient(ellipse, ${ELECTRIC_BLUE}0E 0%, transparent 65%)`,
        filter: 'blur(60px)', pointerEvents: 'none',
        animation: 'bg-breathe 6s ease-in-out infinite',
      }} />

      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'auto',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'flex-start', paddingTop: '32px',
          outline: 'none',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            fontFamily: FONT_LABEL, fontWeight: 700, fontSize: '11px',
            color: GREY_DIM, letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '6px',
          }}>
            Multiplayer
          </div>
          <div style={{
            fontFamily: FONT, fontSize: '48px', color: GOLD,
            letterSpacing: '8px', textShadow: glow(GOLD, 12),
          }}>
            ONLINE PLAY
          </div>
        </div>

        {/* Error banner */}
        {errorMsg && (
          <div style={{
            marginBottom: '12px', padding: '6px 20px',
            background: `${CRIMSON}22`, border: `1px solid ${CRIMSON}60`,
            fontFamily: FONT_LABEL, fontSize: '13px', color: CRIMSON, letterSpacing: '2px',
          }}>
            {errorMsg}
          </div>
        )}

        {/* ── Setup view ─────────────────────────────────────────────────── */}
        {view === 'setup' && (
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '20px',
            width: '460px', background: glassSurface(0.72),
            border: `1px solid ${PANEL_BORDER}`, padding: '24px',
          }}>
            {/* Name */}
            <div>
              <label style={{
                display: 'block', fontFamily: FONT_LABEL, fontSize: '10px',
                color: GREY_DIM, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '6px',
              }}>
                Your Name
              </label>
              <input
                value={name}
                onChange={e => setName(e.target.value.slice(0, 20))}
                placeholder="Enter display name…"
                maxLength={20}
                autoFocus
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: `${VOID}cc`, border: `1px solid ${PANEL_BORDER}`,
                  padding: '8px 12px', fontFamily: FONT, fontSize: '20px',
                  letterSpacing: '2px', color: GREY_LIGHT, outline: 'none',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = ELECTRIC_BLUE)}
                onBlur={e  => (e.currentTarget.style.borderColor = PANEL_BORDER)}
              />
            </div>

            {/* Private toggle */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', userSelect: 'none' }}>
              <div
                onClick={() => setIsPrivate(p => !p)}
                style={{
                  width: '36px', height: '20px', borderRadius: '10px',
                  background: isPrivate ? ELECTRIC_BLUE : GREY_DIM,
                  border: `1px solid ${isPrivate ? ELECTRIC_BLUE : PANEL_BORDER}`,
                  position: 'relative', transition: 'background 150ms',
                }}
              >
                <div style={{
                  position: 'absolute', top: '2px',
                  left: isPrivate ? '16px' : '2px',
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: '#fff', transition: 'left 150ms',
                }} />
              </div>
              <span style={{ fontFamily: FONT_LABEL, fontSize: '13px', color: GREY_LIGHT, letterSpacing: '2px' }}>
                Private Room
              </span>
            </label>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <ActionButton color={ELECTRIC_BLUE} onClick={handleCreate}>
                CREATE ROOM
              </ActionButton>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  value={joinCode}
                  onChange={e => setJoinCode(e.target.value.slice(0, 6).toUpperCase())}
                  placeholder="ROOM CODE"
                  maxLength={6}
                  style={{
                    flex: 1, background: `${VOID}cc`, border: `1px solid ${PANEL_BORDER}`,
                    padding: '8px 12px', fontFamily: FONT, fontSize: '20px',
                    letterSpacing: '4px', color: GOLD, outline: 'none', textAlign: 'center',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
                  onBlur={e  => (e.currentTarget.style.borderColor = PANEL_BORDER)}
                  onKeyDown={e => { if (e.key === 'Enter') handleJoin() }}
                />
                <ActionButton color={GOLD} onClick={() => handleJoin()} style={{ flex: '0 0 auto', width: 'auto', padding: '0 18px' }}>
                  JOIN
                </ActionButton>
              </div>
              <ActionButton color={GREY_MID} onClick={handleBrowse}>
                BROWSE ROOMS
              </ActionButton>
            </div>
          </div>
        )}

        {/* ── Browser view ───────────────────────────────────────────────── */}
        {view === 'browser' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '460px' }}>
            <div style={{
              fontFamily: FONT_LABEL, fontSize: '11px', color: GREY_DIM,
              letterSpacing: '4px', textTransform: 'uppercase',
            }}>
              Public Rooms — live
            </div>
            {rooms.length === 0 && (
              <div style={{
                padding: '24px', textAlign: 'center',
                background: glassSurface(0.55), border: `1px solid ${PANEL_BORDER}`,
                fontFamily: FONT_LABEL, fontSize: '14px', color: GREY_MID, letterSpacing: '2px',
              }}>
                No open rooms. Be the first to create one!
              </div>
            )}
            {rooms.map((r, idx) => (
              <RoomCard key={r.code} room={r} focused={idx === browserIdx} onJoin={() => handleJoin(r.code)} />
            ))}
          </div>
        )}

        {/* ── Room view ──────────────────────────────────────────────────── */}
        {view === 'room' && (
          <div style={{
            display: 'flex', gap: '20px', alignItems: 'flex-start',
            maxHeight: 'calc(100vh - 200px)',
          }}>
            {/* LEFT: Character grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                fontFamily: FONT_LABEL, fontSize: '10px', letterSpacing: '4px',
                color: GREY_DIM, textTransform: 'uppercase',
              }}>
                Select Fighter
              </div>
              <div ref={gridScrollRef} style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 280px)' }}>
                <div style={{
                  display:         'flex',
                  flexWrap:        'wrap',
                  gap:             '8px',
                  width:           `${gridWidth}px`,
                  justifyContent:  'flex-start',
                }}>
                  {CHARACTERS.map((char, i) => {
                    const color = tileColorFor(i)
                    return (
                      <div
                        key={char.id}
                        data-char-idx={i}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: `${TILE_W}px` }}
                      >
                        <CharTile
                          char={char}
                          cursorColor={color}
                          flash={confirmedIdx === i}
                          onClick={() => {
                            if (i !== gridIdx) {
                              setGridIdx(i)
                              bus.emit('net:send-cursor', { characterId: char.id })
                              SoundEngine.play('ui_cursor')
                            }
                          }}
                        />
                        <TileLabel name={char.name} active={color !== null} />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div style={{
                fontFamily: FONT_LABEL, fontSize: '11px', color: ELECTRIC_BLUE,
                letterSpacing: '2px', textAlign: 'center',
              }}>
                ←→↑↓ Navigate · ENTER Select
              </div>
            </div>

            {/* RIGHT: Sidebar */}
            <div style={{
              display:       'flex',
              flexDirection: 'column',
              gap:           '12px',
              width:         '320px',
              flexShrink:    0,
              overflowY:     'auto',
              maxHeight:     'calc(100vh - 200px)',
              paddingBottom: '8px',
            }}>
              {/* Room code + status */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: glassSurface(0.72), border: `1px solid ${PANEL_BORDER}`,
                padding: '10px 16px',
              }}>
                <div>
                  <div style={{ fontFamily: FONT_LABEL, fontSize: '10px', color: GREY_DIM, letterSpacing: '4px' }}>
                    ROOM CODE
                  </div>
                  <div style={{
                    fontFamily: FONT, fontSize: '32px', color: GOLD,
                    letterSpacing: '8px', textShadow: glow(GOLD, 8),
                  }}>
                    {lobbyCode}
                  </div>
                </div>
                <div style={{
                  fontFamily: FONT, fontSize: '11px', letterSpacing: '3px',
                  color: status === 'playing' ? CRIMSON : status === 'ready' ? ACID_GREEN : GREY_MID,
                  padding: '4px 10px', border: '1px solid currentColor',
                }}>
                  {status.toUpperCase()}
                </div>
              </div>

              {/* Player slots */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {([0, 1] as const).map(idx => {
                  const slot = players.find(p => p.playerIndex === idx)
                  if (!slot) {
                    return (
                      <div key={idx} style={{
                        padding: '14px 12px', background: glassSurface(0.4),
                        border: `1px dashed ${PANEL_BORDER}`,
                        fontFamily: FONT_LABEL, fontSize: '13px', color: GREY_DIM,
                        letterSpacing: '3px', textAlign: 'center',
                      }}>
                        Waiting for {idx === 0 ? 'host' : 'opponent'}…
                      </div>
                    )
                  }
                  const cursorCharId = slot.playerIndex === localIdx
                    ? CHARACTERS[gridIdx]?.id
                    : remoteCursors.get(slot.playerIndex)
                  return (
                    <PlayerRow
                      key={idx}
                      slot={slot}
                      isLocal={slot.playerIndex === localIdx}
                      cursorCharId={cursorCharId}
                    />
                  )
                })}
              </div>

              {/* Countdown */}
              {countdown !== null && (
                <div style={{
                  textAlign: 'center', fontFamily: FONT, fontSize: '64px',
                  color: GOLD, letterSpacing: '4px', textShadow: glow(GOLD, 20),
                  animation: 'bg-breathe 0.8s ease-in-out',
                }}>
                  {countdown}
                </div>
              )}

              {/* Chat */}
              <ChatPanel messages={chatMsgs} onSend={handleSendChat} />

              {/* Start / waiting */}
              {canStart && (
                <ActionButton color={ACID_GREEN} onClick={handleStart}>
                  START MATCH
                </ActionButton>
              )}
              {isHost && !canStart && status !== 'playing' && status !== 'countdown' && (
                <div style={{
                  padding: '10px', textAlign: 'center',
                  fontFamily: FONT_LABEL, fontSize: '12px', color: GREY_MID,
                  letterSpacing: '3px', border: `1px dashed ${PANEL_BORDER}`,
                }}>
                  Waiting for all players to select a character…
                </div>
              )}
              {!isHost && (
                <div style={{
                  padding: '10px', textAlign: 'center',
                  fontFamily: FONT_LABEL, fontSize: '12px', color: GREY_MID,
                  letterSpacing: '3px', border: `1px dashed ${PANEL_BORDER}`,
                }}>
                  Waiting for host to start…
                </div>
              )}
            </div>
          </div>
        )}

        {/* Back / Leave */}
        <button
          onClick={handleBack}
          style={{
            marginTop: '20px', fontFamily: FONT_LABEL, fontWeight: 600,
            fontSize: '13px', letterSpacing: '4px', color: GREY_LIGHT,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'pointer', padding: '7px 22px', textTransform: 'uppercase',
            transition: 'color 100ms, border-color 100ms',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.color = GREY_LIGHT; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
        >
          {view === 'room' ? '← LEAVE ROOM' : '← BACK'}
        </button>

        <ControlBar hints={[
          ...(view === 'browser' ? [{ key: '↑↓', action: 'SELECT' }, { key: 'ENTER', action: 'JOIN' }] : []),
          ...(view === 'room'    ? [{ key: '←→↑↓', action: 'NAVIGATE' }, { key: 'ENTER', action: 'SELECT' }] : []),
          { key: 'ESC', action: view === 'room' ? 'LEAVE' : 'BACK' },
        ]} />
      </div>
    </ScreenOverlay>
  )
}

// ── Action button ─────────────────────────────────────────────────────────────

function ActionButton({
  children, color, onClick, style: extraStyle,
}: {
  children:  React.ReactNode
  color:     string
  onClick:   () => void
  style?:    React.CSSProperties
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily:    FONT,
        fontSize:      '22px',
        letterSpacing: '4px',
        padding:       '10px 0',
        background:    `${color}18`,
        border:        `1px solid ${color}80`,
        color:         color,
        cursor:        'pointer',
        width:         '100%',
        transition:    'background 100ms, box-shadow 100ms',
        ...extraStyle,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background  = `${color}28`
        e.currentTarget.style.boxShadow   = glow(color, 10)
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background  = `${color}18`
        e.currentTarget.style.boxShadow   = 'none'
      }}
    >
      {children}
    </button>
  )
}
