import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap'; // Importar componentes de React Bootstrap
import gymImg1 from '../assets/gymApp1.png';
import gymImg2 from '../assets/gymApp2.png';
import gymImg3 from '../assets/gymApp3.png';
import gymImg4 from '../assets/gymApp4.png';
import gymImg5 from '../assets/gymApp5.png';
import TecnoProyecto from '../utils/TecnoProyecto';

// Importar los estilos de Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styled Components
const StyledContainer = styled(BootstrapContainer)`
  padding: 20px;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ContentSection = styled.div`
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #00339b;
  margin-bottom: 15px;
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #555;
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  color: #00339b;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    color: #0056b3;
  }
`;

const GymApp = () => {
  const mostrarTecnologias = {
    react: true,
    materialui: true,
    apis: true,
    javascript: true,
  };

  // Configuración de Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <StyledContainer>
      <Row>
        <Col xs={12} md={6}>
          <ImageSection>
            <Slider {...settings}>
              {[gymImg1, gymImg2, gymImg3, gymImg4, gymImg5].map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`preview gym image ${index + 1}`} style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
                </div>
              ))}
            </Slider>
          </ImageSection>
        </Col>
        <Col xs={12} md={6}>
          <ContentSection>
            <Title>Gym App</Title>
            <TecnoProyecto mostrarTecnologias={mostrarTecnologias} />
            <Text>
              Desarrollé la aplicación con React.js y la maqueté al 100% de forma responsive utilizando Material UI.
              La idea de la app era trabajar con fetch y APIs, y logré completar este desafío en un solo fin de semana!
              Las Tecnologías Utilizadas son:
            </Text>
            <ul style={{ padding: 0, listStyleType: 'none' }}>
              <li>
                <ProjectLink href='https://github.com/Francoparodi01/GymApp' target="_blank" rel="noopener noreferrer">Link al repositorio</ProjectLink>
              </li>
              <li>
                <ProjectLink href='https://gym-app-francoparodi.netlify.app' target="_blank" rel="noopener noreferrer">Deploy</ProjectLink>
              </li>
            </ul>
          </ContentSection>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default GymApp;
