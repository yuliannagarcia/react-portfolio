import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  <footer>
    <ul className="permalinks">
      <ol><a href="#Home">Home</a></ol>
      <ol><a href="#About">About</a></ol>
      <ol><a href="#Experince">Experience</a></ol>
      <ol><a href="#Portfolio">Portfolio</a></ol>
      <ol><a href="#Contact">Contact</a></ol>
    </ul>
    <div className="footer__copyright">
      <small>Made using React JS</small>
      <small>&copy; Stephanie Estrada Garcia. All rights reserved.</small>
    </div>
  </footer>
  )
}

export default Footer