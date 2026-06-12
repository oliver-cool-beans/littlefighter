/**
 * MenuList — vertical list of MenuItems with built-in keyboard navigation.
 *
 * - ArrowUp / ArrowDown cycle focus (wrapping at edges).
 * - Enter / Space confirms the active item.
 * - Escape calls onBack.
 * - Emits a 'menu-tick' bus event on cursor move (for audio feedback).
 * - Auto-focuses on mount.
 * - Disabled items are rendered but skipped by arrow navigation.
 * - Items stagger-reveal on mount via animDelay prop.
 */

import { useEffect, useRef, useState } from 'react'
import type { ReactNode }              from 'react'
import { bus }                         from '../bus.js'
import { MenuItem }                    from './MenuItem.js'

export interface MenuListItem {
  id:       string
  label:    string
  disabled?: boolean
  right?:   ReactNode
}

interface MenuListProps {
  items:         MenuListItem[]
  onConfirm:     (id: string) => void
  onBack?:       () => void
  initialIndex?: number
}

export function MenuList({ items, onConfirm, onBack, initialIndex = 0 }: MenuListProps) {
  const enabled      = items.filter(item => !item.disabled)
  const [focusIdx, setFocusIdx] = useState(Math.min(initialIndex, enabled.length - 1))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.focus()
  }, [])

  function moveCursor(delta: -1 | 1) {
    setFocusIdx(prev => {
      const next = (prev + delta + enabled.length) % enabled.length
      bus.emit('menu-tick')
      return next
    })
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        moveCursor(-1)
        break
      case 'ArrowDown':
        e.preventDefault()
        moveCursor(1)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (enabled[focusIdx]) onConfirm(enabled[focusIdx].id)
        break
      case 'Escape':
        e.preventDefault()
        onBack?.()
        break
    }
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{ outline: 'none', display: 'flex', flexDirection: 'column' }}
    >
      {items.map((item, i) => {
        const enabledIdx = enabled.indexOf(item)
        const isActive   = !item.disabled && enabledIdx === focusIdx

        return (
          <MenuItem
            key={item.id}
            label={item.label}
            active={isActive}
            disabled={item.disabled}
            right={item.right}
            animDelay={i * 55}
            onClick={() => {
              if (item.disabled) return
              setFocusIdx(enabledIdx)
              onConfirm(item.id)
            }}
          />
        )
      })}
    </div>
  )
}
