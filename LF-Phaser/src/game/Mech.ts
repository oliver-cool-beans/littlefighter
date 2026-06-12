/**
 * Mech.ts — 2.5D physics for LF2 living objects.
 *
 * Port of the `mech` class from F.LF/LF/mechanics.js.
 * All numeric constants come from global.ts; nothing is rounded or approximated.
 */

import Global from './global.js'
import type { LivingObject } from './livingobject.js'
import type { PhysicsState, Volume, BdySpec, ItrSpec } from '../types/index.js'

const gameplay = Global.gameplay

interface FallbackBackground {
  zboundary: [number, number]
  width:     number
  shadow:    { x: number; y: number }
  cameraX?:  number
}

const fallbackBackground: FallbackBackground = {
  zboundary: [0, 140],
  width:     4000,
  shadow:    { x: 0, y: 0 }
}

// Pool type: an array of Volume objects with extra meta-properties
type VolumePool = Volume[] & { emptyData: Record<string, never>; max: number }

export class Mech {
  private readonly parent:       LivingObject
  private readonly bodySprite:   { w: number }
  private readonly shadowSprite: { set_x_y(x: number, z: number): void; set_z(z: number): void; setScale(s: number): void } | undefined
  private readonly frame:        LivingObject['frame']
  private readonly background:   FallbackBackground
  clampXToBounds: boolean
  mass:            number
  state!: PhysicsState
  /** Called once when the character transitions from airborne (y < 0) to grounded (y === 0). */
  onLandCallback: (() => void) | null = null
  private readonly bodyVolumePool: VolumePool

  constructor(parent: LivingObject) {
    this.parent          = parent
    this.bodySprite      = parent.bodySprite
    this.shadowSprite    = parent.shadowSprite
    this.frame           = parent.frame
    this.background      = (parent.background as FallbackBackground) || fallbackBackground
    this.clampXToBounds  = false
    this.mass            = gameplay.default.machanics.mass

    const pool = [] as unknown as VolumePool
    pool.emptyData = {}
    pool.max       = 6
    for (let i = 0; i < 6; i++) {
      pool.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, w: 0, h: 0, zwidth: 0, data: {} as Record<string, never> })
    }
    pool.length = 0
    this.bodyVolumePool = pool
  }

  createPhysicsState(): PhysicsState {
    this.state = {
      screenX: 0, screenY: 0, screenZ: 0,
      x:  0, y:  0, z:  0,
      velocityX: 0, velocityY: 0, velocityZ: 0,
      zOrderOffset: 0,
      facing:   'right',
      friction: 1,
    }
    return this.state
  }

  setPosition(x: number, y: number, z: number): void {
    const state      = this.state
    const bodySprite = this.bodySprite
    const frameData  = this.frame.D
    const background = this.background
    const camX       = background.cameraX ?? 0

    state.x = x; state.y = y; state.z = z

    if (state.z < background.zboundary[0]) state.z = background.zboundary[0]
    if (state.z > background.zboundary[1]) state.z = background.zboundary[1]

    state.screenX = state.facing === 'right'
      ? (state.x - frameData.centerx - camX)
      : (state.x + frameData.centerx - bodySprite.w - camX)
    state.screenY = y - frameData.centery
    state.screenZ = z

    this.bodySprite_set_x_y(Math.floor(state.screenX), Math.floor(state.screenY + state.screenZ))
  }

  tickPhysics(): void {
    const state      = this.state
    const bodySprite = this.bodySprite
    const frameData  = this.frame.D
    const background = this.background
    const camX       = background.cameraX ?? 0

    state.x += state.velocityX
    state.z += state.velocityZ

    if (this.clampXToBounds) {
      if (state.x < 0)                state.x = 0
      if (state.x > background.width) state.x = background.width
    }
    if (state.z < background.zboundary[0]) state.z = background.zboundary[0]
    if (state.z > background.zboundary[1]) state.z = background.zboundary[1]

    const wasAirborne = state.y < 0
    state.y += state.velocityY

    state.screenX = state.facing === 'right'
      ? (state.x - frameData.centerx - camX)
      : (state.x + frameData.centerx - bodySprite.w - camX)
    state.screenY = state.y - frameData.centery
    state.screenZ = state.z

    if (state.y > 0) {
      state.y       = 0
      state.screenY = -frameData.centery
    }

    if (wasAirborne && state.y === 0) {
      this.onLandCallback?.()
    }

    this.bodySprite_set_x_y(Math.floor(state.screenX), Math.floor(state.screenY + state.screenZ))
    this.parent.bodySprite.set_z(Math.floor(state.screenZ + state.zOrderOffset))

    if (this.shadowSprite) {
      this.shadowSprite.set_x_y(
        Math.floor(state.x - background.shadow.x - camX),
        Math.floor(state.z - background.shadow.y)
      )
      this.shadowSprite.set_z(Math.floor(state.screenZ - 1))
      // Shrink shadow as character rises; max shrink at 180px above ground
      const shadowScale = state.y < 0 ? Math.max(0.2, 1 + state.y / 180) : 1
      this.shadowSprite.setScale(shadowScale)
    }

    if (state.y === 0 && this.mass > 0) {
      if (state.velocityX) {
        const absVx  = Math.abs(state.velocityX)
        const signVx = state.velocityX > 0 ? 1 : -1
        state.velocityX = absVx <= state.friction ? 0 : signVx * (absVx - state.friction)
      }
      if (state.velocityZ) {
        const absVz  = Math.abs(state.velocityZ)
        const signVz = state.velocityZ > 0 ? 1 : -1
        state.velocityZ = absVz <= state.friction ? 0 : signVz * (absVz - state.friction)
      }
    }

    if (state.y < 0) {
      state.velocityY += this.mass * gameplay.gravity
    }
  }

  private bodySprite_set_x_y(sx: number, sysz: number): void {
    this.parent.bodySprite.set_x_y(sx, sysz)
  }

  applyUnitFriction(): void {
    const state = this.state
    if (state.y === 0) {
      if (state.velocityX) state.velocityX += (state.velocityX > 0 ? -1 : 1)
      if (state.velocityZ) state.velocityZ += (state.velocityZ > 0 ? -1 : 1)
    }
  }

  applyLinearFriction(x: number, z: number): void {
    const state = this.state
    if (x && state.velocityX) state.velocityX += state.velocityX > 0 ? -x : x
    if (z && state.velocityZ) state.velocityZ += state.velocityZ > 0 ? -z : z
  }

  currentSpeed(): number {
    const state = this.state
    return Math.sqrt(state.velocityX * state.velocityX + state.velocityY * state.velocityY)
  }

  // ── Volume methods ────────────────────────────────────────────────────────

  buildVolume(boxData: BdySpec | ItrSpec | null | undefined, offset?: { x: number; y: number; z: number }): Volume {
    const state      = this.state
    const bodySprite = this.bodySprite
    if (!boxData) {
      const origin = offset || { x: state.screenX, y: state.screenY, z: state.screenZ }
      return { x: origin.x, y: origin.y, z: origin.z, vx: 0, vy: 0, w: 0, h: 0, zwidth: 0, data: {} as Record<string, never> }
    }
    const adjustedX = state.facing === 'left' ? (bodySprite.w - boxData.x - boxData.w) : boxData.x
    const origin = offset
      ? { x: state.screenX + offset.x, y: state.screenY + offset.y, z: state.screenZ + offset.z }
      : { x: state.screenX,             y: state.screenY,             z: state.screenZ }
    return {
      x: origin.x, y: origin.y, z: origin.z,
      vx: adjustedX, vy: boxData.y, w: boxData.w, h: boxData.h,
      zwidth: (boxData as ItrSpec).zwidth ?? gameplay.default.itr.zwidth,
      data:   boxData
    }
  }

  clearBodyVolumes(): VolumePool {
    this.bodyVolumePool.length = 0
    return this.bodyVolumePool
  }

  buildBodyVolumes(
    boxData?: BdySpec | BdySpec[] | null,
    filter?: (entry: BdySpec) => boolean,
    offset?: { x: number; y: number; z: number }
  ): VolumePool | Volume[] {
    if (boxData === undefined || boxData === null) {
      boxData = this.frame.D.bdy as BdySpec | BdySpec[] | undefined
    }

    if (boxData === this.frame.D.bdy && this.parent.effect?.super) {
      return this.clearBodyVolumes()
    }

    if (
      boxData === this.frame.D.bdy &&
      !filter &&
      (!Array.isArray(boxData) || (boxData as BdySpec[]).length <= this.bodyVolumePool.max)
    ) {
      return this.buildBodyVolumesPooled(offset)
    }

    if (Array.isArray(boxData)) {
      const volumes: Volume[] = []
      boxData.forEach(entry => {
        if (!filter || filter(entry)) volumes.push(this.buildVolume(entry, offset))
      })
      return volumes
    } else {
      if (!filter || filter(boxData as BdySpec)) return [this.buildVolume(boxData as BdySpec, offset)]
      return []
    }
  }

  private buildBodyVolumesPooled(offset?: { x: number; y: number; z: number }): VolumePool {
    const bodyData   = this.frame.D.bdy
    const state      = this.state
    const bodySprite = this.bodySprite
    const pool       = this.bodyVolumePool

    if (!bodyData) {
      pool[0] ??= { x: 0, y: 0, z: 0, vx: 0, vy: 0, w: 0, h: 0, zwidth: 0, data: {} as Record<string, never> }
      const entry = pool[0]
      if (offset) { entry.x = offset.x; entry.y = offset.y; entry.z = offset.z }
      else        { entry.x = state.screenX; entry.y = state.screenY; entry.z = state.screenZ }
      entry.vx = 0; entry.vy = 0; entry.w = 0; entry.h = 0; entry.zwidth = 0
      entry.data = pool.emptyData
      pool.length = 1
    } else if (Array.isArray(bodyData)) {
      bodyData.forEach((box, i) => {
        pool[i] ??= { x: 0, y: 0, z: 0, vx: 0, vy: 0, w: 0, h: 0, zwidth: 0, data: {} as Record<string, never> }
        const entry     = pool[i]
        const adjustedX = state.facing === 'left' ? (bodySprite.w - box.x - box.w) : box.x
        if (offset) { entry.x = state.screenX + offset.x; entry.y = state.screenY + offset.y; entry.z = state.screenZ + offset.z }
        else        { entry.x = state.screenX; entry.y = state.screenY; entry.z = state.screenZ }
        entry.vx = adjustedX; entry.vy = box.y; entry.w = box.w; entry.h = box.h
        entry.zwidth = box.zwidth ?? gameplay.default.itr.zwidth
        entry.data   = box
      })
      pool.length = bodyData.length
    } else {
      pool[0] ??= { x: 0, y: 0, z: 0, vx: 0, vy: 0, w: 0, h: 0, zwidth: 0, data: {} as Record<string, never> }
      const entry     = pool[0]
      const adjustedX = state.facing === 'left' ? (bodySprite.w - bodyData.x - bodyData.w) : bodyData.x
      if (offset) { entry.x = state.screenX + offset.x; entry.y = state.screenY + offset.y; entry.z = state.screenZ + offset.z }
      else        { entry.x = state.screenX; entry.y = state.screenY; entry.z = state.screenZ }
      entry.vx = adjustedX; entry.vy = bodyData.y; entry.w = bodyData.w; entry.h = bodyData.h
      entry.zwidth = bodyData.zwidth ?? gameplay.default.itr.zwidth
      entry.data   = bodyData
      pool.length  = 1
    }
    return pool
  }

  toWorldPoint(point: { x: number; y: number }): { x: number; y: number; z: number } {
    const state      = this.state
    const bodySprite = this.bodySprite
    if (state.facing === 'right') {
      return { x: state.screenX + point.x, y: state.screenY + point.y, z: state.screenZ + point.y }
    }
    return { x: state.screenX + bodySprite.w - point.x, y: state.screenY + point.y, z: state.screenZ + point.y }
  }

  alignPosition(a: { x: number; y: number }, b: { x: number; y: number }): void {
    const state      = this.state
    const bodySprite = this.bodySprite
    const frameData  = this.frame.D
    state.x += a.x - b.x
    state.y += a.y - b.y
    state.screenX = state.facing === 'right'
      ? (state.x - frameData.centerx)
      : (state.x + frameData.centerx - bodySprite.w)
    state.screenY = state.y - frameData.centery

    this.bodySprite_set_x_y(Math.floor(state.screenX), Math.floor(state.screenY + state.screenZ))
  }

  reset(): void {
    const state = this.state
    state.screenX = 0; state.screenY = 0; state.screenZ = 0
    state.x       = 0; state.y       = 0; state.z       = 0
    state.velocityX = 0; state.velocityY = 0; state.velocityZ = 0
    state.zOrderOffset = 0; state.facing = 'right'; state.friction = 1
  }
}
