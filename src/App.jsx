import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import logo from './assets/logo.png';

// Importamos los componentes
import Hero from './components/Hero';
import About from './components/AboutSection';
import Services from './components/Services';
import ContactForm from './components/ContactSection';
import Team from './components/Team';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: rgba(5, 5, 5, 0.95); /* Nuevo color negro formal */
  position: fixed; /* Header fijo */
  width: 100%;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled.img`
  height: 45px;
  @media (max-width: 768px) {
    height: 35px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 102; /* Higher than header and menu */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, isOpen }) => isOpen ? theme.colors.gold : theme.colors.lightestSlate};
    transition: all 0.3s ease-in-out;
    transform-origin: 1px;

    /* Hamburger Animation Logic */
    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 101; /* Behind hamburger, above everything else */
`;

const MobileNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-transform: uppercase;
  letter-spacing: 2px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Footer = styled.footer`
  padding: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.slate};
  background-color: ${({ theme }) => theme.colors.navy};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border-top: 1px solid ${({ theme }) => theme.colors.lightNavy};
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <PageContainer>
          <Header>
            <Link to="/" onClick={closeMenu}>
              <Logo src={logo} alt="JPR Abogados" />
            </Link>

            {/* Desktop Nav */}
            <Nav>
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/quienes-somos">La Firma</NavLink>
              <NavLink to="/servicios">Servicios</NavLink>
              <NavLink to="/equipo">Nuestro Equipo</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
            </Nav>

            {/* Mobile Nav Button */}
            <HamburgerBtn isOpen={isMobileMenuOpen} onClick={toggleMenu} aria-label="Menu">
              <span />
              <span />
              <span />
            </HamburgerBtn>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={isMobileMenuOpen}>
              <MobileNavLink to="/" onClick={closeMenu}>Inicio</MobileNavLink>
              <MobileNavLink to="/quienes-somos" onClick={closeMenu}>La Firma</MobileNavLink>
              <MobileNavLink to="/servicios" onClick={closeMenu}>Servicios</MobileNavLink>
              <MobileNavLink to="/equipo" onClick={closeMenu}>Nuestro Equipo</MobileNavLink>
              <MobileNavLink to="/contacto" onClick={closeMenu}>Contacto</MobileNavLink>
            </MobileMenu>
          </Header>

          {/* Main content con padding top para compensar el header fijo */}
          <main style={{ paddingTop: '85px', flex: 1 }}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/quienes-somos" element={<About />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/equipo" element={<Team />} />
              <Route path="/contacto" element={<ContactForm />} />
            </Routes>
          </main>

          <Footer>
            <p>&copy; {new Date().getFullYear()} JPR Abogados. Todos los derechos reservados.</p>
            <p>Especialistas en Derecho Laboral y Seguridad Social</p>
          </Footer>
        </PageContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;