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
import api1 from "../assets/api1.png";
import rest from "../assets/rest.png";
import get from "../assets/get.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import TecnoProyecto from "../utils/TecnoProyecto";

const ApiRest = () => {
  
  const mostrarTecnologias = {
    mongo: true,
    typescript: true,
    express: true,
    node:true,
    fetchapi:false,
  }

  return(
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
                  src={rest}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={api1}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={get}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <h2 className="titulos-proyectos">API REST</h2>
          <TecnoProyecto mostrarTecnologias={mostrarTecnologias}/>
          <p className="aboutme-text">
            Este proyecto es una API REST desarrollada con Node.js, Express y
            TypeScript, utilizando MongoDB como base de datos. La aplicación
            está organizada en varias capas para asegurar la mantenibilidad y
            claridad del código. En la capa de controladores, se maneja la
            lógica de autenticación y las operaciones relacionadas con los
            usuarios. La capa de base de datos gestiona las interacciones con
            MongoDB, facilitando la manipulación de datos de usuario. Los
            helpers proporcionan funciones auxiliares para diversas operaciones.
            Los middlewares se configuran para manejar tareas comunes como la
            autenticación y el manejo de errores. La capa de rutas define las
            diferentes rutas de la API, asegurando una adecuada separación de
            responsabilidades. Además, la configuración del proyecto incluye
            herramientas esenciales para la gestión de dependencias y la
            compilación de TypeScript, garantizando una aplicación robusta y
            fácil de escalar.
          </p>
          <ul>
            <li>
              <a
                className="repositorio-proyectos"
                href="https://github.com/Francoparodi01/API-REST"
                target="blank"
              >
                Link al repositorio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ApiRest;