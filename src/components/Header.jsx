import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink as RouterNavLink } from 'react-router-dom';
import Logo from './Logo';

const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  background-color: ${({ theme }) => theme.colors.offWhite};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(RouterNavLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.slate};
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gold};
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.colors.navy};
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Logo />
      <Nav>
        <NavLink to="/quienes-somos">Quiénes somos</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/filosofia">Filosofía</NavLink>
        <NavLink to="/equipo">Nuestro Equipo</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
