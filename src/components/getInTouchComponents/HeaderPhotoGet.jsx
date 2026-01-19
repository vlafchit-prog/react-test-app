import React from 'react'
import {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const HeaderPhotoGet = () => {

    const conteinerRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(()=>{
        const container = conteinerRef.current
        const image = imageRef.current

        gsap.fromTo(image,
            {y:0},
            {y:700,
                ease:'none',
                scrollTrigger: {
                    trigger: container,
                    start: '600px bottom',
                    end: '1300px top',
                    scrub: true,
                }
            }
        )

    },[])



  return (
    <div ref={conteinerRef} className='relative h-[600px] sm:h-[700px] overflow-hidden flex justify-center items-end  '>
        <img ref={imageRef}
        className='absolute lg:h-[185%] md:h-[155%] sm:h-[145%]  h-[135%] top-[-230px] object-cover '
         src="/HeaderImageGetInTouch.png" alt="Header image" />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5 grid justify-center items-end p-15'>
        <div className='text-white text-center space-y-5'>
            <h2 className='text-4xl font-extralight'>GET IN</h2>
            <h2 className='text-7xl Simple'>TOUCH</h2>
        </div>
      </div>
    </div>
  )
}

export default HeaderPhotoGet
