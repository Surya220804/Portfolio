import React from 'react'
import './Home.css'
import SuryaImg from '../../assest/surya.jpg'
import suryaResume from '../../assest/SuryaResume.pdf'
function Home() {
  return (
   <div className="home-container">
    <div className="home-profile">
      <img src={SuryaImg} alt="" className="my-photo" onContextMenu={(e) => e.preventDefault()}/>
    </div>
    <div className="home-detail">
      <h1 className='introduction'>Hi,I'm Surya K P</h1>
      <h4 className='role'>I am a <span className="animated-text">Frontend Developer</span></h4>
      <a href={suryaResume} target='blank'> <button className="download-resume"> View Resume</button></a>
    </div>
   </div>
  )
}

export default Home