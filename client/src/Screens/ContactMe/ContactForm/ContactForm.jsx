import React from 'react'
import emailjs from "emailjs-com"
import "./ContactForm.css"

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(
      'service_wbwv6t9',
      'template_5aiorl8',
      e.target,
      'user_yaruvX1CD0EroUorr7pN5'
    ).then(res => {
      console.log(res)
    }).catch(err=> console.log(err))
  }
  return (
    <div className="contact-wrapper">
      <form className="contact-form" onSubmit={sendEmail}>
        <h1 className="contact-text">Contact Me</h1>
        <input placeholder="name" type="text" name="name" />
        <input placeholder="email" type="email" name="user_email" />
        <textarea placeholder="message" name="message" rows="4" />
        <input type="submit" value="send" />
      </form>
    </div>
  )
}
