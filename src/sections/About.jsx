import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/UI';

const AboutContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.navy};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const TextContent = styled(motion.div)``;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.gold};
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <ContentGrid>
        <TextContent
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Quiénes Somos</SectionTitle>
          <p>
            <Highlight>JPR Abogados</Highlight> está concebido como una firma legal boutique de nueva creación especializada en materia laboral y seguridad social.
          </p>
          <p>
            Está compuesta por abogados que tienen amplia experiencia trabajando como asesores laborales externos en bufetes de abogados de reconocido prestigio internacional y han desempeñado posiciones como abogados internos de Relaciones Laborales en las áreas Jurídica y de Recursos Humanos en importantes compañías multinacionales.
          </p>
        </TextContent>
        {/* If we had an image, we would put it here. For now, maybe a decorative element or keep it text focused as requested "Clean" */}
      </ContentGrid>
    </AboutContainer>
  );
};

export default About;
