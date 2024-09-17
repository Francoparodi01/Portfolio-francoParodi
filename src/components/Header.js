import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    
    return (
      <Navbar id='nav'>
        <Container id='header'>
          <Navbar.Brand href='#sobre-mi'>Franco Parodi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link id='head-item' href="#sobre-mi">Sobre mí</Nav.Link>
            <Nav.Link id='head-item' href='#portfolio'>Portfolio</Nav.Link>
            <Nav.Link id='head-item' href='#contacto'>Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )};

export default Header