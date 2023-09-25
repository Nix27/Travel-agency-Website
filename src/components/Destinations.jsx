import React from 'react'
import SectionTitle from './SectionTitle'
import { destinationsSection } from '../content'
import DestinationCard from './DestinationCard'

const Destinations = () => (
  <section className='mt-20 flex flex-col items-center justify-center md:mx-20'>
    <SectionTitle title={destinationsSection.sectionTitle.mainTitle} 
                  subTitle={destinationsSection.sectionTitle.subTitle} />

    <div className='flex gap-2 mt-10 md:self-end'>
      <input type='text' className='bg-primary-green-light md:w-[400px] rounded-[3.375rem] pl-3' placeholder='Name of destination...' />
      <button className='bg-primary-green rounded-[2.0625rem] py-2 px-3.5 md:px-8'>Search</button>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
      {destinationsSection.destinations.map(destination => (
        <DestinationCard key={destination.id} {...destination} />
      ))}
    </div>
  </section>
)

export default Destinations