import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {AiFillMessage} from 'react-icons/ai'
import {MdBuildCircle} from 'react-icons/md'
import {GiBookshelf} from 'react-icons/gi'
import { useState } from 'react'

const nav = () => {
  // Implement useState hook to hav nav bar update based on current view
  return (
    <nav>
      <a href="#header"><FaHome/></a>
      <a href="#about"><FcAbout/></a>
      <a href="#exp"><MdBuildCircle/></a>
      <a href="#portfolio"><GiBookshelf/></a>
      <a href="#contact"><AiFillMessage/></a>
      
    </nav>
  )
}

export default nav