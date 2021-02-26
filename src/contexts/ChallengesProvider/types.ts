import { ReactNode } from 'react'

export type ChallengesContextData = {
  level: number
  experience: number
  experienceToNextLevel: number
  challengesCount: number
  activeChallenge: Challenge | null
  levelUp: () => void
  startNew: () => void
  resetChallenge: () => void
  completeChallenge: () => void
}

export type ChallengesProviderProps = {
  children: ReactNode
  level: number
  experience: number
  challengesCount: number
}

export type Challenge = {
  type: 'body' | 'eye' | string
  description: string
  amount: number
}
