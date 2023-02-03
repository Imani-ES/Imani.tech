import React from 'react'
import './slider.css'
import {AiOutlineDoubleLeft} from 'react-icons/ai'
import {AiOutlineDoubleRight} from 'react-icons/ai'
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
  },
  {
    id: 5,
    image:  bored_nerds,
    title:  'Bored Nerds',
    gh: "https://github.com/Imani-ES/bored-nerds",
    demo: "https://github.com/Imani-ES/bored-nerds"
  }
];
const slider = () => {
  return (
    <div className='slider__container'>

        <div className='left_slide slide_arrow'>
            <AiOutlineDoubleLeft/>
        </div>

        <div className="slider_content">
        {
          data.map(({id, image, title, gh, demo}) => {
            return(
              <article key = {id} className='slider_item'>
                <div className='slider_item_img'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='slider'>
                  <a href={gh} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )          
          })
        }
        </div>

        <div className="right_slide slide_arrow">
            <AiOutlineDoubleRight/>
        </div>

    </div>
  )
}

export default slider