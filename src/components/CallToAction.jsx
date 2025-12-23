import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTAContainer = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xxl}`};
  background-color: ${({ theme }) => theme.colors.navy};
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors['lightest-slate']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.navy};
  }
`;

const CallToAction = () => {
  return (
    <CTAContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        ¿Listo para dar el siguiente paso?
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        Contáctenos hoy para una consulta.
      </Subtitle>
      <CTAButton
        to="/contacto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ir a Contacto
      </CTAButton>
    </CTAContainer>
  );
};

export default CallToAction;
