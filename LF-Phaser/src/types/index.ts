/**
 * Shared TypeScript interfaces and types for the LF2 Phaser replatform.
 */

// ── Sprite / Frame Data ────────────────────────────────────────────────────

/** One sprite sheet metadata entry from bmp.file[i]. */
export interface BmpFile {
  w: number
  h: number
  row: number
  col: number
  [key: string]: unknown
}

/** The bmp block of a character data file. */
export interface BmpData {
  name: string
  head?: string
  small?: string
  file: BmpFile[]
  walking_speed?: number
  walking_speedz?: number
  running_speed?: number
  running_speedz?: number
  heavy_walking_speed?: number
  heavy_walking_speedz?: number
  heavy_running_speed?: number
  heavy_running_speedz?: number
  jump_height?: number
  jump_distance?: number
  jump_distancez?: number
  dash_height?: number
  dash_distance?: number
  dash_distancez?: number
  rowing_height?: number
  rowing_distance?: number
  walking_frame_rate?: number
  running_frame_rate?: number
  weapon_hp?: number
  weapon_drop_hurt?: number
  weapon_hit_sound?: string
  weapon_drop_sound?: string
  weapon_broken_sound?: string
  /** Scales outgoing injury on every hit this character deals (default 1). */
  outgoingDamageMultiplier?: number
  /** Scales outgoing bdefend (stagger pressure) on every hit this character deals (default 1). */
  staggerDamageMultiplier?: number
  /** Scales outgoing fall (knockdown pressure) on every hit this character deals (default 1). */
  knockdownMultiplier?: number
  /** Accumulated block-damage required to break this character's guard (default: gameplay.defend.break_limit). */
  staggerResistance?: number
  [key: string]: unknown
}

/** Body hitbox spec. */
export interface BdySpec {
  kind?: number
  x: number
  y: number
  w: number
  h: number
  zwidth?: number
  [key: string]: unknown
}

/** Interaction (attack) box spec. */
export interface ItrSpec {
  kind: number
  x: number
  y: number
  w: number
  h: number
  zwidth?: number
  dvx?: number
  dvy?: number
  injury?: number
  bdefend?: number
  fall?: number
  vrest?: number
  arest?: number
  effect?: number
  /** Explicit damage type override. When omitted the type is derived from `effect`. */
  damageType?: DamageType
  vaction?: number
  catchingact?: [number, number]
  caughtact?: [number, number]
  [key: string]: unknown
}

/** Weapon-point spec. */
export interface WpointSpec {
  kind: number
  x: number
  y: number
  weaponact?: number
  attacking?: number
  cover?: number
  dvx?: number
  dvy?: number
  dvz?: number
  [key: string]: unknown
}

/** Object-point (opoint) spec. */
export interface OpointSpec {
  kind: number
  x: number
  y: number
  oid?: number
  action?: number
  dvx?: number
  dvy?: number
  dvz?: number
  omni?: number
  facing?: number
  [key: string]: unknown
}

/** Catch-point spec. */
export interface CpointSpec {
  kind: number
  x: number
  y: number
  hurtable?: number
  cover?: number
  vaction?: number
  aaction?: number
  taction?: number
  jaction?: number
  throwvx?: number
  throwvy?: number
  throwvz?: number
  throwinjury?: number
  decrease?: number
  dircontrol?: number
  fronthurtact?: number
  backhurtact?: number
  injury?: number
  [key: string]: unknown
}

/** Body-point spec. */
export interface BpointSpec {
  x: number
  y: number
  [key: string]: unknown
}

/** Per-frame record in a character data file. */
export interface FrameData {
  name?: string
  pic: number
  state?: number
  wait: number
  next: number
  dvx?: number
  dvy?: number
  dvz?: number
  centerx: number
  centery: number
  bdy?: BdySpec | BdySpec[]
  itr?: ItrSpec | ItrSpec[]
  wpoint?: WpointSpec | WpointSpec[]
  opoint?: OpointSpec
  cpoint?: CpointSpec
  bpoint?: BpointSpec
  hit_a?: number
  hit_d?: number
  hit_j?: number
  hit_Fa?: number
  hit_Da?: number
  hit_Ua?: number
  hit_Fj?: number
  hit_Dj?: number
  hit_Uj?: number
  hit_ja?: number
  mp?: number
  sound?: string
  [key: string]: unknown
}

/**
 * Declares which character-side attack frames a weapon unlocks when held.
 * Each property is the frame number the character transitions to.
 * Omitting a property means that action is unavailable with this weapon.
 */
export interface WeaponActions {
  /** Standing attack frame (X while standing/walking). */
  standAttack?: number
  /** Alternate standing attack frame — if set, the character picks one at random. */
  standAttackAlt?: number
  /** Running attack frame (X while running). */
  runAttack?: number
  /** Jump attack frame (X while in the air). */
  jumpAttack?: number
  /** Dash attack frame (X during a dash). */
  dashAttack?: number
  /** Throw frame used when X is pressed while standing and a direction is held. */
  standThrow?: number
  /** Throw frame used while running. */
  runThrow?: number
  /** Throw frame used while jumping. */
  jumpThrow?: number
  /** If true, pressing X always throws (no attack). */
  justThrow?: boolean
}

/**
 * Entry in the weapon_strength_list block — defines default knockback/damage
 * values for each weapon attack type (normal, jump, run, dash).
 */
export interface WeaponStrengthEntry {
  entry?: string
  dvx?: number
  dvy?: number
  fall?: number
  vrest?: number
  bdefend?: number
  injury?: number
  effect?: number
  [key: string]: unknown
}

/** Complete character data file. */
export interface CharacterData {
  bmp: BmpData
  frame: Readonly<Record<number, FrameData>>
  weapon_strength_list?: Record<number, WeaponStrengthEntry>
  effect_list?: Array<{ name: string; frame: number }>
  broken_list?: Array<{ id?: number; frame: number }>
}

// ── Physics ────────────────────────────────────────────────────────────────

/** Full physics state object created by Mech.createPhysicsState(). */
export interface PhysicsState {
  screenX: number
  screenY: number
  screenZ: number
  x: number
  y: number
  z: number
  velocityX: number
  velocityY: number
  velocityZ: number
  zOrderOffset: number
  facing: 'right' | 'left'
  friction: number
}

/** A spatial volume used for hitbox queries. */
export interface Volume {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  w: number
  h: number
  zwidth: number
  data: BdySpec | ItrSpec | Record<string, never>
}

// ── State Machine ──────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StateFunction = (this: any, event: string, ...args: unknown[]) => void | number | boolean | undefined

export type StateMap = {
  generic?: StateFunction
} & Partial<Record<number, StateFunction>>

// ── Input / Combos ─────────────────────────────────────────────────────────

export interface ComboEntry {
  name: string
  seq: string[]
  maxtime?: number
  clear_on_combo?: boolean
}

export interface ComboConfig {
  timeout?: number
  comboout?: number
  clear_on_combo?: boolean
  callback: (combo: ComboEntry) => void
  rp?: Record<string, number>
}

/** Minimal duck-type interface for a controller, as used by living objects. */
export interface ControllerLike {
  state: Record<string, number>
  child: unknown[]
  fetch(): void
  flush(): void
  destroy(): void
}

/** Minimal duck-type interface for a combo detector. */
export interface ComboDecLike {
  frame(): void
  clearSeq(): void
  removeCombo(name: string): void
}

// ── Background / Match Context ─────────────────────────────────────────────

/** One layer entry from a background data file. */
export interface LayerData {
  pic?:          string
  rect?:         number | string
  transparency?: number
  width:         number
  height?:       number
  x:             number
  y:             number
  loop?:         number
  tile?:         number
  cc?:           number
  c1?:           number
  c2?:           number
  [key: string]: unknown
}

/** Complete background data file (e.g. bg/ft/bg.js). */
export interface BackgroundData {
  name:        string
  width:       number
  zboundary:   [number, number]
  shadow:      string
  shadowsize?: [number, number]
  /** Sound sprite key for the stage background music (e.g. 'm_pass'). */
  music?:      string
  layer:       LayerData[]
}

export interface Background {
  zboundary: [number, number]
  width:     number
  shadow:    { x: number; y: number }
  cameraX:   number
  leaving:   (obj: unknown) => boolean
}

export interface SceneQuery {
  query(vol: unknown, exclude: unknown, where: unknown): unknown[]
}

/** Severity of a hit, derived from ITR.injury. Used to scale particle effects. */
export type HitSeverity = 'light' | 'medium' | 'heavy'

/** Elemental category of an attack. Drives damage-number colour and future resistances. */
export type DamageType = 'physical' | 'fire' | 'ice' | 'magic'

/**
 * Derive the DamageType from an LF2 `effect` number.
 * Effect numbers 2/20–23 are fire; 3/30 are ice; 4 is magic (energy/lightning);
 * everything else is physical.
 */
export function effectNumToDamageType(effectNum: number): DamageType {
  if (effectNum === 2 || (effectNum >= 20 && effectNum <= 23)) return 'fire'
  if (effectNum === 3 || effectNum === 30)                      return 'ice'
  if (effectNum === 4)                                          return 'magic'
  return 'physical'
}

export interface MatchContext {
  F6_mode: boolean
  spec: Record<string | number, Record<string, unknown> | undefined>
  random: () => number
  sound: { play: (key: string, sourceX?: number) => void }
  time: { t: number }
  scene: SceneQuery
  background?: Background
  destroy_object: (obj: unknown) => void
  create_object: (opoint: unknown, parent: unknown) => void
  create_multiple_objects?: (opoint: unknown, parent: unknown, count: number, dvz: number) => void
  /** Spawn a floating damage number above the hit character (world-space coords). */
  spawn_damage_number?: (worldX: number, worldZ: number, worldY: number, amount: number, damageType?: DamageType, isBlocked?: boolean) => void
  /** Spawn impact particles at the hit character's position. damageType selects colour/physics palette. */
  spawn_hit_particles?: (
    worldX: number,
    worldZ: number,
    worldY: number,
    dvx: number,
    dvy: number,
    severity: HitSeverity,
    damageType: DamageType,
  ) => void
  /** Shake the camera proportional to hit severity. */
  screen_shake?: (severity: HitSeverity) => void
  /** Freeze the physics loop for the given number of frames (hitstop). */
  trigger_hitstop?: (frames: number) => void
  /** Notify that the given team landed a hit (drives the combo counter). */
  notify_hit?: (attackerTeam: number) => void
  /** Spawn a guard-break shockwave ring at a world position. */
  spawn_guard_break?: (worldX: number, worldZ: number, worldY: number) => void
  /** Spawn landing dust puff at a world position. */
  spawn_land_dust?: (worldX: number, worldZ: number, speed: number) => void
  /** Spawn a floating green heal number. */
  spawn_heal_number?: (worldX: number, worldZ: number, worldY: number, amount: number) => void
}

/** Config object passed to LivingObject / Character constructor. */
export interface ObjectConfig {
  scene: Phaser.Scene
  groundY?: number
  keyPrefix?: string
  controller?: ControllerLike
  team?: number
  match?: MatchContext
}
