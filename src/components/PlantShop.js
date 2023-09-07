import React from 'react'
import previewPlantas from '../assets/previewPlantas.png'

const plantShop = () => {
  return (
    <>
        <div className='aboutme-cont aboutme-grid'>
            <div className='img-section-cont'>
              <div className='container-img-preview'>
                <img src={previewPlantas} alt='foto-cv' className='img-preview'></img>
              </div>
            </div>
            <div>
                <h2>E-commerce de plantas</h2>
                    <p className='aboutme-text'>la idea en este texto es explicar el funcionamiento de la pagina, el tiempo que me llevo construirla y como está compuesta
                    </p>
            </div>
        </div>
    </>
  )
}

export default plantShop