import styled, { css } from 'styled-components'
import { AiOutlineGithub } from 'react-icons/ai'

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem;
  align-content: center;
`

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    font-size: 2.5rem;
    text-align: left;
    font-family: Fira Code, sans-serif;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 2rem;
    color: ${colors.white};
  `}
`
export const Text = styled.p`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: ${colors.nlwText};
    line-height: 1.4;

    margin-bottom: 2rem;
  `}
`

export const LeftContainer = styled.div``

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Logo = styled.div``

export const LoginButton = styled.div`
  width: 60%;
`

export const GitHubIcon = styled(AiOutlineGithub)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`
