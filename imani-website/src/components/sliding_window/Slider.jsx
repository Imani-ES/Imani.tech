import React from 'react'
import './slider.css'
import {AiOutlineDoubleLeft} from 'react-icons/ai'
import {AiOutlineDoubleRight} from 'react-icons/ai'


const slider = () => {
  return (
    <div className='slider__container'>

        <div className='left_slide slide_arrow'>
            <AiOutlineDoubleLeft/>
        </div>

        <div className="slide_content">

        </div>

        <div className="right_slide slide_arrow">
            <AiOutlineDoubleRight/>
        </div>

    </div>
  )
}

export default slider