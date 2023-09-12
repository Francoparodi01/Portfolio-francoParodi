import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const ContactLogo = () => {
  return (
    <div className='head-menu contact-logo'>   
        <ul className='menu-ul'>
            <li>
              <a href='https://www.linkedin.com/in/franco-parodi-a638ab206/' className='contact-item' id='head-item'><AiFillLinkedin/></a>
            </li>
            <li>
              <a href='https://github.com/Francoparodi01' className='contact-item' id='head-item'><AiFillGithub/></a>
            </li>
        </ul>   
    </div>
  )
}

export default ContactLogo