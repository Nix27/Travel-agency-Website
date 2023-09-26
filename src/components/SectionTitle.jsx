import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SectionTitle = ({ title, subTitle }) => {
    useEffect(() => {
        Aos.init({
          duration: 1000
        });
      }, [])

    return (
    <div className='flex flex-col text-center border-l-2 border-primary-green pl-2 md:pl-5'>
        <p className='text-[1.5rem] md:text-[2rem] font-bold' data-aos='fade-up'>{title}</p>
        <p data-aos='fade-up'>{subTitle}</p>
    </div>
)}

export default SectionTitle