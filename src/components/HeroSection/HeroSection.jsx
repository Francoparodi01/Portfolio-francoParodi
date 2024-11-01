import React, { useRef } from 'react';
import { Box, Typography, Button as MuiButton, Container } from '@mui/material';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import GradientBackground from '../../hooks/GradientBackground';
import About from '../about/About';

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  color: 'white',
  textAlign: 'center',
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const ArrowIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  bottom: '3%',
  transform: 'translateX(-50%)',
  color: 'rgba(255, 255, 255, 0.8)',
  zIndex: 0,
  animation: 'bounce 2s infinite',
  fontSize: '4rem',
  cursor: 'pointer',
  
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
    bottom: '10%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    bottom: '10%',
  },
  
  '@keyframes bounce': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  },
}));

const StyledButton = styled(MuiButton)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  color: 'white',
  border: `.1px solid ${theme.palette.grey[700]}`,
  zIndex: 1,
  transition: 'color .5s ease-in',
  marginLeft: '2rem',

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    height: '100%',
    width: '100%',
    background: 'linear-gradient(90deg, #02455c, #910491)',
    transition: 'left .5s ease-in',
    zIndex: -1,
  },

  '&:hover::after': {
    left: '100%',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '4rem', 
  fontWeight: 700, 
  letterSpacing: '2px', 
  textTransform: 'uppercase', 
  color: '#ffffff', 
  marginBottom: '10px', 
  textShadow: '2px 2px 4px rgba(0, 0, 1, 1)', 
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem', 
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 400,
  color: 'rgba(255, 255, 255, 0.8)',
  marginBottom: '20px', 

  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const HeroSection = () => { 
  const projectsRef = useRef(null);

  return (
    <>
      <GradientBackground>
        <HeroContainer>
          <Overlay />
          <button onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
            <ArrowIcon icon={faArrowDown}/>
          </button>
          <HeroContent>
            <Title component="h1">Hola! Soy Franco Parodi.</Title>
            <Subtitle component="h2">Estudiante de ingeniería informática, desarrollador full-stack</Subtitle>
            {['Contacto', 'Proyectos'].map((text, index) => (
              <StyledButton key={index} variant="outlined" size="large" sx={{ m: 1, boxShadow: 5, border: 1, color: 'white' }} >
                {text}
              </StyledButton>
            ))}
          </HeroContent>
        </HeroContainer>
      </GradientBackground>
      <Box ref={projectsRef}>
        <About/>
      </Box>
    </>
  );
};

export default HeroSection;
