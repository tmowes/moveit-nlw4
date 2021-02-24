import { useCallback, useEffect, useMemo, useState } from 'react'
import * as C from '~/components'

import * as S from './styles'

let countdownTimeout: NodeJS.Timeout
const initialTimer = 0.1 * 60

const Countdown = () => {
  const [time, setTime] = useState(initialTimer)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = useMemo(() => Math.floor(time / 60), [time])

  const [minLeft, minRight] = useMemo(() => {
    return String(minutes).padStart(2, '0').split('')
  }, [time])

  const seconds = useMemo(() => time % 60, [time])

  const [secLeft, secRight] = useMemo(() => {
    return String(seconds).padStart(2, '0').split('')
  }, [time])

  const startCountdown = useCallback(() => {
    setIsActive(true)
  }, [])
  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(initialTimer)
  }, [])

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(prev => prev - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      console.log('chegou')
      setHasFinished(true)
      setIsActive(false)
    }

    // #jornadainfinita
  }, [isActive, time])

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
