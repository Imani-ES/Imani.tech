import React from 'react'
import './footer.css'
import {FiLinkedin} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Imani Muhammad-Graham</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/imani-muhammad-graham-424b4a127/"><FiLinkedin/></a>
        <a href="https://www.instagram.com/xhasing.wind/"><BsInstagram/></a>
        
      </div>
      
    </footer>
  )
}

export default Footer