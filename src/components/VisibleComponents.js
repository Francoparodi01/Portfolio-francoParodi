import React, { useEffect, useState, useRef } from 'react';

const VisibleComponents = ({ id, children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const titlePosition = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setIsVisible(titlePosition < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const titleElement = elementRef.current;

    if (isVisible && titleElement) {
      titleElement.classList.add('animate');
    } else if (!isVisible && titleElement) {
      titleElement.classList.remove('animate');
    }
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? 'animate' : ''}`}
>
      {children}
    </div>
  );
};

export default VisibleComponents;
