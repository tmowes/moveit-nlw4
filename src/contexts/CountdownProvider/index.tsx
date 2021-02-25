import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { CountdownContextData, CountdownProviderProps } from './types'
import { useChallenges } from '~/contexts'

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

const initialTimer = 0.1 * 60

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNew } = useChallenges()

  const [time, setTime] = useState(initialTimer)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const minutes = useMemo(() => Math.floor(time / 60), [time])
  const seconds = useMemo(() => time % 60, [time])

  const startCountdown = useCallback(() => {
    setIsActive(true)
  }, [])

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(initialTimer)
  }, [])

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(prev => prev - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNew()
    }

    // #jornadainfinita
  }, [isActive, time])

  const providerValues = {
    hasFinished,
    minutes,
    seconds,
    isActive,
    resetCountdown,
    startCountdown,
  }
  return (
    <CountdownContext.Provider value={providerValues}>
      {children}
    </CountdownContext.Provider>
  )
}

export function useCountdown(): CountdownContextData {
  const context = useContext(CountdownContext)
  if (!context) {
    throw new Error('useCountdown must be used within an CountdownProvider')
  }
  return context
}
