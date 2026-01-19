import React from 'react'
import SliderPhoto from './smalComponents/ForSliderPhoto'

const SliderMenu = () => {

  const arrayImage = [
    
      [
        {
          id:1,
          image:"/CakeSlider_1_1.jpg"
        },
        {
          id:2,
          image:"/CakeSlider_1_2.jpg"
        },
        {
          id:3,
          image:"/CakeSlider_1_3.jpg"
        },
        {
          id:4,
          image:"/CakeSlider_1_4.jpg"
        },
        {
          id:5,
          image:"/CakeSlider_1_5.jpg"
        },
        {
          id:6,
          image:"/CakeSlider_1_6.jpg"
        },
      ],
    
      [
        {
          id:1,
          image:"/CakeSlider_2_1.jpg"
        },
        {
          id:2,
          image:"/CakeSlider_2_2.jpg"
        },
        {
          id:3,
          image:"/CakeSlider_2_3.jpg"
        },
        {
          id:4,
          image:"/CakeSlider_2_4.jpg"
        },
        {
          id:5,
          image:"/CakeSlider_2_5.jpg"
        },
        {
          id:6,
          image:"/CakeSlider_2_6.jpg"
        },
        {
          id:7,
          image:"/CakeSlider_2_7.jpg"
        },
        {
          id:8,
          image:"/CakeSlider_2_8.jpg"
        },
        {
          id:9,
          image:"/CakeSlider_2_9.jpg"
        },
      ],
      [
        {
          id:1,
          image:"/CakeSlider_3_1.jpg"
        },
        {
          id:2,
          image:"/CakeSlider_3_2.jpg"
        },
        {
          id:3,
          image:"/CakeSlider_3_3.jpg"
        },
        {
          id:4,
          image:"/CakeSlider_3_4.jpg"
        },
        {
          id:5,
          image:"/CakeSlider_3_5.jpg"
        },
        {
          id:6,
          image:"/CakeSlider_3_6.jpg"
        },
        {
          id:7,
          image:"/CakeSlider_3_7.jpg"
        },
        {
          id:8,
          image:"/CakeSlider_3_8.jpg"
        },
        {
          id:9,
          image:"/CakeSlider_3_9.jpg"
        },
        {
          id:10,
          image:"/CakeSlider_3_7.jpg"
        },
        {
          id:11,
          image:"/CakeSlider_3_8.jpg"
        },
        {
          id:12,
          image:"/CakeSlider_3_9.jpg"
        },
      ],
      [
        {
          id:1,
          image:"/CakeSlider_4_1.jpg"
        },
        {
          id:2,
          image:"/CakeSlider_4_2.jpg"
        },
        {
          id:3,
          image:"/CakeSlider_4_3.jpg"
        },
        {
          id:4,
          image:"/CakeSlider_4_4.jpg"
        },
        {
          id:5,
          image:"/CakeSlider_4_5.jpg"
        },
        {
          id:6,
          image:"/CakeSlider_4_6.jpg"
        },
        {
          id:7,
          image:"/CakeSlider_4_7.jpg"
        },
        {
          id:8,
          image:"/CakeSlider_4_8.jpg"
        },
        {
          id:9,
          image:"/CakeSlider_4_9.jpg"
        },
        {
          id:10,
          image:"/CakeSlider_4_10.jpg"
        },
        {
          id:11,
          image:"/CakeSlider_4_11.jpg"
        },
        {
          id:12,
          image:"/CakeSlider_4_12.jpg"
        },
      ],
  ]
  return (
    <div className='my-20'>
      <div>
        <div className='text-center flex flex-col items-center space-y-15 px-12'>
          <img src="/FooterLogo.png" alt="Logo image" className='w-30' />
          <p className='max-w-180 text-xl'>EXPLORE OUR EXCLUZIVE LOOK-BOOK,
            SHOWCASING DESING EXAMPLES FROM EACH
            OF OUR PACKAGES</p>
        </div>
        <div className='h-full'>
        <SliderPhoto title={'Minimal'} 
        context={'Simple styles with a clean finish. Fuss-free but with understated elegance, this collection includes sugar-dusted naked cakes, and soft buttercream lines with 24-carat gold accents. Many of The Minimal designs are dressed with fresh flowers.'}
        images={arrayImage[0]}
        
        />
         <SliderPhoto title={'Styled'} 
        context={'The essence of this package is stripped back designs with a single focal feature, like a sugar flower cluster or a textured finish.'}
        images={arrayImage[1]}
        
        />
         <SliderPhoto title={'Royal'} 
        context={'With a little more detail and a little more drama, this collection partners sophistication and elegance. Expect hand painted detail and clusters of sugar flowers, gilded leaves and imaginative flair.'}
        images={arrayImage[2]}
        
        /> <SliderPhoto title={'Goddess'} 
        context={'Intricate detail and impressive designs, the Goddess Collection is the gold standard of our collections. Cascading details and statement sugar sculpture. These multi-tiered masterpieces are impactful and beautiful, designed to turn every head in the room.'}
        images={arrayImage[3]}
        
        />
        </div>
      </div>

    </div>
  )
}

export default SliderMenu
