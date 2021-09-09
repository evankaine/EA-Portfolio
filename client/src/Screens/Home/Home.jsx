import "./Home.css"
import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../Layout/Nav/Nav"
import Header from "../../Layout/Header/Header"

export default function Home() {
  return (
    <div className="home-wrapper">
      <Nav />
      <Header />
      <div className="preview-wrapper">

        <div className="image-wrapper" id="projects">
          <a target="_blank" href="https://eathesyndicate.netlify.app/">
            <img className="syndicate-preview"
              src="https://i.imgur.com/a7SuIQd.png"
              alt="Syndicate Preview">
            </img>
          </a>
        </div>

        <div className="image-wrapper">
          <a target="_blank" href="https://eaimgnation.netlify.app/">
            <img className="syndicate-preview"
              src="https://i.imgur.com/l35PCkg.png"
              alt="imgNation Preview" />
          </a>
        </div>

        <div className="image-wrapper">
          <a target="_blank" href="https://eacrave.netlify.app/">
            <img className="syndicate-preview"
              src="https://i.imgur.com/I4LSTEC.png"
              alt="Crave Preview" />
          </a>
        </div>

        <div className="image-wrapper">
          <img className="syndicate-preview"
            src=""
            alt="Wayfinder Preview" />
        </div>
      </div>
      <div className="scroll-to-top-wrapper">
        <a className="scroll-to-top" href="/#header">Back To Top</a>
      </div>
    </div>
  )
}
