import { useState } from 'react'
import * as S from './styles'
import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
  const { type = 'button', variant = 'default', label, icon: Icon } = props
  const [count, setCount] = useState(0)
  return (
    <S.Container
      type={type}
      variant={variant}
      onClick={() => setCount(prev => prev + 1)}
    >
      <S.Label>{label}</S.Label>
      <S.Label>{count}</S.Label>
      {Icon && <Icon size={20} />}
    </S.Container>
  )
}

export default Button
