import React, { useState } from 'react'
import "./ContactRoute.css"

import ThankYou from '../ThankYou/ThankYou';
import Form from "../ContactForm/ContactForm"

export default function Contactroute() {

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
      setIsSubmitted(true);
  }



  return (
    <div className="contact-route-wrapper">
      <div className="contact-route">
        <Form />
      </div>
    </div>
  )
}