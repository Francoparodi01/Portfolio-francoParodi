import React from 'react';

const TecnoProyecto = ({ mostrarTecnologias }) => {
  return (
    <div className='contenedor-tecno-proyecto'>
      <ul className="contenedor-tecnologias-usadas">
        {mostrarTecnologias.typescript && <li className="typescript">TypeScript</li>}
        {mostrarTecnologias.react && <li className='react'>React.js</li>}
        {mostrarTecnologias.next && <li className='next'>Next.js</li>}
        {mostrarTecnologias.tailwind && <li className='tailwind'>Tailwind</li>}
        {mostrarTecnologias.prisma && <li className='prisma'>Prisma</li>}
        {mostrarTecnologias.sql && <li className='sql'>MySql</li>}
      </ul>
    </div>
  );
}

export default TecnoProyecto;
