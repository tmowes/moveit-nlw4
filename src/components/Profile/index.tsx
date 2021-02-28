import { useChallenges } from '~/contexts'
import * as S from './styles'
import { ProfileProps } from './types'

const Profile = ({ imageURL, name = '' }: ProfileProps) => {
  const { level } = useChallenges()
  const avatarURL = imageURL ?? 'https://github.com/tmowes.png'

  return (
    <S.Container>
      <S.Avatar src={avatarURL} alt={`${name} image`} />
      <S.Infos>
        <S.UserName>{name}</S.UserName>
        <S.UserLevel>
          <S.LevelIcon src="icons/level.svg" alt="level icon" />
          {`Level ${level}`}
        </S.UserLevel>
      </S.Infos>
    </S.Container>
  )
}

export default Profile
