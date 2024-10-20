import React from 'react'
import figma from '../../assets/figma.svg'
import css from '../../assets/css.svg'
import html5 from '../../assets/html5.svg'
import php from '../../assets/php.svg'
import nodejs from '../../assets/nodejs.svg'
import mongodb from '../../assets/mongodb.svg'
import tailwindcss from '../../assets/tailwindcss.svg'
import visualstudio from '../../assets/visualstudio.svg'
import react from '../../assets/reactjs.svg'
import javascript from '../../assets/javascript.svg'
import './Skills.css'
import Marquee from 'react-fast-marquee'

const Skills = () => {
  return (
    <div>
        <div className="skills">
            <h2>My Work Tools</h2> 
            <div className="skills_container">
            <Marquee direction='right' speed={150} delay={5}>
                <div className="skills_img1">
                    <img src={figma} alt="" />
                    <img src={tailwindcss} alt="" />
                    <img src={html5} alt="" />
                    <img src={css} alt="" />
                    <img src={php} alt="" />
                </div>
            </Marquee>
            <Marquee direction='left' speed={150} delay={5}>
                <div className="skills_img2">
                    <img src={nodejs} alt="" />
                    <img src={mongodb} alt="" />
                    <img src={javascript} alt="" />
                    <img src={react} alt="" />
                    <img src={visualstudio} alt="" />
                </div>
            </Marquee>
                
            </div>
        </div>
    </div>
  )
}

export default Skills