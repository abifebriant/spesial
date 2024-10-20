import React from 'react'
import hero_img from '../../assets/home.jpg'
import './Hero.css'

const Hero = () => {

  return (
    <div>
      <div className="hero">
      <div className="hero_top">
        <div className="hero_left">
          <h2>I'm Abi Febrian TW</h2>
          <h1>Junior<span>FullStack</span> Developer </h1>
          <p>I'm a junior fullstack engineer  of industrial working experience.  </p>
          <div className="buttons">
            <button>Hire Me</button>
            <button>View My Projects</button>
          </div>
        </div>
        <div className="hero_right">
          <div className="hero_img">
            <img src={hero_img} alt="" />
          </div>
        </div>
      </div>
      <div className="hero_bottom">
        <div className="hero_info">
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="hero_info">
          <h1>1000+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="hero_info">
          <h1>800+</h1>
          <p>Satisfied Clients</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero