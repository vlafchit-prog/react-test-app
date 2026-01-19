import React from 'react'

const Footer = () => {
  return (
    <div className='w-full sm:mt-10 mt-5 '>
      <div className='flex  lg:flex-row flex-col justify-around items-center sm:px-10 '>
        <div className='flex flex-col justify-between sm:px-20  mb-10 text-center '>
          <div className='p-10 space-y-6 border-b border-[#ececec] max-w-150 w-full justify-items-center text-center'>
            <h3 className='sm:text-2xl'>INSTAGRAM</h3>
            <p className='sm:text-xl mb-10'><a href="#">@erzuliecakes</a></p>
            <p className='sm:text-xl text-sm font-sans font-medium max-w-85'>Award Winning Wedding & Event Cake Desiger.</p>
          </div>
          <div className=' flex sm:flex-row flex-col items-center mt-20 sm:space-y-0 space-y-10'>
            <div className='flex flex-col sm:px-10  space-y-6 sm:max-w-80 sm:min-w-80 w-full sm:text-xl'>
              <h3 className='sm:text-3xl text-lg font-medium underline'>STAY SOCIAL</h3>
              <a href="#">instagram</a>
              <a href="#">facebook</a>
              <a href="#">pinterest</a>
            </div>
            <div className='flex flex-col sm:px-10 sm:max-w-80 sm:min-w-60 w-full space-y-6 sm:border-l border-[#ececec] sm:text-xl'>
              <h3 className='sm:text-3xl text-lg font-medium underline'>INFO</h3>
              <a href="#">fags</a>
              <a href="#">our ethos</a>
              <a href="#">cake flavours</a>
            </div>
          </div>
        </div>

        <div className='text-center space-y-10 lg:mb-0 sm:mb-20 mb-15  justify-items-center max-w-80'>
          <img src="/FooterLogo.png" alt="Logo Image"  className='lg:px-0 px-25 '/>
          <p className='mb-4 text-sm sm:text-[16px]'>© Copyright Erzulie 2020-2023</p>
          <p className='underline text-sm sm:text-[16px]'><a href="#">Privacy Policy • Terms and Conditions</a></p>
        </div>
      </div>
      <div className='bg-[#4b2d44] text-white sm:text-xl text-sm text-center py-15 flex justify-center sm:px-20'>
        <h3 className='sm:mx-auto sm:max-w-260 max-w-60'>OUR PRODUCTION SITE IS LOCATED IN MELBOURN, SOUTH CAMBRIDGESHIRE, UNITED KINGDOM
          VAT Registration 417362307</h3>
      </div>

    </div>
  )
}

export default Footer
