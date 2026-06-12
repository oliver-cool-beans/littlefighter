/**
 * livingobject.ts — base class for all LF2 characters, weapons, and effects.
 *
 * Ported from F.LF/LF/livingobject.js (AMD wrapper stripped).
 * Converted from prototype-chain to ES6 class.
 */

import { CharSprite, ShadowSprite } from './CharSprite.js'
import { Mech }                      from './Mech.js'
import { FrameTransistor }           from './FrameTransistor.js'
import Global                        from './global.js'
import { lookup_abs }                from './util.js'
import type {
  CharacterData, FrameData, ItrSpec, BdySpec,
  ObjectConfig, MatchContext, Background,
  StateMap, ControllerLike, ComboDecLike,
  PhysicsState, Volume
} from '../types/index.js'

const gameplay = Global.gameplay

// ── Minimal stubs for systems implemented in later phases ──────────────────
const fallbackMatch: MatchContext = {
  F6_mode:        false,
  spec:           {},
  random:         () => Math.random(),
  sound:          { play: () => {} },
  time:           { t: 0 },
  scene:          { query: () => [] },
  destroy_object: () => {},
  create_object:  () => {}
}

const fallbackBackground: Background = {
  zboundary: [0, 140],
  width:     4000,
  shadow:    { x: 0, y: 0 },
  cameraX:   0,
  leaving:   () => false
}
// ──────────────────────────────────────────────────────────────────────────

export class LivingObject {
  // identity
  name:     string
  uid:      number = -1
  id:       number
  data:     CharacterData
  team:     number | undefined
  statemem: Record<string, unknown> = {}
  type: string = 'livingobject'

  /**
   * AI script interface — attached externally by the match scene so AI scripts
   * can call self.AI.facing(), target.AI.blink(), etc.  Typed as unknown to
   * avoid a circular import with AI/interface.ts.
   */
  AI?: unknown

  // handles
  match:      MatchContext
  scene:      MatchContext['scene']
  background: Background

  // sprites
  bodySprite:   CharSprite
  shadowSprite?: ShadowSprite

  // health
  health: {
    hp:       number
    mp:       number
    hpFull?:  number
    mpFull?:  number
    hpBound?: number
    hpLost?:  number
    fall?:    number
    bdefend?: number
    mpUsage?: number
  }

  // frame tracking
  frame: {
    PN:  number
    N:   number
    D:   FrameData
    ani: { i: number; up: boolean }
  }

  // physics
  mech:    Mech
  physics: PhysicsState
  trans:   FrameTransistor

  // combat
  itr: {
    arest:    number
    vrest:    Record<number, number>
    attacker?: LivingObject
  }
  effect: {
    num:       number
    dvx:       number
    dvy:       number
    stuck:     boolean
    oscillate: number
    blink:     boolean
    super:     boolean
    timein:    number
    timeout:   number
    heal?:     number
    bi?:       number
    oi?:       number
  }

  catching: unknown
  dead?:    boolean
  is_npc?:  boolean
  counter?: Record<string, number>

  // state machine (overridden by subclasses)
  protected states: StateMap = {}
  statesFacingFollowsInput: Record<number, boolean> = {}
  allowFacingFollowsInput = true

  // input (set by Character subclass)
  con?:      ControllerLike
  combodec?: ComboDecLike

  constructor(config: ObjectConfig, data: CharacterData, thisID: number) {
    // identity
    this.name     = data.bmp.name
    this.id       = thisID
    this.data     = data
    this.team     = config.team

    // handles
    this.match      = config.match || fallbackMatch
    this.scene      = this.match.scene
    this.background = (config.match && config.match.background) ? config.match.background : fallbackBackground

    // sprites
    const groundY   = config.groundY   != null ? config.groundY   : 300
    const keyPrefix = config.keyPrefix  || data.bmp.name.toLowerCase()
    this.bodySprite      = new CharSprite(config.scene, data.bmp, keyPrefix, groundY)
    this.bodySprite.w    // accessed below; ensure it's set: w comes from CharSprite constructor

    if (!this.proper('no_shadow')) {
      this.shadowSprite = new ShadowSprite(config.scene, groundY)
    }

    // health
    this.health = { hp: 100, mp: 100 }

    // frame tracking
    this.frame = {
      PN:  0,
      N:   0,
      D:   data.frame[0],
      ani: { i: 0, up: true }
    }

    // physics
    this.mech    = new Mech(this)
    this.physics = this.mech.createPhysicsState()
    this.trans   = new FrameTransistor(this)

    // combat state
    this.itr = { arest: 0, vrest: {} }
    this.effect = {
      num:       -99,
      dvx:       0,    dvy: 0,
      stuck:     false,
      oscillate: 0,
      blink:     false,
      super:     false,
      timein:    0,
      timeout:   0,
      heal:      undefined
    }

    this.catching = 0
    this.allowFacingFollowsInput = true
  }

  destroy(): void {
    this.bodySprite.destroy()
    if (this.shadowSprite) this.shadowSprite.destroy()
  }

  setup(): void {
    this.stateUpdate('setup')
  }

  // ── Frame update (called by FrameTransistor.trans() on each transition) ──

  frame_update(): void {
    this.bodySprite.show_pic(this.frame.D.pic)
    this.physics.friction = 1

    if (!this.stateUpdate('frameForce')) {
      this.frameForce()
    }

    this.trans.setWait(this.frame.D.wait, 99)
    this.trans.setNext(this.frame.D.next, 99)

    this.stateUpdate('frame')

    if (this.frame.D.sound) this.match.sound.play(this.frame.D.sound, this.physics.x)
  }

  frameForce(): void {
    if (this.frame.D.dvx) {
      const avx = this.physics.velocityX > 0 ? this.physics.velocityX : -this.physics.velocityX
      if (this.physics.y < 0 || avx < (this.frame.D.dvx ?? 0)) {
        this.physics.velocityX = this.dirh() * (this.frame.D.dvx ?? 0)
      }
      if ((this.frame.D.dvx ?? 0) < 0) this.physics.velocityX = this.physics.velocityX - this.dirh()
    }
    if (this.frame.D.dvz) this.physics.velocityZ = this.dirv() * this.frame.D.dvz
    if (this.frame.D.dvy) this.physics.velocityY += this.frame.D.dvy
    if (this.frame.D.dvx === 550) this.physics.velocityX = 0
    if (this.frame.D.dvy === 550) this.physics.velocityY = 0
    if (this.frame.D.dvz === 550) this.physics.velocityZ = 0
  }

  // ── TU update (30 Hz game logic tick) ─────────────────────────────────────

  TU_update(): void {
    if (!this.stateUpdate('TU_force')) {
      this.frameForce()
    }

    // Effect processing
    if (this.effect.timein < 0) {
      if (this.effect.oscillate) {
        this.effect.oi = (this.effect.oi === 1) ? -1 : 1
        this.bodySprite.set_x_y(
          this.physics.screenX + this.effect.oscillate * (this.effect.oi ?? 1),
          this.physics.screenY + this.physics.screenZ
        )
      } else if (this.effect.blink) {
        if (this.effect.bi === undefined) this.effect.bi = 0
        switch (this.effect.bi % 4) {
          case 0: case 1: this.bodySprite.hide(); break
          case 2: case 3: this.bodySprite.show(); break
        }
        this.effect.bi++
      }
      if (this.effect.timeout === 0) {
        this.effect.num = -99
        if (this.effect.stuck)     { this.effect.stuck     = false }
        if (this.effect.oscillate) { this.effect.oscillate = 0; this.bodySprite.set_x_y(this.physics.screenX, this.physics.screenY + this.physics.screenZ) }
        if (this.effect.blink)     { this.effect.blink     = false; this.effect.bi = undefined; this.bodySprite.show() }
        if (this.effect.super)     { this.effect.super     = false }
      } else if (this.effect.timeout === -1) {
        if (this.effect.dvx) this.physics.velocityX = this.effect.dvx
        if (this.effect.dvy) this.physics.velocityY = this.effect.dvy
        this.effect.dvx = 0
        this.effect.dvy = 0
      }
      this.effect.timeout--
    }

    if (this.effect.timein < 0 && this.effect.stuck) {
      // stuck — skip TU update
    } else {
      this.stateUpdate('TU')
    }

    if (this.health.hp <= 0 && !this.dead) {
      this.stateUpdate('die')
      this.dead = true
    }

    if (this.background.leaving(this)) {
      this.stateUpdate('leaving')
    }

    for (const I in this.itr.vrest) {
      if (this.itr.vrest[I] > 1) { this.itr.vrest[I]--; continue }
      delete this.itr.vrest[I]
    }
    if (this.itr.arest > 0) this.itr.arest--
  }

  stateUpdate(event: string, ...args: unknown[]): number | boolean | void {
    const tar1 = this.states.generic
    let res1: number | boolean | void = undefined
    if (tar1) res1 = tar1.call(this, event, ...args)
    const tar2 = this.states[this.frame.D.state ?? 0]
    let res2: number | boolean | void = undefined
    if (tar2) res2 = tar2.call(this, event, ...args)
    return res1 || res2
  }

  /** One game tick — apply state TU logic. Time is advanced once per tick by MatchScene. */
  TU(): void {
    this.TU_update()
  }

  /** One game tick — advance combodec, process combos, transition frames, run dynamics. */
  transit(): void {
    if (this.combodec) this.combodec.frame()
    if (this.con) this.combo_update()
    if (!(this.effect.timein < 0 && this.effect.stuck)) {
      this.trans.trans()
    }
    this.effect.timein--
    if (!(this.effect.timein < 0 && this.effect.stuck)) {
      this.stateUpdate('transit')
    }
  }

  // Overridden in Character; placeholder here for type compatibility
  combo_update(): void {}

  setPosition(x: number, y: number, z: number): void {
    this.mech.setPosition(x, y, z)
  }

  // ── Volume helpers ────────────────────────────────────────────────────────

  bodyVolumes(): Volume[] {
    return this.mech.buildBodyVolumes() as Volume[]
  }

  itrVolumes(kind: number | string): Volume[] {
    if (this.frame.D.itr) {
      return this.mech.buildBodyVolumes(
        this.frame.D.itr as BdySpec | BdySpec[],
        (entry) => (entry as unknown as ItrSpec).kind == kind  // eslint-disable-line eqeqeq
      ) as Volume[]
    }
    return this.mech.clearBodyVolumes() as Volume[]
  }

  state(): number {
    return this.frame.D.state ?? 0
  }

  effect_id(num: number): number {
    return num + gameplay.effect.num_to_id
  }

  effect_create(num: number, duration: number, dvx?: number, dvy?: number): void {
    if (num >= this.effect.num) {
      this.effect.stuck = true
      if (dvx !== undefined) this.effect.dvx = dvx
      if (dvy !== undefined) this.effect.dvy = dvy
      if (this.effect.num >= 0) {
        if (this.effect.timein > 0)         this.effect.timein  = 0
        if (duration > this.effect.timeout) this.effect.timeout = duration
      } else {
        this.effect.timein  = 0
        this.effect.timeout = duration
      }
      this.effect.num = num
    }
  }

  effect_stuck(timein: number, timeout: number): void {
    if (!this.effect.stuck || this.effect.num <= -1) {
      this.effect.num    = -1
      this.effect.stuck  = true
      this.effect.timein  = timein
      this.effect.timeout = timeout
    }
  }

  // ── Phase 7+ stubs (overridden by subclasses) ──────────────────────────────
  opoint():               void {}
  wpoint():               void {}
  interaction():          void {}
  preInteraction():       void {}
  postInteraction():      void {}
  injury(_inj?: number):  void {}
  die():                  void {}
  brokeneffect_create(_frameNum?: number, _intensity?: number): void {}
  visualeffect_create():  void {}
  hit(_itr: ItrSpec, _att: LivingObject, _attps: { x: number; y: number; z: number }, _vol: unknown): number | boolean { return false }
  heal(_amount: number): boolean { return false }
  attacked(_inj: number | boolean): boolean { return false }
  killed(): void {}
  offset_attack(_inj: number): void {}
  // ──────────────────────────────────────────────────────────────────────────

  frame_ani_oscillate(a: number, b: number): void {
    const frame = this.frame
    if (frame.ani.i < a || frame.ani.i > b) { frame.ani.up = true; frame.ani.i = a + 1 }
    if (frame.ani.i < b &&  frame.ani.up)   this.trans.setNext(frame.ani.i++)
    else if (frame.ani.i > a && !frame.ani.up) this.trans.setNext(frame.ani.i--)
    if (frame.ani.i === b) frame.ani.up = false
    if (frame.ani.i === a) frame.ani.up = true
  }

  itr_arest_test(): boolean   { return !this.itr.arest }

  itrArestUpdate(ITR?: ItrSpec): void {
    if (ITR && ITR.arest)        this.itr.arest = ITR.arest
    else if (!ITR || !ITR.vrest) this.itr.arest = gameplay.default.character.arest
  }

  itrVrestTest(uid: number): boolean { return !this.itr.vrest[uid] }

  itrVrestUpdate(uid: number, ITR?: ItrSpec): void {
    if (ITR && ITR.vrest) this.itr.vrest[uid] = ITR.vrest
  }

  switchFacing(e: 'left' | 'right'): void {
    if (this.physics.facing === 'left' && e === 'right') {
      this.physics.facing = 'right'
      this.bodySprite.switch_lr('right')
    } else if (this.physics.facing === 'right' && e === 'left') {
      this.physics.facing = 'left'
      this.bodySprite.switch_lr('left')
    }
  }

  /**
   * ps — compatibility alias for AI scripts that expect the LF2 original
   * physics-state property name.  Provides x, y, z and a dir alias for facing.
   */
  get ps(): { x: number; y: number; z: number; dir: string; facing: string } {
    const p = this.physics
    return { x: p.x, y: p.y, z: p.z, dir: p.facing, facing: p.facing }
  }

  dirh(): number {
    return (this.physics.facing === 'left' ? -1 : 1)
  }

  dirv(): number {
    let d = 0
    if (this.con) {
      if (this.con.state['up'])   d -= 1
      if (this.con.state['down']) d += 1
    }
    return d
  }

  proper(id: string, prop?: string): unknown {
    if (arguments.length === 1) { prop = id; id = String(this.id) }
    const entry = this.match.spec[id]
    if (entry && prop) return entry[prop]
    return undefined
  }
}

// Backward-compat alias so existing imports of `livingobject` still work
export { LivingObject as livingobject }
export default LivingObject
