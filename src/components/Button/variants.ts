import { shade, tint } from 'polished'
import { css } from 'styled-components'

export const variants = {
  primary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.orange};
      :hover {
        color: ${tint(0.16, colors.white)};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
  secondary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.nlwBlue};
      :hover {
        color: ${tint(0.16, colors.white)};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
  tertiary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.orange};
      background: ${colors.shape};
      :hover {
        color: ${tint(0.16, colors.orange)};
      }
      :active {
        color: ${shade(0.16, colors.orange)};
      }
    `}
  `,
  default: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.shape};
      :hover {
        color: ${tint(0.16, colors.white)};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
}
