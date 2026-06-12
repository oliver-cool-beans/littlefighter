/** Shared UI types used by both the bus event map and React components. */

export interface PlayerHUDState {
  name:      string
  hp:        number
  maxHp:     number
  /** Unrecoverable HP floor — renders as permanent grey damage on the HP bar. */
  hpBound?:  number
  mp:        number
  maxMp:     number
  headSprite?: string
  /** Phaser canvas pixel position of the character's screen center (for chat bubbles). */
  screenX?:  number
  screenY?:  number
}

export interface MatchStats {
  damageDealt: number
  hitsLanded:  number
  biggestHit:  number
  maxCombo:    number
}

export interface MoveEntry {
  name:        string   // e.g. "Ice Sword"
  input:       string   // e.g. ">> + Attack"
  description: string   // e.g. "Dashes forward, deals heavy knockback"
  energy?:     number   // MP cost to use this move, from the frame's mp field
}

export interface CharacterMeta {
  id:          number
  name:        string
  /** Path to the head sprite sheet, e.g. "sprite/davis_f.png" */
  headSprite:  string
  headW:       number
  headH:       number
  /** First body sprite sheet (pic 0), e.g. "sprite/davis_0.png" */
  bodySprite:  string
  /** Frame dimensions of the body sprite sheet (w + 1) */
  bodyFrameW:  number
  bodyFrameH:  number
  /** Short bio shown on character profile screen */
  bio:         string
  /** Notable moves for the moves list */
  moves:       MoveEntry[]
}

/** Per-slot stat overrides applied after character creation. */
export interface SlotStatOverrides {
  hp?: number
}

/** Screen-space position of a character (in Phaser canvas pixels). */
export interface CharScreenPos {
  screenX: number
  screenY: number
}

/** Slot in a lobby team: one fighter. */
export interface SlotConfig {
  characterId:    number
  isHuman:        boolean
  aiDifficulty:   'easy' | 'medium' | 'hard'
  /**
   * In network mode: the playerIndex of the remote human driving this slot.
   * Undefined for the local human slot and for bot slots.
   */
  networkPlayerIndex?: number
  /** Seconds into the wave at which this character spawns. 0 or omitted = immediate. */
  spawnAt?:       number
  /** Optional stat overrides applied on top of the character's own data defaults. */
  statOverrides?: SlotStatOverrides
}

/** One team's configuration. */
export interface TeamConfig {
  color:  string      // display label e.g. "Blue", "Red"
  slots:  SlotConfig[]
}

/** Full match configuration emitted from the Lobby. */
export interface LobbyConfig {
  stageId:            number
  teams:              TeamConfig[]
  /** True when this is a networked online match. */
  networkMode?:       boolean
  /** Which player index this client controls (0 = host). */
  localPlayerIndex?:  number
  /** Shared RNG seed for deterministic behaviour. */
  seed?:              number
}

/** Payload for a match announcement banner. */
export interface AnnounceEvent {
  text:      string
  style:     'round' | 'fight' | 'ko' | 'win' | 'perfect'
  /** How long to show the banner in ms (default 1500). */
  duration?: number
}

/** All typed events that flow across the bus. */
export type UIEvents = {
  // ── Standard game events ─────────────────────────────────────────────────
  /** Phaser → React: update HP/MP bars every physics tick */
  'ui:hud-update':    { p1: PlayerHUDState; p2: PlayerHUDState; timeLeft?: number }
  /** Phaser → React: match finished */
  'ui:match-end':     { winner: 'p1' | 'p2'; p1Stats?: MatchStats; p2Stats?: MatchStats }
  /** Phaser → React: KO quip from the losing character */
  'ui:ko-quip':       { loserName: string; quip: string }
  /** Phaser → React: player was eliminated — show Continue screen */
  'ui:game-over':     undefined
  /** Phaser → React: current logical scene changed — LEGACY, prefer router */
  'ui:scene-change':  { scene: 'select' | 'match' | 'result' }
  /** Phaser → React: play a match announcement banner */
  'ui:announce':      AnnounceEvent
  /** Phaser → React: update combo counter (null = reset) */
  'ui:combo-update':  { attackerTeam: number; count: number } | null
  /** React → React: navigate to a new screen */
  'nav:go':           { screen: string }
  /** React → Phaser: user confirmed lobby setup, start the match */
  'game:lobby-confirm': LobbyConfig
  /** React → Phaser: user wants another round with same setup */
  'game:rematch':     undefined
  /** React → Phaser: return to character select */
  'game:quit':        undefined
  /** React → Phaser: legacy start event (kept for compatibility) */
  'game:start':       { p1CharId: number; cpuCharId: number; stageId: number }
  /** React → Phaser: preview a stage background live */
  'ui:stage-preview': { stageId: number }
  /** Phaser → React: pause / resume the physics loop */
  'game:pause':       undefined
  'game:resume':      undefined
  /** React → React: cursor moved in a menu — trigger audio tick */
  'menu-tick':        undefined

  // ── Network events: React → LobbyManager ────────────────────────────────
  'net:create-lobby':      { displayName: string; characterId?: number; isPrivate: boolean }
  'net:join-lobby':        { code: string; displayName: string; characterId?: number }
  'net:set-character':     { characterId: number }
  'net:start':             undefined
  'net:send-chat':         { text: string }
  'net:pause-request':     undefined
  'net:resume-request':    undefined
  'net:disconnect':        undefined
  'net:subscribe-rooms':   undefined
  'net:unsubscribe-rooms': undefined

  // ── Network events: LobbyManager → React/Phaser ─────────────────────────
  'net:lobby-update':  { code: string; slots: import('../network/types.js').PlayerSlot[]; status: import('../network/types.js').LobbyStatus }
  'net:countdown':     { seconds: number }
  'net:match-start':   { seed: number; playerIndex: number; lobbyState: { code: string; slots: import('../network/types.js').PlayerSlot[] } }
  'net:server-state':  { tick: number; entities: import('../network/types.js').EntityStateNet[]; freezeFrames: number; shakeSeverity: number }
  'net:remote-input':  { tick: number; playerIndex: number; keys: number }
  'net:match-end':     { winnerTeam: number }
  'net:chat-received': { playerIndex: number; displayName: string; text: string }
  'net:game-paused':   { playerIndex: number; pausesRemaining: number }
  'net:game-resumed':  undefined
  'net:error':         { code: string; message: string }
  'net:rooms-update':  { rooms: import('../network/types.js').RoomInfo[] }

  // ── Network events: MatchScene → LobbyManager ───────────────────────────
  'net:broadcast-state': { tick: number; entities: import('../network/types.js').EntityStateNet[]; freezeFrames: number; shakeSeverity: number }
  'net:local-input':     { tick: number; keys: number }
}
