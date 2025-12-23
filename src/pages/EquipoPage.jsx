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
  max-w: 960px;
  margin: 0 auto;
`;

const MemberCard = styled.div`
  background-color: #FFFFFF;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const MemberName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const MemberBio = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.slate};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ClientsSection = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const ClientsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const EquipoPage = () => {
  return (
    <SectionContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Nuestro Equipo
      </Title>
      <Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <MemberCard>
          <MemberName>Nuestro Director Lic. Jorge Luis Pérez Rodriguez</MemberName>
          <MemberBio>
            Abogado especialista en Derecho Laboral con 17 años de experiencia y liderazgo en esta materia. Abogado Senior y Coordinador de Litigio en firmas con presencia internacional periodo en el cual se ha consolidado como litigante. Entre sus actividades y especialidades se encuentra: Ser el responsable de diversos litigios individuales y colectivos en materia laboral de alto riesgo y contingencia; negociaciones colectivas frente a Confederaciones y Sindicatos en la República Mexicana; experiencia en litigios y consultoría laboral para empresas de diversas ramas; rescisiones de trabajo complejas de altos ejecutivos, gerencia media y en general de empleados; litigio ante Tribunales de Circuito.
          </MemberBio>
        </MemberCard>

        <MemberCard>
          <MemberName>Nuestros Asociados</MemberName>
          <MemberBio>
            Contamos con un amplio equipo de profesionistas ubicados en distintas entidades de la Republica Mexicana, con amplia experiencia en Derecho Laboral vigente.
          </MemberBio>
        </MemberCard>

        <ClientsSection>
          <ClientsTitle>Nuestros Clientes</ClientsTitle>
          {/* Aquí se puede añadir la imagen de los clientes */}
        </ClientsSection>
      </Content>
    </SectionContainer>
  );
};

export default EquipoPage;
