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
             <p className='aboutme-text'>la idea en este texto es explicar el funcionamiento de la pagina, el tiempo que me llevo construirla y como está compuesta</p>
       </div>
    </div>
    </>
  )
}

export default PrimerProyecto