
import fotoCv from '../assets/fotoPortfolio.png'
import ContactLogo from './ContactLogo'
const Introduction = ({isVisible}) => {

  return (

      <section className='home'>
        <div className='introduction'>
            <h3 className='text-introduction'>¡Hola! <span className="hand-emoji" role="img" aria-label="Saludo">🖐</span><br/>soy <span className='name-int'> Franco</span>, <br/> Jr. Frontend developer</h3>
        </div>
        <div className='img-homeContainer'>
            <img src={fotoCv} alt='foto mia' className='img-home'></img>
        </div>
        <div>
        <ContactLogo/>
        </div>
      </section>

  )
}

export default Introduction
