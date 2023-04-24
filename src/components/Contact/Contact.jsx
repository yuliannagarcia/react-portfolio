import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {MdPhonelinkRing} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kgrlsme', 'template_tqued7q', form.current, 'XCsq06g5K7XSbG2mK')
    e.target.reset()  
  };
  return (
    <section id="Contact">
      <h3>Get In Touch</h3>
      <h2>With Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='icon'/>
            <h3>Email</h3>
            <h4>Stephanie_es_ga@hotmail.co.uk</h4>
            <a href="mailto:stephanie_es_ga@hotmail.co.uk">Send a message</a>     
          </article>
          <article className="contact__option">
            <MdPhonelinkRing className='icon'/>
            <h3>Phone</h3>
            <h4>+447957147171</h4>  
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact