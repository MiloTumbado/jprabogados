import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navy};
  padding: 15px;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldTint};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSizes.heading};
`;

const StatusMessage = styled.p`
  color: ${({ theme }) => theme.colors.lightestSlate};
  text-align: center;
  margin-top: 10px;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.slate};
`;

const InfoItem = styled.div`
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 8px;
`;

const InfoText = styled.p`
  line-height: 1.6;
`;

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        e.target.reset();
      } else {
        setStatus('Hubo un error al enviar el mensaje.');
      }
    } catch (error) {
      setStatus('Error de conexión.');
    }
    setLoading(false);
  };

  return (
    <FormContainer id="contacto">
      <SectionTitle>Contáctanos</SectionTitle>

      <ContactInfo>
        <p style={{ marginBottom: '30px', fontSize: '18px' }}>
          No dudes en ponerte en contacto para asesoría.
        </p>

        <InfoItem>
          <InfoTitle>Monterrey, N.L.</InfoTitle>
          <InfoText>Carlos L. Gonzalez 148, Col. Industrias del Vidrio</InfoText>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Saltillo, Coah.</InfoTitle>
          <InfoText>Calle Profesor Apolonio M Avilés 895-3<br />Los Maestros, 25260</InfoText>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Email</InfoTitle>
          <InfoText>
            <a href="mailto:contacto@jprabogados.mx" style={{ color: 'inherit' }}>contacto@jprabogados.mx</a>
          </InfoText>
        </InfoItem>
      </ContactInfo>

      <StyledForm onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nombre completo" required />
        <Input name="email" type="email" placeholder="Correo electrónico" required />
        <Input name="phone" type="tel" placeholder="Teléfono" />
        <TextArea name="message" placeholder="¿En qué podemos ayudarte?" required />
        <Button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
        {status && <StatusMessage>{status}</StatusMessage>}
      </StyledForm>
    </FormContainer>
  );
};

export default ContactForm;