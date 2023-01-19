import React from 'react'
import './exp.css'
import {MdOutlineVerified} from 'react-icons/md'

import Slider from '../sliding_window/Slider'

const Exp = () => {
  return (
    <section id = "exp">
      <h5>My skills and</h5>
      <h2>My Experience</h2>

      <div className='container exp__container'>
        <div className='exp__frontend'>
          <h3>Frontend Development</h3>
          <div className='exp_content'>
            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
              
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>
          </div>
        </div>

        <div className='exp__backend'>
          <h3>Backend Development</h3>
          <div className='exp_content'>
            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>

            <article className='exp_details'>
              <MdOutlineVerified className='check' />
              <div className='skill'>
                <h4>Skill</h4>
                <small>Skill level</small>                
              </div>
            </article>
          </div>
        </div>

      </div>
      <div className="slide_container">
        <Slider/> 
      </div>
      
    </section>
  )
}

export default Exp
