import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css'

import { Navigation } from 'swiper/modules';

const GalerySection = () => {
    const GaleryImg = [
        { id: 1, image: '/galeryImage1.jpg' },
        { id: 2, image: '/galeryImage2.jpg' },
        { id: 3, image: '/galeryImage3.jpg' },
        { id: 4, image: '/galeryImage4.jpg' },
        { id: 5, image: '/galeryImage5.jpg' },
        { id: 6, image: '/galeryImage6.jpg' },
        { id: 7, image: '/galeryImage7.jpg' },
        { id: 8, image: '/galeryImage8.jpg' },
        { id: 9, image: '/galeryImage9.jpg' },
        { id: 10, image: '/galeryImage10.jpg' },
        { id: 11, image: '/galeryImage11.jpg' },
        { id: 12, image: '/galeryImage12.jpg' },
        { id: 13, image: '/galeryImage13.jpg' },
        { id: 14, image: '/galeryImage14.jpg' },
        { id: 15, image: '/galeryImage15.jpg' },
        { id: 16, image: '/galeryImage16.jpg' },
        { id: 17, image: '/galeryImage17.jpg' },
        { id: 18, image: '/galeryImage18.jpg' },
        { id: 19, image: '/galeryImage19.jpg' },
        { id: 20, image: '/galeryImage20.jpg' },
        { id: 21, image: '/galeryImage21.jpg' },
        { id: 22, image: '/galeryImage22.jpg' },
        { id: 23, image: '/galeryImage23.jpg' },
        { id: 24, image: '/galeryImage24.jpg' },
        { id: 25, image: '/galeryImage25.jpg' },
        { id: 26, image: '/galeryImage26.jpg' },
        { id: 27, image: '/galeryImage27.jpg' },
        { id: 28, image: '/galeryImage28.jpg' },
        { id: 29, image: '/galeryImage29.jpg' },
    ];

    const [selected, setSelected] = useState(null)

    return (

        <div className='relative space-y-15 mb-5 '>
            <div className='text-center flex flex-col items-center space-y-8'>
                <h1 className='text-3xl font-extralight'>GALLERY</h1>
                <hr className='w-40 text-main-rose' />
                <h3 className='Simple italic text-2xl mb-1'>the opulence</h3>
                <h3 className='Simple text-4xl'>EXPERIENCE</h3>
            </div>
         
                <div className='flex flex-wrap justify-center gap-3 px-3'>
                    {GaleryImg.map((photo) => (
                        <img key={photo.id}
                            
                            src={photo.image} alt={`Photo image ${photo.id}`} className='max-h-100 select-none cursor-pointer hover:scale-104 transition-transform duration-300 ease-in-out rounded-lg' onClick={() => { setSelected(photo) }} />
                    ))}
                </div>


                {selected &&
                    <div className='bg-black/40 fixed inset-0 flex items-center  justify-center' key={selected.id} >
                        <div className='lg:w-250 md:w-190 sm:w-160 w-80  flex items-center'>
                            <Swiper
                                
                                centeredSlides={true}
                                slidesPerView={1}

                                navigation
                                modules={[Navigation]}
                                initialSlide={selected.id - 1}
                                className='select-none '
                                
                            >
                                {
                                    GaleryImg.map((imag) => (
                                        <SwiperSlide className='flex flex-col items-center sm:px-15 '
                                            key={imag.id}
                                        >
                                            <div className='flex items-center lg:h-200 sm:h-180 h-140 '>
                                                <img
                                                    
                                                    className='max-h-190 cursor-pointer'
                                                    src={imag.image} alt={imag.image}  onClick={() => { setSelected(null) }}/>
                                                    
                                            </div>


                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                    </div>}
            

        </div>
    )
}

export default GalerySection
{/* <motion.img
src={selected.image}
layoutId={`photo-${selected.id}`}
transition={{
    duration: 0.2,
}}
alt="" className=' max-h-190  rounded-xl' />

</motion.div>} */}