import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import Button from '../components/Button'

const Hero = () => {
  return (
    <div className='max-container relative'>
      <img src={HeroImage} alt="" />
      <div className='bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] z-1 xl:top-[324px] left-[80px] text-transform: capitalize lg:w-[630px] md:w-full md:h-[288px] sm:w-full sm:m-0 lg:absolute p-[24px, 40px, 32px, 40px] lg:top-[200px]'>
        <h1 className='mx-[20px] max-md:text-[36px] sm:t-[295px] sm:text-[44px] md:leading-[46px] font-bold text-white mt-[20px] font-inter max-lg:pt-5 max-lg:mt-[-1px]'>We crush your competitors, goals, and sales records - without the B.S.</h1>
        <div className='py-5 px-5 text-sm'>
            <Button label={'Get Free Consultion'}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
