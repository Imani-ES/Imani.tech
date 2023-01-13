import React from 'react'
import './portfolio.css'
import bored_nerds from '../../assets/Bored_Nerds.jpg'

const data = [
  {
    id: 1,
    image:  bored_nerds,
    title:  'Bored Nerds',
    gh: "https://github.com/Imani-ES/bored-nerds",
    demo: "https://github.com/Imani-ES/bored-nerds"
  },
  {
    id: 2,
    image:  bored_nerds,
    title:  'Bored Nerds',
    gh: "https://github.com/Imani-ES/bored-nerds",
    demo: "https://github.com/Imani-ES/bored-nerds"
  },
  {
    id: 3,
    image:  bored_nerds,
    title:  'Bored Nerds',
    gh: "https://github.com/Imani-ES/bored-nerds",
    demo: "https://github.com/Imani-ES/bored-nerds"
  },
  {
    id: 4,
    image:  bored_nerds,
    title:  'Bored Nerds',
    gh: "https://github.com/Imani-ES/bored-nerds",
    demo: "https://github.com/Imani-ES/bored-nerds"
  }
];
const Portfolio = () => {
  return (
    <section id="portfolio">      
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='portfolio__container'>
        {
          data.map(({id, image, title, gh, demo}) => {
            return(
              <article key = {id} className='portfolio_item'>
                <div className='portfolio_item_img'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='project_links'>
                  <a href={gh} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )          
          })
        }
        {/* <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={bored_nerds} alt="" />
          </div>
          <h3>Bored Nerds</h3>
          <div className='project_links'>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={bored_nerds} alt="" />
          </div>
          <h3>Comming Soon</h3>
          
          <div className='project_links'>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={bored_nerds} alt="" />
          </div>
          <h3>Comming Soon</h3>
          <div className='project_links'>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={bored_nerds} alt="" />
          </div>
          <h3>Comming Soon</h3>
          <div className='project_links'>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={bored_nerds} alt="" />
          </div>
          <h3>Comming Soon</h3>
          <div className='project_links'>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Imani-ES/bored-nerds" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article> */}

      </div>
    </section>
  )
}

export default Portfolio