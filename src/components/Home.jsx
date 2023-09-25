import React from 'react'
import { homeVideo } from '../assets'

const Home = () => (
  <section className='w-full h-full lg:h-[100vh] overflow-hidden flex justify-center items-center'>
    <video src={homeVideo} autoPlay loop muted className='mt-[56px]'></video>

    <div className='flex flex-col gap-2 md:gap-4 items-center absolute text-primary-white'>
      <div className='text-center'>
        <h1 className='text-[1.7rem] md:text-[3rem] font-bold'>Escape the Ordinary</h1>
        <p className='text-[1rem] md:text-[2rem] font-normal'>Where Every Mile Inspires</p>
      </div>
      <button className='flex border-2 gap-1 md:gap-2 hover:scale-x-110 transition-all border-primary-white rounded-[2.0625rem] py-[0.325rem] 
      md:py-[0.625rem] px-[1.175rem] md:px-[1.875rem]'>
        <span>Start Journey</span>
        <span>{">"}</span>
      </button>
    </div>
  </section>
);

export default Home