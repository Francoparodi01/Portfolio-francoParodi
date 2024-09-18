import React from 'react';

const TecnoProyecto = ({ mostrarTecnologias }) => {
  return (
    <div className='contenedor-tecno-proyecto'>
      <ul className="contenedor-tecnologias-usadas">
        {mostrarTecnologias.javascript && <li className='javascript language'>JavaScript</li>}
        {mostrarTecnologias.typescript && <li className="typescript language">TypeScript</li>}
        {mostrarTecnologias.react && <li className='react language'>React.js</li>}
        {mostrarTecnologias.next && <li className='next language'>Next.js</li>}
        {mostrarTecnologias.tailwind && <li className='tailwind language'>Tailwind</li>}
        {mostrarTecnologias.prisma && <li className='prisma language'>Prisma</li>}
        {mostrarTecnologias.sql && <li className='sql language'>MySql</li>}
        {mostrarTecnologias.mongo && <li className='mongo language'>MongoDB</li>}
        {mostrarTecnologias.node && <li className='node language'>Node.js</li>}
        {mostrarTecnologias.express && <li className='express language'>Express</li>}
        {mostrarTecnologias.fetchapi && <li className='fetchapi language'>Fetch api</li>}
        {mostrarTecnologias.materialui && <li className='materialui language'>Material UI</li>}
        {mostrarTecnologias.firebase && <li className='firebase language'>Firebase</li>}
        {mostrarTecnologias.apis && <li className='apis language'>Apis</li>}
      </ul>
    </div>
  );
}

export default TecnoProyecto;