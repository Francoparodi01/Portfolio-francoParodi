import React from 'react';
import styled from 'styled-components';
import fotoCv from '../assets/fotoPortfolio.png';
import documento from '../pdf/Curriculum Vitae Franco Parodi_ENG.pdf';

const Section = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:first-child {
    align-items: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CurriculumLink = styled.a`
  color: #00339b;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Aboutme = ({ isVisible }) => {
  return (
    <Section id="sobre-mi">
        <Container>
          <Column>
            <SectionTitle>Sobre mí</SectionTitle>
            <ImgSection>
              <Image src={fotoCv} alt='Foto de perfil' />
            </ImgSection>
          </Column>
          <Column>
            <h2>Hola! Soy Franco Parodi,</h2>
            <AboutText>
              Desarrollador fullstack con un enfoque en la creación de web-components.
              Mi viaje en el mundo de la programación comenzó con cursos en JavaScript, React y backend, y actualmente,
              estoy cursando el segundp año de Ingeniería Informática en UADE.
              Durante mis estudios, he tenido la oportunidad de trabajar con lenguajes como Python y pronto, Java.
              Mis metas actualmente, son desarrollarme en la programación trabajando con lenguajes como JavaScript o Python.
              Estoy entusiasmado por las posibilidades infinitas que ofrece el desarrollo web y la creación de aplicaciones interactivas y atractivas.
              Si deseas conocer más acerca de mi trayectoria y experiencia, te invito a hacer clic en el siguiente enlace para acceder a mi
              <CurriculumLink href={documento}> Currículum</CurriculumLink>.
            </AboutText>
          </Column>
        </Container>
    </Section>
  );
};

export default Aboutme;
