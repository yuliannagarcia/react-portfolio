import React from 'react'
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { MdPhonelinkRing } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vb2751j', 'template_rlmid4n', form.current, 'hpGIf3z5Rr3Wnz9s1')
    e.target.reset()
  };
  return (
    <section id="Contact" className='Contact'>
      <h3>Get In Touch</h3>
      <h2>With Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='icon' />
            <h3>Email</h3>
            <h4>yuliannagarcia01@gmail.com</h4>
            <a href="mailto:yuliannagarcia01@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdPhonelinkRing className='icon' />
            <h3>Phone</h3>
            <h4>+44 7908 153032</h4>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact