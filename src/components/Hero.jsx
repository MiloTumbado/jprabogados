import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroBackground from '../assets/hero-background.jpg';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.xxl};
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HeroBackground});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  z-index: 1;
`;

const Subtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors['lightest-slate']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  z-index: 1;
`;

const CTAButton = styled(motion(Link))`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gold};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.navy};
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Excelencia y Compromiso en Asesoría Legal
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        Soluciones jurídicas a la medida de sus necesidades.
      </Subtitle>
      <CTAButton
        to="/contacto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contáctenos
      </CTAButton>
    </HeroContainer>
  );
};

export default Hero;
