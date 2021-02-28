import { FormEvent, ReactNode } from 'react'

export type AuthContextData = {
  signIn: (event: FormEvent) => void
  signOut: (event: FormEvent) => void
}

export type AuthProviderProps = {
  children: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any
}
