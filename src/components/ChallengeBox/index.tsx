import React from 'react'
import * as C from '~/components'
import { useChallenges } from '~/contexts'
import data from './data'
import * as S from './styles'

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useChallenges()
  const { activeTitle, inactiveTitle, inactiveInstructions } = data

  return (
    <S.Container>
      {activeChallenge ? (
        <S.IsActive>
          <S.Header>{`Ganhe ${activeChallenge.amount} xp`}</S.Header>
          <S.Main>
            <S.ChallengeImg
              src={`/icons/${activeChallenge.type}.svg`}
              alt={`${activeChallenge.type} challenge`}
            />
            <S.NewTitle>{activeTitle}</S.NewTitle>
            <S.Instructions>{activeChallenge.description}</S.Instructions>
          </S.Main>
          <S.Footer>
            <C.Button
              label="Falhei"
              variant="cancel"
              onClick={resetChallenge}
            />
            <C.Button label="Concluido" variant="secondary" />
          </S.Footer>
        </S.IsActive>
      ) : (
        <S.NotActive>
          <S.Title>{inactiveTitle}</S.Title>
          <S.Description>
            <S.LevelIcon src="icons/level-up.svg" alt="level up" />
            {inactiveInstructions}
          </S.Description>
        </S.NotActive>
      )}
    </S.Container>
  )
}

export default ChallengeBox
