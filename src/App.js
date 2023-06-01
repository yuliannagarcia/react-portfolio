import React, { useState } from 'react';
import './index.css'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Socials from './components/Socials/Socials';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Project1 from './components/Project1/Project1.jsx';
import Project2 from './components/Project2/Project2.jsx';
import Project3 from './components/Project3/Project3.jsx';


function App() {
  var lastPageBeforeRefresh;

  const [selected, setSelected] = useState(lastPageBeforeRefresh);

  const currentHref = window.location.href;

  
  const handleClick = (number) => {
    setSelected(number);
  };

  console.log("selected:", selected);
  console.log("currentHref:", currentHref);


  const handleDisplay = () => {
    if (selected === 0||
      selected === 4||
      selected === 5||
      selected === 6||
      selected === 7) {
      lastPageBeforeRefresh = 0
      return (
        <>
          <Header />
          <About />
          <Experience />
          <Portfolio handleClick={handleClick} />
          <Contact />
          <Nav handleClick={handleClick} selected={selected} currentHref= {currentHref}/>
          <Socials />
          <Footer />
        </>
      );
    }
    else if (selected === 1 || currentHref.includes('Project1')) {
      lastPageBeforeRefresh = 1
      return (
        <>
          <Project1 />
          <Contact />
          <Nav handleClick={handleClick} selected={selected} currentHref= {currentHref}/>
          <Socials />
          <Footer />
        </>
      );
    } else if (selected === 2 || currentHref.includes('Project2')) {
      lastPageBeforeRefresh = 2
      return (
        <>
          <Project2 />
          <Contact />
          <Nav handleClick={handleClick} selected={selected} currentHref= {currentHref}/>
          <Socials />
          <Footer />
        </>
      );
    } else if (selected === 3 || currentHref.includes('Project3')) {
      lastPageBeforeRefresh = 3
      return (
        <>
          <Project3 />
          <Contact />
          <Nav handleClick={handleClick} selected={selected} currentHref= {currentHref}/>
          <Socials />
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Header />
          <About />
          <Experience />
          <Portfolio handleClick={handleClick} />
          <Contact />
          <Nav handleClick={handleClick} selected={selected} currentHref= {currentHref}/>
          <Socials />
          <Footer />
        </>
      );
    }
  }

  return (   
    handleDisplay()
  );
}

export default App;

/* import React from 'react';
import './index.css';
import Nav from './components/Nav/Nav';
import Socials from './components/Socials/Socials';
import MainPage from './components/Main/MainPage';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Project1 from './components/Project1/Project1.jsx';
import Project2 from './components/Project2/Project2';
import Project3 from './components/Project3/Project3';
import { Route, useLocation, Routes } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();
  console.log("path = ", location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Project3" element={<Project3 />} />
      </Routes>
    </>
  );
};

export default App; */

/* import React, { useState } from 'react';
import './index.css'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Socials from './components/Socials/Socials';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Project1 from './components/Projects/Project1';
import Project2 from './components/Projects/Project2';
import Project3 from './components/Projects/Project3';

function App() {
  const [selected, setSelected] = useState(0);
  const currentHref = window.location.href


  const handleClick = (number) => {
    setSelected(number);
  };

  return (   
    <>
      {selected  ? (
        // if a project is selected, render the corresponding component
        <>
          {selected === 1 && 
          <>
            <Project1 />
            <Contact />
            <Nav handleClick={handleClick}/>
            <Socials />
            <Footer />
          </>
          }
          {selected === 2 && 
          <>
            <Project2 />
            <Contact />
            <Nav handleClick={handleClick}/>
            <Socials />
            <Footer />
          </>
          }
          {selected === 3 && 
          <>
            <Project3 />
            <Contact />
            <Nav handleClick={handleClick}/>
            <Socials />
            <Footer />
          </>
          }
          {selected === 0 && 
          <>
            <Header />
            <About />
            <Experience />
            <Portfolio handleClick={handleClick} />
            <Contact />
            <Nav handleClick={handleClick}/>
            <Socials />
            <Footer />
          </>
          }
        </>
      ) : (
        // if no project is selected, render the standard components
        <>
          <Header />
          <About />
          <Experience />
          <Portfolio handleClick={handleClick} />
          <Contact />
          <Nav handleClick={handleClick}/>
          <Socials />
          <Footer />
      </>)}
    </>

  );
}

export default App;  */

