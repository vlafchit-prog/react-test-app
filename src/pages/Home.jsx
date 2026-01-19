import React from 'react'
import HederVideo from '../components/homeComponents/HederVideo'
import Luxury from '../components/homeComponents/Luxury'
import Sophisticated from '../components/homeComponents/Sophisticated'
import OurEthos from '../components/homeComponents/OurEthos'
import Testimonial from '../components/homeComponents/Testimonial'
import SliderBrands from '../components/homeComponents/SliderBrands'

const Home = () => {
  return (
    <div>
      <HederVideo />
      <Sophisticated />
      <Luxury />
      <OurEthos/>
      <Testimonial/>
      <SliderBrands/>


    </div>
  )
}

export default Home
