import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  padding: 12px 24px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold}20; // 20% opacity
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SectionTitle = styled(motion.h2)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
