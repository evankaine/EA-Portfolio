import "./Home.css"
import React from 'react'

import Header from "../../Layout/Header/Header"

export default function Home() {
  return (
    <div className="home-wrapper">
      
      <Header />
      <div className="preview-wrapper">

        <div className="image-wrapper" id="projects">
          <a rel="noreferrer" target="_blank" href="https://eathesyndicate.netlify.app/">
            <img className="syndicate-preview"
              src="https://i.imgur.com/a7SuIQd.png"
              alt="Syndicate Preview">
            </img>
          </a>
        </div>

        <div className="image-wrapper">
          <a rel="noreferrer" target="_blank" href="https://eaimgnation.netlify.app/">
            <img className="syndicate-preview"
              src="https://i.imgur.com/l35PCkg.png"
              alt="imgNation Preview" />
          </a>
        </div>

        <div className="image-wrapper">
          <a rel="noreferrer" target="_blank" href="https://eacrave.netlify.app/">
            <img className="syndicate-preview"
              src="https://i.imgur.com/VzeYdNQ.png"
              alt="Crave Preview" />
          </a>
        </div>

        <div className="image-wrapper">
          <a rel="noreferrer" target="_blank" href="https://evankaine.github.io/Wayfinder/">
            <img className="syndicate-preview"
              src="https://i.imgur.com/ucpXbkX.png"
              alt="Wayfinder Preview" />
          </a>
        </div>
      </div>
      <div className="scroll-to-top-wrapper">
        <a className="scroll-to-top"
          href="/#header">
          <span className='scroll-to-top-text'>
            Back To Top
          </span>
        </a>
      </div>
    </div>
  )
}
