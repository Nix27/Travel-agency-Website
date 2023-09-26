import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { destinationsSection } from '../content'
import DestinationCard from './DestinationCard'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Destinations = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, [])

  return (
    <section id='destinations' className='mt-10 flex flex-col items-center justify-center md:mx-20'>
      <SectionTitle title={destinationsSection.sectionTitle.mainTitle} 
                    subTitle={destinationsSection.sectionTitle.subTitle} />

      <div className='flex gap-2 mt-10 md:self-end'>
        <input type='text' className='bg-primary-green-light md:w-[400px] rounded-[3.375rem] pl-3' placeholder='Name of destination...' data-aos="zoom-in" />
        <button className='bg-primary-green rounded-[2.0625rem] py-2 px-3.5 md:px-8' data-aos="zoom-in">Search</button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
        {destinationsSection.destinations.map(destination => (
          <DestinationCard key={destination.id} {...destination} />
        ))}
      </div>
    </section>
)}

export default Destinations