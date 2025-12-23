import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import QuienesSomosImage from '../assets/quienes-somos-image.jpg';

const SectionContainer = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xxl}`};
  background-color: #FFFFFF;
  min-height: 80vh;
`;

const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.navy};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  max-w: 1200px;
  margin: 0 auto;
`;

const TextContent = styled(motion.div)`
  text-align: justify;
`;

const ImageContent = styled(motion.div)`
  width: 100%;
  height: 400px;
  background-image: url(${QuienesSomosImage});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.slate};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StyledListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.slate};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const QuienesSomosPage = () => {
  return (
    <SectionContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Quiénes Somos
      </Title>
      <ContentGrid>
        <TextContent
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <Text>
            Está compuesta por abogados que tienen amplia experiencia trabajando como asesores laborales externos en bufetes de abogados de reconocido prestigio internacional y han desempeñado posiciones como abogados internos de Relaciones Laborales en las áreas Jurídica y de Recursos Humanos en importantes compañías multinacionales.
          </Text>
          <Text>
            El despacho provee servicios legales en temas laborales a sus clientes de manera personalizada:
          </Text>
          <StyledList>
            <StyledListItem>Constituyéndose sus abogados en asesores y socios de negocios en sus actividades del día a día;</StyledListItem>
            <StyledListItem>Brindando soluciones a la medida según las necesidades específicas de cada caso;</StyledListItem>
            <StyledListItem>Un alto grado de análisis para sus asuntos y;</StyledListItem>
            <StyledListItem>Orientados a resultados.</StyledListItem>
          </StyledList>
        </TextContent>
        <ImageContent
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        />
      </ContentGrid>
    </SectionContainer>
  );
};

export default QuienesSomosPage;
