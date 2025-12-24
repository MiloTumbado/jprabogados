import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/UI';

const PhilosophyContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.navy};
  text-align: center;
`;

const Quote = styled(motion.blockquote)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-style: italic;
  color: ${({ theme }) => theme.colors.lightestSlate};
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;

  &::before, &::after {
    content: '"';
    font-size: 60px;
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.3;
    position: absolute;
  }

  &::before {
    top: -20px;
    left: -20px;
  }

  &::after {
    bottom: -40px;
    right: -20px;
  }
`;

const Philosophy = () => {
  return (
    <PhilosophyContainer id="philosophy">
      <SectionTitle>Filosofía</SectionTitle>
      <Quote
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Su filosofía se basa en la importancia de entablar una relación próxima y de cercana colaboración con todos sus clientes a través de una comunicación sólida y transparente para desarrollar e implementar estrategias de trabajo destinadas a optimizar sus recursos humanos y materiales.
      </Quote>
    </PhilosophyContainer>
  );
};

export default Philosophy;
