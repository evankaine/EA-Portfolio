import React from 'react'
import { Link } from "react-router-dom"
import "./About.css"


export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">

        <div className="linkedin-container">
          <a href="https://www.linkedin.com/in/evan-alves" target="_blank">
            <img class="linkedin" src="https://i.imgur.com/ibdjVE1.png" alt="linkedin" />
          </a>
        </div>
        
        <div className="github-container">
          <a href="https://github.com/evankaine" target="_blank">
            <img class="github" src="https://i.imgur.com/vOFcERh.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  )
}
