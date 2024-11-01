import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import "swiper/swiper-bundle.css";

import js from '../../assets/js.png';
import react from '../../assets/react.png';
import sql from '../../assets/sql.png';
import sqlServer from '../../assets/sqlServer.png';
import mongo from '../../assets/mongodb.png';
import node from '../../assets/node.png';
import python from '../../assets/python.png';
import django from '../../assets/django.png';
import next from '../../assets/next.png';

const StyledImage = styled.img(({ theme }) => ({
  width: '100px',
  height: '100px',
  margin: '0 auto',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)', 
  },
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '70px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '60px',
    height: '60px',
  },
}));

const SlideContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '20px', 
  backgroundColor: '#f5f5f5',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem', 
  margin: '20px 0',
  textAlign: 'center', 
  fontWeight: 'bold',
  color: '#0a789c', 
  textShadow: '2px 2px 4px rgba(143, 176, 192, 0.5)', 
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem', 
  },
}));

const ColorSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#02698b',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const SwiperContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto',
}));

const SkillsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '40vh',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    padding: '10px', 
    marginTop: '5em',
  },
}));

const technologies = [
  { src: js, label: 'JavaScript' },
  { src: node, label: 'Node.js' },
  { src: react, label: 'React' },
  { src: next, label: 'Next.js' },
  { src: sql, label: 'SQL' },
  { src: sqlServer, label: 'SQL Server' },
  { src: mongo, label: 'MongoDB' },
  { src: python, label: 'Python' },
  { src: django, label: 'Django' },
];

const MySkills = () => {
  return (
    <SkillsContainer>
      <Title>Tecnologías principales</Title>
      <SwiperContainer className="slider-container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          grabCursor={true}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <SlideContainer>
                <StyledImage src={tech.src} alt={`Tecnología ${tech.label}`} />
                <Typography variant="body2" color="textPrimary">{tech.label}</Typography>
              </SlideContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </SkillsContainer>
  );
};

export default MySkills;
