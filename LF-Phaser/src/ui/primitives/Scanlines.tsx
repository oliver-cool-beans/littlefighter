/** Decorative CSS scanline overlay — purely visual, pointer-events disabled. */

export function Scanlines() {
  return (
    <div
      aria-hidden
      style={{
        position:       'absolute',
        inset:          0,
        pointerEvents:  'none',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)',
        animation:      'scanline-scroll 8s linear infinite',
        zIndex:         9999,
      }}
    />
  )
}
