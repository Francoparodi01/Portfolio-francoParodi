import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiGmail } from "react-icons/si";
import styled from 'styled-components';

// Estilos usando styled-components
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ContactList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
`;

const ContactItem = styled.a`
  color: #333;
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00339b;
  }
`;

const ContactLogo = () => {
  return (
    <ContactContainer>   
      <ContactList>
        <li>
          <ContactItem href='https://www.linkedin.com/in/franco-parodi-a638ab206/' target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </ContactItem>
        </li>
        <li>
          <ContactItem href='https://github.com/Francoparodi01' target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </ContactItem>
        </li>
        <li>
          <ContactItem href='https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDXXrmlzJTTmGmpSTzBRmDxJLngdmsDQTLNWLWzwHmPCZsLmxJqPqSTvNHxBqfSVbwFqNnM' target="_blank" rel="noopener noreferrer">
            <SiGmail />
          </ContactItem>
        </li>
      </ContactList>
    </ContactContainer>
  );
}

export default ContactLogo;
