import React from 'react'
import gifReact from '../assets/gif-proyecto-react.gif'

const PrimerProyecto = () => {
  return (
    <>
    <div className='aboutme-cont aboutme-grid'>
      <div className='img-section-cont'>
         <div className='container-img-preview'>
           <img src={gifReact} alt='gif primer proyecto' className='img-preview'></img>
         </div>
      </div>
       <div>
           <h2 className='titulos-proyectos'>My shop</h2>
            <p className='aboutme-text'>
              "My Shop" fue mi primer proyecto realizado en React. De la mano de mis tutores y profesores de Coderhouse, 
              logré completar mi primera página utilizando este framework. El sitio web cuenta con una página principal donde se muestra la lista de productos,
              una sección filtrada por categorías y, finalmente, las tarjetas con cada producto respectivo y la pasarela de pago. 
              El objetivo de este proyecto fue aprender a utilizar el framework y comprender sus funcionalidades. 
              A lo largo del curso, que duró desde septiembre hasta diciembre de 2022, fui creando sus componentes, utilizando rutas y Firebase como base de datos.
              <ul>
                <li>
                  <a className='repositorio-proyectos' href='https://github.com/Francoparodi01/EntregableReact'> Link al repositorio</a>
                </li>
              </ul>
            </p>
       </div>
    </div>
    </>
  )
}
export default PrimerProyecto