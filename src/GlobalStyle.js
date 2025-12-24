import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap');

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
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.lightestSlate};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(40px, 5vw, 64px);
    color: ${({ theme }) => theme.colors.white};
  }

  h2 {
    font-size: clamp(28px, 4vw, 42px);
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      width: 60px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.gold};
      bottom: -10px;
      left: 0;
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    max-width: 700px;
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

  section {
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 768px) {
        padding: 120px 40px;
    }
  }
`;

export default GlobalStyle;
