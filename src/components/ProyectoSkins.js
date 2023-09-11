import React from 'react'
import gifSkins from '../assets/gif-proyecto-skins.gif'

const ProyectoSkins = () => {
  return (
    <>
    <div className='aboutme-cont aboutme-grid'>
      <div className='img-section-cont'>
         <div className='container-img-preview'>
           <img src={gifSkins} alt='gif proyecto skins' className='img-preview'></img>
         </div> 
      </div>
       <div>
           <h2 className='titulos-proyectos'>Csgo Skins</h2>
            <p className='aboutme-text'>Csgo Skins es mi segunda aplicación desarrollada en React. La idea principal detrás de esta página era aplicar
            lo que había aprendido en mi curso y poner en práctica las lecciones de mi primer proyecto. Decidí crear este proyecto para fusionar dos
            de mis pasiones: los videojuegos y la programación, dando como resultado una plataforma de venta de skins para el juego Counter-Strike: Global Offensive. 
            La página incluye una barra de búsqueda que permite filtrar productos por categorías y nombres, un contador de productos agregados al carrito
            y una pasarela de pago para una experiencia de compra completa.  
             <a className='repositorio-proyectos' href='https://github.com/Francoparodi01/SkinsApp'> Link al repositorio</a>
            </p>
       </div>
    </div>
    </>
  )
}

export default ProyectoSkins