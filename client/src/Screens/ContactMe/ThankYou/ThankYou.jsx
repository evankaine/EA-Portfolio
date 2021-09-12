import React from 'react'
import "./ThankYou.css"

export default function ThankYou() {
  return (
    <div className="thankyou-wrapper">
      <h1 className="contact-text-text">Thank You!</h1>
      <iframe src="https://giphy.com/embed/gOkawaguYNiSI"
        width="480" height="180"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen>
      </iframe>
      <form >
        <input className="return-button"
          type="submit"
          value="Return to Contact Form">
        </input>
      </form>
    </div>
  )
}
