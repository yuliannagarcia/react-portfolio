import React from 'react';
import CV from '../../Assets/CV-Yulianna Garcia.docx';
import './Header.css';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn btn-primary'>Download CV</a>
      <a href="#Contact" className='btn btn-primary'>Get in Contact</a>
    </div>
  )
}

export default CTA