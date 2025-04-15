import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiBrain } from 'react-icons/gi';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { HiOutlinePresentationChartLine } from "react-icons/hi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#Header');
  const location = useLocation();

  const handleNavClick = (sectionId, event) => {
    //event.preventDefault(); // Prevent default behavior of anchor tag
    setActiveNav(sectionId);
    let element = document.querySelector(sectionId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    } else {
      setTimeout(() => {
        element = document.querySelector(sectionId);
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }, 100);
    }
    setTimeout(() => {
      element = document.querySelector(sectionId);
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }, 100);
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    };

    const threshold = window.innerWidth <= 600 ? 0.4 : 0.7;

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '8%',
      threshold: threshold,
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
      <Link to="/" onClick={(event) => handleNavClick('#Header', event)} className={activeNav === '#Header' ? 'active' : ''} title="Home"><AiOutlineHome /></Link>
      <Link to="/" onClick={(event) => handleNavClick('#About', event)} className={activeNav === '#About' ? 'active' : ''} title="About"><AiOutlineUser /></Link>
      <Link to="/" onClick={(event) => handleNavClick('#Experience', event)} className={activeNav === '#Experience' ? 'active' : ''} title="Experience"><GiBrain /></Link>
      <Link to="/" onClick={(event) => handleNavClick('#Portfolio', event)} className={activeNav === '#Portfolio' ? 'active' : ''} title="Portfolio"><AiOutlineFolderOpen /></Link>
      <Link to="/" onClick={(event) => handleNavClick('#Slides', event)} className={activeNav === '#Slides' ? 'active' : ''} title="Slides"><HiOutlinePresentationChartLine /></Link>
      <Link to="/" onClick={(event) => handleNavClick('#Contact', event)} className={activeNav === '#Contact' ? 'active' : ''} title="Contact"><MdOutlineMailOutline /></Link>
    </nav>
  );
};

export default Nav;

