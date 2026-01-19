import React from 'react'

const Error = () => {
  return (
    <div className='bg-[url("/bgImage.jpg")] text-white w-full md:h-150 sm:h-120 h-90 grid justify-center items-center'>
      <div className='text-center sm:px-15 px-3'>
        <h1 className='Elegant lg:text-[200px] text-[150px]'>404</h1>
        <p className='Elegant lg:text-[100px] md:text-[80px] sm:text-[60px] text-4xl'>This Pagine is not found!</p>
      </div>
    </div>
  )
}

export default Error
