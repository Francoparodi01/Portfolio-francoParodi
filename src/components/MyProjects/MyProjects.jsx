import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

import rest from '../../assets/rest.png';
import gymApp1 from '../../assets/gymApp1.png';
import previewDiscord from '../../assets/previewDiscord.png';
import tracker from '../../assets/tracker1.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const ProjectsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  color: theme.palette.common.white,
  flexDirection: 'column',
[theme.breakpoints.down('sm')]: {
  marginTop: '.2em',
},
}));

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  color: 'white',
  border: `.1px solid ${theme.palette.grey[700]}`,
  zIndex: 1,
  transition: 'color .5s ease-in',
  marginLeft: '2rem',
  marginTop: '20px',
  backgroundColor: '#000',
  '&:hover': {
    backgroundColor: '#000',
    boxShadow: '0 0 10px #000',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '2.5rem',
  },
}));

const ColorSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#02688a',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  transition: 'transform 0.15s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '2.5rem',
  },
}));

const TechnologySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2.5rem',
  },
}));

const TechnologyTitle = styled(Box)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#ffffff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginRight: '10px',
    
  },
}));

const projects = [
  {
    name: 'Rest API',
    img: rest,
    destacado: 1,
    description: `API REST con autenticación, capas organizadas y estructura modular para asegurar mantenibilidad y escalabilidad, utilizando Node.js, Express, TypeScript y MongoDB.`,
    repositorio: 'https://github.com/Francoparodi01/API-REST'
  },
  { name: 'Gym App',
     img: gymApp1,
      destacado: 2,
      description: `Aplicación de gimnasio desarrollada en React.js y Material UI, con diseño responsive y funcionalidades para gestionar entrenamientos y seguimiento de progreso mediante APIs.`,
      repositorio: 'https://github.com/Francoparodi01/GymApp'
    },
  { name: 'Discord Clone',
     img: previewDiscord,
      destacado: 1,
       description: `Esta aplicación es un clon de Discord, diseñada para facilitar la comunicación en tiempo real entre usuarios. Permite la interacción a través de canales de texto, audio y video, así como el envío y gestión de archivos como imágenes y PDFs....`,
        repositorio: 'https://github.com/Francoparodi01/DiscordClone'
    },
  { name: 'Tracker App',
     img: tracker,
      destacado: 4,
    description: `Aplicación para gestionar gastos e ingresos con gráficos comparativos, edición y categorización de transacciones para una mejor organización financiera.`,
    repositorio: 'https://github.com/Francoparodi01/Expense-tracker',
    },
];

const MyProjects = () => {
  const [soloDestacados, setSoloDestacados] = useState(false);
  const [ordenarAscendente, setOrdenarAscendente] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);

  const proyectosFiltrados = soloDestacados
    ? projects.filter((project) => project.destacado === 1)
    : projects;

  const proyectosOrdenados = ordenarAscendente
    ? proyectosFiltrados.sort((a, b) => a.destacado - b.destacado)
    : proyectosFiltrados.sort((a, b) => b.destacado - a.destacado);

  const toggleDestacados = () => {
    setSoloDestacados(!soloDestacados);
  };

  const toggleDescription = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <ProjectsContainer>
      <ColorSection>
        <TechnologyTitle>Mis proyectos</TechnologyTitle>
      </ColorSection>
      <TechnologySection>
        <StyledButton variant="contained" onClick={toggleDestacados}>
          {soloDestacados ? 'Mostrar Todos' : 'Mostrar Destacados'}
        </StyledButton>
        <Box sx={{ width: '100%', mt: 5, px: { xs: 2, sm: 0 } }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={5}>
            {proyectosOrdenados.map((project, index) => (
              <Item key={index} sx={{ height: 'auto' }}>
                <img
                  src={project.img}
                  alt={project.name}
                  style={{ width: '90%', maxHeight: '240px' }}
                />
                <h3 style={{ margin: '10px 0' }}>{project.name}</h3>
                <p style={{ textAlign: 'center' }}>
                  {project.description
                    ? expandedProject === index
                      ? project.description
                      : `${project.description.substring(0, 100)}...`
                    : 'No description available'}
                </p>
                {project.description && (
                  <>
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => toggleDescription(index)}
                    >
                      {expandedProject === index ? 'Ver menos' : 'Ver más'}
                    </Button>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, alignContent:'center', alignItems:'center'}}>
                      <a href={project.deploy} target="_blank" rel="noopener noreferrer" style={{ marginRight: '30px',  textDecorationStyle:'none'}}>
                        <FaExternalLinkAlt size={24} color="#02688a" style={{marginRight:'10px'}} />
                        Deploy
                      </a>
                      <a href={project.repositorio} target="_blank" rel="noopener noreferrer" style={{ textDecorationStyle:'none'}}>
                        <FaGithub size={24} color="#02688a"  />
                        Repositorio
                      </a>
                    </Box>
                  </>
                )}
              </Item>
            ))}
          </Masonry>
        </Box>
      </TechnologySection>
    </ProjectsContainer>
  );
};

export default MyProjects;
