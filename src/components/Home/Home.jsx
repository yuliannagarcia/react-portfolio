import React from 'react'
import Header from "../Header/Header";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Slides from "../Slides/Slides";
import Contact from '../Contact/Contact';

function Home() {
    return (
        <>
            <Header />
            <About />
            <Experience />
            <Portfolio />
            <Slides />
            <Contact />
        </>
    )
}

export default Home
