import styled, { css } from 'styled-components'
import { VariantStyledProps } from './types'
import { variants } from './variants'

export const Container = styled.button<VariantStyledProps>`
  ${({ variant, theme: { shadow } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 0.8rem;
    margin: 0.8rem 0;
    -webkit-box-shadow: ${shadow};
    box-shadow: ${shadow};
    transition: 180ms ease-in-out;
    :hover {
      transform: scale(1.01);
    }
    :active {
      transform: scale(0.99);
    }
    ${variant && variants[variant]};
  `}
`

export const Label = styled.strong`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0;
`
