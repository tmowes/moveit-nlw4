import { Provider, signIn as login, signOut as logout } from 'next-auth/client'
import { createContext, FormEvent, useCallback, useContext } from 'react'
import { AuthContextData, AuthProviderProps } from './types'

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = (props: AuthProviderProps) => {
  const { children, pageProps } = props

  const signIn = useCallback((event: FormEvent) => {
    event.preventDefault()
    login('github', { callbackUrl: process.env.NEXT_URL_LOGGED_URL })
  }, [])

  const signOut = useCallback((event: FormEvent) => {
    event.preventDefault()
    logout({ callbackUrl: process.env.NEXTAUTH_URL })
  }, [])

  const providerValues = {
    signIn,
    signOut,
  }

  return (
    <Provider session={pageProps}>
      <AuthContext.Provider value={providerValues}>
        {children}
      </AuthContext.Provider>
    </Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
