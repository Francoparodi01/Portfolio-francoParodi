import React from 'react';
import styled from 'styled-components';
import gifSkins from '../assets/gif-proyecto-skins.gif';
import TecnoProyecto from '../utils/TecnoProyecto';

// Styled Components
const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacio entre elementos */
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* Bordes redondeados */
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #00339b;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;

  a {
    color: #00339b;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProyectoSkins = () => {
  const mostrarTecnologias = {
    react: true,
    firebase: true,
    javascript: true,
  };

  return (
    <ProjectSection>
      <ImageContainer>
        <Image src={gifSkins} alt='gif proyecto skins' />
      </ImageContainer>
      <div>
        <Title>Csgo Skins</Title>
        <TecnoProyecto mostrarTecnologias={mostrarTecnologias} />
        <Description>
          Csgo Skins es mi segunda aplicación desarrollada en React. La idea principal detrás de esta página era aplicar lo que había aprendido en mi curso y poner en práctica las lecciones de mi primer proyecto. Decidí crear este proyecto para fusionar dos de mis pasiones: los videojuegos y la programación, dando como resultado una plataforma de venta de skins para el juego Counter-Strike: Global Offensive. La página incluye una barra de búsqueda que permite filtrar productos por categorías y nombres, un contador de productos agregados al carrito y una pasarela de pago para una experiencia de compra completa.
        </Description>
        <LinkList>
          <LinkItem>
            <a href="https://github.com/Francoparodi01/SkinsApp" target="_blank" rel="noopener noreferrer">Link al repositorio</a>
          </LinkItem>
          <LinkItem>
            <a href="https://csgoskins-app.netlify.app" target="_blank" rel="noopener noreferrer">Deploy</a>
          </LinkItem>
        </LinkList>
      </div>
    </ProjectSection>
  );
};

export default ProyectoSkins;
