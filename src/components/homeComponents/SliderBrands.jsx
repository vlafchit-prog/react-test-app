import React from 'react'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const SliderBrands = () => {

  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const media = gsap.matchMedia()

    media.add("(max-width: 640px)", () => (
      gsap.fromTo(
        container,
        {
          xPercent: 100
        },
        {
          xPercent: -750,
          duration: 30,
          repeat: -1,
          ease: 'none'
        }
      )
    ))

    media.add("(min-width: 641px)", () => (
      gsap.fromTo(
        container,
        {
          xPercent: 100
        },
        {
          xPercent: -220,
          duration: 25,
          repeat: -1,
          ease: 'none'
        }
      )
    ))
    return () => media.revert(); // очищаем при размонтировании

  }, [])
  return (
    <div className=' w-full py-30 shadow-gray-200 shadow-2xl overflow-hidden'>
      <div ref={containerRef} className='flex gap-5'>
        {
          Array.from({ length: 20 }).map((_, index) => (
            <img key={index} src={`brand${index + 1}.jpg`} alt={`Brand${index + 1} image`} className='lg:w-40 md:w-35 sm:w-30 w-25' />
          ))
        }

      </div>

    </div>
  )
}

export default SliderBrands
