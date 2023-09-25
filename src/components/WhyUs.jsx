import React from 'react'
import SectionTitle from './SectionTitle'
import ReasonCard from './ReasonCard'
import { whyUsSection } from '../content'
import { variousDestinationsImg, variousDestinationsImgTriangle } from '../assets'

const WhyUs = () => (
  <section className='mt-20 flex flex-col items-center justify-center'>
    <SectionTitle title={whyUsSection.sectionTitle.mainTitle}
                  subTitle={whyUsSection.sectionTitle.subTitle} />

    <div className='flex flex-col md:flex-row-reverse mt-10'>
      <div className='flex flex-col'>
        {whyUsSection.reasons.map(reason => (
          <ReasonCard key={reason.id} {...reason} />
        ))}
      </div>
      <div className='flex items-center mx-5 md:mx-0'>
        <img src={variousDestinationsImg} alt="image of various destinations" className='block rounded-[2rem] md:hidden' />
        <img src={variousDestinationsImgTriangle} alt="image of various destinations" className='hidden md:block md:h-[70%] lg:h-full' />
      </div>
    </div>
  </section>
)

export default WhyUs