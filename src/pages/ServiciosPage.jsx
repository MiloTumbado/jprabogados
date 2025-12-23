import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-w: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Icon = styled.div`
  margin-right: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.gold};
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.navy};
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ServiceListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.slate};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.md};

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.gold};
    position: absolute;
    left: 0;
  }
`;

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const GavelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.23 19.33l-1.46-1.46a1 1 0 0 1 0-1.41l5.66-5.66a1 1 0 0 1 1.41 0l1.46 1.46a1 1 0 0 1 0 1.41l-5.66 5.66a1 1 0 0 1-1.41 0z"></path><path d="M4 20l5-5"></path><path d="M16 11l-3 3"></path></svg>
);

const ServiciosPage = () => {
  return (
    <SectionContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Nuestros Servicios
      </Title>
      <ServicesGrid>
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <CardTitleWrapper>
            <Icon><BriefcaseIcon /></Icon>
            <CardTitle>Consultoría y Área Preventiva</CardTitle>
          </CardTitleWrapper>
          <ServiceList>
            <ServiceListItem>Negociación de contratos colectivos.</ServiceListItem>
            <ServiceListItem>Contratación de expatriados y personal en el extranjero.</ServiceListItem>
            <ServiceListItem>Diseño de planes de compensación.</ServiceListItem>
            <ServiceListItem>Terminación de relaciones laborales.</ServiceListItem>
            <ServiceListItem>Estrategias en reestructuraciones corporativas.</ServiceListItem>
            <ServiceListItem>Convenios de confidencialidad y no competencia.</ServiceListItem>
            <ServiceListItem>Programas de capacitación y adiestramiento.</ServiceListItem>
            <ServiceListItem>Capacitación a líderes sobre aspectos laborales.</ServiceListItem>
            <ServiceListItem>Asesoría en participación de utilidades (PTU).</ServiceListItem>
            <ServiceListItem>Asistencia en inspecciones de la STPS.</ServiceListItem>
          </ServiceList>
        </ServiceCard>
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <CardTitleWrapper>
            <Icon><GavelIcon /></Icon>
            <CardTitle>Litigios Laborales</CardTitle>
          </CardTitleWrapper>
          <ServiceList>
            <ServiceListItem>Representación en litigios de cualquier complejidad.</ServiceListItem>
            <ServiceListItem>Atención ante Juntas de Conciliación y Arbitraje.</ServiceListItem>
            <ServiceListItem>Defensa ante tribunales locales y federales.</ServiceListItem>
            <ServiceListItem>Defensa estratégica en demandas de expatriados.</ServiceListItem>
            <ServiceListItem>Manejo de asuntos colectivos y sindicales.</ServiceListItem>
          </ServiceList>
        </ServiceCard>
      </ServicesGrid>
    </SectionContainer>
  );
};

export default ServiciosPage;
