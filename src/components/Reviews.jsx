import React from 'react'
import SectionTitle from './SectionTitle'
import Review from './Review';
import { reviewsSection } from '../content'
import { reviewsImg } from '../assets';
import { Carousel, IconButton  } from "@material-tailwind/react";
import { IoIosArrowBack } from 'react-icons/io'
import { GrFormNext } from 'react-icons/gr'

const Reviews = () => (
  <section id='reviews' className='mt-10 flex flex-col items-center justify-center'>
    <SectionTitle title={reviewsSection.sectionTitle.mainTitle}
                  subTitle={reviewsSection.sectionTitle.subTitle} />

    <Carousel className="mt-10"
              autoplay={true}
              navigation={() => (
                <div className="hidden"></div>
              )} 
              loop={true}
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="gray"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                  <IoIosArrowBack className='text-[1.2rem]' />
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="gray"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                  <GrFormNext className='text-[1.4rem]' />
                </IconButton>
              )}>
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