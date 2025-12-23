import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import EquipoBackground from '../assets/equipo-background.jpg';

const SectionContainer = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xxl}`};
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${EquipoBackground});
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
  max-w: 960px;
  margin: 0 auto;
`;

const MemberCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ProfilePlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors['light-slate']};
  margin-right: ${({ theme }) => theme.spacing.lg};
  flex-shrink: 0;
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
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const ClientsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  filter: grayscale(100%);
  opacity: 0.6;
`;

const ClientLogoPlaceholder = styled.div`
  width: 100px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors['light-slate']};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.slate};
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
          <ProfilePlaceholder />
          <MemberInfo>
            <MemberName>Lic. Jorge Luis Pérez Rodriguez</MemberName>
            <MemberBio>
              Director y abogado especialista en Derecho Laboral con 17 años de experiencia y liderazgo en la materia.
            </MemberBio>
          </MemberInfo>
        </MemberCard>

        <MemberCard>
          <ProfilePlaceholder />
          <MemberInfo>
            <MemberName>Nuestros Asociados</MemberName>
            <MemberBio>
              Contamos con un amplio equipo de profesionistas en distintas entidades de la República Mexicana, con amplia experiencia en Derecho Laboral.
            </MemberBio>
          </MemberInfo>
        </MemberCard>

        <ClientsSection>
          <ClientsTitle>Nuestros Clientes</ClientsTitle>
          <LogosContainer>
            <ClientLogoPlaceholder>Cliente 1</ClientLogoPlaceholder>
            <ClientLogoPlaceholder>Cliente 2</ClientLogoPlaceholder>
            <ClientLogoPlaceholder>Cliente 3</ClientLogoPlaceholder>
            <ClientLogoPlaceholder>Cliente 4</ClientLogoPlaceholder>
          </LogosContainer>
        </ClientsSection>
      </Content>
    </SectionContainer>
  );
};

export default EquipoPage;
