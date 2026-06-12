/**
 * FocusRing — animated GOLD glow border shown when `active` is true.
 * Position it as an absolute child inside the element it decorates.
 */

interface FocusRingProps {
  active: boolean
}

export function FocusRing({ active }: FocusRingProps) {
  if (!active) return null
  return (
    <div
      aria-hidden
      style={{
        position:      'absolute',
        inset:         0,
        pointerEvents: 'none',
        border:        '3px solid #FFE040',
        animation:     'glow-pulse 1.6s ease-in-out infinite',
        zIndex:        10,
      }}
    />
  )
}
