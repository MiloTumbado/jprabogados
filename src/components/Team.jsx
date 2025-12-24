import React from 'react';
import styled from 'styled-components';
import ClientsDock from './ClientsDock';

const Section = styled.section`
  padding: 100px 50px;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.lightestSlate};
  min-height: 80vh; /* Make sure it takes up space on a separate page */
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gold};
    margin: 10px auto 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 50px;
`;

const MemberCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightNavy};
  padding: 30px;
  border-radius: 4px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #333; /* Placeholder for image */
  border-radius: 50%;
  margin: 0 auto 20px;
  border: 4px solid ${({ theme }) => theme.colors.gold};
`;

const MemberName = styled.h3`
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const MemberRole = styled.p`
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: italic;
  margin-bottom: 15px;
`;

const MemberBio = styled.p`
  color: ${({ theme }) => theme.colors.slate};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

const Team = () => {
  return (
    <Section id="equipo">
      <Container>
        <Title>Nuestro Equipo</Title>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          Contamos con un equipo de profesionales altamente calificados y comprometidos con la excelencia y la defensa de sus intereses.
        </p>
        <TeamGrid>
          <MemberCard>
            {/* <MemberImage /> Removed as per client request */}
            <MemberName>Lic. Jorge Luis Pérez Rodriguez</MemberName>
            <MemberRole>Director</MemberRole>
            <MemberBio>
              Especialista en Derecho Laboral con 17 años de experiencia. Ex-Coordinador de Litigio en firmas internacionales. Experto en litigios de alto riesgo, negociaciones colectivas y rescisiones complejas.
            </MemberBio>
          </MemberCard>

          <MemberCard>
            <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '50px', color: '#C5A059' }}>⚖️</span>
            </div>
            <MemberName>Asociados</MemberName>
            <MemberRole>Equipo Legal</MemberRole>
            <MemberBio>
              Equipo de profesionistas ubicados en distintas entidades de la República Mexicana con amplia experiencia.
            </MemberBio>
          </MemberCard>
        </TeamGrid>

        <div style={{ marginTop: '100px' }}>
          <ClientsDock />
        </div>
      </Container>
    </Section>
  );
};

export default Team;
