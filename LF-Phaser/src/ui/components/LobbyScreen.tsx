/**
 * LobbyScreen — Dota-style pre-match team configuration.
 *
 * Layout:
 *   Top half: two team panels (Blue = player, Red = CPU) with slot assignment
 *   Bottom half: character pool grid + difficulty selector + Start Match button
 *
 * On confirm: emits `game:lobby-confirm` with full LobbyConfig, then navigates to 'vs'.
 */

import { useEffect, useRef, useState } from 'react'
import { useRouter }   from '../router.js'
import { bus }         from '../bus.js'
import { CHARACTERS }  from '../../data/characters.js'
import { STAGE_DEFS }  from '../../data/stages.js'
import type { SlotConfig, TeamConfig, LobbyConfig, CharacterMeta } from '../types.js'
import { ControlBar } from '../primitives/ControlBar.js'
import {
  FONT, FONT_MONO, GOLD, CRIMSON, ORANGE, ACID_GREEN, ELECTRIC_BLUE as BLUE,
  VOID, PANEL, PANEL_BORDER, GREY_LIGHT, GREY_MID, GREY_DIM,
} from '../theme.js'

const RED = CRIMSON

type Difficulty = 'easy' | 'medium' | 'hard'

const DIFF_LABELS: Record<Difficulty, string> = {
  easy:   'Easy',
  medium: 'Medium',
  hard:   'Hard',
}

interface TeamState {
  color:  string
  label:  string
  slots:  SlotConfig[]
}

function makeDefaultTeams(charId: number, _stageId: number): [TeamState, TeamState] {
  const blueTeam: TeamState = {
    color: 'Blue',
    label: 'Team Blue',
    slots: [{ characterId: charId, isHuman: true, aiDifficulty: 'medium' }],
  }
  const redTeam: TeamState = {
    color: 'Red',
    label: 'Team Red',
    slots: [{ characterId: 11, isHuman: false, aiDifficulty: 'medium' as const }],
  }
  return [blueTeam, redTeam]
}

/** Small character portrait for slot/pool cards */
function CharCard({
  char, size, active, onClick,
}: {
  char:    CharacterMeta | null
  size:    number
  active?: boolean
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      style={{
        width:          `${size}px`,
        height:         `${size}px`,
        background:     char ? PANEL : GREY_DIM,
        border:         `2px solid ${active ? GOLD : PANEL_BORDER}`,
        cursor:         onClick ? 'pointer' : 'default',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            '2px',
        overflow:       'hidden',
        flexShrink:     0,
        imageRendering: 'pixelated',
      }}
    >
      {char ? (
        <>
          <img
            src={char.headSprite}
            alt={char.name}
            style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }}
          />
          <span style={{ fontFamily: FONT, fontSize: '10px', color: active ? GOLD : GREY_MID, letterSpacing: '1px' }}>
            {char.name}
          </span>
        </>
      ) : (
        <span style={{ color: '#444', fontSize: '20px' }}>+</span>
      )}
    </div>
  )
}

/** One team's slot row */
function TeamPanel({
  team, accentColor, activeSlot, onSlotClick, onAddSlot, onRemoveSlot,
}: {
  team:        TeamState
  accentColor: string
  activeSlot:  number | null
  onSlotClick: (idx: number) => void
  onAddSlot:   () => void
  onRemoveSlot:(idx: number) => void
}) {
  return (
    <div style={{
      flex:          1,
      background:    PANEL,
      border:        `1px solid ${accentColor}44`,
      padding:       '8px 12px',
    }}>
      <div style={{ fontFamily: FONT, fontSize: '20px', color: accentColor, letterSpacing: '3px', marginBottom: '8px' }}>
        {team.label}
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {team.slots.map((slot, i) => {
          const char = CHARACTERS.find(c => c.id === slot.characterId) ?? null
          const isActive = activeSlot === i
          return (
            <div key={i} style={{ position: 'relative' }}>
              <CharCard
                char={char}
                size={60}
                active={isActive}
                onClick={() => onSlotClick(i)}
              />
              {/* Human / CPU badge */}
              <div style={{
                position:   'absolute',
                top:        2,
                left:       2,
                fontFamily: FONT_MONO,
                fontSize:   '8px',
                background: slot.isHuman ? BLUE : GREY_DIM,
                color:      GREY_LIGHT,
                padding:    '0 3px',
                pointerEvents: 'none',
              }}>
                {slot.isHuman ? 'P1' : 'CPU'}
              </div>
              {/* Remove button — only for non-first slots */}
              {i > 0 && (
                <button
                  onClick={e => { e.stopPropagation(); onRemoveSlot(i) }}
                  style={{
                    position: 'absolute', top: 2, right: 2,
                    background: GREY_DIM, border: 'none', color: GREY_MID,
                    width: '14px', height: '14px', cursor: 'pointer', fontSize: '9px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  ×
                </button>
              )}
            </div>
          )
        })}
        {/* Add slot button (max 3) */}
        {team.slots.length < 3 && (
          <button
            onClick={onAddSlot}
            style={{
              width: '60px', height: '60px', background: 'none',
              border: `2px dashed ${PANEL_BORDER}`, color: GREY_MID, cursor: 'pointer',
              fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  )
}

export function LobbyScreen() {
  const navigate = useRouter(s => s.navigate)
  const params   = useRouter(s => s.params)

  const initCharId  = (params['charId']  as number | undefined) ?? 11
  const initStageId = (params['stageId'] as number | undefined) ?? 1

  const [teams,         setTeams]         = useState<[TeamState, TeamState]>(() => makeDefaultTeams(initCharId, initStageId))
  const [difficulty,    setDifficulty]    = useState<Difficulty>('medium')
  const [activeTeam,    setActiveTeam]    = useState<0 | 1 | null>(null)
  const [activeSlot,    setActiveSlot]    = useState<number | null>(null)
  const [charPoolIdx,   setCharPoolIdx]   = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const DIFFS: Difficulty[] = ['easy', 'medium', 'hard']

  useEffect(() => { containerRef.current?.focus() }, [])

  // Update all AI slots when difficulty changes
  useEffect(() => {
    setTeams(prev => {
      const next: [TeamState, TeamState] = [
        { ...prev[0], slots: prev[0].slots.map(s => ({ ...s, aiDifficulty: difficulty })) },
        { ...prev[1], slots: prev[1].slots.map(s => ({ ...s, aiDifficulty: difficulty })) },
      ]
      return next
    })
  }, [difficulty])

  function handleKeyDown(e: React.KeyboardEvent) {
    // When a slot is selected, arrow keys navigate the character pool
    if (activeTeam !== null && activeSlot !== null) {
      const total = CHARACTERS.length
      const POOL_COLS = 8
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          setCharPoolIdx(i => Math.max(0, i - 1))
          return
        case 'ArrowRight':
          e.preventDefault()
          setCharPoolIdx(i => Math.min(total - 1, i + 1))
          return
        case 'ArrowUp':
          e.preventDefault()
          setCharPoolIdx(i => Math.max(0, i - POOL_COLS))
          return
        case 'ArrowDown':
          e.preventDefault()
          setCharPoolIdx(i => Math.min(total - 1, i + POOL_COLS))
          return
        case 'Enter':
        case ' ':
          e.preventDefault()
          assignCharacter(CHARACTERS[charPoolIdx]!)
          return
        case 'Escape':
          e.preventDefault()
          setActiveTeam(null)
          setActiveSlot(null)
          return
      }
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        navigate('character-select', { charId: initCharId, stageId: initStageId })
        break
      case 'Enter':
        e.preventDefault()
        tryStart()
        break
      // [ and ] cycle difficulty
      case '[':
        e.preventDefault()
        setDifficulty(d => DIFFS[Math.max(0, DIFFS.indexOf(d) - 1)]!)
        break
      case ']':
        e.preventDefault()
        setDifficulty(d => DIFFS[Math.min(DIFFS.length - 1, DIFFS.indexOf(d) + 1)]!)
        break
      // 1/2 quick-select team slot for assignment
      case '1':
        e.preventDefault()
        selectSlot(0, 0)
        setCharPoolIdx(0)
        break
      case '2':
        e.preventDefault()
        selectSlot(1, 0)
        setCharPoolIdx(0)
        break
    }
  }

  function selectSlot(teamIdx: 0 | 1, slotIdx: number) {
    setActiveTeam(teamIdx)
    setActiveSlot(slotIdx)
  }

  function assignCharacter(char: CharacterMeta) {
    if (activeTeam === null || activeSlot === null) return
    setTeams(prev => {
      const next = [...prev] as [TeamState, TeamState]
      const team = { ...next[activeTeam], slots: [...next[activeTeam].slots] }
      team.slots[activeSlot] = { ...team.slots[activeSlot]!, characterId: char.id }
      next[activeTeam] = team
      return next
    })
    setActiveSlot(null)
    setActiveTeam(null)
  }

  function addSlot(teamIdx: 0 | 1) {
    setTeams(prev => {
      const next = [...prev] as [TeamState, TeamState]
      const team = { ...next[teamIdx], slots: [...next[teamIdx].slots] }
      team.slots.push({ characterId: 11, isHuman: false, aiDifficulty: difficulty })
      next[teamIdx] = team
      return next
    })
  }

  function removeSlot(teamIdx: 0 | 1, slotIdx: number) {
    setTeams(prev => {
      const next = [...prev] as [TeamState, TeamState]
      const team = { ...next[teamIdx], slots: next[teamIdx].slots.filter((_, i) => i !== slotIdx) }
      next[teamIdx] = team
      return next
    })
  }

  function tryStart() {
    const config: LobbyConfig = {
      stageId: initStageId,
      teams: teams.map(t => ({
        color: t.color,
        slots: t.slots,
      })) as [TeamConfig, TeamConfig],
    }
    bus.emit('game:lobby-confirm', config)
    navigate('vs', { lobbyConfig: config })
  }

  const canStart = teams.every(t => t.slots.length > 0)
  const stage = STAGE_DEFS.find(s => s.id === initStageId)

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        position:      'absolute',
        inset:         0,
        background:    VOID,
        pointerEvents: 'auto',
        outline:       'none',
        display:       'flex',
        flexDirection: 'column',
        userSelect:    'none',
        color:         GREY_LIGHT,
      }}
    >
      {/* Header */}
      <div style={{
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        background:      PANEL,
        borderBottom:    `2px solid ${CRIMSON}`,
        padding:         '0 16px',
        height:          '44px',
        flexShrink:      0,
      }}>
        <span style={{ fontFamily: FONT, fontSize: '28px', color: GREY_LIGHT, letterSpacing: '4px' }}>
          LOBBY
        </span>
        <span style={{ fontFamily: FONT, fontSize: '18px', color: GREY_MID, letterSpacing: '2px' }}>
          STAGE: {stage?.name ?? '—'}
        </span>
      </div>

      {/* Team panels */}
      <div style={{ display: 'flex', gap: '8px', padding: '12px 16px', flexShrink: 0 }}>
        <TeamPanel
          team={teams[0]}
          accentColor={BLUE}
          activeSlot={activeTeam === 0 ? activeSlot : null}
          onSlotClick={i => selectSlot(0, i)}
          onAddSlot={() => addSlot(0)}
          onRemoveSlot={i => removeSlot(0, i)}
        />
        <TeamPanel
          team={teams[1]}
          accentColor={RED}
          activeSlot={activeTeam === 1 ? activeSlot : null}
          onSlotClick={i => selectSlot(1, i)}
          onAddSlot={() => addSlot(1)}
          onRemoveSlot={i => removeSlot(1, i)}
        />
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #333', flexShrink: 0, margin: '0 16px' }} />

      {/* Character pool */}
      <div style={{ flex: 1, padding: '10px 16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontFamily: FONT, fontSize: '16px', color: GREY_DIM, letterSpacing: '3px' }}>
          CHARACTER POOL
          {activeTeam !== null && <span style={{ color: GOLD, marginLeft: '12px', fontSize: '13px' }}>← select a character below</span>}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', overflow: 'auto' }}>
          {CHARACTERS.map((char, i) => (
            <CharCard
              key={char.id}
              char={char}
              size={56}
              active={activeTeam !== null && i === charPoolIdx}
              onClick={() => assignCharacter(char)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        background:     PANEL,
        borderTop:      `1px solid ${PANEL_BORDER}`,
        padding:        '0 16px',
        height:         '52px',
        flexShrink:     0,
      }}>
        <button
          onClick={() => navigate('character-select', { charId: initCharId, stageId: initStageId })}
          style={{
            fontFamily:    FONT,
            fontSize:      '18px',
            letterSpacing: '2px',
            background:    'none',
            border:        `1px solid ${PANEL_BORDER}`,
            color:         GREY_MID,
            padding:       '4px 14px',
            cursor:        'pointer',
            clipPath:      'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
          }}
        >
          ← BACK
        </button>

        {/* Difficulty selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: FONT, fontSize: '16px', color: GREY_MID, letterSpacing: '2px' }}>DIFFICULTY:</span>
          {(['easy', 'medium', 'hard'] as Difficulty[]).map(d => {
            const diffColor = d === 'easy' ? ACID_GREEN : d === 'medium' ? ORANGE : CRIMSON
            return (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                style={{
                  fontFamily:    FONT,
                  fontSize:      '16px',
                  letterSpacing: '1px',
                  padding:       '4px 12px',
                  background:    difficulty === d ? `${diffColor}33` : 'none',
                  border:        `1px solid ${difficulty === d ? diffColor : PANEL_BORDER}`,
                  color:         difficulty === d ? diffColor : GREY_DIM,
                  cursor:        'pointer',
                  clipPath:      'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                }}
              >
                {DIFF_LABELS[d]}
              </button>
            )
          })}
        </div>

        <button
          onClick={tryStart}
          disabled={!canStart}
          style={{
            fontFamily:    FONT,
            fontSize:      '22px',
            letterSpacing: '3px',
            padding:       '8px 24px',
            background:    canStart ? `${CRIMSON}33` : GREY_DIM,
            border:        `1px solid ${canStart ? CRIMSON : PANEL_BORDER}`,
            color:         canStart ? GREY_LIGHT : GREY_DIM,
            cursor:        canStart ? 'pointer' : 'not-allowed',
            clipPath:      'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
          }}
        >
          START MATCH
        </button>
      </div>
      <ControlBar hints={[
        { key: '1/2', action: 'SELECT TEAM SLOT' },
        { key: 'ARROWS', action: 'PICK CHAR' },
        { key: 'ENTER', action: 'ASSIGN' },
        { key: '[/]', action: 'DIFFICULTY' },
        { key: 'ESC', action: 'BACK' },
      ]} />
    </div>
  )
}
