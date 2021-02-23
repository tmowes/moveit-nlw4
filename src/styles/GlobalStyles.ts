import { shade, tint } from 'polished';
import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme: { colors } }) => css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
    height: 100%;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.background};
    color: ${colors.white};
  }
  body,
  #__next {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
  }
  #__next {
    height: 100%;
  }
  body,
  input,
  textarea,
  button {
    font: 400 1.6rem 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.48;
    border: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }
  a {
    text-decoration: none;
    background: none;
    font-weight: 500;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
    color: inherit;
    color: ${colors.orange};
    :hover {
      color: ${tint(0.16, colors.orange)};
      text-decoration: underline;
    }
    :active {
      color: ${shade(0.16, colors.orange)};
      text-decoration: underline;
    }
  }
  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`}
`;
