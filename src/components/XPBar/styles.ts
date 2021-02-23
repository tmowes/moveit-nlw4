import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2.5rem 0;
`;

export const XPText = styled.span`
  font-size: 1rem;
`;

export const Bar = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex: 1;
    background: ${colors.nlwGray};
    height: 4px;
    border-radius: 4px;
    margin: 0 1.5rem;
    overflow: hidden;
    position: relative;
  `}
`;
export const Progress = styled.div`
  ${({ theme: { colors } }) => css`
    width: 50%;
    height: 100%;
    background: ${colors.nlwGreen};
  `}
`;
export const ProgressText = styled.span`
  ${({ theme: { colors } }) => css`
    position: absolute;
    left: 50%;
    top: 48px;
    transform: translateX(-50%);
    font-size: 1rem;
  `}
`;

// 'password: #rumoaoproximonivel'
