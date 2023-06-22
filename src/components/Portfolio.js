import React from 'react'
import VisibleComponents from './VisibleComponents'
const Portfolio = (isVisible) => {
  return (
    <section className='aboutme-section'>
    <VisibleComponents id="section-cont" className={`section-cont ${isVisible ? 'animate' : ''}`}>
    <div>     
         <div className='section-cont'>
            <h2 className='section-title'>Portfolio</h2>
        </div>
    </div>
        </VisibleComponents>
    </section>
  )
}

export default Portfolio