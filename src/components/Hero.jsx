import React from 'react'
import HeroImg from "../assets/hero2.svg"

const Hero = () => {
  return (
    <div className='w-full bg-white py-5'>
        <div className='md:max-w-[1200px] m-auto grid md:grid-cols-2 max-w-[600px] p-4'>
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#0F307B] font-medium'>Take Your Bussiness With Us</p>
                <h1 className='md:leading-[60px] py-2 md:text-5xl text-4xl'>join our partners with <span className='text-[#0F307B]'>300+</span> clients who have worked with us</h1>
                <p className='text-lg text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <img src={HeroImg} className='w-[650px] h-[400px] md:order-last order-first'/>

        </div>
        
    </div>
  )
}

export default Hero