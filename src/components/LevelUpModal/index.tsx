import { useChallenges } from '~/contexts'
import * as S from './styles'

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useChallenges()
  return (
    <S.Overlay>
      <S.Container>
        <S.Header>{level}</S.Header>
        <S.Title>Parabéns</S.Title>
        <S.Message>Você alcançou um novo level</S.Message>
        <S.CloseButton>
          <S.CloseIcon
            src="/icons/close.svg"
            alt="Fechar modal"
            onClick={closeLevelUpModal}
          />
        </S.CloseButton>
      </S.Container>
    </S.Overlay>
  )
}

export default LevelUpModal
