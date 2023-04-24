import React from 'react';
import './Socials.css'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';


const Socials = () => {
  return (
    <div className="socials">
      <a href="https://linkedin.com/in/stephanieeg12" target='_blank' rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/stephanie12eg" target='_blank' rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default Socials