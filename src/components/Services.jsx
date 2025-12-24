import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.heading};
`;

const SectionIntro = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.slate};
  max-width: 800px;
  margin: 0 auto 50px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  padding: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  height: 100%;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  padding-bottom: 10px;
`;

const CategoryDesc = styled.p`
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 20px;
  min-height: 60px;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  color: ${({ theme }) => theme.colors.slate};
  margin-bottom: 15px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Services = () => {
    return (
        <Section id="servicios">
            <SectionTitle>Áreas de Práctica</SectionTitle>
            <SectionIntro>
                Asesoramos a empresas nacionales e internacionales con negocios en México, ofreciendo servicio legal integral.
            </SectionIntro>

            <CategoryGrid>
                <CategoryCard>
                    <CategoryTitle>Área Estratégica y Preventiva (Consultoría)</CategoryTitle>
                    <CategoryDesc>
                        Desde medidas preventivas para evitar litigios hasta planeación estratégica con sindicatos y contratación. Implementación de políticas internas y códigos de conducta.
                    </CategoryDesc>
                    <ServiceList>
                        <ServiceItem>Negociación de contratos colectivos</ServiceItem>
                        <ServiceItem>Contratación de expatriados</ServiceItem>
                        <ServiceItem>Planes de compensación</ServiceItem>
                        <ServiceItem>Terminación de relaciones laborales</ServiceItem>
                        <ServiceItem>Transferencia de personal (reestructuración)</ServiceItem>
                        <ServiceItem>Convenios de confidencialidad</ServiceItem>
                        <ServiceItem>Programas de capacitación</ServiceItem>
                        <ServiceItem>PTU</ServiceItem>
                        <ServiceItem>Inspecciones de la STPS</ServiceItem>
                    </ServiceList>
                </CategoryCard>

                <CategoryCard>
                    <CategoryTitle>Área Reactiva (Litigio Laboral)</CategoryTitle>
                    <CategoryDesc>
                        Representación de empleadores ante Juntas de Conciliación y Arbitraje y tribunales locales/federales.
                    </CategoryDesc>
                    <ServiceList>
                        <ServiceItem>Litigios de cualquier complejidad</ServiceItem>
                        <ServiceItem>Defensa estratégica en demandas (incluso de expatriados)</ServiceItem>
                        <ServiceItem>Defensa en asuntos colectivos</ServiceItem>
                    </ServiceList>
                </CategoryCard>
            </CategoryGrid>
        </Section>
    );
};

export default Services;