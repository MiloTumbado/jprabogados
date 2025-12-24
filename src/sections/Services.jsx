import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/UI';

const ServicesContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.lightNavy};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.navy};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 4px;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardText = styled.div`
  color: ${({ theme }) => theme.colors.slate};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      margin-bottom: 8px;
      position: relative;
      padding-left: 20px;

      &::before {
        content: '•';
        color: ${({ theme }) => theme.colors.gold};
        position: absolute;
        left: 0;
      }
    }
  }
`;

const IntroText = styled.p`
    max-width: 800px;
    margin-bottom: 40px;
`;

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ServicesContainer id="services">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Servicios
      </SectionTitle>

      <IntroText>
        El despacho provee servicios legales en temas laborales a sus clientes de manera personalizada,
        constituyéndose como socios de negocios y brindando soluciones a la medida.
      </IntroText>

      <Grid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Card variants={itemVariants}>
          <CardTitle>Consultoría Laboral</CardTitle>
          <CardText>
            <ul>
                <li>Diseño e implementación de planes de compensación.</li>
                <li>Terminación de relaciones laborales.</li>
                <li>Estrategias de transferencia de personal.</li>
                <li>Convenios de confidencialidad y no competencia.</li>
                <li>Programas de capacitación y adiestramiento.</li>
            </ul>
          </CardText>
        </Card>

        <Card variants={itemVariants}>
            <CardTitle>Litigio Laboral</CardTitle>
            <CardText>
                <ul>
                    <li>Defensa en juicios ante Juntas de Conciliación y Arbitraje.</li>
                    <li>Tribunales locales y federales.</li>
                    <li>Defensa estratégica en asuntos individuales y colectivos.</li>
                </ul>
            </CardText>
        </Card>

        <Card variants={itemVariants}>
          <CardTitle>Área Estratégica</CardTitle>
          <CardText>
            <p>
              Medidas preventivas para evitar litigios, planeación estratégica sobre negociación con sindicatos,
              así como en la contratación de empleados en México.
            </p>
          </CardText>
        </Card>

         <Card variants={itemVariants}>
          <CardTitle>Cumplimiento Normativo</CardTitle>
          <CardText>
            <p>
                Asesoría en PTU (Participación de los Trabajadores en las Utilidades).
                Asistencia en inspecciones de la STPS (Secretaría del Trabajo).
            </p>
          </CardText>
        </Card>
      </Grid>
    </ServicesContainer>
  );
};

export default Services;
