import React from 'react'
import './Projects.css'
import { ExternalLink } from 'lucide-react';
const projectData=[
  {
    name:'Portfolio pro',
    date:'22-08-2004',
    tech:['react','jsx','html'],
    link:'htypjosjj',
    learn:'Learn more'
  },
  {
    name:'Portfolio pro',
    date:'22-08-2004',
    tech:['react'],
    link:'htypjosjj',
    learn:'Learn more'
  },
  {
    name:'Portfolio pro',
    date:'22-08-2004',
    tech:['react'],
    link:'htypjosjj',
    learn:'Learn more'
  },
  {
    name:'Portfolio pro',
    date:'22-08-2004',
    tech:['react'],
    link:'htypjosjj',
    learn:'Learn more'
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
                               <div className="learn-more"><a href="">{pro.learn}</a></div>
                </div>
             ))}
            </div>
    </div>
  )
}

export default Projects