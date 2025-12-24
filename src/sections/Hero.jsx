import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '../components/UI';
import heroBg from '../assets/hero-background.jpg'; // We assume this exists based on initial file listing

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    rgba(10, 25, 47, 0.85),
    rgba(10, 25, 47, 0.7)
  ), url(${heroBg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
  padding: 0 20px;
`;

const Content = styled.div`
  max-width: 900px;
  z-index: 1;
`;

const PreTitle = styled(motion.p)`
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  letter-spacing: 2px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
`;

const MainTitle = styled(motion.h1)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Subtitle = styled(motion.p)`
  color: ${({ theme }) => theme.colors.lightSlate};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Content>
        <PreTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Firma Legal Boutique
        </PreTitle>
        <MainTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          JPR Abogados
        </MainTitle>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Especializada en materia laboral y seguridad social.
          <br />
          Compromiso, Excelencia y Resultados.
        </Subtitle>
        <Button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          as="a"
          href="#contact"
        >
          Contáctanos
        </Button>
      </Content>
    </HeroSection>
  );
};

export default Hero;
