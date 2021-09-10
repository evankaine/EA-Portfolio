import "./Header.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import React from 'react'

export default function Header() {
  return (
    <div className="header-wrapper" id="header">
      
      <div className="header-wrapper">
        
        <h1 className="header-text-name">EVAN ALVES</h1>
        <p className="header-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse vitae massa quis lorem faucibus egestas.
          Nam porta lacus non augue cursus, sed commodo purus dapibus.
          Nunc ut metus sagittis justo vehicula scelerisque. Donec lectus erat,
          rhoncus at dui ut, varius scelerisque sapien. Phasellus et consequat lacus.</p>
        
      <div className="scroll-wrapper">
          <a className="scroll-to-projects" href="/#projects">

          <ArrowForwardIosIcon fontSize="large" className="arrow-icon"/>
          </a>
      </div>

      </div>
    </div>
  )
}
