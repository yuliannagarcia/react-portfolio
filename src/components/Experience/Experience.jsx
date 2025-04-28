import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="Experience" className='Experience'>
      <h3>Get To Know</h3>
      <h2>My Technical Skills</h2>

      <div className="container experience__container">

        <div className="experience__backend">
          <h3> UX/UIDesign </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>User Research</h4>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4> Information Architecture</h4>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>Wireframing</h4>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>Visual Communication</h4>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>Prototyping</h4>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>Interactive Designing</h4>

              </div>
            </article>
          </div>
        </div>


        <div className="experience__frontend">
          <h3>Other</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>Photoshop</h4>
              </div>
            </article>
          <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>Illustrator</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>After Effects</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>InDesign</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>ReactJS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>Flask</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>GoLang</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience