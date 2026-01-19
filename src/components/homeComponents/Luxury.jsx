import React from 'react'
import { NavLink } from 'react-router-dom'

const Luxury = () => {
  return (
    <div className='bg-[url("/bgImage.jpg")] flex flex-col items-center pb-30 sm:px-10'>
      <div className='flex gap-10 relative top-[-120px] '>
        <div className='max-w-120'>
          <img src="/Luxury1.jpg" alt="Image Luxury" className='lg:block hidden rounded-xl'/>
        </div>
        <div className='lg:max-w-120'>
          <img src="/Luxury2.jpg" alt="Image Luxury" className='rounded-xl'/>
        </div>
        <div className='max-w-120'>
          <img src="/Luxury3.jpg" alt="Image Luxury" className='lg:block hidden rounded-xl'/>
        </div>
      </div>

      <div className='text-white max-w-158 text-center space-y-6 px-4'>
        <h3 className='sm:text-3xl text-[22px]'>CREATIVE, COHESIVE <br />
          AND THE EPITOME OF</h3>
        <h2 className='Simple sm:text-[55px] text-[45px]'>LUXURY</h2>
        <p className='Simple sm:text-2xl text-xl'>Each Erzulie creation is personal and impactful with quality always paramount.  With perfection as our base and a taste that is completely unparalleled, you’ll receive dedicated attention, understated designs and cakes that have beauty and creativity as their signature.</p>
        <p className='Simple sm:text-2xl text-xl mb-15'>Timeless instead of trend-led, we specialise in luxury cakes and destination weddings all around the world.  Our international award-winning cakes fuse luxury with subtlety, promising delicate, delicious designs that are all about the finer details.</p>
        <div className=''>
          <NavLink to={'/about'} className={'bg-white text-main-purple px-10 py-5 hover:bg-rose-50  duration-150 ease-in-out rounded-lg'}>ABOUT US</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Luxury
