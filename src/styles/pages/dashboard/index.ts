import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 64px 1fr 48px;
  grid-template-areas:
    'header toolbar'
    'side content'
    'side footer';
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 64px 64px 1fr 1fr 48px;
    grid-template-areas:
      'header'
      'toolbar'
      'topnav'
      'content'
      'footer';
  }
`
export const Header = styled.header`
  ${({ theme: { colors } }) => css`
    grid-area: header;
    background: ${colors.shape};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`

export const ToolBar = styled.div`
  ${({ theme: { colors } }) => css`
    grid-area: toolbar;
    background: ${colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const SideNav = styled.aside`
  ${({ theme: { colors } }) => css`
    grid-area: side;
    background: ${colors.shape};
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      display: none;
    }
  `}
`
export const TopNav = styled.nav`
  ${({ theme: { colors } }) => css`
    grid-area: topnav;
    background: ${colors.shape};
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      display: none;
    }
  `}
`

export const Content = styled.main`
  ${({ theme: { colors } }) => css`
    grid-area: content;
    background: ${colors.background};
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    background: url('/icons/bg2.png') no-repeat center;
    background-size: cover;
  `}
`

export const Footer = styled.footer`
  ${({ theme: { colors } }) => css`
    grid-area: footer;
    background: ${colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 0;
    color: ${colors.orange};
  `}
`

export const LefSection = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;
`

export const ProfileView = styled.div``

export const CountDownView = styled.div``
