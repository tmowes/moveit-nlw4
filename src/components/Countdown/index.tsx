import { useCallback, useEffect, useMemo, useState } from 'react'
import * as C from '~/components'

import * as S from './styles'

const Countdown = () => {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const minutes = useMemo(() => Math.floor(time / 60), [time])
  const [minLeft, minRight] = useMemo(() => {
    return String(minutes).padStart(2, '0').split('')
  }, [time])

  const seconds = useMemo(() => time % 60, [time])
  const [secLeft, secRight] = useMemo(() => {
    return String(seconds).padStart(2, '0').split('')
  }, [time])

  const startCountdown = useCallback(() => {
    setActive(true)
  }, [])

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(prev => prev - 1)
      }, 1000)
    }
    // #jornadainfinita
  }, [active, time])

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
      <C.Button
        label="Iniciar um ciclo"
        disabled={!active}
        variant="secondary"
        onClick={startCountdown}
      />
    </>
  )
}

export default Countdown
