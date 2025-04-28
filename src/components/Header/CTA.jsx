import React from 'react';
import CV from '../../Assets/Yulianna_Garcia_CV.pdf';
import './Header.css';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn btn-primary'>Download CV</a>
    </div>
  );
};

export default CTA;