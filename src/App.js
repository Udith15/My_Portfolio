import './App.css';
import Particles from '../src/components/Particles.jsx';
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; // Uncomment if you have a Navbar component
import Home from './components/Home.jsx';

function App() {
  return (
<div style={{ width: '100%', height: '100vh', position: 'relative'}}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  <Navbar/>
  <Home/>
</div>
  );
}

export default App;
