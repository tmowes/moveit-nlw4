import { useMemo } from 'react'
import * as C from '~/components'
import { useCountdown } from '~/contexts'
import * as S from './styles'

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useCountdown()

  const [minLeft, minRight] = useMemo(() => {
    return String(minutes).padStart(2, '0').split('')
  }, [minutes])

  const [secLeft, secRight] = useMemo(() => {
    return String(seconds).padStart(2, '0').split('')
  }, [seconds])

  return (
    <>
      <S.Container>
        <S.NumberContainer>
          <S.NumberLeft>{minLeft}</S.NumberLeft>
          <S.NumberRight>{minRight}</S.NumberRight>
        </S.NumberContainer>
        <S.SeparatorText>:</S.SeparatorText>
        <S.NumberContainer>
          <S.NumberLeft>{secLeft}</S.NumberLeft>
          <S.NumberRight>{secRight}</S.NumberRight>
        </S.NumberContainer>
      </S.Container>
      {hasFinished ? (
        <C.Button label="Ciclo finalizado" variant="default" disabled />
      ) : (
        <>
          {isActive ? (
            <C.Button
              label="Abandonar ciclo"
              variant="cancel"
              onClick={resetCountdown}
            />
          ) : (
            <C.Button
              label="Iniciar um ciclo"
              variant="secondary"
              onClick={startCountdown}
            />
          )}
        </>
      )}
    </>
  )
}

export default Countdown
