import React from 'react';
import fotoCv from '../assets/fotoPortfolio.png';
import VisibleComponents from './VisibleComponents';
import documento from '../pdf/FRANCO_PARODI_CV_ES.pdf';

const Aboutme = ({ isVisible }) => {
  return (
    <section className='section' id="sobre-mi">
      <VisibleComponents id="section-cont" className={`section-cont ${isVisible ? 'animate' : ''}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='section-cont'>
                <h2 className='section-title'>Sobre mí</h2>
              </div>
              <div className='aboutme-cont aboutme-grid'>
                <div className='img-section-cont'>
                  <img src={fotoCv} alt='Foto de perfil' className='img-home'></img>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='aboutme-cont'>
                <h2>Hola! Soy Franco Parodi,</h2>
                <p className='aboutme-text'>
                  Desarrollador fullstack con un enfoque en la creación de web-components.
                  Mi viaje en el mundo de la programación comenzó con cursos en JavaScript, React y backend, y actualmente,
                  estoy cursando el primer año de Ingeniería Informática en la Universidad de Buenos Aires.
                  Durante mis estudios, he tenido la oportunidad de trabajar con lenguajes como Python y pronto, Java.
                  Mis metas actualmente, son desarrollarme en la programación web trabajando con lenguajes como JavaScript y TypeScript.
                  Estoy entusiasmado por las posibilidades infinitas que ofrece el desarrollo web y la creación de aplicaciones interactivas y atractivas.
                  Si deseas conocer más acerca de mi trayectoria y experiencia, te invito a hacer clic en el siguiente enlace para acceder a mi
                  <a href={documento} className='curriculum'> Currículum</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </VisibleComponents>
    </section>
  );
};

export default Aboutme;
