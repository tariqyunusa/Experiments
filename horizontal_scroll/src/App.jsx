import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Locations from './Locations'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Modal from './Modal'
gsap.registerPlugin(ScrollTrigger)

function App() {

 
  const textRef = useRef(null)
  const wrapperRef = useRef(null)
  const [modal, setModal] = useState({active: false, index: 0})
  const [position, setPosition] = useState({x:0, y: 0})
  let totalScroll
  const Location = [
    {name: "Bali", img: '/bali.jpg'},
    {name: "Istanbul", img: '/istanbul.jpg'},
    {name: "Makkah", img: '/Makkah.jpg'},
    {name: "Kyoto", img: '/kyoto.jpg'},
    {name: "Seychelles", img: '/seychelles.jpg'},
    {name: "Marrakech", img: '/marakecch.jpg'},
    {name: "UAE", img: '/UAE.jpg'},
    {name: "Switzerland", img: '/switzerland.jpg'},
    {name: "Santorini", img: '/santorini.jpg'},
    {name: "Maldives", img: '/maldives.jpg'},
    {name: "Tehran", img: '/tehran.jpg'},
    {name: "Zanzibar", img: '/zanzibar.jpg'},
    {name: "Iceland", img: '/iceland.jpg'}]

  useEffect(() => {
    if (wrapperRef.current) {
      const textWidth = wrapperRef.current.offsetWidth
      const screenWidth = window.innerWidth
      totalScroll = textWidth - screenWidth
    }

    const tl = gsap.timeline()
    tl.to(wrapperRef.current, {
      duration: 3,
      x: -totalScroll,
      ease: 'none'
    })

    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 20%",
      end: "+=" + totalScroll,
      markers: true,
      scrub: 1,
      pin: true,
      animation: tl
    })
  }, [])
  useEffect(() => {
    let animationFrameId
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY - 200 })
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

 
  return (
    <>
      <div className="filler-top filler"></div>
      <section ref={textRef}>
        <div className="text_wrapper" ref={wrapperRef}>
         {Location.map((location, idx) => (
          <Locations key={idx} index={idx} title={location.name} setModal={setModal} />
         ))}
        </div>
       <Modal modal={modal} locations={Location} position={position} />
      </section>
      <div className="filler-bottom filler"></div>
    </>
  )
}

export default App
