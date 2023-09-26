import React from 'react'

const SectionTitle = ({ title, subTitle }) => (
    <div className='flex flex-col text-center border-l-2 border-primary-green pl-2 md:pl-5'>
        <p className='text-[1.5rem] md:text-[2rem] font-bold'>{title}</p>
        <p>{subTitle}</p>
    </div>
)

export default SectionTitle