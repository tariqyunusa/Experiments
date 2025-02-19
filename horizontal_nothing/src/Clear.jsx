import React from 'react'
import yellow from './assets/single_ear_yellow.png'
import white from './assets/single_ear_white.png'
import black from './assets/single_ear_black.png'
import './App.css'

const Clear = () => {
  return (
    <section className='hero'>
           <div className='hero_text__wrapper'>
                  <h1 data-animation-header>Crystal-Clear Conversations, Anywhere</h1>
                  <p data-animation-paragraph>Ear (a) cuts through the noise, ensuring your voice stands out from everyday distractions for calls that feel as natural as face-to-face conversations. Featuring a new talk mic and an extra airway on the stem to let wind pass through, we’ve reduced interference by 60% compared to Ear (2).</p>
                </div>
                <div className='image___'>
                <div className='imagees single_1'>
                  <img src={yellow} alt="" data-animation-image/>
                </div>
                <div className='imagees single_2'>
                  <img src={black} alt="" data-animation-image/>
                </div>
                <div className='imagees single_3'>
                  <img src={white} alt="" data-animation-image/>
                </div>
                </div>
                 
        </section>
  )
}

export default Clear
