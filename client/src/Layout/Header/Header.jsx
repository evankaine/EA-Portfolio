import "./Header.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import React from 'react'

export default function Header() {

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleWindowResize);
  
  const spansSlow = document.querySelectorAll('.spanSlow');
  const spansFast = document.querySelectorAll('.spanFast');
  
  let width = window.innerWidth;
  
  function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width/2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
      span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
      span.style.transform = `translate(${speedFast}px)`
    })
  }
  //to recalculate width when the window is resized
  function handleWindowResize() {
    width = window.innerWidth;
  }
  
  return (
    <div className="wrap" id="header">
      <div className="header-text-name">
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanSlow">EVAN ALVES</span>
          </div>
        </div>

      <div className="right">
        <div className="content">
          <span className="spanSlow">EVAN ALVES</span>
        </div>
      </div>
    </div>
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

{/* <h1 className="header-text-name"><span>EVAN ALVES</span></h1> */}
        