import React from 'react'
import './Project4.css';
import riverapearl from "../../Assets/rpvideo.mp4";
import grunge from "../../Assets/grange.mp4";
import atoy from "../../Assets/atoy.mp4";
import sprint from "../../Assets/SPRINT COVER_2.mp4";

function Project4() {
  return (
    <section id="Project4" className='container project4'>
      <div>
        <h2>Jewellery E-commerce business Idea:</h2>
        <video className="mobile-video" src={grunge} controls />
      </div>
      <div>
        <h2>Jewellery E-commerce business Idea:</h2>
        <video className="tablet-video" src={sprint} controls />
      </div>
      <div>
        <h2>Jewellery E-commerce business Idea:</h2>
        <video className="desktop-video" src={atoy} controls />
      </div>
      <div>
        <h2>Jewellery E-commerce business Idea:</h2>
        <video className="desktop-video" src={riverapearl} controls />
      </div>
    </section>
  )
}

export default Project4