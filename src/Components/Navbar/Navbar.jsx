import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>Derek</h2>
        </div>
        <div className="links">
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="button">
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar