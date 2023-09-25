import React from 'react'
import SectionTitle from './SectionTitle'
import Review from './Review';
import { reviewsSection } from '../content'
import { reviewsImg } from '../assets';
import { Carousel  } from "@material-tailwind/react";

const Reviews = () => (
  <section className='mt-20 flex flex-col items-center justify-center'>
    <SectionTitle title={reviewsSection.sectionTitle.mainTitle}
                  subTitle={reviewsSection.sectionTitle.subTitle} />

    <Carousel className="mt-10" autoplay={true} loop={true}>
      {reviewsSection.reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
    </Carousel>

    <div className='flex justify-center mt-10'>
      <img src={reviewsImg} alt='reviews image' className='w-[90%] lg:w-[100%] h-[300px] lg:h-[400px]' />
    </div>
  </section>
)

export default Reviews