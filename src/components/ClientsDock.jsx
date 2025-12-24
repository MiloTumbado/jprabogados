import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import aarcoLogo from '../assets/clients/aarco.png';
import alpinoLogo from '../assets/clients/alpino.png';
import bestLogo from '../assets/clients/best.png';
import dubyLogo from '../assets/clients/duby.png';
import benavidesLogo from '../assets/clients/benavides.png';
import sofimexLogo from '../assets/clients/sofimex.png';
import kirLogo from '../assets/clients/kir.png';
import kfcLogo from '../assets/clients/kfc.png';
import concentraLogo from '../assets/clients/concentra.png';
import caperucitaLogo from '../assets/clients/caperucita.png';
import citelisLogo from '../assets/clients/citelis.png';
import cidacLogo from '../assets/clients/cidac.png';
import doramaLogo from '../assets/clients/dorama.png';
import pizzahutLogo from '../assets/clients/pizzahut.png';

const clientLogos = [
    aarcoLogo,
    alpinoLogo,
    bestLogo,
    dubyLogo,
    benavidesLogo,
    sofimexLogo,
    kirLogo,
    kfcLogo,
    concentraLogo,
    caperucitaLogo,
    citelisLogo,
    cidacLogo,
    doramaLogo,
    pizzahutLogo,
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  height: 160px;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  width: fit-content;
  max-width: 95vw; /* Ensure it doesn't overflow horizontally */
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  overflow-x: auto; /* Allow scroll if screen is too small */
  overflow-y: hidden;
  
  /* Hide scrollbar for cleaner look */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileGrid = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 20px;
    margin-top: 30px;
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MobileItem = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  
  &:active {
    transform: scale(0.95);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DockItem = ({ src, mouseX }) => {
    const ref = useRef(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // Adjusted widths to fit more items: base width 50, magnified to 100
    const widthSync = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{
                width,
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
            className="dock-item"
        >
            <img
                src={src}
                alt="Client Logo"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </motion.div>
    );
};

const ClientsDock = () => {
    const mouseX = useMotionValue(Infinity);

    return (
        <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#C5A059', marginBottom: '30px' }}>Nuestros Clientes</h3>

            {/* Desktop Dock View */}
            <Container
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
            >
                {clientLogos.map((logo, index) => (
                    <DockItem key={index} src={logo} mouseX={mouseX} />
                ))}
            </Container>

            {/* Mobile Grid View */}
            <MobileGrid>
                {clientLogos.map((logo, index) => (
                    <MobileItem key={index}>
                        <img src={logo} alt={`Client ${index + 1}`} />
                    </MobileItem>
                ))}
            </MobileGrid>
        </div>
    );
};

export default ClientsDock;
