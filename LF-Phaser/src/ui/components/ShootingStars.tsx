import { useEffect, useRef } from 'react'

// Blood rain — bright crimson head fading to deep red
const HEAD_RGB: [number, number, number] = [255,  60,  60]   // bright crimson
const TAIL_RGB: [number, number, number] = [120,   0,   0]   // deep blood red

interface Star {
  x: number
  y: number
  vx: number
  vy: number
  trailLen: number
  opacity: number
  activeAt: number
  active: boolean
}

function makeStar(width: number, height: number, activeAt: number): Star {
  const speed = 10 + Math.random() * 6

  // Fixed 250° — uniform steep downward-left heavy rain
  const angleRad = (250 * Math.PI) / 180
  const vx = Math.cos(angleRad) * speed
  const vy = -Math.sin(angleRad) * speed

  // Spawn across the entire top + right edge so rain covers the screen
  const x = width * (-0.1 + Math.random() * 1.3)
  const y = -80 - Math.random() * 120

  return {
    x,
    y,
    vx,
    vy,
    trailLen: 300 + Math.random() * 250,
    opacity:  0.5 + Math.random() * 0.45,
    activeAt,
    active: false,
  }
}

function drawStar(ctx: CanvasRenderingContext2D, star: Star): void {
  const mag = Math.hypot(star.vx, star.vy)
  const bx = -star.vx / mag
  const by = -star.vy / mag

  // 35% solid head, 65% dotted tail
  const headLen = star.trailLen * 0.35
  const tailLen = star.trailLen * 0.65

  const hx = star.x + bx * headLen
  const hy = star.y + by * headLen

  // Solid gradient head
  const grad = ctx.createLinearGradient(star.x, star.y, hx, hy)
  grad.addColorStop(0, `rgba(${HEAD_RGB[0]},${HEAD_RGB[1]},${HEAD_RGB[2]},${star.opacity})`)
  grad.addColorStop(1, `rgba(${TAIL_RGB[0]},${TAIL_RGB[1]},${TAIL_RGB[2]},${star.opacity * 0.2})`)

  ctx.save()
  ctx.beginPath()
  ctx.moveTo(star.x, star.y)
  ctx.lineTo(hx, hy)
  ctx.strokeStyle = grad
  ctx.lineWidth = 0.8
  ctx.lineCap = 'round'
  ctx.stroke()

  // Dotted tail with aggressive fade
  const DOT_COUNT = 18
  const spacing = tailLen / DOT_COUNT

  for (let i = 0; i < DOT_COUNT; i++) {
    const t = (i + 1) / DOT_COUNT
    const px = hx + bx * (i + 0.5) * spacing
    const py = hy + by * (i + 0.5) * spacing

    const dotOpacity = star.opacity * Math.pow(1 - t, 3) * 0.5
    const dotR = 0.75 * (1 - t * 0.7)

    const lerp = t * 0.4
    const r = Math.round(TAIL_RGB[0] + (HEAD_RGB[0] - TAIL_RGB[0]) * lerp)
    const g = Math.round(TAIL_RGB[1] + (HEAD_RGB[1] - TAIL_RGB[1]) * lerp)
    const b = Math.round(TAIL_RGB[2] + (HEAD_RGB[2] - TAIL_RGB[2]) * lerp)

    ctx.beginPath()
    ctx.arc(px, py, Math.max(dotR, 0.2), 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${r},${g},${b},${dotOpacity})`
    ctx.fill()
  }

  ctx.restore()
}

export function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width  = window.innerWidth
    let height = window.innerHeight
    let raf: number

    const resize = () => {
      width  = window.innerWidth
      height = window.innerHeight
      canvas.width  = width
      canvas.height = height
    }
    resize()
    window.addEventListener('resize', resize)

    const STAR_COUNT = width < 768 ? 14 : 35
    const stars: Star[] = Array.from({ length: STAR_COUNT }, (_, i) =>
      makeStar(width, height, i * 8 + Math.floor(Math.random() * 12)),
    )

    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        if (!star.active) {
          if (frame >= star.activeAt) star.active = true
          else continue
        }

        drawStar(ctx, star)
        star.x += star.vx
        star.y += star.vy

        const offScreen = star.x < -400 || star.y > height + 400 || star.x > width + 100
        if (offScreen) {
          stars[i] = makeStar(width, height, frame + 2 + Math.floor(Math.random() * 15))
        }
      }

      frame++
      raf = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
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
  )
}
