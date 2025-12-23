import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
`;

const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.navy};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors['light-slate']};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.navy};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const Textarea = styled.textarea`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors['light-slate']};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.navy};
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const SubmitButton = styled(motion.button)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gold};
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando...');

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Error al enviar el mensaje. Inténtelo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error al enviar el mensaje. Inténtelo de nuevo.');
    }
  };

  return (
    <SectionContainer id="contacto">
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Formulario de Contacto
      </Title>
      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <Input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
        <Input type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
        <Textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required />
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar Mensaje
        </SubmitButton>
        {status && <p>{status}</p>}
      </Form>
    </SectionContainer>
  );
};

export default Contacto;
