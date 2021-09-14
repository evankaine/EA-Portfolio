import React, { Component } from 'react'
import emailjs from "emailjs-com"
import { withRouter } from 'react-router-dom';
import "./ContactForm.css"

class ContactForm extends Component {

  sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(
      'service_wbwv6t9',
      'template_5aiorl8',
      e.target,
      'user_yaruvX1CD0EroUorr7pN5'
    ).then(res => {
      console.log(res)
    }).catch(err => console.log(err))

    this.props.history.push('/thankyou');
  }
  
  render() {
    return (
    <div className="contact-wrapper">
      <form className="contact-form" onSubmit={this.sendEmail.bind(this)}>
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
    </div>
    )
  }
}
export default withRouter(ContactForm);