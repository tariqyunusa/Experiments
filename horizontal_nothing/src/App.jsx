import './App.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Horizontal from './Horizontal'
import Nav from './assets/Nav'
import Transparency from './Transparency'
import Images from './Images'
import Clear from './Clear'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

function App() {
  const heroRef = useRef(null)
  const textReveal = () => {
    const paragraph = document.querySelectorAll("[data-animation ='paragraph']")
    const header = document.querySelectorAll("[data-animation ='header']")
    const image = document.querySelectorAll("[data-animation ='image']")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            
            if(entry.isIntersecting) {
                gsap.from(entry.target, {
                    opacity: 0,
                    y: 150,
                    ease: "power2.in",
                    autoAlpha: 1,
                  
                
                })
                observer.unobserve(entry.target)
            }
        })
    },
    {threshold: 0.09}
)
paragraph.forEach((p) => observer.observe(p))
header.forEach((h) => observer.observe(h))
image.forEach((i) => observer.observe(i))
}
  useEffect(() => {
    let scroll = heroRef.current.offsetWidth
    let screenWidth = window.innerWidth
    const totalScroll = scroll - screenWidth
    
    const tl = gsap.timeline()

    tl.to(heroRef.current, {x: -totalScroll})
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=" + totalScroll ,
      scrub: true,
      pin: true,
      // horizontal: true,
      animation: tl,
      // markers: true
    })
    textReveal()
  },[])
  return (
    <>
      <Nav />
      <section className='__hero' ref={heroRef}>
       
        <Horizontal />
        <Transparency />
        <Images />
        <Clear />
      </section>
    </>
  )
}

export default App
