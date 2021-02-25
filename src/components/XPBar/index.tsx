import { useMemo } from 'react'
import { useChallenges } from '~/contexts'
import * as S from './styles'

const XPBar = () => {
  const { experience, experienceToNextLevel } = useChallenges()

  console.log(experience)

  const percentToNextLevel = useMemo(() => {
    return Math.round((experience / experienceToNextLevel) * 100)
  }, [experience])

  return (
    <S.Container>
      <S.XPText>0 xp</S.XPText>
      <S.Bar>
        <S.Progress progress={percentToNextLevel} />
        <S.ProgressText
          progress={percentToNextLevel}
        >{`${percentToNextLevel} xp`}</S.ProgressText>
      </S.Bar>
      <S.XPText>{`${experienceToNextLevel} xp`}</S.XPText>
    </S.Container>
  )
}

export default XPBar
