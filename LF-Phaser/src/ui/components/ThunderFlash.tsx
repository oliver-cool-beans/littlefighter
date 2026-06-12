import { useEffect, useRef } from 'react'

// Blood crimson palette
const GLOW_R = 200, GLOW_G = 10, GLOW_B = 10
const CORE_R = 255, CORE_G = 140, CORE_B = 140

type Pt = { x: number; y: number }

interface ActiveBolt {
  main:     Pt[]
  branches: Pt[][]
  opacity:  number
}

// ── Bolt generation ───────────────────────────────────────────────────────────

function subdivide(
  x1: number, y1: number,
  x2: number, y2: number,
  depth: number,
  pts: Pt[],
  branches: Pt[][],
): void {
  if (depth === 0) {
    pts.push({ x: x2, y: y2 })
    return
  }
  const spread = Math.abs(y2 - y1) * 0.85
  const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * spread
  const my = (y1 + y2) / 2

  subdivide(x1, y1, mx, my, depth - 1, pts, branches)

  // Occasional branch off mid-point
  if (depth === 3 && Math.random() < 0.45) {
    const bEnd: Pt = {
      x: mx + (Math.random() - 0.5) * 160,
      y: my + 50 + Math.random() * 120,
    }
    const branch: Pt[] = [{ x: mx, y: my }]
    subdivide(mx, my, bEnd.x, bEnd.y, depth - 2, branch, [])
    branches.push(branch)
  }

  subdivide(mx, my, x2, y2, depth - 1, pts, branches)
}

function generateBolt(width: number, height: number): { main: Pt[]; branches: Pt[][] } {
  const startX  = width * (0.15 + Math.random() * 0.7)
  const endX    = startX + (Math.random() - 0.5) * width * 0.35
  const endY    = height * (0.35 + Math.random() * 0.55)
  const main: Pt[] = [{ x: startX, y: 0 }]
  const branches: Pt[][] = []
  subdivide(startX, 0, endX, endY, 6, main, branches)
  return { main, branches }
}

// ── Bolt rendering ────────────────────────────────────────────────────────────

function strokePath(ctx: CanvasRenderingContext2D, pts: Pt[]): void {
  ctx.beginPath()
  ctx.moveTo(pts[0].x, pts[0].y)
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y)
  ctx.stroke()
}

function drawBolt(ctx: CanvasRenderingContext2D, bolt: ActiveBolt): void {
  const o = bolt.opacity
  ctx.save()
  ctx.lineCap  = 'round'
  ctx.lineJoin = 'round'

  const allPaths = [bolt.main, ...bolt.branches]
  for (const pts of allPaths) {
    if (pts.length < 2) continue
    const isBranch = pts !== bolt.main

    // Outer glow
    ctx.strokeStyle = `rgba(${GLOW_R},${GLOW_G},${GLOW_B},${o * (isBranch ? 0.04 : 0.07)})`
    ctx.lineWidth   = isBranch ? 10 : 18
    strokePath(ctx, pts)

    // Mid glow
    ctx.strokeStyle = `rgba(${GLOW_R},${GLOW_G},${GLOW_B},${o * (isBranch ? 0.15 : 0.25)})`
    ctx.lineWidth   = isBranch ? 3 : 6
    strokePath(ctx, pts)

    // Inner hot core
    ctx.strokeStyle = `rgba(${CORE_R},${CORE_G},${CORE_B},${o * (isBranch ? 0.55 : 0.9)})`
    ctx.lineWidth   = isBranch ? 0.8 : 1.4
    strokePath(ctx, pts)
  }

  ctx.restore()
}

// ── Flash helper ──────────────────────────────────────────────────────────────

function triggerFlash(el: HTMLDivElement, intensity: number, holdMs = 40): void {
  // Instant on
  el.style.transition = 'none'
  el.style.opacity    = String(intensity)
  // Force reflow so transition applies on next paint
  el.getBoundingClientRect()
  // Fade out
  setTimeout(() => {
    el.style.transition = 'opacity 220ms ease-out'
    el.style.opacity    = '0'
  }, holdMs)
}

// ── Component ─────────────────────────────────────────────────────────────────

export function ThunderFlash() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const flashRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const flash  = flashRef.current
    if (!canvas || !flash) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width  = window.innerWidth
    let height = window.innerHeight
    let raf: number
    const bolts: ActiveBolt[] = []
    let timeouts: ReturnType<typeof setTimeout>[] = []

    const resize = () => {
      width  = window.innerWidth
      height = window.innerHeight
      canvas.width  = width
      canvas.height = height
    }
    resize()
    window.addEventListener('resize', resize)

    // Animation loop — draws and decays active bolts
    const loop = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = bolts.length - 1; i >= 0; i--) {
        drawBolt(ctx, bolts[i])
        bolts[i].opacity -= 0.018  // fades out over ~55 frames (~900ms)
        if (bolts[i].opacity <= 0) bolts.splice(i, 1)
      }

      raf = requestAnimationFrame(loop)
    }
    loop()

    // Trigger a lightning strike: bolt + screen flash + optional echo
    function strike() {
      const bolt = generateBolt(width, height)
      bolts.push({ ...bolt, opacity: 1 })
      triggerFlash(flash, 0.18)

      // 40% chance of a weaker echo flash ~200ms later
      if (Math.random() < 0.4) {
        const t = setTimeout(() => triggerFlash(flash, 0.08, 20), 180 + Math.random() * 80)
        timeouts.push(t)
      }

      // Schedule next strike
      schedule()
    }

    function schedule() {
      const delay = 1800 + Math.random() * 4200   // 1.8 – 6 s
      const t = setTimeout(strike, delay)
      timeouts.push(t)
    }

    // First strike after a short delay so the bg has faded in first
    const initial = setTimeout(strike, 2400 + Math.random() * 1200)
    timeouts.push(initial)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <>
      {/* Bolt canvas — sits above the rain */}
      <canvas
        ref={canvasRef}
        style={{
          position:      'absolute',
          inset:         0,
          width:         '100%',
          height:        '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Full-screen red flash overlay — sits above everything */}
      <div
        ref={flashRef}
        style={{
          position:        'absolute',
          inset:           0,
          background:      'rgb(160, 0, 0)',
          opacity:         0,
          pointerEvents:   'none',
          zIndex:          50,
        }}
      />
    </>
  )
}
