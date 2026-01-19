import React from 'react'

const ReserveDateFor = () => {
  return (
    <div className='flex max-h-200 bg-[#edefee] overflow-hidden lg:justify-between justify-center lg:pl-25 lg:px-0 md:px-15 sm:px-10 px-4 items-center'>
      <div className=' max-w-168 sm:space-y-15 space-y-10 sm:my-25 my-12'>
        <h2 className='sm:mb-7 mb-5'>RESERVE YOUR DATE FOR</h2>
        <h3 className='Simple sm:text-5xl text-2xl bg-[#dadada] sm:max-w-132 max-w-70 px-3'>AN UNFORGETTABLE ERZULIE EXPERIENCE</h3>
        <hr className='text-main-rose'/>
        <p className='sm:text-lg Simple'>Secure your reservation by filling out our bespoke experience form, and our attentive team will take care of the rest. Kindly note that we require a booking fee to confirm your desired date. As a token of our appreciation, you will receive a complimentary tasting box along with a design consultation with our talented Head of Design, Nina.</p>
        <a href="/getInTuch" className='bg-main-rose px-6 py-3 text-white rounded-lg hover:opacity-80'>RESERVATION</a>
      </div>
      <div className='max-w-120 lg:block hidden'>
        <img src="/CakePackages.png" alt="Image Cake" className='min-h-180 min-w-100' />
      </div>
    </div>
  )
}

export default ReserveDateFor
