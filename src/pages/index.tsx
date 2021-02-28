import React from 'react'
import Image from 'next/image'
import { useAuth } from '~/contexts'
import * as C from '~/components'
import * as S from '~/styles/pages'

const App = () => {
  const { signIn } = useAuth()

  return (
    <S.Container>
      <C.MetaTags title="Login" />
      <S.LeftContainer>
        <Image src="/logo-gradient.png" alt="Banner" width={760} height={660} />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Logo>
          <Image src="/logo-full.svg" alt="Logo" width={300} height={300} />
        </S.Logo>

        <S.Title>Bem vindo</S.Title>
        <S.Text>
          <S.GitHubIcon />
          Faça login com seu Github para começar
        </S.Text>

        <S.LoginButton>
          <C.Button
            label="Login"
            onClick={signIn}
            leftIcon
            icon={S.GitHubIcon}
            variant="secondary"
          />
        </S.LoginButton>
      </S.RightContainer>
    </S.Container>
  )
}

export default App
