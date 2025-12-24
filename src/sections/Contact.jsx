import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle, Button } from '../components/UI';

const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightNavy};
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.lightSlate};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Input = styled.input`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.navy};
  border: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.primary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.navy};
  border: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const StatusMessage = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  background-color: ${({ type, theme }) =>
    type === 'success' ? 'rgba(75, 181, 67, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
  color: ${({ type, theme }) =>
    type === 'success' ? '#4bb543' : '#ff0000'};
  border: 1px solid ${({ type }) =>
    type === 'success' ? '#4bb543' : '#ff0000'};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'idle', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/.netlify/functions/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <ContactSection id="contact">
      <SectionTitle>Contáctanos</SectionTitle>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Mensaje</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <Button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '100%', marginTop: '16px' }}
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>

          {status === 'success' && (
            <StatusMessage type="success">
              Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.
            </StatusMessage>
          )}
          {status === 'error' && (
            <StatusMessage type="error">
              Hubo un error al enviar el mensaje. Por favor intenta de nuevo.
            </StatusMessage>
          )}
        </Form>
        <div style={{marginTop: '40px', textAlign: 'center', color: '#8892b0'}}>
            <p>Carlos L. Gonzalez 148, Col. Industrias del Vidrio, Monterrey, N.L.</p>
            <a href="mailto:contacto@jprabogados.mx">contacto@jprabogados.mx</a>
        </div>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;
