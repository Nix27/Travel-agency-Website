import React, { useEffect } from 'react'
import SectionTitle from './SectionTitle'
import ReasonCard from './ReasonCard'
import { whyUsSection } from '../content'
import { variousDestinationsImg, variousDestinationsImgTriangle } from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'

const WhyUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, [])

  return (
    <section id='whyUs' className='mt-10 flex flex-col items-center justify-center'>
      <SectionTitle title={whyUsSection.sectionTitle.mainTitle}
                    subTitle={whyUsSection.sectionTitle.subTitle} />

      <div className='flex flex-col md:flex-row-reverse mt-10'>
        <div className='flex flex-col'>
          {whyUsSection.reasons.map(reason => (
            <ReasonCard key={reason.id} {...reason} />
          ))}
        </div>
        <div className='flex items-center mx-5 md:mx-0'>
          <img src={variousDestinationsImg} alt="image of various destinations" className='block rounded-[2rem] md:hidden' data-aos="fade-up" />
          <img src={variousDestinationsImgTriangle} alt="image of various destinations" className='hidden md:block md:h-[70%] lg:h-full'
          data-aos="fade-right" />
        </div>
      </div>
    </section>
)}

export default WhyUs