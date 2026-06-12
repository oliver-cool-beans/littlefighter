/**
 * LoginScreen — email/password sign-in and sign-up form.
 *
 * Glass card on atmospheric background.
 */

import { useState }      from 'react'
import { useAuthStore }  from '../../auth/authStore.js'
import { useRouter }     from '../router.js'
import { ScreenOverlay } from '../primitives/ScreenOverlay.js'
import {
  FONT, FONT_LABEL, GOLD, GOLD_DIM, ELECTRIC_BLUE,
  CRIMSON, GREY_MID, GREY_LIGHT, PANEL_BORDER,
} from '../theme.js'

export function LoginScreen() {
  const { signIn, signUp, isLoading, error, signUpSuccess, clearError } = useAuthStore()
  const navigate = useRouter(s => s.navigate)

  const [mode, setMode]         = useState<'signin' | 'signup'>('signin')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  function handleGuest() {
    try { localStorage.setItem('guestSession', 'true') } catch { /* ignore */ }
    navigate('main-menu')
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (mode === 'signin') {
      const success = await signIn(email, password)
      if (success) navigate('main-menu')
    } else {
      await signUp(email, password)
    }
  }

  function switchMode(next: 'signin' | 'signup') {
    clearError()
    setMode(next)
    setEmail('')
    setPassword('')
  }

  const inputStyle: React.CSSProperties = {
    width:         '100%',
    padding:       '12px 14px',
    background:    'rgba(255,255,255,0.05)',
    border:        `1px solid rgba(255,255,255,0.12)`,
    color:         '#ffffff',
    fontFamily:    FONT_LABEL,
    fontWeight:    600,
    fontSize:      '15px',
    letterSpacing: '1px',
    outline:       'none',
    boxSizing:     'border-box',
    borderRadius:  '2px',
    transition:    'border-color 100ms ease',
  }

  return (
    <ScreenOverlay>
      {/* Extra atmospheric glow */}
      <div aria-hidden style={{
        position:      'absolute',
        top:           '20%',
        left:          '50%',
        transform:     'translateX(-50%)',
        width:         '500px',
        height:        '500px',
        background:    `radial-gradient(circle, ${ELECTRIC_BLUE}16 0%, transparent 70%)`,
        filter:        'blur(50px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position:       'absolute',
        inset:          0,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '16px',
      }}>
        {/* Glass card */}
        <div style={{
          width:               '100%',
          maxWidth:            '400px',
          background:          'rgba(12, 15, 35, 0.90)',
          backdropFilter:      'blur(16px)',
          WebkitBackdropFilter:'blur(16px)',
          border:              '1px solid rgba(61, 232, 255, 0.14)',
          padding:             '44px 36px 36px',
          display:             'flex',
          flexDirection:       'column',
          alignItems:          'center',
          boxShadow:           `0 0 60px ${ELECTRIC_BLUE}18, 0 16px 48px rgba(0,0,0,0.7)`,
          clipPath:            'polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)',
        }}>
          {/* Title */}
          <div style={{
            fontFamily:    FONT,
            fontSize:      '52px',
            color:         GOLD,
            letterSpacing: '4px',
            lineHeight:    1,
            textAlign:     'center',
            textShadow:    `0 0 24px ${ELECTRIC_BLUE}50`,
          }}>
            LITTLE FIGHTER 2
          </div>
          <div style={{
            fontFamily:    FONT_LABEL,
            fontWeight:    700,
            fontSize:      '11px',
            color:         GOLD_DIM,
            letterSpacing: '12px',
            marginTop:     '6px',
            marginBottom:  '32px',
            textTransform: 'uppercase',
          }}>
            Phaser Edition
          </div>

          {signUpSuccess ? (
            <div style={{
              width:      '100%',
              padding:    '24px 16px',
              background: 'rgba(0,200,100,0.06)',
              border:     '1px solid rgba(0,200,100,0.25)',
              textAlign:  'center',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>✓</div>
              <div style={{
                fontFamily:    FONT,
                fontSize:      '16px',
                color:         '#4cde8a',
                letterSpacing: '2px',
                marginBottom:  '8px',
              }}>
                ACCOUNT CREATED
              </div>
              <div style={{
                fontFamily: FONT_LABEL,
                fontSize:   '13px',
                color:      GREY_MID,
                lineHeight: 1.6,
              }}>
                Check your email and click the confirmation link, then sign in below.
              </div>
              <button
                onClick={() => switchMode('signin')}
                style={{
                  marginTop:     '16px',
                  background:    'none',
                  border:        `1px solid ${PANEL_BORDER}`,
                  padding:       '8px 20px',
                  color:         GOLD,
                  fontFamily:    FONT,
                  fontSize:      '14px',
                  letterSpacing: '2px',
                  cursor:        'pointer',
                }}
              >
                SIGN IN
              </button>
            </div>
          ) : (
            <>
              {/* Mode toggle */}
              <div style={{
                display:      'flex',
                width:        '100%',
                marginBottom: '24px',
                border:       `1px solid rgba(255,255,255,0.1)`,
                overflow:     'hidden',
              }}>
                {(['signin', 'signup'] as const).map(m => (
                  <button
                    key={m}
                    onClick={() => switchMode(m)}
                    style={{
                      flex:          1,
                      padding:       '10px',
                      background:    mode === m ? `${ELECTRIC_BLUE}22` : 'transparent',
                      border:        'none',
                      borderBottom:  mode === m ? `2px solid ${ELECTRIC_BLUE}` : '2px solid transparent',
                      color:         mode === m ? GOLD : GREY_MID,
                      fontFamily:    FONT,
                      fontSize:      '14px',
                      letterSpacing: '3px',
                      cursor:        'pointer',
                      transition:    'all 100ms ease',
                    }}
                  >
                    {m === 'signin' ? 'SIGN IN' : 'SIGN UP'}
                  </button>
                ))}
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
                  required
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = `${ELECTRIC_BLUE}60` }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                  required
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = `${ELECTRIC_BLUE}60` }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
                />

                {error && (
                  <div style={{
                    fontFamily: FONT_LABEL,
                    fontSize:   '13px',
                    color:      CRIMSON,
                    textAlign:  'center',
                    fontWeight: 600,
                  }}>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width:         '100%',
                    padding:       '13px 20px',
                    background:    isLoading
                      ? 'rgba(255,255,255,0.05)'
                      : `linear-gradient(135deg, ${ELECTRIC_BLUE}AA, ${ELECTRIC_BLUE}66)`,
                    border:        `1px solid ${ELECTRIC_BLUE}60`,
                    color:         GOLD,
                    fontFamily:    FONT,
                    fontSize:      '18px',
                    letterSpacing: '3px',
                    cursor:        isLoading ? 'not-allowed' : 'pointer',
                    opacity:       isLoading ? 0.6 : 1,
                    marginTop:     '4px',
                    transition:    'opacity 100ms, transform 80ms',
                  }}
                  onMouseEnter={e => { if (!isLoading) e.currentTarget.style.opacity = '0.88' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >
                  {isLoading
                    ? <span style={{
                        display:     'inline-block',
                        width:       '16px',
                        height:      '16px',
                        border:      `2px solid ${GOLD}40`,
                        borderTopColor: GOLD,
                        borderRadius:'50%',
                        animation:   'spin 0.7s linear infinite',
                      }} />
                    : mode === 'signin' ? 'SIGN IN' : 'CREATE ACCOUNT'
                  }
                </button>
              </form>
            </>
          )}

          {/* Divider */}
          <div style={{
            width:     '100%',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            margin:    '24px 0 18px',
          }} />

          {/* Guest CTA */}
          <button
            onClick={handleGuest}
            style={{
              background:     'none',
              border:         '1px solid rgba(255,255,255,0.1)',
              fontFamily:     FONT_LABEL,
              fontWeight:     600,
              fontSize:       '14px',
              color:          GREY_LIGHT,
              letterSpacing:  '3px',
              cursor:         'pointer',
              padding:        '8px 24px',
              textTransform:  'uppercase',
              transition:     'border-color 100ms, color 100ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = GREY_LIGHT
            }}
          >
            Play as Guest
          </button>

          <div style={{
            marginTop:  '18px',
            fontFamily: FONT_LABEL,
            fontSize:   '11px',
            color:      GREY_MID,
            opacity:    0.5,
            textAlign:  'center',
            lineHeight: 1.5,
          }}>
            By signing in you agree to our{' '}
            <a href="#" style={{ color: GREY_MID }}>Terms of Service</a>
            {' '}and{' '}
            <a href="#" style={{ color: GREY_MID }}>Privacy Policy</a>.
          </div>
        </div>
      </div>
    </ScreenOverlay>
  )
}
