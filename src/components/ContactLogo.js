import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const ContactLogo = () => {
  return (
    <div className='head-menu contact-logo'>   
        <ul className='menu-ul'>
            <li className='head-item'><AiFillLinkedin/></li>
            <li className='head-item'><AiFillGithub/></li>
        </ul>   
    </div>
  )
}

export default ContactLogo