import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillStar } from 'react-icons/ai'

const DestinationCard = ({ id, country, location, rating, image }) => (
    <div className='w-[90%] h-[350px] rounded-[2.3125rem]'>
        <img src={image} alt="Destination image" className='w-full h-full rounded-[2.3125rem]' />
        <div className='relative top-[-350px] text-primary-white w-full h-full flex flex-col justify-between'>
            <span className='flex items-center gap-1 p-4'>
                <BiWorld />
                {country}
            </span>
            <div className='flex flex-col p-4 bg-gradient-to-b from-transparent to-zinc-800 rounded-br-[2.3125rem] rounded-bl-[2.3125rem]'>
                <span className='flex items-center'>
                    <FaLocationDot />
                    {location}
                </span>
                <span className='flex gap-1'>
                    {Array.from({ length: rating }, () => (
                        <AiFillStar key={crypto.randomUUID()} />
                    ))}
                </span>
            </div>
        </div>
    </div>
)

export default DestinationCard