import React from 'react'
import VisibleComponents from './VisibleComponents'
import previewPlantas from '../assets/previewPlantas.png'

const Portfolio = (isVisible) => {
  return (
    <section className='aboutme-section'>
    <VisibleComponents id="section-cont" className={`section-cont ${isVisible ? 'animate' : ''}`}>
    <div>     
         <div className='section-cont'>
            <h2 className='section-title'>Portfolio</h2>
        </div>
    </div>
    <div className='aboutme-cont aboutme-grid'>
            <div className='img-section-cont'>
              <div className='container-img-preview'>
                <img src={previewPlantas} alt='foto-cv' className='img-preview'></img>
              </div>
            </div>
            <div>
                <h2>Hola! Soy Franco Parodi,</h2>
                    <p className='aboutme-text'>Desarrollador frontend y estudiante de la carrera de Ingeniería en Informática en la UBA. Mi principal objetivo es el aprendizaje constante, 
                      siempre buscando mejorar mis habilidades y conocimientos. Desde muy joven, he sentido una gran pasión por la tecnología, y también he desarrollado un interés por el diseño, 
                      lo cual me ha llevado a tomar cursos de Photoshop e Illustrator. Si estás interesado en conocer más sobre mi trayectoria y experiencia, te invito a 
                    </p>
            </div>
        </div>
        </VisibleComponents>
    </section>
  )
}

export default Portfolio