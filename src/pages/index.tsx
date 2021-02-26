import { GetServerSideProps } from 'next'
import React from 'react'
import { ChallengesProvider } from '~/contexts/ChallengesProvider'
import Home from './Home'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, experience, challengesCount } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      experience: Number(experience),
      challengesCount: Number(challengesCount),
    },
  }
}

interface AppProps {
  level: number
  experience: number
  challengesCount: number
}

const App = (props: AppProps) => {
  const { level, experience, challengesCount } = props
  return (
    <ChallengesProvider
      level={level}
      experience={experience}
      challengesCount={challengesCount}
    >
      <Home />
    </ChallengesProvider>
  )
}

export default App
