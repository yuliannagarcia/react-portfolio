import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiBrain } from 'react-icons/gi';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#Header');
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    let element = document.querySelector(sectionId);

    if (window.location.pathname === '/' && element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    } else {
      window.history.pushState({}, '', '/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(() => {
        element = document.querySelector(sectionId);
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    if (location.pathname.startsWith('/Project')) {
      setActiveNav(''); // Reset activeNav to prevent highlighting any navigation item
    }

    return () => {
      observer.disconnect();
    };
  }, [activeNav, location.pathname]); // Include location.pathname in the dependencies array

  return (
    <nav>
      <Link to="/" onClick={() => handleNavClick('#Header')} className={activeNav === '#Header' ? 'active' : ''}><AiOutlineHome /></Link>
      <Link to="/" onClick={() => handleNavClick('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser /></Link>
      <Link to="/" onClick={() => handleNavClick('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><GiBrain /></Link>
      <Link to="/" onClick={() => handleNavClick('#Portfolio')} className={activeNav === '#Portfolio' ? 'active' : ''}><AiOutlineFolderOpen /></Link>
      <Link to="/" onClick={() => handleNavClick('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><MdOutlineMailOutline /></Link>
    </nav>
  );
};

export default Nav;

