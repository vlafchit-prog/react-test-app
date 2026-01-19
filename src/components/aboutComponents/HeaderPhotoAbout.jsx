import React from 'react'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const HeaderPhotoAbout = () => {

  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current

    gsap.fromTo(image,
      { y: 0 },
      {
        y: 900,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          star: '800px bottom',
          end: '1300px top',
          scrub: true,
        }
      }
    )

  }, [])

  return (
    <div ref={containerRef} className='w-full h-260 relative overflow-hidden flex justify-center items-center '>
      <img ref={imageRef} src="/galeryImage13.jpg" alt="Header Image "
        className='absolute  lg:h-[265%] md:h-[255%] sm:h-[245%]  h-[235%] lg:top-[-1250px] md:top-[-1200px] top-[-1100px] object-cover ' />
      <div className='absolute text-center text-white inset-0 grid items-center bg-gradient-to-t from-main-purple/80 via-main-purple/25 to-main-purple/0'>
        <div className='space-y-5'>
          <h2 className='text-4xl font-extralight '>ABOUT</h2>
          <h3 className='Simple text-7xl'>US</h3>
        </div>
      </div>
    </div>
  )
}

export default HeaderPhotoAbout
