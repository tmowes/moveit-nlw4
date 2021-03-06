/* eslint-disable no-new */
import Cookies from 'js-cookie'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import * as C from '~/components'

import {
  Challenge,
  ChallengesContextData,
  ChallengesProviderProps,
} from './types'
import challenges from '~/data/challenges.json'

export const ChallengesContext = createContext({} as ChallengesContextData)

export const ChallengesProvider = (props: ChallengesProviderProps) => {
  const { children, ...rest } = props
  const [level, setLevel] = useState(rest.level ?? 1)
  const [experience, setExperience] = useState(rest.experience ?? 0)
  const [challengesCount, setChallengesCount] = useState(
    rest.challengesCount ?? 0,
  )
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null)
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)

  const experienceToNextLevel = useMemo(() => {
    return ((level + 1) * 4) ** 2
  }, [level])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('experience', String(experience))
    Cookies.set('challengesCount', String(challengesCount))
  }, [level, experience, challengesCount])

  const levelUp = useCallback(() => {
    setLevel(prev => prev + 1)
    setIsLevelModalOpen(true)
  }, [])

  const closeLevelUpModal = useCallback(() => {
    setIsLevelModalOpen(false)
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
  }, [activeChallenge, experience, experienceToNextLevel, levelUp])

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
    closeLevelUpModal,
  }

  return (
    <ChallengesContext.Provider value={providerValues}>
      {children}
      {isLevelModalOpen && <C.LevelUpModal />}
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
