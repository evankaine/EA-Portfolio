import "./Header.css"
import React from 'react'

export default function Header() {
  return (
    <div className="header-wrapper" id="header">
      
      <div className="header-container">
        
        {/* <h1 className="header-text-name">
          <span className="title-span">
            EVAN ALVES
          </span>
        </h1> */}
        <p className="header-text"><span className="text-span">HI, I'm Evan - a web developer based in Brooklyn, NY</span></p>
        {/* <hr /> */}
      {/* <div className="scroll-wrapper">
          <a className="scroll-to-projects" href="/#projects">
          <ArrowForwardIosIcon fontSize="large" className="arrow-icon"/>
          </a>
      </div> */}

      </div>
    </div>
  )
}
