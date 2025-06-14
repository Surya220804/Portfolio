import React from 'react'
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);
  return (
    <div className='header-container'>
  
        <div className="header-left">
            <h4 className="header-title">Portfolio <span className='header-span'>Pro</span></h4>
        </div>
            <div className="header-center">
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/experience'>Experience</Link>
               <Link to='/projects'>Projects</Link>
               <Link to='/contact'>Contact</Link>
             </div>
             <div className="header-right">
               <button className="dark-toggle-button" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <div className="header-btn">Contact Me</div>
             </div>
                
    </div>
  )
}

export default Header