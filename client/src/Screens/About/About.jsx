import React from 'react'
import { Link } from "react-router-dom"
import "./About.css"


export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">

        <div className="me">
          <img className="me-image" src="https://i.imgur.com/IpUMG2v.png" alt="evan alves" />
        </div>
        <div className="desc">
          <p className="desc-p">
            <span className="about-title">About Me</span>
              <br />
            <span className="about-content">
              My name is Evan Alves and I am a Front End Developer
              and recent graduate of General Assembly.

              I have a thirst for knowledge and love taking on new challenges.
            </span>
          </p>
        </div>

        
      </div>
      <div className="contact-route-container">
        Contact me <Link className="contact-route" to="/contact">here</Link> or at the links below
      </div>

      
    <div className="social-wrapper">
      <div className="linkedin-container">
          <a href="https://www.linkedin.com/in/evan-alves" rel="noreferrer" target="_blank">
            <img className="linkedin" src="https://i.imgur.com/ibdjVE1.png" alt="linkedin" />
          </a>
        </div>
        
        <div className="github-container">
          <a href="https://github.com/evankaine" rel="noreferrer" target="_blank">
            <img className="github" src="https://i.imgur.com/vOFcERh.png" alt="github" />
          </a>
        </div> 
    </div>
      <div className="cert-container">
        <a className="cert-link" rel="noreferrer" target="_blank" href="https://generalassemb.ly/education/software-engineering-immersive/new-york-city"> 
          <img className="cert-image" src="https://i.imgur.com/Jw3t7WL.png?1" alt="GA Cert" />
        </a>
      </div>
      
    </div>
  )
}
