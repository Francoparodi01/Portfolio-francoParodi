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
import TecnoProyecto from "../utils/TecnoProyecto";

const ExpenseTracker = () => {
  const mostrarTecnologias = {
    react: true,
    express: true,
    javascript: true,
    chartjs: true,
    mongo: true,
    node: true,
  };

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
            <TecnoProyecto mostrarTecnologias={mostrarTecnologias} />
          </ul>
          <p className="aboutme-text">
            Aplicación web en la que puedes gestionar tus gastos de manera continua.
            La misma posee un diagrama donde se pueden ver los gastos ingresados y tener 
            de manera gráfica la evolucion de nuestros ingresos/gastos en una forma comparativa.
            Puedes añadir tus ingresos, gastos, editar y eliminarlos, agregar los gastos
            e ingresos por categoría para una mejor gestión de los mismos.
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
