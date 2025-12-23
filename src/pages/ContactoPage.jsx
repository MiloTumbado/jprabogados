import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../components/Contacto';

const PageContainer = styled.div`
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  max-w: 1200px;
  margin: 0 auto;
  align-items: flex-start;
`;

const InfoSection = styled(motion.div)`
  text-align: left;
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.slate};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Address = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactoPage = () => {
  return (
    <PageContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Contáctanos
      </Title>
      <ContentWrapper>
        <InfoSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <Text>
            No dudes en ponerte en contacto con nosotros si necesitas asesoría o tienes dudas respecto a nuestros servicios. Asimismo, te invitamos a dejar tus comentarios y opiniones, ya que éstas son de ayudan para la mejora continua de nuestra empresa.
          </Text>
          <Subtitle>Domicilio</Subtitle>
          <Address>
            <strong>Monterrey, N.L.</strong><br />
            Carlos L. Gonzalez 148<br />
            Col. Industrias del Vidrio
          </Address>
          <Address>
            <strong>Saltillo, Coah.</strong><br />
            Calle Profesor Apolonio M Avilés 895-3<br />
            Los Maestros 25260<br />
            México
          </Address>
        </InfoSection>
        <ContactForm />
      </ContentWrapper>
    </PageContainer>
  );
};

export default ContactoPage;
