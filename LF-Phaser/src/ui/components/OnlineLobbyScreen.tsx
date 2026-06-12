/**
 * OnlineLobbyScreen — full online multiplayer lobby UI.
 *
 * Views:
 *   setup   → name entry + character pick → create/join/browse
 *   browser → live list of public rooms
 *   room    → in-room: player list, chat, start (host) / waiting (guest)
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { useRouter }       from '../router.js'
import { bus }             from '../bus.js'
import { CHARACTERS }      from '../../data/characters.js'
import { ScreenOverlay }   from '../primitives/ScreenOverlay.js'
import { ControlBar }      from '../primitives/ControlBar.js'
import type { PlayerSlot, LobbyStatus, RoomInfo } from '../../network/types.js'
import {
  FONT, FONT_LABEL, GOLD, CRIMSON, ELECTRIC_BLUE, ACID_GREEN,
  GREY_LIGHT, GREY_MID, GREY_DIM, PANEL, PANEL_BORDER, VOID,
  glow, glassSurface,
} from '../theme.js'

type View = 'setup' | 'browser' | 'room'

interface ChatMsg {
  playerIndex: number
  displayName: string
  text:        string
  id:          number
}

let _chatSeq = 0

// ── Sub-components ──────────────────────────────────────────────────────────

function CharPicker({
  selected, onSelect,
}: { selected: number; onSelect: (id: number) => void }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', maxWidth: '380px' }}>
      {CHARACTERS.map(c => {
        const active = c.id === selected
        return (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            title={c.name}
            style={{
              width:          '52px',
              height:         '52px',
              background:     active ? `${ELECTRIC_BLUE}22` : `${PANEL}cc`,
              border:         `2px solid ${active ? ELECTRIC_BLUE : PANEL_BORDER}`,
              cursor:         'pointer',
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            '2px',
              padding:        '2px',
              boxShadow:      active ? glow(ELECTRIC_BLUE, 8) : 'none',
              transition:     'border-color 80ms, box-shadow 80ms',
            }}
          >
            <img
              src={c.headSprite}
              alt={c.name}
              style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }}
            />
            <span style={{
              fontFamily: FONT_LABEL, fontSize: '7px',
              color: active ? ELECTRIC_BLUE : GREY_MID, letterSpacing: '1px',
            }}>
              {c.name.slice(0, 6).toUpperCase()}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function PlayerRow({ slot, isLocal }: { slot: PlayerSlot; isLocal: boolean }) {
  const accent = slot.playerIndex === 0 ? ELECTRIC_BLUE : CRIMSON
  const char   = CHARACTERS.find(c => c.id === slot.characterId)
  return (
    <div style={{
      display:     'flex',
      alignItems:  'center',
      gap:         '12px',
      padding:     '8px 12px',
      background:  `${accent}0A`,
      border:      `1px solid ${accent}33`,
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
          {char ? char.name : 'Selecting…'}
        </div>
      </div>
      <div style={{
        fontFamily: FONT, fontSize: '12px', letterSpacing: '2px',
        color: slot.ready ? ACID_GREEN : GREY_DIM,
        padding: '2px 8px', border: `1px solid ${slot.ready ? ACID_GREEN : GREY_DIM}`,
      }}>
        {slot.ready ? 'READY' : 'NOT READY'}
      </div>
    </div>
  )
}

function ChatPanel({
  messages, onSend,
}: { messages: ChatMsg[]; onSend: (text: string) => void }) {
  const [input, setInput]  = useState('')
  const scrollRef          = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
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
      height:        '160px',
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
          const accent = m.playerIndex === 0 ? ELECTRIC_BLUE : CRIMSON
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
            flex:        1,
            background:  'transparent',
            border:      'none',
            outline:     'none',
            padding:     '5px 10px',
            fontFamily:  FONT_LABEL,
            fontSize:    '12px',
            color:       GREY_LIGHT,
          }}
        />
        <button
          onClick={submit}
          style={{
            fontFamily:  FONT_LABEL,
            fontSize:    '11px',
            letterSpacing: '2px',
            padding:     '0 12px',
            background:  `${ELECTRIC_BLUE}18`,
            border:      'none',
            borderLeft:  `1px solid ${PANEL_BORDER}`,
            color:       ELECTRIC_BLUE,
            cursor:      'pointer',
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
      display:     'flex',
      alignItems:  'center',
      gap:         '12px',
      padding:     '10px 14px',
      background:  focused ? `${ELECTRIC_BLUE}0A` : `${PANEL}cc`,
      border:      `1px solid ${focused ? ELECTRIC_BLUE : PANEL_BORDER}`,
      boxShadow:   focused ? glow(ELECTRIC_BLUE, 6) : 'none',
      cursor:      room.status === 'playing' ? 'not-allowed' : 'pointer',
      transition:  'border-color 80ms, box-shadow 80ms',
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

  const [view,       setView]       = useState<View>('setup')
  const [name,       setName]       = useState('')
  const [charId,     setCharId]     = useState(11)
  const [isPrivate,  setIsPrivate]  = useState(false)
  const [joinCode,   setJoinCode]   = useState('')
  const [rooms,      setRooms]      = useState<RoomInfo[]>([])
  const [lobbyCode,  setLobbyCode]  = useState('')
  const [players,    setPlayers]    = useState<PlayerSlot[]>([])
  const [status,     setStatus]     = useState<LobbyStatus>('waiting')
  const [chatMsgs,   setChatMsgs]   = useState<ChatMsg[]>([])
  const [countdown,  setCountdown]  = useState<number | null>(null)
  const [errorMsg,   setErrorMsg]   = useState('')
  const [localIdx,   setLocalIdx]   = useState<number>(0)
  const [browserIdx, setBrowserIdx] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const playersRef   = useRef(players)
  const localIdxRef  = useRef(localIdx)
  const charIdRef    = useRef(charId)

  useEffect(() => { containerRef.current?.focus() }, [view])
  useEffect(() => { playersRef.current  = players  }, [players])
  useEffect(() => { localIdxRef.current = localIdx }, [localIdx])
  useEffect(() => { charIdRef.current   = charId   }, [charId])

  // ── Bus subscriptions ───────────────────────────────────────────────────

  useEffect(() => {
    const onLobby = ({ code, slots: p, status: s }: { code: string; slots: PlayerSlot[]; status: LobbyStatus }) => {
      setLobbyCode(code)
      setPlayers(p)
      setStatus(s)
      if (view !== 'room') setView('room')
    }
    const onCountdown = ({ seconds }: { seconds: number }) => {
      setCountdown(seconds)
    }
    const onMatchStart = () => {
      navigate('vs')
    }
    const onChat = (m: { playerIndex: number; displayName: string; text: string }) => {
      setChatMsgs(prev => [...prev.slice(-99), { ...m, id: _chatSeq++ }])
    }
    const onError = ({ message }: { message: string }) => {
      setErrorMsg(message)
      setTimeout(() => setErrorMsg(''), 4000)
    }
    const onRooms = ({ rooms: r }: { rooms: RoomInfo[] }) => setRooms(r)

    bus.on('net:lobby-update', onLobby)
    bus.on('net:countdown',    onCountdown)
    bus.on('net:match-start',  onMatchStart)
    bus.on('net:chat-received', onChat)
    bus.on('net:error',        onError)
    bus.on('net:rooms-update', onRooms)

    return () => {
      bus.off('net:lobby-update', onLobby)
      bus.off('net:countdown',    onCountdown)
      bus.off('net:match-start',  onMatchStart)
      bus.off('net:chat-received', onChat)
      bus.off('net:error',        onError)
      bus.off('net:rooms-update', onRooms)
    }
  }, [navigate, view])

  // Derive local player index from players list (our slot is whichever was assigned)
  useEffect(() => {
    // After join, the lobby update will show our slot; identify by name match
    const mine = players.find(p => p.displayName === name.trim())
    if (mine) setLocalIdx(mine.playerIndex)
  }, [players, name])

  function handleBack() {
    if (view === 'room') {
      bus.emit('net:disconnect', undefined)
      setChatMsgs([])
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
    bus.emit('net:create-lobby', { displayName: name.trim(), isPrivate })
  }

  function handleJoin(code = joinCode) {
    if (!name.trim()) { setErrorMsg('Enter a name first'); return }
    const c = code.trim().toUpperCase()
    if (!c) { setErrorMsg('Enter a room code'); return }
    bus.emit('net:join-lobby', { code: c, displayName: name.trim() })
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

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        handleBack()
        break
      case 'ArrowUp':
        if (view === 'browser') { e.preventDefault(); setBrowserIdx(i => Math.max(0, i - 1)) }
        break
      case 'ArrowDown':
        if (view === 'browser') { e.preventDefault(); setBrowserIdx(i => Math.min(rooms.length - 1, i + 1)) }
        break
      case 'ArrowLeft':
        if (view === 'room') {
          e.preventDefault()
          const idx = CHARACTERS.findIndex(c => c.id === charId)
          const prev = CHARACTERS[Math.max(0, idx - 1)]
          if (prev && prev.id !== charId) handleSelectChar(prev.id)
        }
        break
      case 'ArrowRight':
        if (view === 'room') {
          e.preventDefault()
          const idx = CHARACTERS.findIndex(c => c.id === charId)
          const next = CHARACTERS[Math.min(CHARACTERS.length - 1, idx + 1)]
          if (next && next.id !== charId) handleSelectChar(next.id)
        }
        break
      case 'Enter':
        if (view === 'browser') {
          const room = rooms[browserIdx]
          if (room && room.status !== 'playing') { e.preventDefault(); handleJoin(room.code) }
        }
        break
    }
  }

  function handleStart() {
    bus.emit('net:start', undefined)
  }

  function handleSendChat(text: string) {
    bus.emit('net:send-chat', { text })
  }

  const isHost       = localIdx === 0
  const canStart     = isHost && status === 'ready'
  const effectiveName = name.trim() || 'Player'

  // ── Render ────────────────────────────────────────────────────────────────

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
          justifyContent: 'flex-start', paddingTop: '32px', gap: '0',
          outline: 'none',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
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
            <label style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              cursor: 'pointer', userSelect: 'none',
            }}>
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
                    letterSpacing: '4px', color: GOLD, outline: 'none',
                    textAlign: 'center',
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
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '12px',
            width: '460px',
          }}>
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
            display: 'flex', flexDirection: 'column', gap: '14px',
            width: '460px', overflowY: 'auto', maxHeight: 'calc(100vh - 180px)',
            paddingBottom: '8px',
          }}>
            {/* Room code */}
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
                padding: '4px 10px', border: `1px solid currentColor`,
              }}>
                {status.toUpperCase()}
              </div>
            </div>

            {/* Players */}
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
                return <PlayerRow key={idx} slot={slot} isLocal={slot.playerIndex === localIdx} />
              })}
            </div>

            {/* Character picker */}
            <div style={{ background: glassSurface(0.55), border: `1px solid ${PANEL_BORDER}`, padding: '12px 14px' }}>
              <div style={{
                fontFamily: FONT_LABEL, fontSize: '10px', letterSpacing: '4px',
                color: GREY_DIM, textTransform: 'uppercase', marginBottom: '10px',
              }}>
                Your Character
              </div>
              <CharPicker selected={charId} onSelect={handleSelectChar} />
              {!players.find(p => p.playerIndex === localIdx)?.ready && (
                <div style={{
                  marginTop: '8px', fontFamily: FONT_LABEL, fontSize: '11px',
                  color: ELECTRIC_BLUE, letterSpacing: '2px', textAlign: 'center',
                }}>
                  Select a character to mark ready  ·  ← → to navigate
                </div>
              )}
            </div>

            {/* Countdown overlay */}
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

            {/* Actions */}
            {isHost && status === 'ready' && (
              <ActionButton color={ACID_GREEN} onClick={handleStart}>
                START MATCH
              </ActionButton>
            )}
            {isHost && status === 'waiting' && (
              <div style={{
                padding: '10px', textAlign: 'center',
                fontFamily: FONT_LABEL, fontSize: '12px', color: GREY_MID,
                letterSpacing: '3px', border: `1px dashed ${PANEL_BORDER}`,
              }}>
                Waiting for opponent to join and select a character…
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
          ...(view === 'room'    ? [{ key: '←→', action: 'CHAR' }] : []),
          { key: 'ESC', action: view === 'room' ? 'LEAVE' : 'BACK' },
        ]} />
      </div>
    </ScreenOverlay>
  )
}

// ── Tiny action button primitive ─────────────────────────────────────────────

function ActionButton({
  children, color, onClick, style: extraStyle,
}: {
  children:   React.ReactNode
  color:      string
  onClick:    () => void
  style?:     React.CSSProperties
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
