import React from 'react'
import './Projects.css'
import { ExternalLink } from 'lucide-react';
import elearningImg from '../../assest/Thumbnail-e-learning.png'
import portfolioImg from '../../assest/Thumbnail-portfolio.png'
import socialmediaImg from '../../assest/thumbnail-social.jpeg'
const projectData=[
  {
    name:'Portfolio pro',
    date:'15-06-2025',
    tech:['react','jsx','css'],
    link:'https://surya220804.github.io/Portfolio/#/',
    learn:'Learn more',
    img:{elearningImg}
  },
  {
    name:'e-learning',
    date:'10-04-2025',
    tech:['react','jsx','css'],
    link:'https://surya220804.github.io/GuviClone/',
    learn:'Learn more',
    img:{portfolioImg}
  },
  {
    name:'SocialMedia UI',
    date:'20-05-2025',
    tech:['react'],
    link:'https://surya220804.github.io/social-media/',
    learn:'Learn more',
    img:{socialmediaImg}
  },
]
function Projects() {

  return (
    <div className='project-container'>
      <div className="project-heading">
        <h1 className='my-projects'>My <span style={{color:'blue'}}> Projects</span></h1>
      </div>
            <div className="project-wrapper">
             {projectData.map((pro,index)=>(
                <div className="project-items" key={index}>
                  
                    <div className="project-title">
                      <span className="project-name">{pro.name}</span>
                          <a href={pro.link} className="project-visit-icon" target='_blank'><ExternalLink/></a>
                    </div>
                        <div className="project-date">{pro.date}</div>
                          <div className="technology-used">
                            {pro.tech.map((tech,i)=>(
                              <span className="technologies" key={i}>{tech}</span>
                            ))}
                          </div>
                               <div className="learn-more"><a href={pro.link} target='_blank'>{pro.learn}</a></div>
                </div>
             ))}
            </div>
    </div>
  )
}

export default Projects;