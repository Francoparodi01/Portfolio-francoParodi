import React from 'react'
import previewDiscord from '../assets/previewPlantas.png'

const plantShop = () => {
  return (
    <>
        <div className='aboutme-cont aboutme-grid'>
            <div className='img-section-cont'>
              <div className='container-img-preview'>
                <img src={previewDiscord} alt='gif e-commerce plantas' className='img-preview'></img>
              </div>
            </div>
            <div>
                <h2 className='titulos-proyectos'>Discord clon</h2>
                    <p className='aboutme-text'>
                      Iniciando con un login seguro utilizando clerk, desarrollando la app con typescript, tailwind y next.js. 
                      Para la gestión de datos en el backend, elegí SQL como nuestra base de datos y Prisma como nuestro ORM, 
                      lo que hizo que la comunicación entre la base de datos y la aplicación fuera más eficiente.
                      La aplicacion cuenta con chat en tiempo real gracias a socket.io, manejo y subida de archivos (imagenes, pdf, etc) 
                      gracias a Uploadthing; canales de texto, audio y video funcionales, conversaciones y videollamadas entre usuarios, 
                      link de invitacion a servidores funcionales, manejo de usuarios, modo nocturno y diseño responsive. 
                      <ul>
                        <li>
                          <a className='repositorio-proyectos' href='https://github.com/Francoparodi01/DiscordClone'> Link al repositorio</a>
                        </li>
                        <li>
                          <a className='repositorio-proyectos' href='https://discordclone-production-df7d.up.railway.app'>Deploy</a>
                        </li>
                      </ul>
                    </p>
            </div>
        </div>
    </>
  )
}

export default plantShop