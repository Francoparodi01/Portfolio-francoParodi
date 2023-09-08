import React from 'react'
import VisibleComponents from './VisibleComponents'
import PlantShop from './PlantShop'
import PrimerProyecto from './PrimerProyecto'

const Portfolio = (isVisible) => {
  return (
    <section className='aboutme-section'>
    <VisibleComponents id="section-cont" className={`section-cont ${isVisible ? 'animate' : ''}`}>
    <div>     
         <div className='section-cont'>
            <h2 className='section-title'>Portfolio</h2>
        </div>
        <p>Aca iria un texto descriptivo  </p>
    </div>
      <div>
          <PrimerProyecto/>
          <PlantShop/>
      </div>
    </VisibleComponents>
   </section>
  )
}

export default Portfolio