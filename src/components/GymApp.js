import React from 'react'

const gym_app = () => {
  return (
    <>
    <div className='aboutme-cont aboutme-grid'>
        <div className='img-section-cont'>
          <div className='container-img-preview'>
            <img alt='gif e-commerce plantas' className='img-preview'></img>
          </div>
        </div>
        <div>
            <h2 className='titulos-proyectos'>Gym app</h2>
                <p className='aboutme-text'>
                Desarrollé la aplicación con React.js y la maqueté al 100% de forma responsive utilizando Material UI.
                La idea de la app era trabajar con fetch y APIs, y logré completar este desafío en un solo fin de semana! 
                Las Tecnologías Utilizadas son:
                <ul>
                  <b>
                  React, Material UI, Pagination / Material UI, Fetch API
                  </b>
                </ul>
                  <ul>
                    <li>
                      <a className='repositorio-proyectos' href='https://github.com/Francoparodi01/GymApp'> Link al repositorio</a>
                    </li>
                    <li>
                      <a className='repositorio-proyectos' href='https://gym-app-francoparodi.netlify.app'>Deploy</a>
                    </li>
                  </ul>
                </p>
        </div>
    </div>
</>
  )
}

export default gym_app