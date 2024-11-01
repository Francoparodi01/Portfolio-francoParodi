// GradientBackground.js
import React, { useState, useRef } from 'react';

const GradientBackground = ({ children }) => {
  const [background, setBackground] = useState('linear-gradient(135deg, #00bfff, #ff00ff)');
  const aboutRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, currentTarget } = event;
    const { offsetWidth } = currentTarget;

    const xPosPercentage = (clientX / offsetWidth) * 100;
    const newBackground = `linear-gradient(90deg, #00bfff ${xPosPercentage}%, #ff00ff)`;
    setBackground(newBackground);
  };

  const handleClickAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div
      style={{
        background,
        width: '100%',
        height: '100%',
      }}
      onMouseMove={handleMouseMove}
      ref={aboutRef}
    >
      {children}
    </div>
  );
};

export default GradientBackground;
