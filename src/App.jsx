import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import logo from './assets/logo.png';
import { motion } from 'framer-motion';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Philosophy from './sections/Philosophy';
import Contact from './sections/Contact';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightNavy};
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  display: none;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const MobileNavToggle = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gold};
  font-size: 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.slate};
  background-color: ${({ theme }) => theme.colors.navy};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border-top: 1px solid ${({ theme }) => theme.colors.lightNavy};
`;

function App() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <Header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            <Logo src={logo} alt="JPR Abogados Logo" />
          </a>
          <Nav>
            <NavLink onClick={() => scrollTo('home')}>Inicio</NavLink>
            <NavLink onClick={() => scrollTo('about')}>Firma</NavLink>
            <NavLink onClick={() => scrollTo('services')}>Servicios</NavLink>
            <NavLink onClick={() => scrollTo('philosophy')}>Filosofía</NavLink>
            <NavLink onClick={() => scrollTo('contact')}>Contacto</NavLink>
          </Nav>
          <MobileNavToggle>☰</MobileNavToggle>
        </Header>

        <main>
          <Hero />
          <About />
          <Services />
          <Philosophy />
          <Contact />
        </main>

        <Footer>
          &copy; {new Date().getFullYear()} JPR Abogados. Todos los derechos reservados.
        </Footer>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
