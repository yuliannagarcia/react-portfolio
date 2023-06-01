import React from 'react'
import './Project3.css';
import v1 from "../../Assets/rpvideo.mp4";

function Project3() {
  return (
    <section id="Project3" className='Project3'>
      <div className='project3'>
          <h2>Jewellery E-commerce business Idea:</h2>
          <video src={v1} controls/>
      </div>
    </section>
  )
}

export default Project3