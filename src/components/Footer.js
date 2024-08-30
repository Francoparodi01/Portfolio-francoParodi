import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

// Estilos usando styled-components
const FooterContainer = styled.footer`
  background-color: #26272b; /* Fondo oscuro para el footer */
  padding: 45px 0 20px; /* Padding superior e inferior */
  text-align: center;
  border-top: 1px solid #bbb; /* Línea superior para separar el footer del contenido */
  color: #737373; /* Color del texto */
  font-size: 15px; /* Tamaño del texto */
`;

const NavbarFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  a {
    color: #b074e8; /* Color de los enlaces */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #521888; /* Color al pasar el ratón sobre el enlace */
    }
  }
`;

const CopyrightText = styled.p`
  font-size: 0.9rem; /* Tamaño de fuente */
  color: #737373; /* Color del texto */
  margin-bottom: 10px;
`;

const SocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;

  li {
    display: inline-block;
  }

  a {
    color: #b074e8; /* Color de los íconos sociales */
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #521888; /* Color al pasar el ratón sobre el ícono */
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <NavbarFooter>
          <CopyrightText>© 2024 Franco Parodi. Todos los derechos reservados.</CopyrightText>
          <a href="#sobre-mi" id='foot-item'>Sobre mi</a>
          <a href="#portfolio" id='foot-item'>Portfolio</a>
          <a href="#contacto" id='foot-item'>Contacto</a>
        </NavbarFooter>
        <hr />
      </div>
      <div className="container-footer">
        <SocialIcons>
          <li>
            <a href="https://github.com/Francoparodi01" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDXXrmlzJTTmGmpSTzBRmDxJLngdmsDQTLNWLWzwHmPCZsLmxJqPqSTvNHxBqfSVbwFqNnM" target="_blank" rel="noopener noreferrer">
              <SiGmail />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/franco-parodi-a638ab206/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </SocialIcons>
      </div>
    </FooterContainer>
  );
};

export default Footer;
