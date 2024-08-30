import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import tracker1 from '../assets/tracker1.png';
import tracker2 from '../assets/tracker2.png';
import tracker3 from '../assets/tracker3.png';
import TecnoProyecto from '../utils/TecnoProyecto';

// Estilos usando styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageSection = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ImagePreviewContainer = styled.div`
  max-width: 350px;
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #00339b;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
  text-align: justify;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
`;

const LinkItem = styled.a`
  color: #00339b;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const ExpenseTracker = () => {
  const mostrarTecnologias = {
    react: true,
    express: true,
    javascript: true,
    chartjs: true,
    mongo: true,
    node: true,
  };

  // Configuración del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, // Puedes habilitar esto si necesitas flechas de navegación
  };

  return (
    <Container>
      <ImageSection>
        <ImagePreviewContainer>
          <Slider {...sliderSettings}>
            <div>
              <img
                src={tracker1}
                alt='Expense Tracker Image 1'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <img
                src={tracker2}
                alt='Expense Tracker Image 2'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <img
                src={tracker3}
                alt='Expense Tracker Image 3'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Slider>
        </ImagePreviewContainer>
      </ImageSection>
      <div>
        <Title>Gestor de gastos</Title>
        <TechList>
          <TecnoProyecto mostrarTecnologias={mostrarTecnologias} />
        </TechList>
        <Text>
          Aplicación web en la que puedes gestionar tus gastos de manera continua.
          La misma posee un diagrama donde se pueden ver los gastos ingresados y tener 
          de manera gráfica la evolución de nuestros ingresos/gastos en una forma comparativa.
          Puedes añadir tus ingresos, gastos, editarlos, eliminarlos, y agregarlos
          por categoría para una mejor gestión de los mismos.
        </Text>
        <LinksList>
          <li>
            <LinkItem href='https://github.com/Francoparodi01/ExpenseTracker' target='_blank' rel='noopener noreferrer'>
              Link al repositorio
            </LinkItem>
          </li>
          <li>
            <LinkItem href='https://expense-tracker-nine-cyan.vercel.app' target='_blank' rel='noopener noreferrer'>
              Deploy
            </LinkItem>
          </li>
        </LinksList>
      </div>
    </Container>
  );
};

export default ExpenseTracker;
