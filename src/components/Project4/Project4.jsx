import React from 'react'
import './Project4.css';
import v1 from "../../Assets/rpvideo.mp4";

function Project4() {
  return (
      <div className='container project4'>
          <h2>Jewellery E-commerce business Idea:</h2>
          <video src={v1} controls/>
      </div>
  )
}

export default Project4