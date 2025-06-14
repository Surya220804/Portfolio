import React from 'react'
import './MyExperience.css'

function MyExperience() {
  return (
    <div className="my-experience-container">
        <h1 className="myexperience-heading" style={{fontSize:'50px'}}>My <span style={{color:'blue'}}>Experience</span></h1>
         <div className="myexperience-wrapper">
                <div className="experience-leftside"></div>
                        <div className="experience-center">
                            <div className="dot"></div>
                            <div className="y-axis-line"></div>
                        </div>
                            <div className="experience-rightside">
                                <div className="intern-company-detail">
                                    <span className="company-name">Ideelit Softwares LLP</span>
                                    <span className="onsite">Hybrid</span>
                                </div>
                                        <div className="intern-role-duration">
                                            <span className="intern-role">Technical Intern</span>
                                            <span className="intern-duration">3 months</span>
                                        </div>
                                            <div className="intern-description">
                                                <ul>
                                                    <li>Designed and developed responsive web pages using React.js, creating reusable components, collaborating with team members, and gaining hands-on experience in real-world frontend projects while strengthening core React skills like JSX, props, state, and event handling.</li>
                                                </ul>
                                            </div>
                            </div>
         </div>
    </div>
  )
}

export default MyExperience