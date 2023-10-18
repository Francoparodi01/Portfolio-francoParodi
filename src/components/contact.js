import React from 'react'
import {SiGmail} from "react-icons/si"
import {FcContacts} from "react-icons/fc"

const contact = () => {
  return (
    <section className='aboutme-section' id='contacto'>
    <div className='section-cont'>
    <h2 className='section-title'>Contacto <FcContacts className='mb-2'/></h2>
    </div>
    <ul className='menu-ul'>
        <li>
            <SiGmail color='red' className='ml-3'/> 
            <a
             href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDXXrmlzJTTmGmpSTzBRmDxJLngdmsDQTLNWLWzwHmPCZsLmxJqPqSTvNHxBqfSVbwFqNnM"
             className='repositorio-proyectos'
             >
                Francoparodi2001@gmail.com
            </a>
        </li>
    </ul>
    </section>
  )
}

export default contact