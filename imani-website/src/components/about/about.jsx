import React from 'react'
import './about.css'
import suit_pic from '../../assets/Suit_w_blue_tie.jpg'
import {GiDiploma} from 'react-icons/gi'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {RiGameLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>A bit</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={suit_pic} alt="About me Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <GiDiploma className='about_icon'/>
              <h5>Education</h5>
              <small>
                University At Buffalo
              </small>
            </article>
          
            <article className='about_card'>
              <RiGameLine className='about_icon'/>
              <h5>For Fun</h5>
              <small>Blah blha blahcsecefsf</small>
            </article>
          
            <article className='about_card'>
              <AiOutlineFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>IoT interests</small>
            </article>
          </div>
          <div className='about_paragraph'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere praesentium beatae pariatur, sit dignissimos natus nemo eaque hic at quos deserunt odit laborum? Aspernatur maxime reprehenderit aperiam placeat culpa!
            </p>
            <a href="#contact" className='btn btn-primary'>Lets Talk!</a>
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default About