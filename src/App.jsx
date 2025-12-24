import React from 'react';
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
`;

const Logo = styled.img`
  height: 45px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: none; /* Aquí podrías implementar un menú hamburguesa */
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <PageContainer>
          <Header>
            <Link to="/">
              <Logo src={logo} alt="JPR Abogados" />
            </Link>
            <Nav>
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/quienes-somos">La Firma</NavLink>
              <NavLink to="/servicios">Servicios</NavLink>
              <NavLink to="/equipo">Nuestro Equipo</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
            </Nav>
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