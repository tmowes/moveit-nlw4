import * as S from './styles'

const Profile = () => {
  return (
    <S.Container>
      <S.Avatar src="https://github.com/tmowes.png" alt="tmowes" />
      <S.Infos>
        <S.UserName>TMoweS</S.UserName>
        <S.UserLevel>
          <S.LevelIcon src="icons/level.svg" alt="level icon" />
          Level 69
        </S.UserLevel>
      </S.Infos>
    </S.Container>
  )
}

export default Profile
