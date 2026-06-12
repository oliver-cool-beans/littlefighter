import Global         from './global.js'

const gameplay = Global.gameplay

export class Mechanics {
  readonly mass: number
  readonly state: {
    x: number; y: number; z: number
    velocityX: number; velocityY: number; velocityZ: number
    facing: string
    friction: number
  }

  constructor(mass = gameplay.default.machanics.mass) {
    this.mass  = mass
    this.state = this._createInitialState()
  }

  private _createInitialState() {
    return {
      x: 0, y: 0, z: 0,
      velocityX:  0, velocityY: 0, velocityZ: 0,
      facing:   'right',
      friction:  1
    }
  }

  setPos(x: number, y: number, z: number): void {
    this.state.x = x
    this.state.y = y
    this.state.z = z
  }

  tick(bgWidth?: number, zboundary?: [number, number]): void {
    const state = this.state
    this._moveHorizontal(state, bgWidth, zboundary)
    this._moveVertical(state)
    this._applyFriction(state)
    this._applyGravity(state)
  }

  private _moveHorizontal(
    state: Mechanics['state'],
    bgWidth: number | undefined,
    zboundary: [number, number] | undefined
  ): void {
    state.x += state.velocityX
    state.z += state.velocityZ
    if (bgWidth !== undefined) {
      if (state.x < 0)       state.x = 0
      if (state.x > bgWidth) state.x = bgWidth
    }
    if (zboundary) {
      if (state.z < zboundary[0]) state.z = zboundary[0]
      if (state.z > zboundary[1]) state.z = zboundary[1]
    }
  }

  private _moveVertical(state: Mechanics['state']): void {
    state.y += state.velocityY
    if (state.y > 0) {
      state.y = 0
    }
  }

  private _applyFriction(state: Mechanics['state']): void {
    if (state.y !== 0 || this.mass <= 0) return
    if (state.velocityX) state.velocityX += (state.velocityX > 0 ? -1 : 1) * state.friction
    if (state.velocityZ) state.velocityZ += (state.velocityZ > 0 ? -1 : 1) * state.friction
    if (state.velocityX !== 0 && state.velocityX > -gameplay.min_speed && state.velocityX < gameplay.min_speed) state.velocityX = 0
    if (state.velocityZ !== 0 && state.velocityZ > -gameplay.min_speed && state.velocityZ < gameplay.min_speed) state.velocityZ = 0
  }

  private _applyGravity(state: Mechanics['state']): void {
    if (state.y < 0) {
      state.velocityY += this.mass * gameplay.gravity
    }
  }
}
