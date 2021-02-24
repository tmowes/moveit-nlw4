import { useChallenges } from '~/contexts'
import * as S from './styles'

const CompletedChallenges = () => {
  const { challengesCount } = useChallenges()
  return (
    <S.Container>
      <S.Title>Desafios concluídos</S.Title>
      <S.ChallengesCount>{challengesCount}</S.ChallengesCount>
    </S.Container>
  )
}

export default CompletedChallenges
