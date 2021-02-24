import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors, shadows } }) => css`
    height: 100%;
    background: ${colors.shape};
    border-radius: 0.5rem;
    -webkit-box-shadow: ${shadows.smooth};
    box-shadow: ${shadows.smooth};
    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`
export const NotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.strong`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;
  min-width: 70%;
  margin-top: 3rem;
  font-weight: 300;
`

export const LevelIcon = styled.img`
  margin-bottom: 1rem;
`

// IS ACTIVE

export const IsActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  ${({ theme: { colors } }) => css`
    color: ${colors.nlwBlue};
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0 2rem 1rem;
    border-bottom: 1px solid ${colors.gray};
  `}
`
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NewTitle = styled.strong`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 1rem 0;
`
export const Instructions = styled.p`
  line-height: 1.5;
  font-size: 1.1rem;
`

export const ChallengeImg = styled.img``

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
