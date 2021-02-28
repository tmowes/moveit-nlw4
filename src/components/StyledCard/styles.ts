import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors, shadows } }) => css`
    background-color: ${`${colors.nlwWhite}4d`};
    background-image: ${`linear-gradient(to bottom right, ${`${colors.nlwWhite}33`}, ${`${colors.nlwWhite}03`})`};
    width: 256px;
    height: 160px;
    border-radius: 16px;
    -webkit-box-shadow: ${shadows.default};
    box-shadow: ${shadows.default};
    border-left: 1px solid ${`${colors.white}4d`};
    border-top: 1px solid ${`${colors.white}cc`};
    overflow: hidden;
    backdrop-filter: saturate(180%) blur(6px);
    margin: 16px auto;
  `}
`
export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 0;
    color: ${colors.orange};
  `}
`

export const Header = styled.header`
  ${({ theme: { colors } }) => css`
    background: ${`linear-gradient(135deg, ${
      colors.inputs
    }, ${`${colors.nlwWhite}33`})`};
    width: 100%;
    height: 32px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  `}
`
