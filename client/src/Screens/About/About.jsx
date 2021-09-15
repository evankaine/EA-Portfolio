import React from 'react'
import "./About.css"


export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">

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
    </div>
  )
}
