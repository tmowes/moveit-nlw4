import { useChallenges } from '~/contexts'
import * as S from './styles'

const Profile = () => {
  const { level } = useChallenges()

  return (
    <S.Container>
      <S.Avatar src="https://github.com/tmowes.png" alt="tmowes" />
      <S.Infos>
        <S.UserName>TMoweS</S.UserName>
        <S.UserLevel>
          <S.LevelIcon src="icons/level.svg" alt="level icon" />
          {`Level ${level}`}
        </S.UserLevel>
      </S.Infos>
    </S.Container>
  )
}

export default Profile
