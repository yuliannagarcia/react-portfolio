import React from 'react';
import CV from '../../Assets/CV-Yulianna Garcia-UX:UI.docx';
import './Header.css';

const CTA = () => {
  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#Contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="cta">
      <a href={CV} download className='btn btn-primary'>Download CV</a>
      <a onClick={handleScrollToContact} className='btn btn-primary'>Get in Contact</a>
    </div>
  );
};

export default CTA;