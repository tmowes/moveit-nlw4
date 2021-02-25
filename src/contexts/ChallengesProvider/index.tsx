/* eslint-disable no-new */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  Challenge,
  ChallengesContextData,
  ChallengesProviderProps,
} from './types'
import challenges from '~/data/challenges.json'

export const ChallengesContext = createContext({} as ChallengesContextData)

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1)
  const [experience, setExperience] = useState(0)
  const [challengesCount, setChallengesCount] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null)

  const experienceToNextLevel = useMemo(() => {
    return ((level + 1) * 4) ** 2
  }, [level])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  const levelUp = useCallback(() => {
    setLevel(prev => prev + 1)
  }, [])

  const startNew = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomIndex]
    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp`,
      })
    }
  }, [])

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null)
  }, [])

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return
    }
    const { amount } = activeChallenge

    let finalExperience = experience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel
      levelUp()
    }

    setExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCount(prev => prev + 1)
  }, [activeChallenge, challengesCount, levelUp, experience])

  const providerValues = {
    level,
    experience,
    experienceToNextLevel,
    challengesCount,
    levelUp,
    startNew,
    activeChallenge,
    resetChallenge,
    completeChallenge,
  }

  return (
    <ChallengesContext.Provider value={providerValues}>
      {children}
    </ChallengesContext.Provider>
  )
}

export function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext)
  if (!context) {
    throw new Error('useChallenges must be used within an ChallengesProvider')
  }
  return context
}
