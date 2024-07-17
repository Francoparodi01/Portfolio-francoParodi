import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import tracker1 from "../assets/tracker1.png";
import tracker2 from "../assets/tracker2.png";
import tracker3 from "../assets/tracker3.png";
import "swiper/css";
import TecnoProyecto from '../utils/TecnoProyecto'

const ExpenseTracker = () => {

  const mostrarTecnologias = {
    react: true,
    express: true,
    javascript: true,
    chartjs: true,
    mongo: true,
    node: true,
  }


  return (
    <>
      <div className="aboutme-cont aboutme-grid">
        <div className="img-section-cont">
          <div className="container-img-preview">
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
              <SwiperSlide>
                <img
                  src={tracker1}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={tracker2}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={tracker3}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <h2 className="titulos-proyectos">Gestor de gastos</h2>
          <ul className="contenedor-tecnologias-usadas">
          <TecnoProyecto mostrarTecnologias={mostrarTecnologias}/>
          </ul>
          <p className="aboutme-text">
            Esta aplicación es un clon de Discord, diseñada para facilitar la
            comunicación en tiempo real entre usuarios. Permite la interacción a
            través de canales de texto, audio y video, así como el envío y
            gestión de archivos como imágenes y PDFs mediante Uploadthing.
            Incluye funcionalidades de chat en tiempo real gracias a Socket.io,
            conversaciones y videollamadas entre usuarios, y enlaces de
            invitación a servidores funcionales. Además, cuenta con modo
            nocturno y está diseñada para ser responsive, asegurando una
            experiencia de usuario fluida en diferentes dispositivos.
            </p>
              <ul>
                <li>
                  <a
                    className="repositorio-proyectos"
                    href="https://github.com/Francoparodi01/DiscordClone"
                    target="blank"
                  >
                    Link al repositorio
                  </a>
                </li>
                <li>
                  <a
                    className="repositorio-proyectos"
                    href="https://expense-tracker-nine-cyan.vercel.app"
                    target="blank"
                  >
                    Deploy
                  </a>
                </li>
              </ul>
        </div>
      </div>
    </>
  );
};

export default ExpenseTracker;