import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 3.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.gray};
  `}
`

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
`

export const ChallengesCount = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`
