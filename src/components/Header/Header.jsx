import React from 'react';
import './Header.css';
import CTA from './CTA';
import Me from '../../Assets/pic.png';

const Header = () => {
  return (
    <header>
      <div id="Home" className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Stephanie</h1>
        <h4 className="text-light">
          Aspiring Developer
        </h4>
        <CTA/>
        <div className="me__background">
          <div className="me__image">
            <img src={Me} alt="Me" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header