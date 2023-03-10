import React from 'react'
import './header.css'

import CV from '../../assets/Imani_Resume_h.pdf'
import pro_pic from '../../assets/Pro_pic.jpg'

import {FiLinkedin} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>

            <h5>Hello, I'm</h5>
            <h1>Imani Muhammad-Graham</h1>
            <h5 className='text-light'></h5>

            <div className='connect_buttons'>
              <a href={CV} download className='btn'>Download Resume</a>
              <a href="#contact" className='btn btn-primary'>Connect</a>
            </div>
            
            <div className='me'>
              <div className='header_socials'>
                <a href="https://www.linkedin.com/in/imani-muhammad-graham-424b4a127/" className='social__img' target='_blank'><FiLinkedin/></a>
                <a href="https://github.com" className='social__img' target='_blank'><FaGithub/></a>        
              </div>

              <a href="#contact">
                <img  className='header_img' src={pro_pic} alt="me" />
              </a>    
              
              <a href="#contact" className='scroll__down social__img'>-- Contact Me --</a>
          
            </div>            

        </div>
    </header>    
  )
}

export default Header