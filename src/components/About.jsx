import React, { useEffect } from 'react'
import { aboutData } from '../content'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, [])

  return (
    <section id='about' className='mt-10'>
      <div className='flex flex-col sm:flex-row sm:justify-around bg-primary-green-light w-[80%] rounded-[2.375rem] m-auto p-5'
      data-aos='fade-up'>
        {aboutData.map(data => (
          <div key={data.id} className='flex items-center justify-center gap-2'>
            <span className='text-[2.3rem] md:text-[2.7rem] font-bold'>{data.numbers}</span>
            <span className='w-[70px]'>{data.text}</span>
          </div>
        ))}
      </div>
      
    </section>
)}

export default About