import React from 'react';
import './index.css'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Socials from './components/Socials/Socials';
import Footer from './components/Footer/Footer';
import Project1 from './components/Project1/Project1.jsx';
import Project2 from './components/Project2/Project2.jsx';
import Project3 from './components/Project3/Project3.jsx';
import Project4 from './components/Project4/Project4.jsx';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home/Home.jsx';

function App() {
  return (
      <>
        <Nav />
        <Socials/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project1" element={<Project1 />} />
          <Route path="/Project2" element={<Project2 />} />
          <Route path="/Project3" element={<Project3 />} />
          <Route path="/Project4" element={<Project4 />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;