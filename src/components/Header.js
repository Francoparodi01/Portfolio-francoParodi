import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Styled Components
const StyledNavbar = styled(Navbar)`
  background-color: #00339b; /* Color de fondo del Navbar */
`;

const StyledBrand = styled(Navbar.Brand)`
  color: white; /* Color del texto de la marca */
  font-weight: bold;
  &:hover {
    color: #ffcc00; /* Color al pasar el ratón */
  }
`;

const StyledLink = styled(Nav.Link)`
  color: white; /* Color del texto de los enlaces */
  font-weight: 500;
  &:hover {
    color: #ffcc00; /* Color al pasar el ratón */
  }
`;

const Header = () => {
  return (
    <StyledNavbar expand="lg" variant="dark">
      <Container>
        <StyledBrand href="#sobre-mi">Franco Parodi</StyledBrand>
        <Nav className="me-auto">
          <StyledLink href="#sobre-mi">Sobre mí</StyledLink>
          <StyledLink href="#portfolio">Portfolio</StyledLink>
          <StyledLink href="#contacto">Contacto</StyledLink>
        </Nav>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
