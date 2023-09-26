import React from 'react'
import SectionTitle from './SectionTitle'
import { destinationsSection } from '../content'
import DestinationCard from './DestinationCard'

const Destinations = () => (
    <section id='destinations' className='mt-10 flex flex-col items-center justify-center md:mx-20'>
      <SectionTitle title={destinationsSection.sectionTitle.mainTitle} 
                    subTitle={destinationsSection.sectionTitle.subTitle} />

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20`}>
        {
          destinationsSection.destinations.map(destination => (
            <DestinationCard key={destination.id} {...destination} />
          ))
        }
      </div>
    </section>
)

export default Destinations