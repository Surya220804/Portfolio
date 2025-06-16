import React from 'react'
import './About.css'
import AboutImg from '../../assest/about-image.webp'
function About() {
  const skillData=[
    {
      skills:['HTML5','CSS3','JavaScript','React.js','Github','Redux']
    }
  ]
  return (
    <div className="about-container">
      <h1 className='reaon-sor-hire'>Why do you <span style={{color:'blue'}}>Hire </span>Me?</h1>
      <div className="about-wrapper">
        <div className="about-top">
          <div className="about-me">
            <h1 className="about-me-header">About Me</h1>
              <span className="about-detail">B.Sc. Physics Graduate passionate about web development, with practical experience in building projects using React and JavaScript.</span>
          </div>
              <div className="about-work">
                 <p className="about-projects">10+ Projects</p>
                 <span className="underline"></span>
                 <p className="about-projects">Internship+Experience</p>
                 <span className="underline"></span>
              </div>
        </div>
         <div className="about-bottom">
          <div className="about-image">
            <img src={AboutImg} alt="" className="aboutimg" onContextMenu={(e)=>e.preventDefault()}/>
          </div>
          <div className="about-skills">
               <h1 className="skills-heading">Skills</h1>
               {skillData.map((skillset,i)=>(
             <div className="skill-set-container">  
             {skillset.skills.map((skill,i)=>(
               <p className="skill-set">{skill}</p>
               ))}
               </div>))}
          </div>

         </div>
      </div>
    </div>
  )
}

export default About