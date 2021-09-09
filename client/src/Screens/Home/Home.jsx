import "./Home.css"
import React from 'react'
import Nav from "../../Layout/Nav/Nav"
import Header from "../../Layout/Header/Header"

export default function Home() {
  return (
    <div className="home-wrapper">
      <Nav />
      <Header />
      <div className="preview-wrapper">

        <div className="image-wrapper" id="projects">
          <img className="syndicate-preview"
            src="https://i.imgur.com/dZ0NCUX.png"
            alt="syndicate preview" />
        </div>

        <div className="image-wrapper">
          <img className="syndicate-preview"
            src="https://i.imgur.com/dZ0NCUX.png"
            alt="syndicate preview" />
        </div>

        <div className="image-wrapper">
          <img className="syndicate-preview"
            src="https://i.imgur.com/dZ0NCUX.png"
            alt="syndicate preview" />
        </div>

        <div className="image-wrapper">
          <img className="syndicate-preview"
            src="https://i.imgur.com/dZ0NCUX.png"
            alt="syndicate preview" />
        </div>
      </div>
      <div className="scroll-to-top-wrapper">
        <a className="scroll-to-top" href="/#header">Back To Top</a>
      </div>
    </div>
  )
}
