import React from 'react'

const Testimonial = () => {
  return (
    <div className='bg-[#f3edec] text-center flex flex-col items-center py-15 px-5'>
      <div>
        <img src="/LogoTest.png" alt="Logo Image" />
      </div>
      <div className='max-w-150 sm:text-lg space-y-6'>
        <h2>TESTIMONIAL</h2>
        <p className='Elegant sm:text-6xl text-5xl'>Sensational</p>
        <p className='Simple'>“I actually have no words for Nina and her team. Having worked with Nina on multiple occasions now, I knew she was the one I wanted to make our wedding cake.</p>
        <p className='Simple'>I told Nina our desired spend, and sent her the mood board…well, the rest is history.</p>
        <p className='Simple'>It was the most seamless experience in terms of our wedding planning and our wedding day. What she produced not only looked sensational, but it tasted incredible too.</p>
        <p className='Simple'>Nina, we are forever in your debt”</p>
      </div>


    </div>
  )
}

export default Testimonial
