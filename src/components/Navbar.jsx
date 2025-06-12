import React from 'react'
import './Navbar.css' 

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <h3>Portfolio</h3>
          </div>
          <div>
            <a href="#about">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
