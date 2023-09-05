import React from 'react'
import CtaLogo from "../assets/ctalogo.svg"

const Cta = () => {
    return (
        <div className='w-full bg-white py-5'>
            <div className='md:max-w-[1200px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] p-4'>
            <img src={CtaLogo}  className='w-[650px] h-[400px]'/>
                <div>
                    <h1 className='md:leading-[60px] py-2 text-4xl font-semibold'>Join our corporate partners</h1>
                    <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae eos, exercitationem dolor deserunt quibusdam dolore vero? Deleniti vero repudiandae repellendus labore nisi quis officia provident, quam cupiditate ipsa error harum odio laudantium. Delectus, eum.</p>

                    <button className='max-[740px]:w-full my-4 py-5 px-8 rounded-md bg-[#0F307B] text-white font-bold'>Learn More</button>
                </div>
                
    
            </div>
            
        </div>
      )
}

export default Cta