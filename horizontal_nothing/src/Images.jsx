import React from 'react'
import './App.css'
import whiteOpened from './assets/white_opened.png'
import blackCase from './assets/black_case.png'
import yellowCase from './assets/yellow_case.png'
import yellowOpened from './assets/yellow_opened.png'
import black from './assets/single_ear_black.png'
import white from './assets/single_ear_white.png'
import yellow from './assets/single_ear_yellow.png'
const Images = () => {
  const images = [whiteOpened, white, blackCase, yellow, black, yellowCase, yellowOpened]
  return (
    <div className='section_hero'>
    {images.map((img, idx) => (
      <div className="images__all" key={idx}>
        <img src={img} alt="" />
      </div>
    ))}
    </div>
  )
}

export default Images
