import React from 'react';
import './Header.css';
import CTA from './CTA';
import Me from '../../Assets/picofme.jpeg';
import YuliannaGarcia from '../../Assets/name.png';


const Header = () => {
  return (
    <section id="Header">
      <div id="Header" className="container header__container">
        <h2>Hey, I am </h2>
        <img src={YuliannaGarcia} alt="" className="Yulianna" />
        <h4 className="text-light">
          A Product Designer
        </h4>
        <CTA />
        <div className="me__background">
          <div className="me__image">
            <img src={Me} alt="Me" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header