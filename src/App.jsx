import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import logo from './assets/logo.png';

// Placeholder Components (until fully implemented)
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.navy};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightNavy};
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.slate};
  background-color: ${({ theme }) => theme.colors.lightNavy};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const Home = () => (
  <Main>
    <h1>JPR Abogados</h1>
    <p>Compromiso, Excelencia y Resultados.</p>
  </Main>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <PageContainer>
          <Header>
            <Logo src={logo} alt="JPR Abogados Logo" />
            <Nav>
              <NavLink href="/">Inicio</NavLink>
              <NavLink href="#">Firma</NavLink>
              <NavLink href="#">Servicios</NavLink>
              <NavLink href="#">Contacto</NavLink>
            </Nav>
          </Header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer>
            &copy; {new Date().getFullYear()} JPR Abogados. Todos los derechos reservados.
          </Footer>
        </PageContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
