import React, { useEffect } from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {GiBrain} from 'react-icons/gi';
import {AiOutlineFolderOpen} from 'react-icons/ai';
import {MdOutlineMailOutline} from 'react-icons/md';
import { useState } from 'react';

const Nav = ({handleClick, selected, currentHref}) => {
  const [activeNav, setActiveNav] = useState()
  const handleNav = () => {
    if (
      (selected === 0 )
    ) {
      setActiveNav('#Home');
    }
    else if (
      (selected === 1 )||
      (selected === 2 )||
      (selected === 3 )
    ) {
      setActiveNav('#Portfolio');
    }
    else if (
      (selected === 4 )
    ) {
      setActiveNav('#About');
    }
    else if (
      (selected === 5 )
    ) {
      setActiveNav('#Experience');
    }
    else if (
      (selected === 6 )
    ) {
      setActiveNav('#Portfolio');
    }
    else if (
      (selected === 7 )
    ) {
      setActiveNav('#Contact');
    }
    else if ( selected === undefined && 
    (currentHref.includes('Project1')||
    currentHref.includes('Project2')||
    currentHref.includes('Project3'))
    ) {
      setActiveNav('#Portfolio');
    }
    else if ( selected === undefined && 
      (currentHref.includes('Home')
      )) {
        setActiveNav('#Home');
    }
    else if ( selected === undefined && 
      (currentHref.includes('About')
      )) {
        setActiveNav('#About');
    }
    else if ( selected === undefined && 
      (currentHref.includes('Experience')
      )) {
        setActiveNav('#Experience');
    }
    else if ( selected === undefined && 
      (currentHref.includes('Portfolio')
      )) {
        setActiveNav('#Portfolio');
    }
    else if ( selected === undefined && 
      (currentHref.includes('Contact')
      )) {
        setActiveNav('#Contact');
    }
  };

  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  useEffect(() => {
    handleNav();
  }, [selected, currentHref]);

  return (
      <nav>
        <a href="#Home" onClick= {() => {handleNavClick('#Home'); handleClick(0);}} className={activeNav === '#Home' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#About" onClick= {() => {handleNavClick('#About'); handleClick(4);}} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#Experience" onClick= {() => {handleNavClick('#Experience'); handleClick(5);}} className={activeNav === '#Experience' ? 'active' : ''}><GiBrain/></a>
        <a href="#Portfolio" onClick= {() => {handleNavClick('#Portfolio'); handleClick(6);}} className={activeNav === '#Portfolio' ? 'active' : ''}><AiOutlineFolderOpen/></a>
        <a href="#Contact" onClick= {() => {handleNavClick('#Contact'); handleClick(7);}} className={activeNav === '#Contact' ? 'active' : ''}><MdOutlineMailOutline/></a>
      </nav>
  )
}
export default Nav; 

/* import React, { useEffect } from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {GiBrain} from 'react-icons/gi';
import {AiOutlineFolderOpen} from 'react-icons/ai';
import {MdOutlineMailOutline} from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Nav = ({location}) => {
  const [activeNav, setActiveNav] = useState()

  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  useEffect(() => {
    handleNav();
  }, [location.pathname]);

  const handleNav = () => {
    if (location.pathname === '/'){
      setActiveNav('/');
    }
    else if (location.pathname === '/About'){
      setActiveNav('/About');
    }
    else if (location.pathname === '/Experience'){
      setActiveNav('/Experience');
    }
    else if (location.pathname === '/Portfolio'||location.pathname === '/Project1'||location.pathname === '/Project2'||location.pathname === '/Project3'){
      setActiveNav('/Portfolio');
    }
    else if (location.pathname === '/Contact'){
      setActiveNav('/Contact');
    }
  };

  return (
      <nav>
        <Link to="Home" onClick= {() => handleNavClick('/')} ><a className={activeNav === '/' ? 'active' : ''}><AiOutlineHome/></a></Link>
        <Link to="About" onClick= {() => handleNavClick('/About')}><a className={activeNav === '/About' ? 'active' : ''}><AiOutlineUser/></a></Link>
        <Link to="Experience" onClick= {() => handleNavClick('/Experience')} ><a className={activeNav === '/Experience' ? 'active' : ''}><GiBrain/></a></Link>
        <Link to="Portfolio" onClick= {() => handleNavClick('/Portfolio')}><a  className={activeNav === '/Portfolio' ? 'active' : ''}><AiOutlineFolderOpen/></a></Link>
        <Link to="Contact" onClick= {() => handleNavClick('/Contact')} ><a className={activeNav === '/Contact' ? 'active' : ''}><MdOutlineMailOutline/></a></Link>
      </nav>
  )
}
export default Nav; */
