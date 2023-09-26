import React from 'react'
import SectionTitle from './SectionTitle'
import Accordion from './Accordion'
import { faqSection } from '../content'
import { faqImgLeft, faqImgRight } from '../assets'

const FAQ = () => (
  <section id='faq' className='mt-10 flex flex-col items-center justify-center'>
    <SectionTitle title={faqSection.sectionTitle.mainTitle}
                  subTitle={faqSection.sectionTitle.subTitle} />

    <div className='flex justify-center md:justify-between w-full'>
      <img src={faqImgLeft} alt="left section image" className='hidden md:block md:w-[170px] lg:w-[220px] md:max-h-[300px] lg:max-h-[350px]' />

      <div className='flex flex-col gap-2 w-[90%] md:w-[70%] lg:w-[50%] mx-5 mt-10'>
        {faqSection.questions.map(questionItem => (
          <Accordion {...questionItem} />
        ))}
      </div>

      <img src={faqImgRight} alt="right section image" className='hidden md:block md:w-[170px] lg:w-[220px] md:max-h-[300px] lg:max-h-[350px]' />
    </div>
  </section>
)

export default FAQ