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