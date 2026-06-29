import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <div className="nav-svg">
          <img src="./logo.svg" alt="" />
        </div>
          <div className="logo-caption">
           <h4>Sahayak</h4>
            <p>Your Ai Health Companion</p>
          </div>
      </div>

      <div className="sections">
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/report-simplifier">Report Simplifier</Link></li>
        <li><Link to="/symptom-analyser">Symptom Analyser</Link></li>
        <li><Link to="/women-health">Women's Health</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
