import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png'; // Updated import

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.navy};
`;

const ImgLogo = styled.img`
  height: 50px; /* Adjust height as needed */
  width: auto;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8rem;
  font-weight: 700;
`;

const Logo = () => {
  return (
    <LogoContainer to="/">
      <ImgLogo src={logoImage} alt="JPR Abogados Logo" />
      <LogoText>JPR Abogados</LogoText>
    </LogoContainer>
  );
};

export default Logo;
