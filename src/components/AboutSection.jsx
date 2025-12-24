import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.navy};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: ${({ theme }) => theme.fontSizes.heading};
  margin-bottom: 40px;
  text-align: center;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.gold};
    margin: 10px auto 0;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.slate};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  margin-bottom: 40px;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
`;

const ValueCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightNavy};
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-3px);
  }
`;

const ValueTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0;
`;

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  margin-bottom: 20px;
  text-align: center;
`;

const About = () => {
  return (
    <Section id="firma">
      <Container>
        <SectionTitle>Quiénes Somos</SectionTitle>
        <Text>
          JPR Abogados está concebido como una firma legal boutique de nueva creación. Está compuesta por abogados que tienen amplia experiencia trabajando como asesores laborales externos en bufetes de abogados de reconocido prestigio internacional y han desempeñado posiciones como abogados internos de Relaciones Laborales en las áreas Jurídica y de Recursos Humanos en importantes compañías multinacionales.
        </Text>

        <SubTitle>Propuesta de Valor</SubTitle>
        <ValueGrid>
          <ValueCard>
            <ValueTitle>Socios de negocios</ValueTitle>
          </ValueCard>
          <ValueCard>
            <ValueTitle>Soluciones a la medida</ValueTitle>
          </ValueCard>
          <ValueCard>
            <ValueTitle>Alto grado de análisis</ValueTitle>
          </ValueCard>
          <ValueCard>
            <ValueTitle>Orientados a resultados</ValueTitle>
          </ValueCard>
        </ValueGrid>

        <SectionTitle>Filosofía</SectionTitle>
        <Text centered>
          Nuestra filosofía se basa en entablar una relación próxima y de cercana colaboración con todos los clientes a través de una comunicación sólida y transparente. Desarrollamos e implementamos estrategias destinadas a optimizar recursos humanos y materiales, logrando una genuina integración para profundizar al máximo en sus intereses e inquietudes.
        </Text>
      </Container>
    </Section>
  );
};

export default About;