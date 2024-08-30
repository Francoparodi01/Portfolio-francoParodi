import React from 'react';
import styled from 'styled-components';
import ClonDs from './ClonDs';
import ProyectoSkins from './ProyectoSkins';
import GymApp from './GymApp';
import ApiRest from './ApiRest';
import ExpenseTracker from './ExpenseTracker';

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  background-color: #f8f9fa; /* Fondo claro */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #00339b;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  text-align: center;
  margin-bottom: 40px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacio entre proyectos */
`;

const Portfolio = ({ isVisible }) => {
  return (
    <Section id='portfolio'>
      <Container>
        <Title>Portfolio</Title>
        <Subtitle>Mi Portafolio de Desarrollador Web, explora mis proyectos personales</Subtitle>
          <GymApp />
          <ApiRest />
          <ClonDs />
          <ExpenseTracker />
      </Container>
    </Section>
  );
};

export default Portfolio;
