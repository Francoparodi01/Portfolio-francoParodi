import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    //la idea de esta funcion es que al hacer click en mi nombre, te lleve a la parte principal de la pagina
    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
    })}

  return (
    <Navbar id='nav'>
    <Container id='header'>
      <Navbar.Brand onClick={handleClick} >Franco Parodi</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link  id='head-item'>Sobre mí</Nav.Link>
        <Nav.Link  id='head-item'>Portfolio</Nav.Link>
        <Nav.Link  id='head-item'>Contacto</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header