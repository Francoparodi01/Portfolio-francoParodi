import React from 'react'
import {LuMenu} from 'react-icons/lu'
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
    /*<header className='header'>
        <nav>
            <div className='div-headerCont'>
                <h2  className='name'>
                    <span onClick={handleClick}>Franco Parodi</span>
                </h2>
                <div className='burguerMenu'>
                    <LuMenu className='burgersvg'/>
                </div>
                <div className='head-menu'>
                    <ul className='menu-ul'>
                        <li className='head-item'>Sobre mí</li>
                        <li className='head-item'>Portfolio</li>
                        <li className='head-item'>Contacto</li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    */
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header