import * as S from './styles'
import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    variant = 'default',
    label,
    icon: Icon,
    onClick,
    ...rest
  } = props
  return (
    <S.Container type={type} variant={variant} onClick={onClick} {...rest}>
      <S.Label>{label}</S.Label>
      {Icon && <Icon size={20} />}
    </S.Container>
  )
}

export default Button
