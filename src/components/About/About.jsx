import React from 'react'
import './About.css'
import ME from '../../Assets/pic2.png';
import {FaUniversity} from 'react-icons/fa'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'

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
                <FaUniversity className='about__icon'/>
                <h4>Experience</h4>
                <h5>
                  <li>• Business Owner A Touch of Yulianna </li>
                  <li>• Customer Assistant at John Lewis and Partners </li>
                  <li>• Food and Beverage Assitant at the Dixon Hotel</li>
                 
                </h5>
              </article>

              <article className='about__card'>
                <MdOutlineLocalGroceryStore className='about__icon'/>
                <h4>Personal Projects</h4>
                <h5>• Developing an E-Commerce jewellery business (including the website development)</h5>
              </article>

              <article className='about__card'>
                <FaLaptopCode className='about__icon'/>
                <h4>Projects</h4>
                <h5>
                  <li>•	Daily UI challenges</li>
                  <li>•	Responsive E-Commerce apps with Figma </li>
                  <li>•	Homeless app using Figma </li>
                  <li>•	Portofolio from scratch using React js</li>
                </h5>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About