import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import React from 'react'
import * as C from '~/components'
import { ChallengesProvider } from '~/contexts/ChallengesProvider'
import { CountdownProvider } from '~/contexts/CountdownProvider'
import * as S from '~/styles/pages/home'

export type HomeProps = {
  level: number
  experience: number
  challengesCount: number
}

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

const Home = (props: HomeProps) => {
  const { level, experience, challengesCount } = props

  const [session, loading] = useSession()

  return (
    <ChallengesProvider
      level={level}
      experience={experience}
      challengesCount={challengesCount}
    >
      <S.Container>
        <C.MetaTags title="Home" />
        {loading && <p>Carregando..</p>}
        {session && (
          <>
            <C.XPBar />
            <CountdownProvider>
              <S.LefSection>
                <S.ProfileView>
                  <C.Profile
                    imageURL={session.user.image}
                    name={session.user.name}
                  />
                  <C.CompletedChallenges />
                  <C.Countdown />
                </S.ProfileView>
                <S.CountDownView>
                  <C.ChallengeBox />
                </S.CountDownView>
              </S.LefSection>
            </CountdownProvider>
          </>
        )}
        {!session && <p>Você precisa logar!</p>}
      </S.Container>
    </ChallengesProvider>
  )
}

export default Home
