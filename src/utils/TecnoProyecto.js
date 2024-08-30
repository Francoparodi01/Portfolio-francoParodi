import styled from 'styled-components';

const ContainerTecnoProyecto = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const TecnologiasList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const LanguageItem = styled.li`
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  
  &.javascript {
    background-color: #f7df1e;
    color: #000;
  }
  &.typescript {
    background-color: #3178c6;
  }
  &.react {
    background-color: #61dafb;
  }
  &.next {
    background-color: #000000;
  }
  &.tailwind {
    background-color: #38bdf8;
  }
  &.prisma {
    background-color: #2d3748;
  }
  &.sql {
    background-color: #003b57;
  }
  &.mongo {
    background-color: #47A248;
  }
  &.node {
    background-color: #68A063;
  }
  &.express {
    background-color: #000000;
  }
  &.fetchapi {
    background-color: #009688;
  }
  &.materialui {
    background-color: #0081CB;
  }
  &.firebase {
    background-color: #FFCA28;
  }
  &.apis {
    background-color: #4CAF50;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
`;

const TecnoProyecto = ({ mostrarTecnologias }) => {
  return (
    <ContainerTecnoProyecto>
      <TecnologiasList>
        {mostrarTecnologias.javascript && <LanguageItem className='javascript'>JavaScript</LanguageItem>}
        {mostrarTecnologias.typescript && <LanguageItem className="typescript">TypeScript</LanguageItem>}
        {mostrarTecnologias.react && <LanguageItem className='react'>React.js</LanguageItem>}
        {mostrarTecnologias.next && <LanguageItem className='next'>Next.js</LanguageItem>}
        {mostrarTecnologias.tailwind && <LanguageItem className='tailwind'>Tailwind</LanguageItem>}
        {mostrarTecnologias.prisma && <LanguageItem className='prisma'>Prisma</LanguageItem>}
        {mostrarTecnologias.sql && <LanguageItem className='sql'>MySql</LanguageItem>}
        {mostrarTecnologias.mongo && <LanguageItem className='mongo'>MongoDB</LanguageItem>}
        {mostrarTecnologias.node && <LanguageItem className='node'>Node.js</LanguageItem>}
        {mostrarTecnologias.express && <LanguageItem className='express'>Express</LanguageItem>}
        {mostrarTecnologias.fetchapi && <LanguageItem className='fetchapi'>Fetch API</LanguageItem>}
        {mostrarTecnologias.materialui && <LanguageItem className='materialui'>Material UI</LanguageItem>}
        {mostrarTecnologias.firebase && <LanguageItem className='firebase'>Firebase</LanguageItem>}
        {mostrarTecnologias.apis && <LanguageItem className='apis'>APIs</LanguageItem>}
      </TecnologiasList>
    </ContainerTecnoProyecto>
  );
}

export default TecnoProyecto;
