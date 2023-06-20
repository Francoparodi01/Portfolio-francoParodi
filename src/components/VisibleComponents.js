import React,{ useEffect, useState } from 'react'

const VisibleComponents = ({id, children, className}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const titleElement = document.getElementById(`${id}`);
  
        if (titleElement) {
          const titlePosition = titleElement.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
  
          if (titlePosition < windowHeight) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [id]);
  
    useEffect(() => {
      const titleElement = document.getElementById(`${id}`);
  
      if (isVisible && titleElement) {
        titleElement.classList.add('animate');
      } else if (!isVisible && titleElement) {
        titleElement.classList.remove('animate');
      }
    }, [id, isVisible]);
    return(
        <div id={id} className={`${className} ${isVisible ? 'animate' : ''}`}>
            {children}
        </div>
    );
}


export default VisibleComponents