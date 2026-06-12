/**
 * MatchScene — Phase 10 production match scene.
 *
 * Reads character selection from the UIEventBus, runs the full combat loop,
 * and drives the React HUD via bus events. No Phaser text/graphics for UI.
 *
 * P1 controls: arrow keys + Z=defend / X=attack / C=jump
 * Press F1 to toggle bdy/itr debug overlay.
 */

import { Controller, DEFAULT_CONFIG } from '../game/controller.js'
import { DamageNumberLayer }           from '../game/DamageNumbers.js'
import { EnemyHealthBarLayer }         from '../game/EnemyHealthBar.js'
import { ParticleLayer }               from '../game/Particles.js'
import { Character }                   from '../game/character/index.js'
import { createCharacterById }         from '../game/characterFactory.js'
import { AIController, AIInterface, createAI } from '../game/AI/index.js'
import type { AIScript }               from '../game/AI/index.js'
import { AIScheduler }                 from '../game/AI/scheduler.js'
import { encodeKeys, decodeKeys }      from '../network/types.js'
import type { EntityStateNet }         from '../network/types.js'
import { createBat }                   from '../game/weapons/bat.js'
import { spawnObject }                 from '../game/objectFactory.js'
import { Scene as LFScene }            from '../game/scene.js'
import { LivingObject }                from '../game/livingobject.js'
import { createStageById }                 from '../game/maps/stageFactory.js'
import type { Stage }                  from '../game/maps/index.js'
import davisData    from '../data/davis.js'
import dennisData   from '../data/dennis.js'
import deepData     from '../data/deep.js'
import johnData     from '../data/john.js'
import henryData    from '../data/henry.js'
import firenData    from '../data/firen.js'
import freezeData   from '../data/freeze.js'
import louisData    from '../data/louis.js'
import rudolfData   from '../data/rudolf.js'
import banditData   from '../data/bandit.js'
import woodyData    from '../data/woody.js'
import knightData   from '../data/knight.js'
import julianData   from '../data/julian.js'
import janData      from '../data/jan.js'
import firzenData   from '../data/firzen.js'
import richterData  from '../data/richter.js'
import clData       from '../data/cl.js'
import justinData   from '../data/justin.js'
import monkData     from '../data/monk.js'
import markData     from '../data/mark.js'
import hunterData   from '../data/hunter.js'
import jackData     from '../data/jack.js'
import sorcererData from '../data/sorcerer.js'
import batData      from '../data/bat.js'
import louisexData  from '../data/louisex.js'
import bandit2Data  from '../data/bandit2.js'
import guardianData from '../data/guardian.js'
import criminalData from '../data/criminal.js'
import dragonData   from '../data/dragon.js'
import Global                          from '../game/global.js'
import { SoundEngine }                 from '../sound/SoundEngine.js'
import { bus }                         from '../ui/bus.js'
import type { OpointSpec, DamageType, HitSeverity, CharacterData } from '../types/index.js'
import type { PlayerHUDState, LobbyConfig, MatchStats } from '../ui/types.js'

const gameplay = Global.gameplay
// Ticks without a new hit before the combo counter resets (2 s at 30 Hz)
const COMBO_WINDOW_TICKS = 60
const TICK_MS  = 1000 / gameplay.framerate

// Match timer: 99 s counted in physics ticks
const MATCH_TIME_LIMIT_TICKS = 99 * gameplay.framerate

const KO_QUIPS: Record<string, string> = {
  Davis:  'Not my best day…',
  Dennis: 'Next time…',
  Deep:   'Inconceivable!',
  John:   'I slipped!',
  Henry:  'Impossible!',
  Firen:  'The heat… fades.',
  Freeze: 'Th-thaw me out…',
  Louis:  'My bo-staff…',
  Rudolf: 'I was holding back!',
  Bandit: 'Easy money, they said!',
  Woody:  'My arms are numb!',
  default:'Ugh…',
}

const CHAR_DATA_BY_ID: Record<number, CharacterData> = {
  11: davisData,
  12: dennisData,
  13: deepData,
  14: johnData,
  15: henryData,
  16: firenData,
  17: freezeData,
  18: louisData,
  19: rudolfData,
  20: julianData,
  21: banditData,
  22: woodyData,
  23: janData,
  24: firzenData,
  25: richterData,
  26: clData,
  27: justinData,
  28: monkData,
  29: markData,
  30: hunterData,
  31: jackData,
  32: sorcererData,
  33: batData,
  34: louisexData,
  35: bandit2Data,
  37: knightData,
  50: guardianData,
  51: criminalData,
  52: dragonData,
}

const DEFAULT_LOBBY: LobbyConfig = {
  stageId: 1,
  teams: [
    { color: 'Blue', slots: [{ characterId: 11, isHuman: true,  aiDifficulty: 'easy' }] },
    { color: 'Red',  slots: [{ characterId: 11, isHuman: false, aiDifficulty: 'easy' }] },
  ],
}

/** Lobby config written by the bus handler before scene start. */
export let pendingLobbyConfig: LobbyConfig = DEFAULT_LOBBY

/** @deprecated Use pendingLobbyConfig instead. Kept for main.ts compat during transition. */
export const matchConfig = {
  get p1CharId()  { return pendingLobbyConfig.teams[0]?.slots[0]?.characterId ?? 11 },
  get cpuCharId() { return pendingLobbyConfig.teams[1]?.slots[0]?.characterId ?? 11 },
  get stageId()   { return pendingLobbyConfig.stageId },
}

/** A slot queued to spawn at a future match tick. */
interface PendingSpawn {
  slot:        import('../ui/types.js').SlotConfig
  teamIdx:     number
  spawnAtTick: number
}

export class MatchScene extends Phaser.Scene {
  private _con!:        Controller
  private _aiCons:      AIController[] = []
  private _aiScripts:   AIScript[] = []
  private _aiScheduler: AIScheduler | null = null
  private _players:     Character[] = []
  private _lfScene!:    LFScene
  private _objects:        InstanceType<typeof LivingObject>[] = []
  private _pendingDestroys = new Set<InstanceType<typeof LivingObject>>()
  private _matchTime    = { t: 0 }
  private _accumulator  = 0
  private _matchOver        = false
  private _matchEndEmitted  = false
  private _lobbyConfig: LobbyConfig = DEFAULT_LOBBY

  private _damageNumbers!: DamageNumberLayer
  private _particles!:     ParticleLayer
  private _ready          = false
  private _debugMode      = false
  private _debugGraphics!: Phaser.GameObjects.Graphics
  private _bg!:            Stage
  private _groundY        = 0
  private _initZ          = 0
  private _enemyBarLayer!: EnemyHealthBarLayer
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _matchCtx!:     any
  private _pendingSpawns: PendingSpawn[] = []

  // ── Feel / juice ─────────────────────────────────────────────────────────
  /** Remaining physics frames to skip for hitstop. */
  private _freezeFrames = 0
  /** Pending shake severity to include in next host state broadcast (0=none 1=light 2=medium 3=heavy). */
  private _pendingNetShake = 0
  /** Per-team combo counter: team → { count, expireAtTick } */
  private _combos = new Map<number, { count: number; expireAtTick: number }>()
  /** Slow-motion time scale: 1.0 = normal, 0.0–1.0 = slow. */
  private _slowmoScale = 1.0
  /** Per-team peak combo reached this match. */
  private _maxCombos = new Map<number, number>()

  // ── Network mode ────────────────────────────────────────────────────────
  private _networkMode       = false
  private _isNetworkHost     = false
  private _localPlayerIndex: number = 0
  private _netPaused         = false
  private _netControllers:   Map<number, AIController> = new Map()
  private _prevNetKeys:      Map<number, number> = new Map()
  private _chatBubbles:      Map<number, { obj: Phaser.GameObjects.Text; born: number }> = new Map()

  // ── Object net-ID registry ────────────────────────────────────────────────
  // Every spawned object (characters + weapons + projectiles) gets a stable
  // network ID. Characters take IDs 0/1; all others get sequential IDs from 2.
  private _nextObjectNetId = 2
  private _objectToNetId   = new Map<InstanceType<typeof LivingObject>, number>()
  private _netIdToObject   = new Map<number, InstanceType<typeof LivingObject>>()

  // ── Client-side prediction (CSP) ─────────────────────────────────────────
  private _prevLocalKeys  = 0
  private _corrections    = new Map<number, { dx: number; dy: number; dz: number }>()
  private static readonly CORRECTION_LERP    = 0.25   // 25 % of remaining error per tick
  private static readonly CORRECTION_SNAP_PX = 150    // hard-snap above this distance
  private static readonly CORRECTION_DEAD_PX = 0.5    // drop correction below this residual
  // Send authoritative snapshots at 10 Hz (every 3 ticks at 30 fps).
  // The 4-tick correction window converges well within this interval.
  private static readonly STATE_INTERVAL     = 3
  // Re-send input even when unchanged so the remote side doesn't get stuck on stale keys
  // if a packet is lost. 10 ticks ≈ 333 ms heartbeat.
  private static readonly INPUT_HEARTBEAT    = 10

  private static readonly CHAT_MAX_LEN   = 30
  private static readonly CHAT_DURATION  = 4000

  constructor() {
    super({ key: 'MatchScene' })
  }

  preload(): void {
    const allIds = pendingLobbyConfig.teams
      .flatMap(t => t.slots.map(s => s.characterId))
    const uniqueIds = [...new Set(allIds)]
    for (const id of uniqueIds) {
      const data = CHAR_DATA_BY_ID[id]
      if (data) this._loadCharacterSheets(data)
    }
  }

  private _loadCharacterSheets(data: CharacterData): void {
    const name = data.bmp.name.toLowerCase()
    data.bmp.file.forEach((sheet, index) => {
      const key = `${name}_${index}`
      if (this.textures.exists(key)) return
      const fileKey = Object.keys(sheet).find(k => k.startsWith('file'))!
      const url = (sheet as Record<string, unknown>)[fileKey] as string
      this.load.spritesheet(key, url, { frameWidth: sheet.w, frameHeight: sheet.h, spacing: 1 })
    })
  }

  async create(): Promise<void> {
    this._lobbyConfig = { ...pendingLobbyConfig }

    const { width, height } = this.scale

    this._matchOver       = false
    this._matchEndEmitted = false
    this._ready           = false
    this._accumulator = 0
    this._matchTime   = { t: 0 }
    this._slowmoScale = 1.0
    this._players     = []
    this._aiCons      = []
    this._aiScripts   = []
    this._aiScheduler = null
    this._pendingSpawns = []
    this._maxCombos.clear()
    this._objectToNetId.clear()
    this._netIdToObject.clear()
    this._nextObjectNetId = 2

    const lfScene = new LFScene()
    this._lfScene = lfScene
    this._objects = []

    this._damageNumbers = new DamageNumberLayer(this)
    this._particles     = new ParticleLayer(this)
    this._enemyBarLayer = new EnemyHealthBarLayer(this)

    // Build the stage background
    this._bg       = await createStageById(this._lobbyConfig.stageId, this)
    const groundY  = this._bg.worldOffsetY
    SoundEngine.playTrack(this._bg.music)
    this._groundY  = groundY
    const initZ    = Math.round((this._bg.zboundary[0] + this._bg.zboundary[1]) / 2)

    const getObjects = (): InstanceType<typeof LivingObject>[] => this._objects

    const matchCtx = {
      F6_mode:        false,
      spec:           {},
      random:         () => Math.random(),
      sound:          {
        play: (key: string, sourceX?: number) => {
          if (sourceX === undefined) {
            SoundEngine.play(key)
          } else {
            const pan = Math.max(-1, Math.min(1, (sourceX / this._bg.width) * 2 - 1))
            SoundEngine.play(key, { pan })
          }
        }
      },
      time:           this._matchTime,
      scene:          { query: lfScene.query.bind(lfScene), get live() { return getObjects() } },
      background:     this._bg,
      get_living_object: getObjects,
      destroy_object: (obj: unknown) => this._destroyObject(obj as InstanceType<typeof LivingObject>),
      create_object:  (opoint: unknown, parent: unknown) =>
        this._createObject(opoint as OpointSpec, parent as InstanceType<typeof LivingObject>),
      spawn_damage_number: (worldX: number, worldZ: number, worldY: number, amount: number, damageType?: DamageType, isBlocked?: boolean) => {
        const screenX = worldX - (this._bg.cameraX ?? 0)
        // 50 px above the foot anchor — just above the character's head
        const screenY = this._groundY + worldZ + worldY - 50
        this._damageNumbers.spawn(screenX, screenY, amount, damageType, isBlocked)
      },
      spawn_hit_particles: (worldX: number, worldZ: number, worldY: number, dvx: number, dvy: number, severity: HitSeverity, damageType: DamageType) => {
        const screenX = worldX - (this._bg.cameraX ?? 0)
        const screenY = this._groundY + worldZ + worldY
        this._particles.spawnHitImpact(screenX, screenY, dvx, dvy, severity, damageType)
      },
      screen_shake: (severity: HitSeverity) => {
        if (this._matchOver) return
        // Non-host: screen shake is driven exclusively by the host's state broadcast.
        if (this._networkMode && !this._isNetworkHost) return
        const duration  = severity === 'heavy' ? 260 : severity === 'medium' ? 140 : 70
        const intensity = severity === 'heavy' ? 0.006 : severity === 'medium' ? 0.003 : 0.0012
        this.cameras.main.shake(duration, intensity)
        // Host: accumulate max severity for the next state broadcast.
        if (this._networkMode) {
          const code = severity === 'heavy' ? 3 : severity === 'medium' ? 2 : 1
          if (code > this._pendingNetShake) this._pendingNetShake = code
        }
      },
      trigger_hitstop: (frames: number) => {
        // Take the maximum so simultaneous hits don't shorten each other
        this._freezeFrames = Math.max(this._freezeFrames, frames)
      },
      notify_hit: (attackerTeam: number) => {
        this._onHit(attackerTeam)
      },
      spawn_guard_break: (worldX: number, worldZ: number, worldY: number) => {
        const screenX = worldX - (this._bg.cameraX ?? 0)
        const screenY = this._groundY + worldZ + worldY
        this._particles.spawnGuardBreak(screenX, screenY)
      },
      spawn_land_dust: (worldX: number, worldZ: number, speed: number) => {
        const screenX = worldX - (this._bg.cameraX ?? 0)
        const screenY = this._groundY + worldZ
        this._particles.spawnLandDust(screenX, screenY, speed)
      },
      spawn_heal_number: (worldX: number, worldZ: number, worldY: number, amount: number) => {
        const screenX = worldX - (this._bg.cameraX ?? 0)
        const screenY = this._groundY + worldZ + worldY - 50
        this._damageNumbers.spawnHeal(screenX, screenY, amount)
      },
    }

    this._con = new Controller(this, DEFAULT_CONFIG)
    this._matchCtx = matchCtx
    this._groundY  = groundY
    this._initZ    = initZ

    // Separate immediate slots (spawnAt == 0 or unset) from deferred ones.
    // Immediate slots spawn now; deferred slots are queued for _processPendingSpawns.
    const FRAMERATE = gameplay.framerate
    const immediateChars: Character[] = []
    for (let teamIdx = 0; teamIdx < this._lobbyConfig.teams.length; teamIdx++) {
      const team = this._lobbyConfig.teams[teamIdx]
      for (let slotIdx = 0; slotIdx < team.slots.length; slotIdx++) {
        const slot = team.slots[slotIdx]
        if (slot.spawnAt && slot.spawnAt > 0) {
          this._pendingSpawns.push({
            slot,
            teamIdx,
            spawnAtTick: Math.round(slot.spawnAt * FRAMERATE),
          })
        } else {
          // Spread immediately-spawning characters across their half of the stage
          const spread  = Math.min(250, width * 0.3)
          const centerX = teamIdx === 0
            ? width / 2 - spread / 2 - slotIdx * 60
            : width / 2 + spread / 2 + slotIdx * 60
          const character = this._spawnCharacter(slot, teamIdx, centerX, initZ)
          immediateChars.push(character)
        }
      }
    }

    // Build AI scheduler for all CPU scripts
    if (this._aiScripts.length > 0) {
      this._aiScheduler = new AIScheduler(this._aiScripts, this._aiCons)
    }

    // Camera tracks all fighters
    this._bg.setChasing(this._players as unknown as Parameters<Stage['setChasing']>[0])

    // Spawn starting bat
    const w0Cfg = {
      scene:   this,
      groundY,
      team:    -1,
      match:   matchCtx
    }
    const weapon = createBat(w0Cfg)
    weapon.setPosition(width / 2, 0, initZ)
    weapon.setup()
    weapon.trans.frame(64)
    lfScene.add(weapon as unknown as import('../game/scene.js').SceneObject)
    this._objects.push(weapon as unknown as InstanceType<typeof LivingObject>)
    const batNetId = this._nextObjectNetId++
    this._objectToNetId.set(weapon as unknown as InstanceType<typeof LivingObject>, batNetId)
    this._netIdToObject.set(batNetId, weapon as unknown as InstanceType<typeof LivingObject>)

    // Debug overlay
    this._debugGraphics = this.add.graphics().setDepth(999)
    this.input.keyboard!.addKey('F1').on('down', () => {
      this._debugMode = !this._debugMode
      if (!this._debugMode) this._debugGraphics.clear()
    })

    // ── Network mode setup ──────────────────────────────────────────────────
    this._networkMode       = !!this._lobbyConfig.networkMode
    this._localPlayerIndex  = this._lobbyConfig.localPlayerIndex ?? 0
    this._isNetworkHost     = this._localPlayerIndex === 0
    this._netPaused         = false
    this._netControllers    = new Map()
    this._prevNetKeys       = new Map()
    this._prevLocalKeys     = 0
    this._corrections.clear()
    this._chatBubbles.clear()

    // Bus listeners for rematch / quit
    const onRematch = () => this._restartMatch()
    const onQuit    = () => { this.scene.stop() }
    bus.on('game:rematch', onRematch)
    bus.on('game:quit',    onQuit)

    // ── Network bus listeners ────────────────────────────────────────────────
    // Host receives state from nobody (it IS the authority).
    // Non-host receives authoritative snapshots and blends toward them.
    const onServerState = ({ entities, freezeFrames, shakeSeverity }: { tick: number; entities: EntityStateNet[]; freezeFrames: number; shakeSeverity: number }) => {
      if (!this._networkMode || this._isNetworkHost) return
      this._reconcile(entities)
      // Enforce host-authoritative hitstop: non-host takes the max so it never
      // runs fewer frozen frames than the host intended.
      if (freezeFrames > 0) this._freezeFrames = Math.max(this._freezeFrames, freezeFrames)
      // Apply screen shake signalled by the host (local CSP shake is suppressed on non-host).
      if (shakeSeverity > 0) {
        const sev     = shakeSeverity >= 3 ? 'heavy' : shakeSeverity === 2 ? 'medium' : 'light' as HitSeverity
        const dur     = sev === 'heavy' ? 260 : sev === 'medium' ? 140 : 70
        const intense = sev === 'heavy' ? 0.006 : sev === 'medium' ? 0.003 : 0.0012
        this.cameras.main.shake(dur, intense)
      }
    }
    const onRemoteInput = ({ playerIndex, keys }: { tick: number; playerIndex: number; keys: number }) => {
      if (!this._networkMode) return
      this._feedRemoteInput(playerIndex, keys)
    }
    const onPause = () => { this._netPaused = true }
    const onResume = () => { this._netPaused = false }
    const onChat = ({ playerIndex, text }: { playerIndex: number; displayName: string; text: string }) => {
      if (!this._networkMode) return
      this._showChatBubble(playerIndex, text)
    }
    const onNetMatchEnd = ({ winnerTeam }: { winnerTeam: number }) => {
      if (!this._matchEndEmitted) this._triggerMatchEnd(winnerTeam)
    }

    if (this._networkMode) {
      bus.on('net:server-state',  onServerState)
      bus.on('net:remote-input',  onRemoteInput)
      bus.on('net:game-paused',   onPause)
      bus.on('net:game-resumed',  onResume)
      bus.on('net:chat-received', onChat)
      bus.on('net:match-end',     onNetMatchEnd)
    }

    this.events.once('shutdown', () => {
      this._damageNumbers.destroy()
      this._particles.destroy()
      this._con.destroy()
      for (const aiCon of this._aiCons) aiCon.destroy()
      this._aiCons   = []
      this._aiScripts = []
      for (const obj of this._objects) obj.destroy()
      this._objects  = []
      this._players  = []
      for (const [, b] of this._chatBubbles) b.obj.destroy()
      this._chatBubbles.clear()
      this._corrections.clear()
      this._enemyBarLayer.destroy()
      this._bg.destroy()
      SoundEngine.stopTrack()
      bus.off('game:rematch', onRematch)
      bus.off('game:quit',    onQuit)
      if (this._networkMode) {
        bus.off('net:server-state',  onServerState)
        bus.off('net:remote-input',  onRemoteInput)
        bus.off('net:game-paused',   onPause)
        bus.off('net:game-resumed',  onResume)
        bus.off('net:chat-received', onChat)
        bus.off('net:match-end',     onNetMatchEnd)
      }
      this._objectToNetId.clear()
      this._netIdToObject.clear()
    })

    bus.emit('ui:scene-change', { scene: 'match' })
    this._ready = true

    // Round announcement — brief pause so the stage settles before the banner
    this._combos.clear()
    this.time.delayedCall(400, () => {
      bus.emit('ui:announce', { text: 'ROUND 1', style: 'round', duration: 1100 })
    })
    this.time.delayedCall(1300, () => {
      bus.emit('ui:announce', { text: 'FIGHT!', style: 'fight', duration: 700 })
      this.cameras.main.flash(180, 255, 255, 255, false)
    })
  }

  // ── Character spawning helpers ───────────────────────────────────────────

  /**
   * Spawn one character slot into the scene immediately.
   * Handles both human and AI slot types, applies stat overrides, returns the Character.
   */
  private _spawnCharacter(
    slot:    import('../ui/types.js').SlotConfig,
    teamIdx: number,
    spawnX:  number,
    spawnZ:  number,
  ): Character {
    const teamNumber = teamIdx + 1
    let character: Character

    // Remote human: has networkPlayerIndex — driven by network input, no AI script
    const isRemoteNetPlayer = this._networkMode && slot.networkPlayerIndex !== undefined

    if (slot.isHuman) {
      character = createCharacterById(slot.characterId, {
        scene:      this,
        groundY:    this._groundY,
        controller: this._con,
        team:       teamNumber,
        match:      this._matchCtx,
      })
    } else if (isRemoteNetPlayer) {
      const netCon = new AIController()
      this._aiCons.push(netCon)
      this._netControllers.set(slot.networkPlayerIndex!, netCon)
      character = createCharacterById(slot.characterId, {
        scene:      this,
        groundY:    this._groundY,
        controller: netCon,
        team:       teamNumber,
        match:      this._matchCtx,
      })
    } else {
      // Bot: host runs AI; non-host uses empty controller (state reconciled from host)
      const aiCon = new AIController()
      this._aiCons.push(aiCon)
      character = createCharacterById(slot.characterId, {
        scene:      this,
        groundY:    this._groundY,
        controller: aiCon,
        team:       teamNumber,
        match:      this._matchCtx,
      })
      if (!this._networkMode || this._isNetworkHost) {
        character.AI = new AIInterface(character as unknown as InstanceType<typeof LivingObject>)
        const aiScript = createAI(
          slot.aiDifficulty === 'hard' ? 'medium' : slot.aiDifficulty,
          character as unknown as InstanceType<typeof LivingObject>,
          this._matchCtx as import('../game/AI/types.js').AIMatchContext,
          aiCon,
        )
        this._aiScripts.push(aiScript)
        if (this._aiScheduler) {
          this._aiScheduler = new AIScheduler(this._aiScripts, this._aiCons)
        }
      }
    }

    character.setPosition(spawnX, 0, spawnZ)
    if (teamIdx > 0) character.switchFacing('left')
    character.setup()

    if (slot.statOverrides?.hp !== undefined) {
      character.health.hp     = slot.statOverrides.hp
      character.health.hpFull  = slot.statOverrides.hp
      character.health.hpBound = slot.statOverrides.hp
    }

    this._lfScene.add(character as unknown as import('../game/scene.js').SceneObject)
    this._objects.push(character as unknown as InstanceType<typeof LivingObject>)
    const playerNetId = this._players.length  // stable index before push
    this._objectToNetId.set(character as unknown as InstanceType<typeof LivingObject>, playerNetId)
    this._netIdToObject.set(playerNetId, character as unknown as InstanceType<typeof LivingObject>)
    this._players.push(character)

    if (!slot.isHuman) {
      this._enemyBarLayer.add(character as unknown as import('../game/EnemyHealthBar.js').EnemyRef)
    }

    return character
  }

  /** Returns the team index (0 = team1, 1 = team2) for a player by its index in _players. */
  private _getTeamIdxForPlayer(playerIdx: number): number {
    let counted = 0
    for (let t = 0; t < this._lobbyConfig.teams.length; t++) {
      counted += this._lobbyConfig.teams[t].slots.length
      if (playerIdx < counted) return t
    }
    return this._lobbyConfig.teams.length - 1
  }

  /** Spawn any pending characters whose spawnAtTick has been reached. */
  private _processPendingSpawns(): void {
    if (this._pendingSpawns.length === 0) return

    const { width } = this.scale
    const zbounds   = this._bg.zboundary
    const zRange    = zbounds[1] - zbounds[0]

    const due = this._pendingSpawns.filter(p => this._matchTime.t >= p.spawnAtTick)
    this._pendingSpawns = this._pendingSpawns.filter(p => this._matchTime.t < p.spawnAtTick)

    for (const pending of due) {
      // Spawn enemy from the right edge with random Z variation
      const spawnX = width - 60
      const spawnZ = zbounds[0] + Math.random() * zRange
      this._spawnCharacter(pending.slot, pending.teamIdx, spawnX, spawnZ)
    }
  }

  // ── Object lifecycle ─────────────────────────────────────────────────────

  private _createObject(opoint: OpointSpec, parent: InstanceType<typeof LivingObject>): void {
    const matchCtx = (parent as unknown as { match: InstanceType<typeof LivingObject>['match'] }).match
    const cfg = {
      scene:   this,
      groundY: this._groundY,
      team:    parent.team,
      match:   matchCtx
    }

    const obj = spawnObject(opoint, parent, cfg)
    if (obj) {
      this._lfScene.add(obj as unknown as import('../game/scene.js').SceneObject)
      const spawnedObj = obj as unknown as InstanceType<typeof LivingObject>
      this._objects.push(spawnedObj)
      const objNetId = this._nextObjectNetId++
      this._objectToNetId.set(spawnedObj, objNetId)
      this._netIdToObject.set(objNetId, spawnedObj)
    }
  }

  private _destroyObject(obj: InstanceType<typeof LivingObject>): void {
    // Remove from collision scene and health bar layer immediately so nothing
    // queries or renders it this tick; defer the actual destroy + splice until
    // after the object loop to avoid mutating _objects mid-iteration.
    this._lfScene.remove(obj as unknown as import('../game/scene.js').SceneObject)
    this._enemyBarLayer.remove(obj as unknown as import('../game/EnemyHealthBar.js').EnemyRef)
    this._pendingDestroys.add(obj)
  }

  private _flushDestroys(): void {
    for (const obj of this._pendingDestroys) {
      const idx = this._objects.indexOf(obj)
      if (idx !== -1) this._objects.splice(idx, 1)
      const netId = this._objectToNetId.get(obj)
      if (netId !== undefined) {
        this._objectToNetId.delete(obj)
        this._netIdToObject.delete(netId)
        this._corrections.delete(netId)
      }
      obj.destroy()
    }
    this._pendingDestroys.clear()
  }

  // ── Update loop ──────────────────────────────────────────────────────────

  override update(_time: number, delta: number): void {
    if (!this._ready || this._matchOver) return

    this._accumulator += delta * this._slowmoScale
    while (this._accumulator >= TICK_MS) {
      this._accumulator -= TICK_MS
      this._tick()
    }

    this._damageNumbers.update(delta)
    this._particles.update(delta)
    this._updateEnemyHealthBars(delta)
    this._updateChatBubbles()

    if (this._debugMode) this._drawDebug()
    else this._debugGraphics.clear()
  }

  private _tick(): void {
    if (this._netPaused) return

    // Hitstop: freeze the simulation but still consume inputs so keystrokes aren't lost
    if (this._freezeFrames > 0) {
      this._freezeFrames--
      this._con.fetch()
      return
    }

    this._con.fetch()

    if (this._networkMode) {
      for (const [, con] of this._netControllers) con.fetch()
    }

    // Run one budget-slice of AI scripts (or the full list if no scheduler)
    if (this._aiScheduler) {
      this._aiScheduler.tick()
    } else {
      for (let i = 0; i < this._aiScripts.length; i++) {
        this._aiScripts[i].TU()
        this._aiCons[i].fetch()
      }
    }

    this._matchTime.t++
    this._bg.TU()

    this._processPendingSpawns()
    this._tickCombos()

    for (let i = 0; i < this._objects.length; i++) {
      const obj = this._objects[i]!
      if (!this._pendingDestroys.has(obj)) {
        obj.TU()
        obj.transit()
      }
    }
    this._flushDestroys()

    // CSP: nudge predicted positions toward the last authoritative snapshot.
    // Only runs on the non-host; host positions are already authoritative.
    if (this._networkMode && !this._isNetworkHost) {
      this._applyCorrections()
    }

    // Flush buffered sfx: plays at most MAX_UNIQUE_SFX_PER_FRAME unique sounds,
    // deduplicating the potentially thousands of identical requests from mass spawns.
    SoundEngine.flushFrame()

    // ── Network: send state (host) + local input (both) ──────────────────
    if (this._networkMode) {
      const tick = this._matchTime.t

      // Host broadcasts authoritative state at STATE_INTERVAL Hz, not every tick.
      // Corrections on the non-host converge within 5–10 ticks so 10 Hz is ample.
      if (this._isNetworkHost && tick % MatchScene.STATE_INTERVAL === 0) {
        bus.emit('net:broadcast-state', {
          tick,
          entities:      this._buildStateEntities(),
          freezeFrames:  this._freezeFrames,
          shakeSeverity: this._pendingNetShake,
        })
        this._pendingNetShake = 0
      }

      // Send input only when keys changed or on the heartbeat tick, avoiding
      // redundant messages when the player holds the same keys for many frames.
      if (this._players[this._localPlayerIndex]) {
        const keys = encodeKeys(
          (this._con as unknown as { state: Record<string, number> }).state
        )
        if (keys !== this._prevLocalKeys || tick % MatchScene.INPUT_HEARTBEAT === 0) {
          bus.emit('net:local-input', { tick, keys })
          this._prevLocalKeys = keys
        }
      }
    }

    this._checkMatchEnd()
    this._emitHUD()
  }

  private _checkMatchEnd(): void {
    if (this._matchEndEmitted || this._players.length === 0) return

    const teamAlive = new Map<number, boolean>()
    for (let i = 0; i < this._players.length; i++) {
      const t     = this._getTeamIdxForPlayer(i)
      const alive = (this._players[i]?.health.hp ?? 0) > 0
      if (alive) teamAlive.set(t, true)
      else if (!teamAlive.has(t)) teamAlive.set(t, false)
    }

    const aliveTeams = [...teamAlive.entries()].filter(([, alive]) => alive)
    if (aliveTeams.length <= 1) {
      this._triggerMatchEnd(aliveTeams[0]?.[0] ?? 0)
    }
  }

  private _triggerMatchEnd(winnerTeam: number): void {
    this._matchEndEmitted = true

    this._slowmoScale = 0.15
    this.time.delayedCall(600, () => { this._slowmoScale = 1.0 })

    this.cameras.main.flash(120, 255, 60, 60, false)
    bus.emit('ui:announce', { text: 'K.O.', style: 'ko', duration: 1800 })
    this.time.delayedCall(400, () => {
      let winnerIdx = 0
      for (let i = 0; i < this._players.length; i++) {
        if (this._getTeamIdxForPlayer(i) === winnerTeam) { winnerIdx = i; break }
      }
      const winnerName = this._players[winnerIdx]?.data.bmp.name ?? `Team ${winnerTeam + 1}`
      bus.emit('ui:announce', { text: `${winnerName} WINS!`, style: 'win', duration: 2000 })
    })

    for (let i = 0; i < this._players.length; i++) {
      if (this._getTeamIdxForPlayer(i) !== winnerTeam) {
        const loser = this._players[i]
        if (loser) {
          const quip = KO_QUIPS[loser.data.bmp.name] ?? KO_QUIPS['default']!
          bus.emit('ui:ko-quip', { loserName: loser.data.bmp.name, quip })
        }
        break
      }
    }

    const p1 = this._players[0]
    const p2 = this._players[1]
    const p1Stats: MatchStats = {
      damageDealt: p1?.stat.attack    ?? 0,
      hitsLanded:  p1?.stat.hitsLanded ?? 0,
      biggestHit:  p1?.stat.biggestHit ?? 0,
      maxCombo:    this._maxCombos.get(1) ?? 0,
    }
    const p2Stats: MatchStats = {
      damageDealt: p2?.stat.attack    ?? 0,
      hitsLanded:  p2?.stat.hitsLanded ?? 0,
      biggestHit:  p2?.stat.biggestHit ?? 0,
      maxCombo:    this._maxCombos.get(2) ?? 0,
    }

    const winnerLabel: 'p1' | 'p2' = winnerTeam === 0 ? 'p1' : 'p2'
    this.time.delayedCall(600, () => {
      bus.emit('ui:match-end', { winner: winnerLabel, p1Stats, p2Stats })
    })
    this.time.delayedCall(3600, () => { this._matchOver = true })
  }

  // ── Combo counter ─────────────────────────────────────────────────────────

  private _onHit(attackerTeam: number): void {
    const current  = this._combos.get(attackerTeam)
    const newCount = (current?.count ?? 0) + 1
    this._combos.set(attackerTeam, {
      count:        newCount,
      expireAtTick: this._matchTime.t + COMBO_WINDOW_TICKS,
    })
    const prevMax = this._maxCombos.get(attackerTeam) ?? 0
    if (newCount > prevMax) this._maxCombos.set(attackerTeam, newCount)
    if (newCount >= 2) {
      bus.emit('ui:combo-update', { attackerTeam, count: newCount })
    }
  }

  private _tickCombos(): void {
    for (const [team, combo] of this._combos) {
      if (this._matchTime.t >= combo.expireAtTick) {
        this._combos.delete(team)
        bus.emit('ui:combo-update', null)
      }
    }
  }

  private _emitHUD(): void {
    const p1 = this._playerState(this._players[0], 'P1')
    const p2 = this._playerState(this._players[1], 'P2')
    const timeLeft = Math.max(0, Math.ceil((MATCH_TIME_LIMIT_TICKS - this._matchTime.t) / gameplay.framerate))
    bus.emit('ui:hud-update', { p1, p2, timeLeft })
  }

  /** Reposition and redraw every enemy HP bar based on the current physics state. */
  private _updateEnemyHealthBars(deltaMs: number): void {
    this._enemyBarLayer.update(deltaMs, this.scale.width, this._groundY)
  }

  private _playerState(char: Character | undefined, fallbackName: string): PlayerHUDState {
    if (!char) return { name: fallbackName, hp: 0, maxHp: 500, mp: 0, maxMp: 500 }
    const h       = char.health
    const name    = char.data.bmp.name || fallbackName
    const screenX = char.physics.x - (this._bg.cameraX ?? 0)
    const screenY = this._groundY + char.physics.z - 70
    return {
      name,
      hp:         Math.max(0, h.hp ?? 0),
      maxHp:      h.hpFull ?? 500,
      hpBound:    Math.max(0, h.hpBound ?? (h.hpFull ?? 500)),
      mp:         Math.max(0, h.mp ?? 0),
      maxMp:      h.mpFull ?? 500,
      headSprite: char.data.bmp.head,
      screenX,
      screenY,
    }
  }

  // ── Network helpers ───────────────────────────────────────────────────────

  /** Build state snapshot for all tracked objects to broadcast each STATE_INTERVAL tick. */
  private _buildStateEntities(): EntityStateNet[] {
    const out: EntityStateNet[] = []
    for (const [obj, netId] of this._objectToNetId) {
      if (!this._pendingDestroys.has(obj)) out.push(this._readObjectState(obj, netId))
    }
    return out
  }

  private _readObjectState(obj: InstanceType<typeof LivingObject>, netId: number): EntityStateNet {
    const c        = obj as unknown as Character
    const p        = c.physics
    const isPlayer = netId < this._players.length
    const e: EntityStateNet = {
      index:  netId,
      x:      p.x,
      y:      p.y,
      z:      p.z,
      vx:     p.velocityX,
      vy:     p.velocityY,
      vz:     p.velocityZ,
      facing: p.facing === 'right' ? 1 : -1,
      frame:  (obj as unknown as { frame?: { PN: number } }).frame?.PN,
    }
    if (isPlayer) {
      e.hp = Math.max(0, c.health.hp ?? 0)
      e.mp = Math.max(0, c.health.mp ?? 0)
    }
    return e
  }

  /**
   * Reconcile the local predicted state against an authoritative snapshot from the host.
   * For player characters: hp/mp/facing/frame are synced immediately; position is blended.
   * For weapons and projectiles: position only (they share no game-state fields).
   * Large positional errors snap immediately (knockback, teleport).
   */
  private _reconcile(entities: EntityStateNet[]): void {
    for (const e of entities) {
      const obj = this._netIdToObject.get(e.index)
      if (!obj) continue
      const c        = obj as unknown as Character
      const isPlayer = e.index < this._players.length

      if (isPlayer) {
        // Sync authoritative game state for player characters
        if (e.hp !== undefined) c.health.hp = e.hp
        if (e.mp !== undefined) c.health.mp = e.mp
        if (e.facing !== undefined) {
          const dir = e.facing === 1 ? 'right' : 'left'
          if (c.physics.facing !== dir) c.switchFacing(dir)
        }
        // Guard avoids re-triggering frame-entry logic when already on the correct frame
        if (e.frame !== undefined && e.frame !== c.frame.PN) c.trans.frame(e.frame)
      }

      // Positional correction for all object types
      if (e.x === undefined) continue
      const p    = c.physics
      const dx   = e.x - p.x
      const dy   = (e.y ?? p.y) - p.y
      const dz   = (e.z ?? p.z) - p.z
      const dist = Math.hypot(dx, dz)

      if (dist > MatchScene.CORRECTION_SNAP_PX) {
        // Large desync — teleport immediately and sync velocity
        if (isPlayer) {
          c.setPosition(e.x, e.y ?? p.y, e.z ?? p.z)
        } else {
          p.x = e.x; p.y = e.y ?? p.y; p.z = e.z ?? p.z
        }
        if (e.vx !== undefined) p.velocityX = e.vx
        if (e.vy !== undefined) p.velocityY = e.vy
        if (e.vz !== undefined) p.velocityZ = e.vz
        this._corrections.delete(e.index)
      } else if (dist > MatchScene.CORRECTION_DEAD_PX) {
        // Small drift — blend over several ticks
        const prev = this._corrections.get(e.index) ?? { dx: 0, dy: 0, dz: 0 }
        this._corrections.set(e.index, {
          dx: prev.dx + dx,
          dy: prev.dy + dy,
          dz: prev.dz + dz,
        })
      }
    }
  }

  /** Apply one step of exponential-decay positional correction for all tracked objects. */
  private _applyCorrections(): void {
    const lerp = MatchScene.CORRECTION_LERP
    for (const [netId, c] of this._corrections) {
      const obj = this._netIdToObject.get(netId)
      if (!obj) { this._corrections.delete(netId); continue }
      const p = (obj as unknown as Character).physics
      p.x += c.dx * lerp
      p.y += c.dy * lerp
      p.z += c.dz * lerp
      c.dx *= (1 - lerp)
      c.dy *= (1 - lerp)
      c.dz *= (1 - lerp)
      if (Math.hypot(c.dx, c.dz) < MatchScene.CORRECTION_DEAD_PX) {
        this._corrections.delete(netId)
      }
    }
  }

  private _feedRemoteInput(playerIndex: number, keys: number): void {
    const con = this._netControllers.get(playerIndex)
    if (!con) return
    const prev    = this._prevNetKeys.get(playerIndex) ?? 0
    const decoded = decodeKeys(keys)
    const prevDec = decodeKeys(prev)
    for (const name of Object.keys(decoded)) {
      if ((decoded[name] ?? 0) !== (prevDec[name] ?? 0)) con.key(name, decoded[name] ?? 0)
    }
    this._prevNetKeys.set(playerIndex, keys)
  }

  private _showChatBubble(playerIndex: number, text: string): void {
    const existing = this._chatBubbles.get(playerIndex)
    if (existing) { existing.obj.destroy(); this._chatBubbles.delete(playerIndex) }

    const maxLen  = MatchScene.CHAT_MAX_LEN
    const display = text.length > maxLen ? text.slice(0, maxLen - 1) + '…' : text
    const char    = this._players[playerIndex]
    const initX   = char ? char.physics.x - (this._bg.cameraX ?? 0) : this.scale.width / 2
    const initY   = char ? this._groundY + char.physics.z - 85 : 80

    const bubble = this.add.text(initX, initY, display, {
      fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', color: '#ffffff',
      backgroundColor: 'rgba(0,0,0,0.72)', padding: { x: 8, y: 4 },
    }).setDepth(1000).setOrigin(0.5, 1)

    this._chatBubbles.set(playerIndex, { obj: bubble, born: this.time.now })
  }

  private _updateChatBubbles(): void {
    const now = this.time.now
    for (const [idx, b] of this._chatBubbles) {
      const age = now - b.born
      const dur = MatchScene.CHAT_DURATION
      if (age >= dur) { b.obj.destroy(); this._chatBubbles.delete(idx); continue }
      const char = this._players[idx]
      if (char) b.obj.setPosition(char.physics.x - (this._bg.cameraX ?? 0), this._groundY + char.physics.z - 85)
      if (age > dur - 1000) b.obj.setAlpha(1 - (age - (dur - 1000)) / 1000)
    }
  }

  // ── Restart ──────────────────────────────────────────────────────────────

  private _restartMatch(): void {
    this.scene.restart()
  }

  // ── Debug overlay ─────────────────────────────────────────────────────────

  private _drawDebug(): void {
    const g = this._debugGraphics
    g.clear()
    for (const obj of this._objects) {
      const boxes = (obj as unknown as { _debugBoxes?: Array<{ type: string; vol: import('../types/index.js').Volume }> })._debugBoxes
      if (!boxes) continue
      for (const box of boxes) {
        switch (box.type) {
          case 'bdy': g.lineStyle(1, 0x00ff00, 0.7); break
          case 'itr': g.lineStyle(1, 0xff3300, 0.7); break
          default:    g.lineStyle(1, 0xffff00, 0.5)
        }
        const v = box.vol
        g.strokeRect(v.x, v.y - v.z, v.w, v.h)
      }
    }
  }
}
