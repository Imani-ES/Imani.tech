import React from 'react'
import './exp.css'
import {MdOutlineVerified} from 'react-icons/md'

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
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>
          </div>
        </div>

        <div className='exp__backend'>
          <h3>Backend Development</h3>
          <div className='exp_content'>
            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>

            <article className='exp_details'>
              <div className='skill'>
                <MdOutlineVerified className='check' />
                <h4>Skill</h4>
              </div>
              <small>Skill level</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Exp