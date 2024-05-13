import React from 'react'
import './About.css'
import ME from '../../Assets/pic2.png';
import { FaUniversity } from 'react-icons/fa'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'

const About = () => {
  return (
    <section id="About" className='About'>
      <h3>Get To Know</h3>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUniversity className='about__icon' />
              <h4>Experience</h4>
              <h5>
                <ul>
                  <li>UX design bootcamp with Love Circular</li>
                  <li>Software Engineer shadowing at Sky </li>
                  <li>Sky Get into Tech programme </li>
                  <li>01 Founders full-stack development programme </li>
                </ul>
              </h5>
            </article>
            <article className='about__card'>
              <MdOutlineLocalGroceryStore className='about__icon' />
              <h4>Projects</h4>
              <ul>
                <li>Designed a Responsive E-Commerce apps with Figma </li>
                <li>Designed volunteering app to help the homeless using Figma </li>
                <li>Created a responsive Mood tracking app for children using UX skills, Python, Javascript, HTML and CSS</li>
              </ul>
            </article>
            <article className='about__card'>
              <FaLaptopCode className='about__icon' />
              <h4>Personal Projects</h4>
              <h5>
                <ul>
                  <li>Completed daily UI challenges</li>
                  <li>Developing an E-Commerce jewellery business (including the website development)</li>
                  <li>Business Owner of A Touch of Yulianna </li>
                  <li>Developed UX Portfolio using React JS</li>
                </ul>
              </h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About