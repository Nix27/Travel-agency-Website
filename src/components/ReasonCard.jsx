import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ReasonCard = ({ title, text, image }) => {
    useEffect(() => {
        Aos.init({
          duration: 1500
        });
      }, [])

    return (
    <div className='flex items-center justify-center mb-5'>
        <div className='w-[20%] flex justify-start md:justify-center' data-aos="zoom-in">
            <img src={image} alt="reason image" className='w-[50px]' />
        </div>
        
        <div className='w-[50%]'>
            <h2 className='text-[1.5rem] font-bold mb-1' data-aos="fade-up">{title}</h2>
            <p data-aos="fade-up">{text}</p>
        </div>
    </div>
)}

export default ReasonCard