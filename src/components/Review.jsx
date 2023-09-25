import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Review = ({ profileImg, nameOfClient, text, rating }) => (
    <div className='flex flex-col items-center justify-center mx-10 md:mx-20'>
        <div className='flex gap-3 items-center self-start'>
            <img src={profileImg} alt='profile image' className='w-[50px] h-[50px]' />
            <span className='font-bold text-[1.1rem]'>{nameOfClient}</span>
        </div>
        <q className='mt-3 text-center'>{text}</q>
        <div className='flex mt-3'>
            {Array.from({length: rating}, () => (
                <AiFillStar key={crypto.randomUUID()} className='text-primary-green lg:text-[1.2rem]' />
            ))}
        </div>
    </div>
)

export default Review