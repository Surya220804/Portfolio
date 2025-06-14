import React from 'react'
import './Experience.css'
import MyExperience from './MyExperience/MyExperience'
import MyEducation from './MyEducation/MyEducation'

function Experience() {
  return (
    <div className='experience-container'>
      <MyExperience/>
      <MyEducation/>
    </div>
  )
}

export default Experience