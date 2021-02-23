import * as S from './styles'
import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    variant = 'default',
    label,
    icon: Icon,
    onClick,
  } = props
  return (
    <S.Container type={type} variant={variant} onClick={onClick}>
      <S.Label>{label}</S.Label>
      {Icon && <Icon size={20} />}
    </S.Container>
  )
}

export default Button
