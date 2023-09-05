import React from 'react'
import HeroImg from "../assets/hero.svg"

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='max-w-[1200px] m-auto grid grid-cols-2'>
            <div>
                <p className='text-2xl text-[#0F307B] font-medium'>Take Your Bussiness With Us</p>
                <h1 className='md:text-7xl text-5xl'>join our partners with 300+ clients who have worked with us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <img src={HeroImg} className=''/>

        </div>
        
    </div>
  )
}

export default Hero