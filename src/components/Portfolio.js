import React from 'react';
import ClonDs from './ClonDs';
import ProyectoSkins from './ProyectoSkins';
import GymApp from './GymApp';
import ApiRest from './ApiRest';
import ExpenseTracker from './ExpenseTracker';

const Portfolio = ({ isVisible }) => {
  return (
    <section className='aboutme-section' id='portfolio'>
        <div className='section-cont'>
          <h2 className='section-title'>Portfolio</h2>
          <p className='subtitulo-portfolio'>Mi Portafolio de Desarrollador Web, explora mis proyectos personales</p>
        </div>
        <div>
          <ClonDs />
          <ApiRest />
          <GymApp />
          <ExpenseTracker/>
          <ProyectoSkins />
        </div>
    </section>
  );
}

export default Portfolio;