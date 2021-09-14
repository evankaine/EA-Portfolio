import React, { useState } from 'react'
import emailjs from "emailjs-com"
import "./ContactForm.css"
import ThankYou from '../ThankYou/ThankYou';

export default function ContactForm() {

  const [notSubmitted, setNotSubmitted] = useState(true)

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(
      'service_wbwv6t9',
      'template_5aiorl8',
      e.target,
      'user_yaruvX1CD0EroUorr7pN5'
    ).then(res => {
      console.log(res)
    }).catch(err => console.log(err))

    setNotSubmitted(false)
  }

  function returnForm() {
    setNotSubmitted(true)
  }

return (
  <div className="contact-wrapper">
    {notSubmitted ? (
      <form className="contact-form" onSubmit={sendEmail}>
        <h1 className="contact-text">CONTACT ME</h1>
        <input placeholder="Name"
          type="text"
          name="name"
          required />
        <input placeholder="Email"
          type="email"
          name="user_email"
          required />
        <textarea placeholder="Message"
          name="message"
          rows="4"
          required />
        <input className="input-button"
          type="submit"
          value="Send">
          </input>
      </form>
    ) : (
      <div>
        <ThankYou onClick={returnForm} />
          
      </div>
    )}
    </div>
  )
}
