import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay} from 'swiper/modules';

import reactPng from '../assets/react.png';
import js from '../assets/js.png';
import next from '../assets/next.png';
import mongodb from '../assets/mongodb.png';
import prisma from '../assets/prisma.png';
import sql from '../assets/sql.png'
import ts from '../assets/typescript.png'

export default function App() {
  return (
        <>
          <div className='contenedor-tecnologias'>
            <h2>Tecnologías principales</h2>
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              slidesPerView={3}
              autoplay
              centeredSlides={true}
              grabCursor={true}
            >
              <SwiperSlide><img className='img-tecnologias' src={js} alt='JavaScript' /><p>JavaScript</p></SwiperSlide>
              <SwiperSlide><img className='img-tecnologias' src={ts} alt='Typescript'/><p>Typescript</p></SwiperSlide>
              <SwiperSlide><img className='img-tecnologias' src={reactPng} alt='React.js' /><p>React.js</p></SwiperSlide>
              <SwiperSlide><img className='img-tecnologias' src={next} alt='Next.js' /><p>Next.js</p></SwiperSlide>
              <SwiperSlide><img className='img-tecnologias' src={mongodb} alt='Mongodb' /><p>MongoDB</p></SwiperSlide>
              <SwiperSlide><img className='img-tecnologias' src={prisma} alt='Prisma' /><p>Prisma</p></SwiperSlide>
              <SwiperSlide><img className='img-tecnologias' src={sql} alt='SQL' /><p>MYSQL</p></SwiperSlide>
            </Swiper>
          </div>
        </>
  );
}
