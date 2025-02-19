import React from 'react'
import './App.css'
import yellow from './assets/yellow_case.png'
import black from './assets/black_case.png'
import white from './assets/white_case.png'
const Transparency = () => {
  return (
    <section className='hero'>
       <div className='hero_text__wrapper'>
              <h1 data-animation = 'header'>A Bold Evolution in Transparency</h1>
              <p data-animation = 'paragraph'>In signature Nothing fashion, Ear (a) refines our transparent design while introducing a bold new direction with its fresh bubble aesthetic—your pocket’s newest essential companion.</p>
            </div>
            <div className='image_wrapper'>
            <div className='image second_image'>
              <img src={yellow} alt="" data-animation = 'image'/>
            </div>
            <div className='image third_image'>
              <img src={black} alt="" data-animation = 'image'/>
            </div>
            <div className='image fourth_image'>
              <img src={white} alt="" data-animation = 'image'/>
            </div>
            </div>
             
    </section>
  )
}

export default Transparency
