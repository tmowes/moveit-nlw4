import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  ${({ theme: { colors } }) => css`
    background: ${`${colors.background}90`};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
export const Container = styled.div`
  ${({ theme: { colors, shadows } }) => css`
    background: ${colors.shape};
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    border-radius: 0.5rem;
    -webkit-box-shadow: ${shadows.smooth};
    box-shadow: ${shadows.smooth};
    text-align: center;
    position: relative;
  `}
`

export const Header = styled.header`
  ${({ theme: { colors } }) => css`
    font-size: 8.75rem;
    font-weight: 800;
    color: ${colors.nlwBlue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  `}
`

export const Title = styled.strong`
  font-size: 2.25rem;
`

export const Message = styled.p`
  font-size: 1.25rem;
  margin-top: 0.25rem;
`
export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  font-size: 0px;
`

export const CloseIcon = styled.img``
