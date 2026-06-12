import { FONT, BLOOD, PANEL, VOID, BONE, GREY_LIGHT, GREY_DIM, FAST } from '../theme.js'

export interface TabItem {
  id:    string
  label: string
}

interface TabBarProps {
  tabs:     TabItem[]
  activeId: string
  onChange: (id: string) => void
}

export function TabBar({ tabs, activeId, onChange }: TabBarProps) {
  return (
    <div
      style={{
        display:      'flex',
        gap:          '2px',
        borderBottom: `2px solid ${GREY_DIM}`,
      }}
    >
      {tabs.map(tab => {
        const isActive = tab.id === activeId
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            style={{
              fontFamily:    FONT,
              fontSize:      '28px',
              letterSpacing: '2px',
              padding:       '10px 24px',
              background:    isActive ? PANEL : VOID,
              color:         isActive ? BONE : GREY_LIGHT,
              border:        'none',
              borderBottom:  `3px solid ${isActive ? BLOOD : 'transparent'}`,
              cursor:        'pointer',
              clipPath:      'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              transform:     'skewX(-8deg)',
              transition:    `border-color ${FAST}ms ease, background ${FAST}ms ease, color ${FAST}ms ease`,
              outline:       'none',
              lineHeight:    1,
            }}
          >
            <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>
              {tab.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
