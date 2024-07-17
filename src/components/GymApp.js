import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import gymImg1 from '../assets/gymApp1.png'
import gymImg2 from '../assets/gymApp2.png'
import gymImg3 from '../assets/gymApp3.png'
import gymImg4 from '../assets/gymApp4.png'
import gymImg5 from '../assets/gymApp5.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'
import TecnoProyecto from '../utils/TecnoProyecto';

const gym_app = () => {

  const mostrarTecnologias = {
    react: true,
    materialui: true,
    apis: true,
    javascript: true
  }

  return (
    <>
    <div className='aboutme-cont aboutme-grid'>
        <div className='img-section-cont'>
          <div className='container-img-preview'>
          <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectFade,
                Autoplay,
              ]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay
              fadeEffect
              effect="fade"
              onSlideChange={() => console.log("slide change")}
              className="img-preview"
          >
            <SwiperSlide ><img src={gymImg1} alt='gif e-commerce plantas' className='img-preview' ></img></SwiperSlide>
            <SwiperSlide ><img src={gymImg2} alt='gif e-commerce plantas' className='img-preview' ></img></SwiperSlide>
            <SwiperSlide ><img src={gymImg3} alt='gif e-commerce plantas' className='img-preview' ></img></SwiperSlide>
            <SwiperSlide ><img src={gymImg4} alt='gif e-commerce plantas' className='img-preview' ></img></SwiperSlide>
            <SwiperSlide ><img src={gymImg5} alt='gif e-commerce plantas' className='img-preview' ></img></SwiperSlide>
          </Swiper>
          </div>
        </div>
        <div>
            <h2 className='titulos-proyectos'>Gym app</h2>
            <TecnoProyecto mostrarTecnologias={mostrarTecnologias}/>
                <p className='aboutme-text'>
                Desarrollé la aplicación con React.js y la maqueté al 100% de forma responsive utilizando Material UI.
                La idea de la app era trabajar con fetch y APIs, y logré completar este desafío en un solo fin de semana! 
                Las Tecnologías Utilizadas son:
                </p>
                  <ul>
                    <li>
                      <a className='repositorio-proyectos' href='https://github.com/Francoparodi01/GymApp' target="blank"> Link al repositorio</a>
                    </li>
                    <li>
                      <a className='repositorio-proyectos' href='https://gym-app-francoparodi.netlify.app' target="blank">Deploy</a>
                    </li>
                  </ul>
        </div>
    </div>
</>
  )
}

export default gym_app