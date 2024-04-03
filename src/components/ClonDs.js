import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgClonDs from '../assets/previewDiscord.png'
import discordCreateServer from '../assets/discordCreateServer.png'
import discordInvite from '../assets/discordInvite.png'
import manageMembers from '../assets/manageMembers.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'

const ClonDs = () => {
  return (
    
    <>
        <div className='aboutme-cont aboutme-grid'>
            <div className='img-section-cont'>
              <div className='container-img-preview'>
              <Swiper
                     modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     autoplay
                     fadeEffect
                     pagination={{ clickable: true }}
                     scrollbar={{ draggable: true }}
                     effect="fade"
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}
                     className='img-preview'
                  >
                    <SwiperSlide ><img src={ImgClonDs} alt='gif e-commerce plantas' className='img-preview' ></img></SwiperSlide>
                    <SwiperSlide ><img src={discordCreateServer} alt='gif e-commerce plantas' className='img-preview' ></img></SwiperSlide>
                    <SwiperSlide ><img src={discordInvite} alt='gif e-commerce plantas' className='img-preview' ></img></SwiperSlide>
                    <SwiperSlide ><img src={manageMembers} alt='gif e-commerce plantas' className='img-preview' ></img></SwiperSlide>
                  </Swiper>
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
                          <a className='repositorio-proyectos' href='https://discord-clone-indol-five.vercel.app/sign-in?redirect_url=https%3A%2F%2Fdiscord-clone-indol-five.vercel.app%2F'>Deploy</a>
                        </li>
                      </ul>
                    </p>
            </div>
        </div>
    </>
  )
}

export default ClonDs
