import fotoCv from '../assets/fotoPortfolio.png'
import ContactLogo from './ContactLogo'

const Introduction = () => {

  return (
    <section className='home'>
        <div className='introduction'>
            <h3 className='text-introduction'>¡Hola! <br/>soy <span className='name-int'> Franco</span>, <br/> junior Frontend developer</h3>
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