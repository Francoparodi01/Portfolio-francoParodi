import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap'; // Importar componentes de React Bootstrap
import api1 from '../assets/api1.png';
import rest from '../assets/rest.png';
import get from '../assets/get.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TecnoProyecto from '../utils/TecnoProyecto';

// Estilos usando styled-components
const StyledContainer = styled(BootstrapContainer)`
  padding: 20px;
`;

const ImgSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ImgPreviewContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #00339b;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const RepoLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #00339b;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ApiRest = () => {
  const mostrarTecnologias = {
    mongo: true,
    typescript: true,
    express: true,
    node: true,
    fetchapi: false,
  };

  // Configuración de React Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, // Ocultar flechas de navegación
  };

  return (
    <StyledContainer>
      <Row>
        <Col xs={12} md={6}>
          <ImgSectionContainer>
            <ImgPreviewContainer>
              <Slider {...settings}>
                <div>
                  <img src={rest} alt="Imagen del proyecto REST" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div>
                  <img src={api1} alt="Imagen del proyecto API" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div>
                  <img src={get} alt="Imagen del proyecto GET" style={{ width: '100%', height: 'auto' }} />
                </div>
              </Slider>
            </ImgPreviewContainer>
          </ImgSectionContainer>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <Title>API REST</Title>
            <TecnoProyecto mostrarTecnologias={mostrarTecnologias} />
            <AboutText>
              Este proyecto es una API REST desarrollada con Node.js, Express y TypeScript, utilizando MongoDB como base de datos. La aplicación está organizada en varias capas para asegurar la mantenibilidad y claridad del código. En la capa de controladores, se maneja la lógica de autenticación y las operaciones relacionadas con los usuarios. La capa de base de datos gestiona las interacciones con MongoDB, facilitando la manipulación de datos de usuario. Los helpers proporcionan funciones auxiliares para diversas operaciones. Los middlewares se configuran para manejar tareas comunes como la autenticación y el manejo de errores. La capa de rutas define las diferentes rutas de la API, asegurando una adecuada separación de responsabilidades. Además, la configuración del proyecto incluye herramientas esenciales para la gestión de dependencias y la compilación de TypeScript, garantizando una aplicación robusta y fácil de escalar.
            </AboutText>
            <ul style={{ padding: 0, listStyleType: 'none' }}>
              <li>
                <RepoLink href="https://github.com/Francoparodi01/API-REST" target="_blank" rel="noopener noreferrer">
                  Link al repositorio
                </RepoLink>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default ApiRest;
