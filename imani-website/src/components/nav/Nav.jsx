import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {AiFillMessage} from 'react-icons/ai'
import {MdBuildCircle} from 'react-icons/md'
import {GiBookshelf} from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  // Implement useState hook to hav nav bar update based on current view
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='container nav_bar'>
    
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className = {activeNav ==='#' ? 'active' : ''}><FaHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav ==='#about' ? 'active' : ''}><FcAbout/></a>
        <a href="#exp" onClick={() => setActiveNav('#exp')} className = {activeNav ==='#about' ? 'exp' : ''}><MdBuildCircle/></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className = {activeNav ==='#portfolio' ? 'active' : ''}><GiBookshelf/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav ==='#contact' ? 'active' : ''}><AiFillMessage/></a>
        
      </nav>
    </div>
  )
}

export default Nav