import React from 'react'
import fotoCv from '../assets/fotoPortfolio.png'

const Aboutme = () => {
  return (
    <section className='aboutme-section'>
        <div className='aboutme-cont aboutme-grid'>
            <div><img src={fotoCv} alt='foto-cv' className='img-home'></img></div>
            <div><h2>asdfasasfasf</h2><p>asgfasfgasfas</p></div>
        </div>
    </section>
  )
}

export default Aboutme