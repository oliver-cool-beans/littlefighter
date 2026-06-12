/**
 * scene.ts — spatial query registry for all living objects.
 *
 * Ported from F.LF/LF/scene.js (AMD wrapper stripped).
 * Keeps a map of active living objects and provides spatial volume queries.
 *
 * Volume format (same as original):
 *   { x, y, z,          — reference (world / sprite) origin
 *     vx, vy, w, h,     — bounding box relative to (x, y)
 *     zwidth }          — half-depth extent (z ± zwidth)
 *
 * scene.query(volume, exclude, where) → array of matching objects
 * where may contain:
 *   tag:'body'    — intersect with body volumes (default)
 *   tag:'itr:N'   — intersect with itr of kind N
 *   type:'character'
 *   not_team:N    — exclude objects of this team
 *   filter:fn     — custom predicate(obj) → bool
 *   sort:fn|'distance'
 */

import { rect_flat } from './collision.js'
import type { Volume } from '../types/index.js'

export interface SceneObject {
  uid: number
  team?: number
  type?: string
  bodyVolumes?(...args: unknown[]): VolumeList
  itrVolumes?(...args: unknown[]): VolumeList
  physics?: { x: number; z: number }
  [key: string]: unknown
}

export interface WhereOptions {
  tag?: string
  team?: number
  notTeam?: number
  type?: string
  notType?: string
  filter?: (obj: SceneObject) => boolean
  sort?: 'distance' | ((obj: SceneObject) => number)
}

type VolumeList = Volume[] | { length: number; [index: number]: Volume }

export class Scene {
  live: Record<number, SceneObject>
  uid: number
  /** Flat array mirror of `live` — used for fast O(n) iteration in query(). */
  private _liveArray: SceneObject[]

  constructor() {
    this.live      = {}
    this.uid       = 0
    this._liveArray = []
  }

  add(obj: SceneObject): number {
    this.uid++
    obj.uid = this.uid
    this.live[obj.uid] = obj
    this._liveArray.push(obj)
    return obj.uid
  }

  replace(target: SceneObject, by: SceneObject): number {
    delete this.live[target.uid]
    this.live[target.uid] = by
    const arrIdx = this._liveArray.indexOf(target)
    if (arrIdx !== -1) this._liveArray[arrIdx] = by
    return target.uid
  }

  remove(obj: SceneObject): number {
    const uid = obj.uid
    delete this.live[obj.uid]
    const arrIdx = this._liveArray.indexOf(obj)
    if (arrIdx !== -1) {
      // Swap-and-pop for O(1) removal — order doesn't matter for query
      this._liveArray[arrIdx] = this._liveArray[this._liveArray.length - 1]!
      this._liveArray.pop()
    }
    obj.uid = -1
    return uid
  }

  query(volume: Volume | null, exclude: SceneObject | SceneObject[] | null, where: WhereOptions): SceneObject[] {
    const result: SceneObject[] = []
    const tagString = (where && where.tag) || 'body'
    const tagParts = tagString.split(':')
    const volumeMethodName = tagParts[0] === 'body' ? 'bodyVolumes'
      : tagParts[0] === 'itr' ? 'itrVolumes'
      : tagParts[0] + 'Volumes'
    const tagValue = tagParts[1] !== undefined ? tagParts[1] : 0

    for (let i = 0; i < this._liveArray.length; i++) {
      const obj = this._liveArray[i]!

      if (this._excluded(obj, exclude)) continue
      if (where.team     && obj.team !== where.team)       continue
      if (where.notTeam  && obj.team === where.notTeam)    continue
      if (where.type     && obj.type !== where.type)       continue
      if (where.notType  && obj.type === where.notType)    continue
      if (where.filter   && !where.filter(obj))            continue

      if (volume === null) {
        result.push(obj)
      } else {
        const method = obj[volumeMethodName]
        if (typeof method === 'function') {
          const vols = (method as (...args: unknown[]) => VolumeList).call(obj, tagValue)
          for (let j = 0; j < vols.length; j++) {
            if (this.intersect(volume, vols[j])) {
              result.push(obj)
              break
            }
          }
        }
      }
    }

    if (where.sort) {
      let sortFn = where.sort
      if (sortFn === 'distance' && !(exclude instanceof Array) && exclude !== null) {
        const excludeObj = exclude
        sortFn = (obj: SceneObject) => {
          const dx = (obj.physics?.x ?? 0) - (excludeObj.physics?.x ?? 0)
          const dz = (obj.physics?.z ?? 0) - (excludeObj.physics?.z ?? 0)
          return Math.sqrt(dx * dx + dz * dz)
        }
      }
      if (typeof sortFn === 'function') {
        result.sort((a, b) => (sortFn as (o: SceneObject) => number)(a) - (sortFn as (o: SceneObject) => number)(b))
      }
    }

    return result
  }

  intersect(A: Volume, B: Volume): boolean {
    const Al = A.x + A.vx;  const At = A.y + A.vy
    const Ar = A.x + A.vx + A.w; const Ab = A.y + A.vy + A.h
    const Bl = B.x + B.vx;  const Bt = B.y + B.vy
    const Br = B.x + B.vx + B.w; const Bb = B.y + B.vy + B.h

    return (
      rect_flat(Al, At, Ar, Ab, Bl, Bt, Br, Bb) &&
      rect_flat(A.z - A.zwidth, 0, A.z + A.zwidth, 1,
                B.z - B.zwidth, 0, B.z + B.zwidth, 1)
    )
  }

  private _excluded(obj: SceneObject, exclude: SceneObject | SceneObject[] | null): boolean {
    if (!exclude) return false
    if (exclude instanceof Array) {
      for (let i = 0; i < exclude.length; i++) {
        if (obj === exclude[i]) return true
      }
      return false
    }
    return obj === exclude
  }
}
