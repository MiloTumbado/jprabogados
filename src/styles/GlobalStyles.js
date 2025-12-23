import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.offWhite};
    color: ${({ theme }) => theme.colors.slate};
    font-family: ${({ theme }) => theme.fonts.secondary};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.navy};
    font-weight: 700;
  }

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.navy};
    }
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

export default GlobalStyles;
