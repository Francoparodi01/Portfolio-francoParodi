import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                    <div className="navbar-footer">
                        <li><p class="copyright-text">© 2024 Franco Parodi. Todos los derechos reservados.</p></li>
                        <a href="#sobre-mi" id='foot-item'>Sobre mi</a>
                        <a href="#portfolio" id='foot-item'>portfolio</a>
                        <a href="#contacto" id='foot-item'>Contacto</a>
                </div>
                <hr />
            </div>
            <div className="container-footer">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="twitter" target='blanc' href="https://github.com/Francoparodi01"><FaGithub/></a></li>
                            <li><a className="dribbble" target='blanc' href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDXXrmlzJTTmGmpSTzBRmDxJLngdmsDQTLNWLWzwHmPCZsLmxJqPqSTvNHxBqfSVbwFqNnM"><SiGmail /></a></li>
                            <li><a className="linkedin" target='blanc' href="https://www.linkedin.com/in/franco-parodi-a638ab206/"><FaLinkedin /></a></li>   
                        </ul>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;
