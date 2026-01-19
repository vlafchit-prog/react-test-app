import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const HeaderPhoto = () => {

  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current

    gsap.fromTo(image,
      { y: 0 },
      {
        y: 800,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: '850px bottom',
          end: '1300px top',
          scrub: true,
        }
      }
    )

  }, [])


  return (
    <div ref={containerRef} className="relative h-[610px] overflow-hidden flex justify-center items-end  p-10" >
      <img ref={imageRef}
        src="/PackagesHeaderPhoto.jpg"
        alt="Header Image"
        className="absolute  lg:h-[165%] md:h-[155%] sm:h-[145%]  h-[135%] top-[-130px] object-cover "
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-main-purple via-main-purple/45 to-main-purple/0"></div>
      <div className="text-white  z-40 font-extralight text-center space-y-3">
        <h3 className="md:text-2xl text-xl">OUR</h3>
        <h1 className="Simple md:text-5xl text-4xl">LOOK-BOOK</h1>
      </div>
    </div>

  )
}

export default HeaderPhoto;
