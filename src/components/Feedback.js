import React from 'react'

import '../assets/css/feedback.css'
import image1 from '../assets/‫img/feedback1.jpg'
import image2 from '../assets/‫img/feedback2.jpg'
import image3 from '../assets/‫img/feedback3.jpg'
import image4 from '../assets/‫img/feedback4.jpg'
import image5 from '../assets/‫img/feedback5.jpg'

function Feedback() {
    

  return (
    <div>
        <div className='feedback-title'>
          <h1> Awesome feedback</h1>
        </div>
        <div className='feedback-wrap'>
            <div className='feedback-item'>
              <img className='feedback-img' src={image1} alt='feedback from client'></img>
            </div>
            <div className='feedback-item'>
              <img className='feedback-img' src={image2} alt='feedback from client'></img>
            </div>
            <div className='feedback-item'>
              <img className='feedback-img' src={image3} alt='feedback from client'></img>
            </div>
            <div className='feedback-item'>
              <img className='feedback-img' src={image4} alt='feedback from client'></img>
            </div>
            <div className='feedback-item'>
              <img className='feedback-img' src={image5} alt='feedback from client'></img>
            </div>
        </div>
    </div>
  )
}

export default Feedback