import { ReactNode } from 'react'

export type CountdownContextData = {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  resetCountdown: () => void
  startCountdown: () => void
}

export type CountdownProviderProps = {
  children: ReactNode
}
