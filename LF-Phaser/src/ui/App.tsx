import { useEffect, useState }      from 'react'
import { useRouter }                from './router.js'
import { bus }                      from './bus.js'
import { LoginScreen }              from './components/LoginScreen.js'
import { MainMenuScreen }           from './components/MainMenuScreen.js'
import { CharacterSelectScreen }    from './components/CharacterSelectScreen.js'
import { StageSelectScreen }        from './components/StageSelectScreen.js'
import { VSScreen }                 from './components/VSScreen.js'
import { HUD }                      from './components/HUD.js'
import { ResultScreen }             from './components/ResultScreen.js'
import { ContinueScreen }           from './components/ContinueScreen.js'
import { AnnouncementBanner }       from './components/AnnouncementBanner.js'
import { SettingsScreen }           from './components/SettingsScreen.js'
import { OnlineLobbyScreen }        from './components/OnlineLobbyScreen.js'
import { CharacterProfileScreen }   from './components/CharacterProfileScreen.js'
import { FONT, FONT_LABEL, ACID_GREEN, GREY_LIGHT } from './theme.js'

// ── KO quip bubble ────────────────────────────────────────────────────────────

function KOQuip() {
  const [quip, setQuip] = useState<{ text: string; key: number } | null>(null)

  useEffect(() => {
    let keyN = 0
    const handler = ({ quip: q }: { loserName: string; quip: string }) => {
      setQuip({ text: q, key: keyN++ })
    }
    bus.on('ui:ko-quip', handler)
    return () => bus.off('ui:ko-quip', handler)
  }, [])

  if (!quip) return null

  return (
    <div
      key={quip.key}
      style={{
        position:    'absolute',
        bottom:      '38%',
        left:        '50%',
        transform:   'translateX(-50%)',
        background:  'rgba(0,0,0,0.72)',
        border:      `1px solid ${ACID_GREEN}55`,
        padding:     '6px 18px',
        borderRadius: '2px',
        fontFamily:  FONT_LABEL,
        fontSize:    '17px',
        color:       GREY_LIGHT,
        letterSpacing: '1px',
        whiteSpace:  'nowrap',
        pointerEvents: 'none',
        animation:   'combo-fade 2200ms ease-out forwards',
        zIndex:      500,
      }}
      onAnimationEnd={() => setQuip(null)}
    >
      <span style={{ fontFamily: FONT, color: ACID_GREEN, marginRight: '6px' }}>&ldquo;</span>
      {quip.text}
      <span style={{ fontFamily: FONT, color: ACID_GREEN, marginLeft: '6px' }}>&rdquo;</span>
    </div>
  )
}

export function App() {
  const currentScreen = useRouter(s => s.currentScreen)
  const navigate      = useRouter(s => s.navigate)

  // Listen for Phaser signalling that the match is ready (used for rematches).
  // When the VS screen is showing the transition to 'match' is handled by
  // VSScreen's own timer — so we skip the navigation here to avoid
  // overriding the 3-second VS cinematic.
  useEffect(() => {
    const onSceneChange = ({ scene }: { scene: string }) => {
      if (scene === 'match' && useRouter.getState().currentScreen !== 'vs') {
        navigate('match', useRouter.getState().params)
      }
    }
    bus.on('ui:scene-change', onSceneChange)
    return () => bus.off('ui:scene-change', onSceneChange)
  }, [navigate])

  return (
    <>
      {currentScreen === 'login'             && <LoginScreen />}
      {currentScreen === 'main-menu'         && <MainMenuScreen />}
      {currentScreen === 'stage-select'      && <StageSelectScreen />}
      {currentScreen === 'character-select'  && <CharacterSelectScreen />}
      {currentScreen === 'vs'                && <VSScreen />}
      {currentScreen === 'settings'          && <SettingsScreen />}
      {currentScreen === 'online'            && <OnlineLobbyScreen />}
      {currentScreen === 'character-profile' && <CharacterProfileScreen />}

      {/* Standard match layer */}
      {currentScreen === 'match' && <HUD />}
      {currentScreen === 'match' && <AnnouncementBanner />}
      {currentScreen === 'match' && <ContinueScreen />}
      {currentScreen === 'match' && <KOQuip />}
      {currentScreen === 'match' && <ResultScreen />}
    </>
  )
}
