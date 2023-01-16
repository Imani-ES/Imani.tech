import React from 'react'
import './footer.css'
import {FiLinkedin} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#">Imani Muhammad-Graham</a>

      <ul className='permalinks'>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#exp">Experience</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/imani-muhammad-graham-424b4a127/"><FiLinkedin/></a>
        <a href="https://www.instagram.com/xhasing.wind/"><BsInstagram/></a>
        
      </div>
      
    </footer>
  )
}

export default Footer