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
import ImgClonDs from "../assets/previewDiscord.png";
import discordCreateServer from "../assets/discordCreateServer.png";
import discordInvite from "../assets/discordInvite.png";
import manageMembers from "../assets/manageMembers.png";
import "swiper/css";

const ClonDs = () => {
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
                  src={ImgClonDs}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={discordCreateServer}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={discordInvite}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={manageMembers}
                  alt="gif e-commerce plantas"
                  className="img-preview"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <h2 className="titulos-proyectos">Discord clon</h2>
          <ul className="contenedor-tecnologias-usadas">
            <li className="typescript">TypeScript</li> <li>next.js</li>
            <li>tailwind</li> <li>Prisma</li> <li></li>
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
            <ul>
              <li>
                <a
                  className="repositorio-proyectos"
                  href="https://github.com/Francoparodi01/DiscordClone"
                >
                  {" "}
                  Link al repositorio
                </a>
              </li>
              <li>
                <a
                  className="repositorio-proyectos"
                  href="https://discord-clone-indol-five.vercel.app/sign-in?redirect_url=https%3A%2F%2Fdiscord-clone-indol-five.vercel.app%2F"
                >
                  Deploy
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default ClonDs;
