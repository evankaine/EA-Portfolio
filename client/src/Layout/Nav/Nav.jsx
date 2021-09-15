import "./Nav.css"
import { Link } from "react-router-dom"
import React from 'react'

export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">

        <div className="home-link-wrapper">
          <Link to="/" className="home-link">
            <h3 className="home-text">Portfolio</h3>
          </Link>
        </div>

        <div className="logo">
          <h1 className="logo-text">＜EVAN/﹥</h1>
        </div>

        <div className="nav-link-wrapper">
          <div className="resume-link-wrapper">
            <Link to="/resume" className="resume-link">
              <h3 className="resume-text">Resume</h3>
            </Link>
          </div>
          <div className="about-link-wrapper">
            <Link to="/about" className="about-link">
              <h3 className="about-text">About</h3>
            </Link>
          </div>
          <div className="contact-link-wrapper">
            <Link to="/contact" className="contact-link">
              <h3 className="contact-text-nav">Contact</h3>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
