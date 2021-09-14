import "./Header.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import React from 'react'

export default function Header() {
  return (
    <div className="header-wrapper" id="header">
      
      <div className="header-container">
        
        <h1 className="header-text-name">
          <span className="title-span">
            EVAN ALVES
          </span>
        </h1>
        <hr />
        <p className="header-text"><span className="text-span">Front end web developer from Brooklyn, NY</span></p>
        
      <div className="scroll-wrapper">
          <a className="scroll-to-projects" href="/#projects">
          <ArrowForwardIosIcon fontSize="large" className="arrow-icon"/>
          </a>
      </div>

      </div>
    </div>
  )
}
