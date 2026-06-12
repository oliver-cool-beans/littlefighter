import { useAuthStore } from '../../auth/authStore.js'
import { useRouter }    from '../router.js'
import { FONT, BLOOD, GREY_MID, GREY_LIGHT } from '../theme.js'

export function UserBadge() {
  const { user, isLoading, signOut } = useAuthStore()
  const navigate                     = useRouter(s => s.navigate)

  async function handleSignOut() {
    await signOut()
    navigate('main-menu')
  }

  const containerStyle: React.CSSProperties = {
    position:   'absolute',
    top:        '12px',
    right:      '16px',
    display:    'flex',
    alignItems: 'center',
    gap:        '8px',
    zIndex:     10,
  }

  const nameStyle: React.CSSProperties = {
    fontFamily:    FONT,
    fontSize:      '14px',
    color:         GREY_LIGHT,
    letterSpacing: '1px',
  }

  const linkStyle: React.CSSProperties = {
    fontFamily:     FONT,
    fontSize:       '13px',
    color:          BLOOD,
    letterSpacing:  '1px',
    background:     'none',
    border:         'none',
    cursor:         'pointer',
    padding:        '0',
    textDecoration: 'underline',
  }

  if (isLoading) {
    return (
      <div style={containerStyle}>
        <div style={{
          width:          '28px',
          height:         '28px',
          borderRadius:   '50%',
          border:         `2px solid ${GREY_MID}40`,
          borderTopColor: BLOOD,
          animation:      'spin 0.7s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    )
  }

  if (user) {
    const avatarUrl   = user.user_metadata?.avatar_url as string | undefined
    const displayName = (user.user_metadata?.full_name as string | undefined) ?? user.email ?? 'Player'

    return (
      <div style={containerStyle}>
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={displayName}
            style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            width:          '28px',
            height:         '28px',
            borderRadius:   '50%',
            background:     GREY_MID,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            fontFamily:     FONT,
            fontSize:       '14px',
            color:          '#fff',
          }}>
            {displayName[0]?.toUpperCase() ?? '?'}
          </div>
        )}
        <span style={nameStyle}>{displayName}</span>
        <button style={linkStyle} onClick={handleSignOut}>Sign Out</button>
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      <span style={{ fontSize: '18px' }} aria-hidden>👻</span>
      <span style={{ ...nameStyle, color: GREY_MID }}>Guest</span>
    </div>
  )
}
