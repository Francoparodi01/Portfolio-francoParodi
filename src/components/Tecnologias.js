import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import reactPng from '../assets/react.png';
import js from '../assets/js.png';
import next from '../assets/next.png';
import mongodb from '../assets/mongodb.png';
import prisma from '../assets/prisma.png';
import sql from '../assets/sql.png';
import postgre from '../assets/postgre-logo.png';
import ts from '../assets/typescript.png';

// Estilos usando styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  padding: 0 10px; /* Añadido padding para evitar que el contenido toque los bordes en pantallas pequeñas */
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #00339b; /* Color principal */
  font-weight: bold;
  text-align: center; /* Alineación centrada para pantallas más pequeñas */
  
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reducido para pantallas más pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Aún más pequeño para pantallas muy pequeñas */
  }
`;

const TechnologySlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

const TechImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 100px; /* Reducido para pantallas más pequeñas */
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px; /* Aún más pequeño para pantallas muy pequeñas */
    height: 80px;
  }
`;

const TechName = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem; /* Reducido para pantallas más pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Aún más pequeño para pantallas muy pequeñas */
  }
`;

const Tecnologias = () => {
  // Configuración del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, // Puedes habilitar esto si necesitas flechas de navegación
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Title>Tecnologías Principales</Title>
      <Slider {...sliderSettings}>
        <TechnologySlide>
          <TechImage src={js} alt='JavaScript' />
          <TechName>JavaScript</TechName>
        </TechnologySlide>
        <TechnologySlide>
          <TechImage src={ts} alt='TypeScript' />
          <TechName>TypeScript</TechName>
        </TechnologySlide>
        <TechnologySlide>
          <TechImage src={reactPng} alt='React.js' />
          <TechName>React.js</TechName>
        </TechnologySlide>
        <TechnologySlide>
          <TechImage src={next} alt='Next.js' />
          <TechName>Next.js</TechName>
        </TechnologySlide>
        <TechnologySlide>
          <TechImage src={mongodb} alt='MongoDB' />
          <TechName>MongoDB</TechName>
        </TechnologySlide>
        <TechnologySlide>
          <TechImage src={prisma} alt='Prisma' />
          <TechName>Prisma</TechName>
        </TechnologySlide>
        <TechnologySlide>
          <TechImage src={sql} alt='MySQL' />
          <TechName>MySQL</TechName>
        </TechnologySlide>
        <TechnologySlide>
          <TechImage src={postgre} alt='PostgreSQL' />
          <TechName>PostgreSQL</TechName>
        </TechnologySlide>
      </Slider>
    </Container>
  );
};

export default Tecnologias;
