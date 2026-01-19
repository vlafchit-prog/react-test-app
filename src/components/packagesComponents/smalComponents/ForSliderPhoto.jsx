import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from 'swiper/modules';

const ForSliderPhoto = ({ title, context, images }) => {
  return (
    <div className='my-20  px-12'>
      <div className='sm:flex items-center'>
        <h3 className='min-w-50 text-sm sm:text-[16px]'>THE <span className='Elegant sm:text-5xl text-4xl'>{title}</span></h3>
        <hr className='w-full'/>
      </div>

      <div className='overflow-hidden py-20 h-full '>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.4}

          coverflowEffect={{
            rotate: 40,
            depth: 50,
            slideShadows: false,
            scale:0.8
          }}

          breakpoints={{
            640:{
              slidesPerView: 2,
            },
            1028:{
              slidesPerView: 3,
            }
          }}
       
          navigation
          modules={[EffectCoverflow, Navigation]}
          className='select-none '
          

          

        >
          {
            images.map((image) => (
              <SwiperSlide
                key={image.id}
                className=''
              >
                <div className=''>
                  <img src={image.image} alt={`Slide ${image.id}`}
                    className=' rounded-2xl max-w-150 w-full  h-full '
                  />
                </div>
              </SwiperSlide>
            ))
          }

        </Swiper>
        
      </div>
      <p className='sm:text-[16px] text-sm max-w-170'>{context}</p>
    </div>
  )
}

export default ForSliderPhoto
