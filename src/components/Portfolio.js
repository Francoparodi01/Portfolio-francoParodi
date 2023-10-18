import React from 'react'
import VisibleComponents from './VisibleComponents'
import ClonDs from './ClonDs'
import PrimerProyecto from './PrimerProyecto'
import ProyectoSkins from './ProyectoSkins'

const Portfolio = (isVisible) => {
  return (
    <section className='aboutme-section'>
    <VisibleComponents id="section-cont" className={`section-cont ${isVisible ? 'animate' : ''}`}>
    <div>     
         <div className='section-cont'>
            <h2 className='section-title'>Portfolio</h2>
        </div>
        <p className='subtitulo-portfolio'>Mi Portafolio de Desarrollador Web, explora mis proyectos personales</p>
    </div>
      <div>
          <PrimerProyecto/>
          <ProyectoSkins/>
          <ClonDs/>
      </div>
    </VisibleComponents>
   </section>
  )
}

export default Portfolio