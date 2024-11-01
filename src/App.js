import React, { useRef } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/about/About';
import MySkills from './components/MySkills/MySkills';
import MyProjects from './components/MyProjects/MyProjects';
import './App.css';
import Certificates from './components/Certificates/Certificates';

const App = ({projectsRef}) => {
  const aboutRef = useRef(null);

  return (
    <>
      <HeroSection/>
      <MySkills/>
      <MyProjects/>
      <Certificates/>
    </>
  );
};

export default App;