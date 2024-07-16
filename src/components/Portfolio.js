import React from 'react';
import VisibleComponents from './VisibleComponents';
import ClonDs from './ClonDs';
import ProyectoSkins from './ProyectoSkins';
import GymApp from './GymApp';
import ApiRest from './ApiRest';

const Portfolio = ({ isVisible }) => {
  return (
    <section className='aboutme-section' id='portfolio'>
      <VisibleComponents id="section-cont" className={`section-cont ${isVisible ? 'animate' : ''}`}>
        <div className='section-cont'>
          <h2 className='section-title'>Portfolio</h2>
          <p className='subtitulo-portfolio'>Mi Portafolio de Desarrollador Web, explora mis proyectos personales</p>
        </div>
        <div>
          <ProyectoSkins />
          <GymApp />
          <ApiRest />
          <ClonDs />
        </div>
      </VisibleComponents>
    </section>
  );
}

export default Portfolio;
