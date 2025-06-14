import React from 'react'
import './MyEducation.css'

function MyEducation() {
  return (
    <div className="myeducation-container">
        <h1 className="myeducation-heading" style={{fontSize:'50px'}}>My <span style={{color:'blue'}}>Education</span></h1>
           <div className="myeducation-wrapper">
              <div className="myeducation-top">
                   <div className="myeducation-topleft">
                      <div className="clg-name-duration">
                            <span className="clg-name">The Madura College</span>
                            <span className="clg-duration">2022-2025</span>
                       </div>
                             <div className="clg-course">
                                Bachelor of Science(Physics)
                             </div>
                   </div>
                        <div className="myeducation-topcenter">
                             <div className="dot-education"></div>
                             <div className="y-axis-line-education"></div>
                        </div>
                        <div className="myeducation-topright"></div>
              </div>
                    <div className="myeducation-bottom">
                         <div className="myeducation-bottomleft"></div>
                                <div className="myeducation-bottomcenter">
                                    <div className="dot-education"></div>
                                    <div className="y-axis-line-education"></div>
                                </div>
                                        <div className="myeducation-bottomright">
                                            <div className="schl-name-duration">
                                                <span className="schl-name">Thiagaraja Model Higher Secondary School</span>
                                                <span className="schl-duration">2021-2022</span>
                                            </div>
                                                <div className="schl-course">
                                                    Higher Secondary XII
                                                </div>
                                        </div>
                    </div>
           </div>
    </div>
  )
}

export default MyEducation