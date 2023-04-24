import React from 'react'
import './About.css'
import ME from '../../Assets/pic.png';
import {FaUniversity} from 'react-icons/fa'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'

const About = () => {
  return (
    <section id="About">
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
                  <li>• Jewellery Stockroom Assistant at Vivienne Westwood Ltd </li>
                  <li>• Medical Engineering Project at Great Ormond Street Hospital and Kings College London Hospital</li>
                  <li>• Neurology Hospital Placement at Evelina London Hospital</li>
                  <li>• Urology Hospital Placement at Evelina London Hospital</li>
                  <li>• Medicine foundation year and Medicine Bsc year 1</li>
                  <li>• Third Year Computer Science Student</li>
                  <li>• Online Video Platform Software Engineer Work Experience at Sky Studios</li>
                </h5>
              </article>

              <article className='about__card'>
                <MdOutlineLocalGroceryStore className='about__icon'/>
                <h4>Personal Projects</h4>
                <h5>• Developing an e-commerce jewellery business (including the website development)</h5>
              </article>

              <article className='about__card'>
                <FaLaptopCode className='about__icon'/>
                <h4>Projects</h4>
                <h5>
                  <li>•	Six Java practical projects</li>
                  <li>•	Unity 3D math game.</li>
                  <li>•	Medical web app development project with JavaScript, React JS, Node.JS, HTML, CSS, JSON, Express.JS, Java.</li>
                  <li>•	Python data and algorithms projects.</li>
                  <li>•	Artificial intelligence Java practical programming tasks.</li>
                  <li>•	Oracle SQL database design.</li>
                  <li>•	Machine Learning python assignment.</li>
                  <li>•	Haskell programming assignment.</li>
                  <li>•	Client & Server-Side application with database connectivity with previously mentioned languages and SQLite.</li>
                </h5>
              </article>
            </div>

            <a href="#Contact" className='btn btn-primary'>Get in Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About