import React from 'react';
import './Socials.css'
import YG from '../../Assets/yg.png';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


const Socials = () => {
  return (
    <>
      <div className='socials'>
        <a href="https://www.linkedin.com/in/yulianna-garcia-37919a1a2" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/yuliannagarcia" target='_blank' rel="noreferrer"><BsGithub /></a>
        <img src={YG} alt="" className='logo' />
      </div>
    </>
  )
}

export default Socials