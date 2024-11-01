import React, { forwardRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import styled from '@emotion/styled';

const AboutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  color: theme.palette.common.white,

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row', 
  },
}));

const EmptySection = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(4),
}));

const ColorSection = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: '#02698b',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  color: 'white', 

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
  },
}));

const About = forwardRef((props, projectsRef) => {
  return (
    <AboutContainer ref={projectsRef}>
      <EmptySection>
      </EmptySection>
      <ColorSection>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Sobre mi
          </Typography>
          <Typography variant="body1" paragraph>
            Soy Franco Parodi, un profesional proactivo con formación en desarrollo full-stack.  Mi objetivo es convertirme en un referente en el desarrollo de soluciones backend de alta calidad. Para más información, puedes consultar la sección de certificados.
          </Typography>
          
          <Typography variant="h6" component="h3" gutterBottom>
            Formación Académica:
          </Typography>
          <Typography component="ol" sx={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li>Técnico en Desarrollo de Software - UADE (Inicio: Julio 2023, Finalización estimada: Julio 2026)</li>
            <li>Desarrollador Full-stack - Coderhouse (Marzo 2022 - Junio 2023)</li>
            <li>Secundario Completo (Inicio: Marzo 2015, Finalización: Diciembre 2019)</li>
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom style={{ marginTop: '1rem' }}>
            Idiomas y Certificaciones:
          </Typography>
          <Typography component="ul" sx={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li>Certificados de Cambridge: Flyers, KET, PET, IGCSE</li>
            <li>Portugués - Celpe-Bras, nivel intermedio</li>
          </Typography>
        </Container>
      </ColorSection>
    </AboutContainer>
  );
});

export default About;
