import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xxl}`};
  background-color: ${({ theme }) => theme.colors.offWhite};
  min-height: 80vh;
`;

const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.navy};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Content = styled(motion.div)`
  max-w: 800px;
  margin: 0 auto;
  text-align: justify;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.slate};
`;

const FilosofiaPage = () => {
  return (
    <SectionContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Filosofía de Nuestra Firma
      </Title>
      <Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <Text>
          Su filosofía se basa en la importancia de entablar una relación próxima y de cercana colaboración con todos sus clientes a través de una comunicación sólida y transparente para desarrollar e implementar estrategias de trabajo destinadas a optimizar sus recursos humanos y materiales y en consecuencia, lograr la genuina integración entre sus clientes y el equipo de abogados, a fin de profundizar al máximo en sus intereses e inquietudes.
        </Text>
      </Content>
    </SectionContainer>
  );
};

export default FilosofiaPage;
