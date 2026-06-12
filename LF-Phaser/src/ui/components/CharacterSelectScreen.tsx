import { useEffect, useRef, useState } from 'react'
import { useRouter }    from '../router.js'
import { CHARACTERS }   from '../../data/characters.js'
import type { CharacterMeta, TeamConfig, LobbyConfig } from '../types.js'
import { CharTile, TileLabel, TILE_W }  from './CharacterTile.js'
import { SoundEngine }  from '../../sound/SoundEngine.js'
import { SectionTitle }  from '../primitives/SectionTitle.js'
import { ControlBar }    from '../primitives/ControlBar.js'
import {
  FONT, GOLD, CRIMSON as RED, ELECTRIC_BLUE as BLUE, VOID as BG,
  ACID_GREEN, ORANGE, GREY_MID, PANEL, PANEL_BORDER, glow, TEAM_COLOR,
} from '../theme.js'

const COLS = 7

type Team       = 'Blue' | 'Red'
type Difficulty = 'easy' | 'medium' | 'hard'
type SlotId     = 'p1' | 'add-bot' | number   // number = CPU index (0 | 1 | 2)

const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard']
const DIFF_COLOR: Record<Difficulty, string> = { easy: ACID_GREEN, medium: ORANGE, hard: RED }

let _nextSlotId = 0

interface CpuSlot {
  id:         number
  charIdx:    number | null
  team:       Team
  difficulty: Difficulty
}

function buildDefaultCpuSlots(): CpuSlot[] {
  return [{ id: ++_nextSlotId, charIdx: null, team: 'Red', difficulty: 'medium' }]
}

// ── P1 Card ───────────────────────────────────────────────────────────────────

function P1Card({
  char, team, isActive, onActivate, onTeamToggle,
}: {
  char: CharacterMeta; team: Team; isActive: boolean
  onActivate: () => void; onTeamToggle: () => void
}) {
  return (
    <div
      onClick={onActivate}
      style={{
        background:  PANEL,
        border:      `${isActive ? 3 : 1}px solid ${isActive ? GOLD : PANEL_BORDER}`,
        boxShadow:   isActive ? glow(GOLD, 16) : 'none',
        padding:     '10px 12px',
        cursor:      'pointer',
        display:     'flex',
        gap:         '10px',
        alignItems:  'center',
        opacity:     isActive ? 1 : 0.7,
        transition:  'border-color 80ms ease, box-shadow 80ms ease, opacity 80ms ease',
      }}
    >
      <img
        src={char.headSprite}
        alt={char.name}
        style={{
          width: '64px', height: '64px', flexShrink: 0,
          objectFit: 'cover', objectPosition: 'center top', imageRendering: 'pixelated',
        }}
      />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{ fontFamily: FONT, fontSize: '11px', color: BLUE, letterSpacing: '2px' }}>
          YOU — PLAYER 1
        </div>
        <div style={{
          fontFamily: FONT, fontSize: '20px', color: '#FFF', letterSpacing: '1px',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {char.name.toUpperCase()}
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {(['Blue', 'Red'] as Team[]).map(t => (
            <button
              key={t}
              onClick={e => { e.stopPropagation(); if (team !== t) onTeamToggle() }}
              style={{
                fontFamily: FONT, fontSize: '13px', letterSpacing: '2px', padding: '3px 10px',
                border:     `1px solid ${team === t ? TEAM_COLOR[t] : PANEL_BORDER}`,
                background: team === t ? `${TEAM_COLOR[t]}25` : PANEL,
                color:      team === t ? TEAM_COLOR[t] : GREY_MID,
                cursor: 'pointer', transition: 'all 80ms ease',
              }}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── CPU Card ──────────────────────────────────────────────────────────────────

function CpuCard({
  index, slot, isActive, onActivate, onTeamToggle, onDifficulty, onRemove,
}: {
  index: number; slot: CpuSlot; isActive: boolean
  onActivate: () => void; onTeamToggle: () => void
  onDifficulty: (d: Difficulty) => void; onRemove?: () => void
}) {
  const char = slot.charIdx === null ? null : CHARACTERS[slot.charIdx]
  return (
    <div
      onClick={onActivate}
      style={{
        background:  PANEL,
        border:      `${isActive ? 3 : 1}px solid ${isActive ? RED : PANEL_BORDER}`,
        boxShadow:   isActive ? glow(RED, 14) : 'none',
        padding:     '10px 12px',
        cursor:      'pointer',
        display:     'flex',
        gap:         '10px',
        alignItems:  'flex-start',
        opacity:     isActive ? 1 : 0.7,
        position:    'relative',
        transition:  'border-color 80ms ease, box-shadow 80ms ease, opacity 80ms ease',
      }}
    >
      {char ? (
        <img
          src={char.headSprite}
          alt={char.name}
          style={{
            width: '64px', height: '64px', flexShrink: 0,
            objectFit: 'cover', objectPosition: 'center top', imageRendering: 'pixelated',
          }}
        />
      ) : (
        <div style={{
          width: '64px', height: '64px', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px dashed ${PANEL_BORDER}`,
        }}>
          <span style={{ fontFamily: FONT, fontSize: '28px', color: GREY_MID }}>?</span>
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{ fontFamily: FONT, fontSize: '11px', color: RED, letterSpacing: '2px' }}>
          CPU {index + 1}
        </div>
        <div style={{
          fontFamily: FONT, fontSize: '20px', color: char ? '#FFF' : GREY_MID, letterSpacing: '1px',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {char ? char.name.toUpperCase() : '— SELECT —'}
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {(['Blue', 'Red'] as Team[]).map(t => (
            <button
              key={t}
              onClick={e => { e.stopPropagation(); if (slot.team !== t) onTeamToggle() }}
              style={{
                fontFamily: FONT, fontSize: '13px', letterSpacing: '2px', padding: '3px 10px',
                border:     `1px solid ${slot.team === t ? TEAM_COLOR[t] : PANEL_BORDER}`,
                background: slot.team === t ? `${TEAM_COLOR[t]}25` : PANEL,
                color:      slot.team === t ? TEAM_COLOR[t] : GREY_MID,
                cursor: 'pointer', transition: 'all 80ms ease',
              }}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
          {DIFFICULTIES.map(d => {
            const c   = DIFF_COLOR[d]
            const sel = d === slot.difficulty
            return (
              <button
                key={d}
                onClick={e => { e.stopPropagation(); onDifficulty(d) }}
                style={{
                  fontFamily: FONT, fontSize: '12px', letterSpacing: '1px', padding: '2px 0',
                  border:     `1px solid ${sel ? c : PANEL_BORDER}`,
                  background: sel ? `${c}25` : PANEL,
                  color:      sel ? c : GREY_MID,
                  cursor: 'pointer', flex: 1, transition: 'all 80ms ease',
                }}
              >
                {d.toUpperCase()}
              </button>
            )
          })}
        </div>
      </div>
      {onRemove && (
        <button
          onClick={e => { e.stopPropagation(); onRemove() }}
          style={{
            position: 'absolute', top: '8px', right: '8px',
            background: 'none', border: `1px solid ${PANEL_BORDER}`,
            color: GREY_MID, fontFamily: FONT, fontSize: '14px',
            padding: '0 6px', lineHeight: '20px', cursor: 'pointer',
          }}
        >
          ×
        </button>
      )}
    </div>
  )
}

// ── Add Bot Button ────────────────────────────────────────────────────────────

function AddBotButton({ onClick, isActive }: { onClick: () => void; isActive?: boolean }) {
  const [hov, setHov] = useState(false)
  const lit = hov || isActive
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '100%', fontFamily: FONT, cursor: 'pointer',
        background: lit ? `${GOLD}0A` : 'none',
        border: `2px dashed ${lit ? GOLD : PANEL_BORDER}`,
        boxShadow: isActive ? `0 0 10px ${GOLD}55` : 'none',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '10px 0 8px', gap: '4px',
        transition: 'all 80ms ease',
      }}
    >
      <span style={{ fontSize: '28px', color: lit ? GOLD : GREY_MID, lineHeight: 1, transition: 'color 80ms ease' }}>+</span>
      <span style={{ fontSize: '15px', letterSpacing: '3px', color: lit ? '#FFF' : GREY_MID, transition: 'color 80ms ease' }}>ADD A BOT</span>
    </button>
  )
}

// ── Main Screen ───────────────────────────────────────────────────────────────

export function CharacterSelectScreen() {
  const navigate = useRouter(s => s.navigate)
  const params   = useRouter(s => s.params)

  // Restore full match setup when coming back from stage-select,
  // or fall back to individual params / defaults.
  const initialState = (() => {
    const lc = params['lobbyConfig'] as LobbyConfig | undefined
    if (lc) {
      const blueSlots = lc.teams.find(t => t.color === 'Blue')?.slots ?? []
      const redSlots  = lc.teams.find(t => t.color === 'Red')?.slots ?? []
      const humanSlot = [...blueSlots, ...redSlots].find(s => s.isHuman)
      const p1TeamVal: Team = blueSlots.some(s => s.isHuman) ? 'Blue' : 'Red'
      const p1Idx = humanSlot
        ? Math.max(0, CHARACTERS.findIndex(c => c.id === humanSlot.characterId))
        : 0
      const cpus: CpuSlot[] = [
        ...blueSlots.filter(s => !s.isHuman).map(s => ({
          id: ++_nextSlotId,
          charIdx: Math.max(0, CHARACTERS.findIndex(c => c.id === s.characterId)),
          team: 'Blue' as Team, difficulty: s.aiDifficulty as Difficulty,
        })),
        ...redSlots.filter(s => !s.isHuman).map(s => ({
          id: ++_nextSlotId,
          charIdx: Math.max(0, CHARACTERS.findIndex(c => c.id === s.characterId)),
          team: 'Red' as Team, difficulty: s.aiDifficulty as Difficulty,
        })),
      ]
      return { stageId: lc.stageId, p1CharIdx: p1Idx, p1Team: p1TeamVal,
               cpuSlots: cpus.length > 0 ? cpus : buildDefaultCpuSlots(), gridIdx: p1Idx }
    }
    const stageId = (params['stageId'] as number | undefined) ?? 1
    const charId  = (params['charId']  as number | undefined) ?? CHARACTERS[0]?.id ?? 1
    const charIdx = Math.max(0, CHARACTERS.findIndex(c => c.id === charId))
    return { stageId, p1CharIdx: charIdx, p1Team: 'Blue' as Team,
             cpuSlots: buildDefaultCpuSlots(), gridIdx: charIdx }
  })()

  const [gridIdx,      setGridIdx]      = useState(initialState.gridIdx)
  const [p1CharIdx,    setP1CharIdx]    = useState(initialState.p1CharIdx)
  const [p1Team,       setP1Team]       = useState<Team>(initialState.p1Team)
  const [cpuSlots,     setCpuSlots]     = useState<CpuSlot[]>(initialState.cpuSlots)
  const [activeSlot,   setActiveSlot]   = useState<SlotId>('p1')
  const [focusArea,    setFocusArea]    = useState<'grid' | 'sidebar'>('grid')
  const [confirmedIdx, setConfirmedIdx] = useState<number | null>(null)
  const [slotBanner,   setSlotBanner]   = useState<{ text: string; key: number } | null>(null)

  const containerRef     = useRef<HTMLDivElement>(null)
  const gridScrollRef    = useRef<HTMLDivElement>(null)
  const confirmTimerRef  = useRef<ReturnType<typeof setTimeout> | null>(null)
  const slotBannerKeyRef = useRef(0)
  const isFirstMountRef  = useRef(true)
  const total            = CHARACTERS.length

  useEffect(() => { containerRef.current?.focus() }, [])
  useEffect(() => () => { if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current) }, [])

  // Flash a banner and play a tick when the active slot changes to a CPU slot
  useEffect(() => {
    if (isFirstMountRef.current) { isFirstMountRef.current = false; return }
    if (typeof activeSlot !== 'number') return
    slotBannerKeyRef.current++
    setSlotBanner({ text: `PICK FOR CPU ${activeSlot + 1}`, key: slotBannerKeyRef.current })
    SoundEngine.play('menu-tick')
    const t = setTimeout(() => setSlotBanner(null), 1800)
    return () => clearTimeout(t)
  }, [activeSlot])

  // Scroll focused tile into view when keyboard navigating
  useEffect(() => {
    const el = gridScrollRef.current?.querySelector<HTMLElement>(`[data-char-idx="${gridIdx}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [gridIdx])

  function activateSlot(slot: SlotId) {
    setActiveSlot(slot)
    if (slot === 'p1') {
      setGridIdx(p1CharIdx)
    } else if (slot !== 'add-bot') {
      const idx = cpuSlots[slot]?.charIdx
      // Reset to first character for unassigned slots so the CPU cursor is clearly visible
      setGridIdx(idx !== null && idx !== undefined ? idx : 0)
    }
  }

  function assignToActive(charIdx: number) {
    if (activeSlot === 'p1') {
      setP1CharIdx(charIdx)
    } else if (activeSlot !== 'add-bot') {
      const cpuIdx = activeSlot
      setCpuSlots(prev => {
        const next = [...prev]
        next[cpuIdx] = { ...next[cpuIdx], charIdx }
        return next
      })
    }
  }

  function moveGrid(delta: number) {
    const newIdx = Math.max(0, Math.min(total - 1, gridIdx + delta))
    setGridIdx(newIdx)
    assignToActive(newIdx)
  }

  function cycleSlot(dir: 1 | -1) {
    const slots: SlotId[] = ['p1', ...cpuSlots.map((_, i) => i), ...(cpuSlots.length < 3 ? ['add-bot' as const] : [])]
    const cur  = slots.indexOf(activeSlot)
    const next = (cur + dir + slots.length) % slots.length
    activateSlot(slots[next] ?? 'p1')
  }

  function toggleTeam() {
    if (activeSlot === 'p1') {
      setP1Team(t => t === 'Blue' ? 'Red' : 'Blue')
    } else {
      const cpuIdx = activeSlot
      setCpuSlots(prev => {
        const next = [...prev]
        const cur  = next[cpuIdx]
        if (cur) next[cpuIdx] = { ...cur, team: cur.team === 'Blue' ? 'Red' : 'Blue' }
        return next
      })
    }
  }

  function cycleDifficulty() {
    if (activeSlot === 'p1') return
    const cpuIdx = activeSlot
    setCpuSlots(prev => {
      const next = [...prev]
      const slot = next[cpuIdx]
      if (!slot) return next
      const di = DIFFICULTIES.indexOf(slot.difficulty)
      next[cpuIdx] = { ...slot, difficulty: DIFFICULTIES[(di + 1) % DIFFICULTIES.length] ?? 'easy' }
      return next
    })
  }

  function addCpu() {
    if (cpuSlots.length >= 3) return
    const newCpuI = cpuSlots.length
    setCpuSlots(prev => [...prev, { id: ++_nextSlotId, charIdx: null, team: 'Red', difficulty: 'medium' }])
    setActiveSlot(newCpuI)
  }

  function removeCpu(cpuIdx: number) {
    if (cpuSlots.length <= 1) return
    setCpuSlots(prev => prev.filter((_, i) => i !== cpuIdx))
    if (activeSlot === cpuIdx) {
      setActiveSlot('p1')
      setGridIdx(p1CharIdx)
    } else if (typeof activeSlot === 'number' && activeSlot > cpuIdx) {
      setActiveSlot(activeSlot - 1)
    }
  }

  function confirmSelection() {
    assignToActive(gridIdx)
    SoundEngine.play('ui_confirm')

    if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current)
    setConfirmedIdx(gridIdx)
    confirmTimerRef.current = setTimeout(() => setConfirmedIdx(null), 400)

    if (activeSlot === 'p1') {
      const firstUnset = cpuSlots.findIndex(s => s.charIdx === null)
      if (firstUnset !== -1) activateSlot(firstUnset)
      else setFocusArea('sidebar')
    } else if (typeof activeSlot === 'number') {
      const nextUnset = cpuSlots.findIndex((s, i) => i > (activeSlot as number) && s.charIdx === null)
      if (nextUnset !== -1) activateSlot(nextUnset)
      else setFocusArea('sidebar')
    }
  }

  function tryStart() {
    const p1Char = CHARACTERS[p1CharIdx]
    if (!p1Char) return
    if (cpuSlots.some(s => s.charIdx === null)) return
    const p1Entry = { characterId: p1Char.id, isHuman: true as const, aiDifficulty: 'medium' as Difficulty }
    const toSlot  = (s: CpuSlot) => ({ characterId: CHARACTERS[s.charIdx!].id, isHuman: false as const, aiDifficulty: s.difficulty })
    const config: LobbyConfig = {
      stageId: initialState.stageId,
      teams: [
        { color: 'Blue', slots: [...(p1Team === 'Blue' ? [p1Entry] : []), ...cpuSlots.filter(s => s.team === 'Blue').map(toSlot)] },
        { color: 'Red',  slots: [...(p1Team === 'Red'  ? [p1Entry] : []), ...cpuSlots.filter(s => s.team === 'Red').map(toSlot)] },
      ] as TeamConfig[],
    }
    navigate('stage-select', { lobbyConfig: config })
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (focusArea === 'sidebar') {
      switch (e.key) {
        case 'ArrowUp':    e.preventDefault(); cycleSlot(-1);         break
        case 'ArrowDown':  e.preventDefault(); cycleSlot(1);          break
        case 'ArrowLeft':  e.preventDefault(); setFocusArea('grid');              break
        case 't': case 'T': e.preventDefault(); toggleTeam();                   break
        case 'd': case 'D': e.preventDefault(); cycleDifficulty();              break
        case '+': case '=': e.preventDefault(); addCpu();                       break
        case 'Delete': case 'Backspace':
          e.preventDefault()
          if (typeof activeSlot === 'number') removeCpu(activeSlot)
          break
        case 'Enter': case ' ':
          e.preventDefault()
          if (activeSlot === 'add-bot') addCpu()
          else tryStart()
          break
        case 'Escape':  e.preventDefault(); navigate('main-menu');              break
        case 'i': case 'I':
          e.preventDefault()
          navigate('character-profile', { characterId: CHARACTERS[gridIdx]?.id })
          break
      }
      return
    }

    switch (e.key) {
      case 'ArrowLeft':  e.preventDefault(); moveGrid(-1);    break
      case 'ArrowRight':
        e.preventDefault()
        if (gridIdx >= total - 1) setFocusArea('sidebar')
        else moveGrid(1)
        break
      case 'ArrowUp':    e.preventDefault(); moveGrid(-COLS); break
      case 'ArrowDown':  e.preventDefault(); moveGrid(COLS);  break
      case 'Enter': case ' ':
        e.preventDefault(); confirmSelection(); break
      case 'Escape':
        e.preventDefault(); navigate('main-menu'); break
      case 'i': case 'I':
        e.preventDefault()
        navigate('character-profile', { characterId: CHARACTERS[gridIdx]?.id })
        break
    }
  }

  function tileColorFor(charIdx: number): string | null {
    // Cursor always wins so the red CPU cursor is visible even on P1's blue tile
    if (typeof activeSlot === 'number' && charIdx === gridIdx) return RED
    if (charIdx === p1CharIdx) return BLUE
    if (cpuSlots.some(s => s.charIdx !== null && s.charIdx === charIdx)) return `${RED}55`
    return null
  }

  const canStart = cpuSlots.every(s => s.charIdx !== null)

  let activeLabel: string
  if (activeSlot === 'p1')       activeLabel = 'P1'
  else if (activeSlot === 'add-bot') activeLabel = 'ADD BOT'
  else                           activeLabel = `CPU ${activeSlot + 1}`

  const controlHints = focusArea === 'grid'
    ? [
        { key: '←→↑↓', action: 'SELECT FIGHTER' },
        { key: 'ENTER', action: 'CONFIRM' },
        { key: 'I',     action: 'PROFILE' },
        { key: '→ EDGE', action: 'SETUP PANEL' },
        { key: 'ESC',   action: 'BACK' },
      ]
    : [
        { key: '↑↓',  action: 'SWITCH SLOT' },
        { key: '←',   action: 'BACK TO GRID' },
        { key: 'T',   action: 'TEAM' },
        { key: 'D',   action: 'DIFFICULTY' },
        { key: '+',   action: 'ADD BOT' },
        { key: 'DEL', action: 'REMOVE BOT' },
        { key: 'ENTER', action: 'START' },
      ]

  return (
    <div
      ref={containerRef}
      role="application"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        position: 'absolute', inset: 0, background: BG,
        pointerEvents: 'auto', outline: 'none',
        display: 'flex', flexDirection: 'column',
        userSelect: 'none', overflow: 'hidden',
      }}
    >
      {/* Title */}
      <div style={{ padding: '16px 40px 4px', flexShrink: 0 }}>
        <SectionTitle size="36px">SELECT YOUR FIGHTER</SectionTitle>
      </div>

      {/* Two-column body */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>

        {/* Left: character grid */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          padding: '0 16px', overflow: 'hidden',
        }}>
          <div ref={gridScrollRef} style={{ flex: 1, overflowY: 'auto' }}>
            {/* Slot transition banner — flashes when active slot switches to a CPU slot */}
            {slotBanner && (
              <div
                key={slotBanner.key}
                style={{
                  textAlign:     'center',
                  fontFamily:    FONT,
                  fontSize:      '16px',
                  letterSpacing: '5px',
                  color:         RED,
                  padding:       '10px 0 4px',
                  animation:     'slot-banner 1800ms ease forwards',
                  pointerEvents: 'none',
                }}
              >
                ▶ {slotBanner.text}
              </div>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              {CHARACTERS.map((char, i) => {
                const color = tileColorFor(i)
                return (
                  <div
                    key={char.id}
                    data-char-idx={i}
                    style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: `${TILE_W}px` }}
                  >
                    <CharTile
                      char={char}
                      cursorColor={color}
                      flash={confirmedIdx === i}
                      onClick={() => { setGridIdx(i); assignToActive(i) }}
                    />
                    {/* "YOU" badge — shows P1's confirmed character when in CPU picking mode */}
                    {i === p1CharIdx && typeof activeSlot === 'number' && (
                      <div style={{
                        position:      'absolute',
                        top:           '4px',
                        left:          '50%',
                        transform:     'translateX(-50%)',
                        background:    `${BLUE}28`,
                        border:        `1px solid ${BLUE}`,
                        color:         BLUE,
                        fontFamily:    FONT,
                        fontSize:      '9px',
                        letterSpacing: '2px',
                        padding:       '1px 6px',
                        lineHeight:    1.4,
                        zIndex:        2,
                        pointerEvents: 'none',
                        whiteSpace:    'nowrap',
                      }}>
                        YOU
                      </div>
                    )}
                    <TileLabel name={char.name} active={color !== null} />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Active slot indicator — re-keyed on slot change to re-trigger animation */}
          <div
            key={`slot-label-${activeSlot}`}
            style={{
              textAlign:  'center',
              fontFamily: FONT,
              fontSize:   '18px',
              color:      typeof activeSlot === 'number' ? RED : BLUE,
              letterSpacing: '2px',
              padding:    '8px 0',
              animation:  'item-reveal 200ms ease both',
            }}
          >
            Picking for: {activeLabel} →
          </div>
        </div>

        {/* Right: match setup panel */}
        <div style={{
          width: '320px', flexShrink: 0,
          borderLeft: `1px solid ${focusArea === 'sidebar' ? BLUE : PANEL_BORDER}`,
          display: 'flex', flexDirection: 'column',
          padding: '12px', gap: '8px', overflowY: 'auto',
          transition: 'border-color 120ms ease',
        }}>
          <div style={{
            fontFamily: FONT, fontSize: '14px', color: focusArea === 'sidebar' ? BLUE : GREY_MID,
            letterSpacing: '3px', marginBottom: '4px',
            transition: 'color 120ms ease',
          }}>
            MATCH SETUP
          </div>

          <P1Card
            char={CHARACTERS[p1CharIdx] ?? CHARACTERS[0]}
            team={p1Team}
            isActive={activeSlot === 'p1'}
            onActivate={() => { setFocusArea('sidebar'); activateSlot('p1') }}
            onTeamToggle={() => setP1Team(t => t === 'Blue' ? 'Red' : 'Blue')}
          />

          {cpuSlots.map((slot, i) => (
            <CpuCard
              key={slot.id}
              index={i}
              slot={slot}
              isActive={activeSlot === i}
              onActivate={() => { setFocusArea('sidebar'); activateSlot(i) }}
              onTeamToggle={() => setCpuSlots(prev => {
                const next = [...prev]
                const cur  = next[i]
                if (cur) next[i] = { ...cur, team: cur.team === 'Blue' ? 'Red' : 'Blue' }
                return next
              })}
              onDifficulty={d => setCpuSlots(prev => {
                const next = [...prev]
                const cur  = next[i]
                if (cur) next[i] = { ...cur, difficulty: d }
                return next
              })}
              onRemove={cpuSlots.length > 1 ? () => removeCpu(i) : undefined}
            />
          ))}

          {cpuSlots.length < 3 && <AddBotButton onClick={addCpu} isActive={activeSlot === 'add-bot'} />}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: PANEL, borderTop: `2px solid ${PANEL_BORDER}`,
        padding: '0 40px', height: '52px', flexShrink: 0, zIndex: 101,
      }}>
        <button
          onClick={() => navigate('main-menu')}
          style={{
            fontFamily: FONT, fontSize: '20px', letterSpacing: '2px',
            background: 'none', border: `1px solid ${PANEL_BORDER}`,
            color: GREY_MID, padding: '5px 16px', cursor: 'pointer',
            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
          }}
        >
          BACK
        </button>
        <button
          onClick={tryStart}
          disabled={!canStart}
          style={{
            fontFamily: FONT, fontSize: '26px', letterSpacing: '4px',
            padding: '8px 36px', cursor: canStart ? 'pointer' : 'not-allowed',
            border: `2px solid ${canStart ? GOLD : PANEL_BORDER}`,
            background: canStart ? `${GOLD}20` : 'none',
            color: canStart ? GOLD : GREY_MID,
            boxShadow: canStart ? glow(GOLD, 20) : 'none',
            clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            transition: 'all 120ms ease',
          }}
        >
          ▶ START
        </button>
      </div>

      <ControlBar hints={controlHints} />
    </div>
  )
}
