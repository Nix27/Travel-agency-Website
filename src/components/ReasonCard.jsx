import React from 'react'

const ReasonCard = ({ title, text, image }) => (
    <div className='flex items-center justify-center mb-5'>
        <div className='w-[20%] flex justify-start md:justify-center'>
            <img src={image} alt="reason image" className='w-[50px]' />
        </div>
        
        <div className='w-[50%]'>
            <h2 className='text-[1.5rem] font-bold mb-1'>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
)

export default ReasonCard