import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import reactPng from '../assets/react.png';
import js from '../assets/js.png';
import next from '../assets/next.png';
import mongodb from '../assets/mongodb.png';
import prisma from '../assets/prisma.png';
import sql from '../assets/sql.png';
import postgre from '../assets/sqlServer.png';
import ts from '../assets/typescript.png';

export default function App() {
  return (
    <>
      <div className='contenedor-tecnologias'>
        <h2>Tecnologías principales</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          grabCursor={true}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className='tecnologia'>
              <img className='img-tecnologias' src={js} alt='JavaScript' />
              <p>JavaScript</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='tecnologia'>
              <img className='img-tecnologias' src={ts} alt='Typescript' />
              <p>Typescript</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='tecnologia'>
              <img className='img-tecnologias' src={reactPng} alt='React.js' />
              <p>React.js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='tecnologia'>
              <img className='img-tecnologias' src={next} alt='Next.js' />
              <p>Next.js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='tecnologia'>
              <img className='img-tecnologias' src={mongodb} alt='Mongodb' />
              <p>MongoDB</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='tecnologia'>
              <img className='img-tecnologias' src={prisma} alt='Prisma' />
              <p>Prisma</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='tecnologia'>
              <img className='img-tecnologias' src={sql} alt='SQL' />
              <p>MYSQL</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='tecnologia'>
              <img className='img-tecnologias' src={postgre} alt='SQL' />
              <p>POSTGRE SQL</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
