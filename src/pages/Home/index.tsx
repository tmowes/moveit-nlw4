import { NextPage } from 'next'

import * as C from '~/components'
import * as S from '~/styles/pages/Home'

const Home: NextPage = () => {
  return (
    <S.Container>
      <C.MetaTags title="Home" />
      <C.XPBar />
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
      <S.Title>Hello Julius</S.Title>
      <C.Button label="custom primary" variant="primary" />
      <C.Button label="custom secondary" variant="secondary" />
      <C.Button label="custom tertiary" variant="tertiary" />
      <C.Button label="custom default" variant="default" />
    </S.Container>
  )
}

export default Home
