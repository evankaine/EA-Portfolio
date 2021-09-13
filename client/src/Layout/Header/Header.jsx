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
        <p className="header-text"><span className="text-span">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse vitae massa quis lorem faucibus egestas.
          Nam porta lacus non augue cursus, sed commodo purus dapibus.
          Nunc ut metus sagittis justo vehicula scelerisque. Donec lectus erat,
          rhoncus at dui ut, varius scelerisque sapien. Phasellus et consequat lacus.</span></p>
        
      <div className="scroll-wrapper">
          <a className="scroll-to-projects" href="/#projects">
          <ArrowForwardIosIcon fontSize="large" className="arrow-icon"/>
          </a>
      </div>

      </div>
    </div>
  )
}
