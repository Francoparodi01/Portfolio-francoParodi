import React from 'react';
import styled from 'styled-components';
import fotoCv from '../assets/fotoPortfolio.png';
import ContactLogo from './ContactLogo';

// Styled Components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0; /* Color de fondo suave */
`;

const IntroductionText = styled.h3`
  font-size: 1.8rem;
  color: #00339b;
  margin-bottom: 20px;
  span.name-int {
    color: #ff5733; /* Color diferente para el nombre */
  }
  span.hand-emoji {
    font-size: 2rem;
  }
`;

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #00339b; /* Borde de la imagen */
`;

const Introduction = ({ isVisible }) => {
  return (
    <Section>
      <IntroductionText>
        ¡Hola! <span className="hand-emoji" role="img" aria-label="Saludo">🖐</span><br />
        soy <span className='name-int'>Franco</span>, <br />
        Jr. fullstack developer
      </IntroductionText>
      <ImageContainer>
        <Image src={fotoCv} alt='Foto de Franco Parodi' />
      </ImageContainer>
      <ContactLogo />
    </Section>
  );
};

export default Introduction;
