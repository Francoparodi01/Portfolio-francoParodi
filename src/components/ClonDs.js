import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ImgClonDs from "../assets/previewDiscord.png";
import discordCreateServer from "../assets/discordCreateServer.png";
import discordInvite from "../assets/discordInvite.png";
import manageMembers from "../assets/manageMembers.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TecnoProyecto from "../utils/TecnoProyecto";

// Estilos usando styled-components
const StyledContainer = styled(Container)`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const SliderContainer = styled.div`
  .slick-slide img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    max-width: 500px;
    margin: auto;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #00339b;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    text-align: left;
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

const ClonDs = () => {
  const mostrarTecnologias = {
    react: true,
    tailwind: true,
    typescript: true,
    sql: true,
    next: true,
    prisma: true,
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
          <SliderContainer>
            <Slider {...settings}>
              <div>
                <img src={ImgClonDs} alt="Vista previa del clon de Discord" />
              </div>
              <div>
                <img src={discordCreateServer} alt="Crear servidor en Discord" />
              </div>
              <div>
                <img src={discordInvite} alt="Invitación a Discord" />
              </div>
              <div>
                <img src={manageMembers} alt="Gestionar miembros en Discord" />
              </div>
            </Slider>
          </SliderContainer>
        </Col>
        <Col xs={12} md={6}>
          <Title>Discord Clon</Title>
          <TecnoProyecto mostrarTecnologias={mostrarTecnologias} />
          <AboutText>
            Esta aplicación es un clon de Discord, diseñada para facilitar la comunicación en tiempo real entre usuarios. Permite la interacción a través de canales de texto, audio y video, así como el envío y gestión de archivos como imágenes y PDFs mediante Uploadthing. Incluye funcionalidades de chat en tiempo real gracias a Socket.io, conversaciones y videollamadas entre usuarios, y enlaces de invitación a servidores funcionales. Además, cuenta con modo nocturno y está diseñada para ser responsive, asegurando una experiencia de usuario fluida en diferentes dispositivos.
          </AboutText>
          <ul>
            <li>
              <RepoLink href="https://github.com/Francoparodi01/DiscordClone" target="_blank" rel="noopener noreferrer">
                Link al repositorio
              </RepoLink>
            </li>
            <li>
              <RepoLink href="https://discord-clone-indol-five.vercel.app/sign-in?redirect_url=https%3A%2F%2Fdiscord-clone-indol-five.vercel.app%2F" target="_blank" rel="noopener noreferrer">
                Deploy
              </RepoLink>
            </li>
          </ul>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default ClonDs;
