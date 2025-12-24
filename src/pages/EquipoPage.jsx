import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import EquipoBackground from '../assets/equipo-background.jpg';

const SectionContainer = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xxl}`};
  background: linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${EquipoBackground});
  background-size: cover;
  background-position: center;
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
  max-w: 1200px;
  margin: 0 auto;
`;

const MemberCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-left: 4px solid ${({ theme }) => theme.colors.gold};
`;

const MemberInfo = styled.div``;

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
`;

const ClientsSection = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const ClientsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.gold};
    margin: 10px auto 0;
  }
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ClientCard = styled(motion.div)`
  background-color: #FFFFFF;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  border: 1px solid rgba(0,0,0,0.03);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const ClientMonogram = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.gold};
`;

const ClientName = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const clientList = [
  { name: "Grupo Ordás", monogram: "GO" },
  { name: "AARCO", monogram: "AA" },
  { name: "Landum", monogram: "LA" },
  { name: "Fianzas Dorama", monogram: "FD" },
  { name: "Team Foods", monogram: "TF" },
  { name: "Best Recursos Humanos", monogram: "BR" },
  { name: "Citelis", monogram: "CI" },
  { name: "Concentra Holdings", monogram: "CH" },
  { name: "Xignux", monogram: "XI" },
  { name: "Sofimex", monogram: "SX" },
  { name: "Quarry Jeans", monogram: "QJ" },
  { name: "Farmacias Benavides", monogram: "FB" },
  { name: "Premium Restaurant Brands", monogram: "PR" },
  { name: "Qualtia Alimentos", monogram: "QA" },
  { name: "Viakable", monogram: "VK" },
  { name: "CIDAC", monogram: "CD" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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
      <Content>
        <MemberCard>
          <MemberInfo>
            <MemberName>Lic. Jorge Luis Pérez Rodriguez</MemberName>
            <MemberBio>
              Director y abogado especialista en Derecho Laboral con 17 años de experiencia y liderazgo en la materia.
              Ha fungido como Abogado Senior y Coordinador de Litigio en firmas de presencia internacional.
              Especialista en litigios individuales y colectivos de alto riesgo, negociaciones sindicales y
              consultoría estratégica para empresas multinacionales.
            </MemberBio>
          </MemberInfo>
        </MemberCard>

        <MemberCard>
          <MemberInfo>
            <MemberName>Nuestros Asociados</MemberName>
            <MemberBio>
              Contamos con un amplio equipo de profesionistas ubicados en distintas entidades de la República Mexicana,
              con amplia experiencia y actualización constante en el Derecho Laboral vigente, listos para brindar
              soluciones integrales en cualquier jurisdicción del país.
            </MemberBio>
          </MemberInfo>
        </MemberCard>

        <ClientsSection>
          <ClientsTitle>Nuestros Clientes</ClientsTitle>
          <ClientsGrid as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {clientList.map((client, index) => (
              <ClientCard key={index} variants={itemVariants}>
                <ClientMonogram>{client.monogram}</ClientMonogram>
                <ClientName>{client.name}</ClientName>
              </ClientCard>
            ))}
          </ClientsGrid>
        </ClientsSection>
      </Content>
    </SectionContainer>
  );
};

export default EquipoPage;
