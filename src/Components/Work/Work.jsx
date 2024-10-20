import React from 'react'
import img2 from '../../assets/sample1.jpeg'
import img1 from '../../assets/sample2.jpeg'
import img3 from '../../assets/sample3.jpeg'
import img4 from '../../assets/sample4.jpeg'
import { BsGithub } from 'react-icons/bs'
import { BiLink } from 'react-icons/bi'
import './Work.css'

const Work = () => {
    const works = [
        {
            image: img1,
            title: 'Responsive E-commerce Website',
            github: "#github",
            link: "#link",
        },
        {
            image: img2,
            title: 'SaaS Marketing Website',
            github: "#github",
            link: "#link",
        },
        {
            image: img3,
            title: 'Investement Website',
            github: "#github",
            link: "#link",
        },
        {
            image: img4,
            title: 'E-learning Website',
            github: "#github",
            link: "#link",
        },
        
    ]
  return (
    <div>
        <div className="work_list" id='work'>
            <h2 className="work_header">Explore My Recent Works</h2>
            <div className="work_container">
                {works.map((work, index) => (
                    <div key={index} className="work">
                        <div className="work_content">
                            <h2>{work.title} </h2> 
                            <div className="work_link">
                                <a href={work.github}> <BsGithub /></a>
                                <a href={work.link}><BiLink /> </a>
                            </div>                            
                        </div>
                        <div className="work_image">
                            <img src={work.image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work