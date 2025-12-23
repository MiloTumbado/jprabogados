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

const Content = styled(motion.div)`
  max-w: 960px;
  margin: 0 auto;
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.navy};
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.slate};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ServiceList = styled.ul`
  list-style-type: disc;
  padding-left: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ServiceListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.slate};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

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
      <Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <Subtitle>Áreas de Práctica</Subtitle>
        <Text>Consultoría Laboral y Litigio Laboral. En estas áreas de especialización asesoramos a empresas nacionales e internacionales con negocios en México, ofreciéndoles un servicio legal integral en materia laboral.</Text>

        <Subtitle>Área Estratégica y Preventiva</Subtitle>
        <Text>Desde medidas preventivas para ayudar a evitar litigios, hasta planeación estratégica sobre negociación con sindicatos, así como en la contratación de empleados en México. Asesoramos a los empleadores en la implementación y aplicación de políticas laborales internas, códigos de conducta, procedimientos de Recursos Humanos y regulaciones de carácter laboral.</Text>

        <Subtitle>Servicios de Consultoría, entre otros:</Subtitle>
        <ServiceList>
          <ServiceListItem>Negociación de contratos colectivos de trabajo;</ServiceListItem>
          <ServiceListItem>Asesoría en la contratación de expatriados trabajando en México y personal mexicano asignado en el extranjero para prestar servicios;</ServiceListItem>
          <ServiceListItem>Diseño e implementación de planes de compensación;</ServiceListItem>
          <ServiceListItem>Terminación de relaciones laborales;</ServiceListItem>
          <ServiceListItem>Estrategias relacionadas con la transferencia de personal durante procesos de reestructuración corporativa;</ServiceListItem>
          <ServiceListItem>Convenios de confidencialidad y no competencia;</ServiceListItem>
          <ServiceListItem>Redacción y registro de programas de capacitación y adiestramiento;</ServiceListItem>
          <ServiceListItem>Talleres y cursos de capacitación sobre aspectos laborales y desarrollo de habilidades laborales dirigido a líderes de las organizaciones, dependiendo de las necesidades del cliente;</ServiceListItem>
          <ServiceListItem>Asesoría en material de participación de los trabajadores en las utilidades de las empresas y;</ServiceListItem>
          <ServiceListItem>Asistencia en las inspecciones llevadas a cabo por la Secretaría del Trabajo y Previsión Social.</ServiceListItem>
        </ServiceList>

        <Subtitle>Litigios Laborales - Área Reactiva</Subtitle>
        <Text>JPR ABOGADOS representa empleadores y provee los siguientes servicios:</Text>
        <ServiceList>
          <ServiceListItem>Litigios sea cual sea su complejidad en cualquiera de sus instancias, ante las Juntas de Conciliación y Arbitraje, así como frente los tribunales locales y federales;</ServiceListItem>
          <ServiceListItem>Defensa estratégica en demandas laborales entabladas incluso por expatriados y;</ServiceListItem>
          <ServiceListItem>Defensa estratégica en asuntos colectivos.</ServiceListItem>
        </ServiceList>
      </Content>
    </SectionContainer>
  );
};

export default ServiciosPage;
