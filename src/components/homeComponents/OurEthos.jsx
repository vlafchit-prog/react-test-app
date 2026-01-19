import React from 'react'

const OurEthos = () => {
  return (
    <div className='flex bg-[#f6f6f6] items-center overflow-hidden max-h-200  lg:justify-end justify-center lg:pl-23 lg:py-0 lg:px-0 py-12 px-8'>
      <div className='space-y-10  lg:min-w-150 text-center sm:text-start'>
        <h2 className=' lg:text-5xl text-3xl  Simple'>OUR ETHOS</h2>
        <hr className='max-w-220  text-[#cbb4bd]'/>
        <p className=' Simple'>Every single Erzulie design is flawless. Attention to detail is our signature and <br />we take it incredibly seriously.</p>
        <p className=' lg:text-lg'>THE PERFECT RECIPE FOR <span className='Elegant text-6xl sm:inline hidden'>Romance</span></p>
        <span className='Elegant text-6xl sm:hidden'>Romance</span>
      </div>
      <div className='w-200 lg:block hidden'><img src="/OurEthosImage.jpg" alt="Fone Image" /></div>
    </div>
  )
}

export default OurEthos
