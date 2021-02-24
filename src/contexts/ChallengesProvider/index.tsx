import {
  createContext,
  useCallback,
  useContext,
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
    // eslint-disable-next-line no-restricted-properties
    return Math.pow((level + 1) * 4, 2)
  }, [])

  const levelUp = useCallback(() => {
    setLevel(prev => prev + 1)
  }, [])

  const startNew = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomIndex]
    setActiveChallenge(challenge)
  }, [])

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null)
  }, [])

  const providerValues = {
    level,
    experience,
    experienceToNextLevel,
    challengesCount,
    levelUp,
    startNew,
    activeChallenge,
    resetChallenge,
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
