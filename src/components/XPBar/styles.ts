import styled, { css } from 'styled-components'
import { ProgressStyles } from './types'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2.5rem 0;
`

export const XPText = styled.span`
  font-size: 1rem;
`

export const Bar = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex: 1;
    background: ${colors.nlwGray};
    height: 4px;
    border-radius: 4px;
    margin: 0 1.5rem;
    position: relative;
  `}
`
export const Progress = styled.div<ProgressStyles>`
  ${({ progress, theme: { colors } }) => css`
    width: ${progress}%;
    height: 100%;
    border-radius: 4px;
    background: ${colors.nlwGreen};
  `}
`
export const ProgressText = styled.span<ProgressStyles>`
  ${({ progress }) => css`
    position: absolute;
    left: ${progress}%;
    top: 12px;
    transform: translateX(-50%);
    font-size: 1rem;
  `}
`
