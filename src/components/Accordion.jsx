import React, { useEffect, useState } from 'react'
import { FaCircleChevronDown } from 'react-icons/fa6'
import Aos from 'aos'
import 'aos/dist/aos.css' 

const Accordion = ({ question, answer }) => {
  const [toogleAnwer, setToogleAnswer] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, [])

  return (
    <div className='flex flex-col'>
        <div className='flex justify-between items-center px-3 py-1 bg-primary-green' data-aos='fade-up'>
            <div className='w-[90%]'>
                <h4>{question}</h4>
            </div>
            <FaCircleChevronDown className={`${toogleAnwer ? "rotate-180" : ""} transition-all w-[20px] h-[20px]`} onClick={() => setToogleAnswer(prev => !prev)} />
        </div>
        <div className={`${toogleAnwer ? "block" : "hidden"} transition-all px-3 py-2 bg-primary-green-light`}>
            <p>{answer}</p>
        </div>
    </div>
  )
}

export default Accordion