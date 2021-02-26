import { GetServerSideProps } from 'next'
import React from 'react'
import * as C from '~/components'
import { ChallengesProvider } from '~/contexts/ChallengesProvider'
import { CountdownProvider } from '~/contexts/CountdownProvider'
import * as S from '~/styles/pages/Home'
import { HomeServerSideProps } from './types'

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

const Home = ({ level, experience, challengesCount }: HomeServerSideProps) => {
  return (
    <ChallengesProvider
      level={level}
      experience={experience}
      challengesCount={challengesCount}
    >
      <S.Container>
        <C.MetaTags title="Home" />
        <C.XPBar />
        <CountdownProvider>
          <S.LefSection>
            <S.ProfileView>
              <C.Profile />
              <C.CompletedChallenges />
              <C.Countdown />
            </S.ProfileView>
            <S.CountDownView>
              <C.ChallengeBox />
            </S.CountDownView>
          </S.LefSection>
        </CountdownProvider>
        <S.Title>Hello Julius</S.Title>
        <C.Button label="custom primary" variant="primary" />
        <C.Button label="custom secondary" variant="secondary" />
        <C.Button label="custom tertiary" variant="tertiary" />
        <C.Button label="custom default" variant="default" />
      </S.Container>
    </ChallengesProvider>
  )
}

export default Home
