import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { House, FileText, Stethoscope, Flower } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        />)}
      <div className='navbar'>
        <Link to="/" className="logo">
          <div className="nav-svg">
            <img src="./logo.svg" alt="" />
          </div>
          <div className="logo-caption">
            <h4>Sahayak</h4>
            <p>Your AI Health Companion</p>
          </div>
        </Link>
        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
        <div className={`sections ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/"><House /> {" "} Home</Link></li>
            <li><Link to="/report-simplifier"><FileText />Report Simplifier</Link></li>
            <li><Link to="/symptom-analyser"><Stethoscope />Symptom Analyser</Link></li>
            {/* <li><Link to="/women-health"><Flower />Women's Health</Link></li> */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
