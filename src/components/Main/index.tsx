import * as S from './styles'
import { MainProps } from './types'

const Main = (props: MainProps) => {
  const {
    title = 'React Avançado',
    description = 'Typescript, ReactJS, NextJS e Styled Components',
  } = props
  return (
    <S.Container>
      <S.Logo
        src="/img/logo-orange.svg"
        alt="imagem de um átomo com react avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="imagem de um dev codando"
      />
    </S.Container>
  )
}

export default Main
