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
          <a href="#contact" className='btn btn-primary lets_talk'>Lets Talk!</a>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere praesentium beatae pariatur, sit dignissimos natus nemo eaque hic at quos deserunt odit laborum? Aspernatur maxime reprehenderit aperiam placeat culpa!
          </p> */}
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card about_card_1'>
              <div className='about_card_subject about_card_1_subject'>
                <GiDiploma className='about_icon'/>
                <h5 className='title'>Education</h5>
              </div>      
              <p className='about_card_1_p'>
                University at buffalo is where i recieved a degree University at buffalo is where i recieved a degree University at buffalo is where i recieved a degree University at buffalo is where i recieved a degree
              </p>
            </article>
          
            <article className='about_card about_card_2'>
              <div className="about_card_subject about_card_2_subject">
                <RiGameLine className='about_icon'/>
                <h5>For Fun</h5>
              </div>
              <p className='about_card_2_p'>
               Blah blha blahcsecefsf Blah blha blahcsecefsf Blah blha blahcsecefsf Blah blha blahcsecefsfBlah blha blahcsecefsf
              </p>
            </article>
          
            <article className='about_card about_card_3'>
              <div className="about_card_subject about_card_3_subject">
                <AiOutlineFolderOpen className='about_icon'/>
                <h5>Projects</h5>
              </div>
              <p className='about_card_3_p'>
                oienarviniqjevknionqv a afdv adfvrea rea oienarviniqjevknionqv a afdv adfvrea rea oienarviniqjevknionqv a afdv adfvrea rea  oienarviniqjevknionqv a afdv adfvrea rea  
              </p>
            </article>

          </div>
          <div className='about_paragraph'>
            <a href="#contact" className='btn btn-primary lets_talk'>Lets Talk!</a>
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default About