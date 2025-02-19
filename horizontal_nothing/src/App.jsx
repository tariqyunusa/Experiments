import './App.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Horizontal from './Horizontal'
import Nav from './assets/Nav'
import Transparency from './Transparency'
import Images from './Images'
import Clear from './Clear'
gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
    <>
      <Nav />
      <section className='__hero'>
       
        <Horizontal />
        <Transparency />
        <Images />
        <Clear />
      </section>
    </>
  )
}

export default App
