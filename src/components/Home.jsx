import React, { useEffect } from 'react'
import { homeVideo } from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, []);

  return (
  <section id='home' className='w-full h-full lg:h-[100vh] overflow-hidden flex justify-center items-center'>
    <video src={homeVideo} autoPlay loop muted className='mt-[56px]'></video>

    <div className='flex flex-col gap-2 md:gap-4 items-center absolute text-primary-white'>
      <div className='text-center'>
        <h1 className='text-[1.7rem] md:text-[3rem] font-bold' data-aos='fade-up'>Escape the Ordinary</h1>
        <p className='text-[1rem] md:text-[2rem] font-normal' data-aos='fade-up'>Where Every Mile Inspires</p>
      </div>
      <a href='#destinations' className='flex border-2 gap-1 md:gap-2 hover:scale-x-110 transition-all border-primary-white rounded-[2.0625rem] py-[0.325rem] 
      md:py-[0.625rem] px-[1.175rem] md:px-[1.875rem]' data-aos='fade-up'>
        <span>Start Journey</span>
        <span>{">"}</span>
      </a>
    </div>
  </section>
)};

export default Home