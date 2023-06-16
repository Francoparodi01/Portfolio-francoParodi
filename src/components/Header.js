import React from 'react'
import {LuMenu} from 'react-icons/lu'

const Header = () => {
    //la idea de esta funcion es que al hacer click en mi nombre, te lleve a la parte principal de la pagina
    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
    })}

  return (
    <header className='header'>
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
  )
}

export default Header