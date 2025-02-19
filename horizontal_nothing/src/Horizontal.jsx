import React from 'react'
import './App.css'
import heroImage from './assets/hero_nothing.webp'
import Transparency from './Transparency'
const Horizontal = () => {
  return (
    <div className='hero'>
      <div className='hero_text__wrapper'>
        <h1 data-animation-header>Ear (a)</h1>
        <p data-animation-paragraph>Crafted for every part of your day, Ear (a) delivers an immersive listening experience designed for true music lovers.</p>
      </div>
      <div className='image hero_image'>
        <img src={heroImage} alt="" data-animation-image/>
      </div>
       
    </div>
  )
}

export default Horizontal
