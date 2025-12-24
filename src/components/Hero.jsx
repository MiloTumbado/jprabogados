import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-background.jpg';
import heroMobileBg from '../assets/hero-mobile.png';

const HeroSection = styled.section`
  height: 90vh;
  background-image: linear-gradient(
    rgba(5, 5, 5, 0.85), 
    rgba(5, 5, 5, 0.7)
  ), url(${heroBg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  
  /* Mobile adjustments */
  @media (max-width: 768px) {
    min-height: 100dvh;
    background-image: linear-gradient(
      rgba(5, 5, 5, 0.85), 
      rgba(5, 5, 5, 0.7)
    ), url(${heroMobileBg});
    background-size: cover;
    background-position: center;
    padding: 0 15px;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.display};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Smaller font on mobile */
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightestSlate};
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
  }
`;

const CTAButton = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  padding: 12px 30px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border-radius: 4px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldTint};
    color: ${({ theme }) => theme.colors.navy};
    border-color: ${({ theme }) => theme.colors.goldTint};
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Title>JPR ABOGADOS</Title>
      <Subtitle>
        Firma legal boutique especializada en soluciones estratégicas de Derecho Laboral y Seguridad Social.
      </Subtitle>
      <CTAButton to="/contacto">Contáctanos</CTAButton>
    </HeroSection>
  );
};

export default Hero;