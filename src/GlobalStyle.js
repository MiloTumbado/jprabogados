import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.slate};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.lightestSlate};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: 600;
  }

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.default};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.goldTint};
    }
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
