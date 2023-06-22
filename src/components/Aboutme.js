import React from 'react'
import fotoCv from '../assets/fotoPortfolio.png'
import VisibleComponents from './VisibleComponents'
import documento from '../pdf/cv-FrancoParodi.pdf'

const Aboutme = ({isVisible}) => {
  
  return (
    <section className='section'>
    <VisibleComponents id="section-cont" className={`section-cont ${isVisible ? 'animate' : ''}`}>
      <div className='section-cont'>
        <h2 className='section-title'>Sobre mí</h2>
      </div>
        <div className='aboutme-cont aboutme-grid'>
            <div className='img-section-cont'>
                <img src={fotoCv} alt='foto-cv' className='img-home'></img>
            </div>
            <div>
                <h2>Hola! Soy Franco Parodi,</h2>
                    <p>Desarrollador frontend y estudiante de la carrera de Ingeniería en Informática en la UBA. Mi principal objetivo es el aprendizaje constante, 
                      siempre buscando mejorar mis habilidades y conocimientos. Desde muy joven, he sentido una gran pasión por la tecnología, y también he desarrollado un interés por el diseño, 
                      lo cual me ha llevado a tomar cursos de Photoshop e Illustrator. Si estás interesado en conocer más sobre mi trayectoria y experiencia, te invito a 
                      <a href={documento} className='curriculum'> hacer clic aquí</a> para acceder a mi currículum.</p>
            </div>
        </div>
    </VisibleComponents>
    </section>
  )
}
export default Aboutme