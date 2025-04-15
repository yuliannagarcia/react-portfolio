import React from 'react'
import './Slides.css'
import ReactGoogleSlides from "react-google-slides";

const Slides = () => {
    return (
        <section id="Slides" className='Slides'>
            <h3>Get to know</h3>
            <h2>My Slide Presentation</h2>
            <div className="container slides__container">
                <div className="slides__content">
                    <ReactGoogleSlides
                        className='slides'
                        width={720}
                        height={540}
                        slidesLink="https://docs.google.com/presentation/d/1Dmyf8HHyAcZbplpzkNyTtNq7xYLFcziVhwBpW1cW2LA/edit?usp=sharing"
                        slideDuration={10}
                        position={1}
                        showControls
                        loop
                    />
                </div>
            </div>
        </section>
    )
}

export default Slides