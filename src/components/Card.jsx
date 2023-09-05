import React from 'react'


const Card = ({dataservice}) => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl mr-3 my-4 '>
        <img src={dataservice.img} className='h-40 w-full object-cover'/>

        <div className='p-5'>
            <h1>{dataservice.title}</h1>
            <p>{dataservice.text}</p>
        </div>
    </div>
  )
}

export default Card