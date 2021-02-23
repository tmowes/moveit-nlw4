import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Fira Code', monospace;
  font-weight: 600;
`

export const NumberContainer = styled.div`
  ${({ theme: { colors, shadows } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
    background: ${colors.shape};
    border-radius: 5px;
    -webkit-box-shadow: ${shadows.smooth};
    box-shadow: ${shadows.smooth};
    text-align: center;
    font-size: 8.5rem;
    letter-spacing: 5px 50px;
  `}
`

export const NumberLeft = styled.span`
  ${({ theme: { colors } }) => css`
    flex: 1;
    padding: 0 0.5rem;
    border-right: 1px solid ${`${colors.gray}4d`};
  `}
`

export const NumberRight = styled.span`
  ${({ theme: { colors } }) => css`
    flex: 1;
    padding: 0 0.5rem;
    border-left: 1px solid ${`${colors.gray}4d`};
  `}
`

export const SeparatorText = styled.span`
  flex: 1;
  font-size: 6.5rem;
  margin: 0 0.5rem;
`
