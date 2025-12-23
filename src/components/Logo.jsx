import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.navy};
`;

const SvgLogo = styled.svg`
  width: 40px;
  height: 40px;
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
      <SvgLogo viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#0A192F"/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#FFD700" fontSize="40" fontFamily="Playfair Display">
          JPR
        </text>
      </SvgLogo>
      <LogoText>JPR Abogados</LogoText>
    </LogoContainer>
  );
};

export default Logo;
