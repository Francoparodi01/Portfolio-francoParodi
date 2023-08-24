import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const ContactLogo = () => {
  return (
    <div className='head-menu contact-logo'>   
        <ul className='menu-ul'>
            <li className='head-item'><a href='https://www.linkedin.com/in/franco-parodi-a638ab206/' className='link-home'><AiFillLinkedin/></a></li>
            <li className='head-item'><a href='https://github.com/Francoparodi01' className='link-home'><AiFillGithub/></a></li>
        </ul>   
    </div>
  )
}

export default ContactLogo