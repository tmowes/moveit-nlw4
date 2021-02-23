import * as S from './styles';

const XPBar = () => {
  return (
    <S.Container>
      <S.XPText>0 xp</S.XPText>
      <S.Bar>
        <S.Progress />
      </S.Bar>
      <S.ProgressText>300 xp</S.ProgressText>
      <S.XPText>600 xp</S.XPText>
    </S.Container>
  );
};

export default XPBar;
