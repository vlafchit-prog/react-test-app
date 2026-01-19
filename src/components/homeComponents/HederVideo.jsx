import React from 'react'

const HederVideo = () => {
  return (
    <div className='mb-10'>
        <video src="/LogoVideo.mp4"
         autoPlay
         loop
         muted
         preload='auto'
         className='w-full pointer-events-none'
         pointer-events
         ></video>
      
    </div>
  )
}

export default HederVideo
