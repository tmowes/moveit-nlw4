import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
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
