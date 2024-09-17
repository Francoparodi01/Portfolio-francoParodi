import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedBorder = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación solo se activa una vez
    threshold: 0.5, 
  });

  
};

export default AnimatedBorder;