import React from 'react'
import Avatar from "../assets/feedback.jpg"
import Simbol from "../assets/quote-right-solid.svg"
import { FeedbackData } from '../data/ServicesData'

const FeedbackCard = ({feeddata}) => {
  return (
    <div className='bg-white p-8 shadow-xl rounded-3xl my-8 mx-2'>
        <div className='flex justify-between'>
        <div className='flex gap-4'>
            <img src={feeddata.img} className='h-[70px] w-[70px] object-cover rounded-full'/>
            <div className=''>
                <h1>{feeddata.name}</h1>
                <p>{feeddata.company}</p>
            </div>
        </div>
        <img src={Simbol} className='w-[30px] h-[30px]'/>
        </div>
        <div className='py-8'>
            <h3 className='text-lg text-justify'>{feeddata.text}</h3>
        </div>
    </div>
  )
}

export default FeedbackCard