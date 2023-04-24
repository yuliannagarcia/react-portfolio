import React from 'react';
import './index.css'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Socials from './components/Socials/Socials';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
/* import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
 */

function App() {
  return (   
  <>
    <Header/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Nav/>
    <Socials/>
    <Footer/>
  </>
  );
}

export default App;
