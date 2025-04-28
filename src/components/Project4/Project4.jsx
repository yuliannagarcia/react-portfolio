import React from 'react'
import './Project4.css';
import riverapearl from "../../Assets/rpvideo.mp4";
import grunge from "../../Assets/grange.mp4";
import atoy from "../../Assets/atoy.mp4";
import sprint from "../../Assets/sprintCover.mp4";

function Project4() {
  return (
    <section id="Project4" className='container project4'>
      <div>
        <h2>The London Grudge:</h2>
        <video className="mobile-video" src={grunge} controls />
        <div className='project4_description'>
          <p>The London Grudge is a vibrant music events page dedicated to showcasing the latest gigs, underground shows, and must-see bookings across London. Born from a UI project idea generator, this concept evolved into a dynamic platform celebrating the city's ever-evolving music scene. The visual identity was developed using Photoshop for the bold, edgy logo, InDesign for structuring the overall layout, and After Effects to animate engaging, eye-catching ad content. The user interface was designed in Figma, offering an intuitive and stylish experience for music lovers hunting for their next live event.</p>
        </div>
      </div>
      <div>
        <h2>Sprint:</h2>
        <video className="tablet-video" src={sprint} controls />
        <div className='project4_description'>
          <p>Sprint is a redesigned running fitness tracker app tailored specifically for marathon runners, offering a streamlined experience inspired by the familiar UI of MyFitnessPal. Unlike broader fitness platforms, Sprint focuses on running features such as pace analysis, training schedules, hydration tracking, and goal milestones for long-distance runners. The app’s user interface was crafted using Illustrator for design assets, InDesign for layout planning, and brought to life with engaging motion graphics in After Effects to enhance usability and interaction. Sprint is built to motivate and support runners on their journey to the finish line.</p>
        </div>
      </div>
      <div>
        <h2>A Touch of Yulianna:</h2>
        <video className="desktop-video" src={atoy} controls />
        <div className='project4_description'>
          <p>‘A Touch of Yulianna’ is a thoughtfully curated baking blog I created to bring my business of homemade treats to life. Featuring a wide range of recipe categories from classic cakes to creative baked goods. This blog offers inspiration, tips, and personal stories behind each creation. More than just a collection of recipes, it serves as a visual and conceptual blueprint for my project, and I hope to one day launch it as a full business. It captures the essence of what I envision: a warm, inviting space where my love for baking meets creativity and community.</p>
        </div>
      </div>
      <div>
        <h2>Rivera Pearl:</h2>
        <video className="desktop-video" src={riverapearl} controls />
        <div className='project4_description'>
          <p>Rivera Pearl is a conceptual jewellery eCommerce app designed to reflect elegance, simplicity, and modern style. To explore how I’d like the final platform to look and function, I used WordPress to build a mock website, helping me understand the structure, tools, and features needed for a successful online store. This process allowed me to experiment with layout, product presentation, and user experience elements, giving me a clearer vision of what’s required to bring Rivera Pearl to life as a fully functional, polished eCommerce brand.</p>
        </div>
      </div>
    </section>
  )
}

export default Project4