import React from 'react'
import { logo } from '../assets'
import { footerSection } from '../content'

const Footer = () => (
  <footer className='mt-20 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 place-items-center items-start py-5 bg-primary-green-light'>
    <div className='flex flex-col items-center'>
      <div className='flex items-center'>
        <img src={logo} alt='logo' />
        <span className='font-bold text-[1.1rem]'>GrandVista Tours</span>
      </div>
      <p className='text-center font-bold'>Everything <br className='hidden lg:block' /> you need</p>
    </div>

    {footerSection.groups.map(group => (
      <div key={group.id} className='text-center lg:text-start'>
        <span className='font-bold'>{group.groupName}</span>

        <div className='flex flex-col mt-1'>
          {group.links.map(link => (
            <a key={link.id} className='text-[0.8rem]'>{link.text}</a>
          ))}
        </div>
      </div>
    ))}

    <div>
      <span className='font-bold'>{footerSection.socialMedia.groupName}</span>

      <div className='flex justify-center gap-1 mt-1'>
        {footerSection.socialMedia.links.map(socialMedia => (
          <a key={socialMedia.id} href={socialMedia.link} target='_blank' className='transition-all hover:scale-110'>
            <img src={socialMedia.image} alt={socialMedia.imgAlt} className='w-[22px] h-[22px]' />
          </a>
        ))}
      </div> 
    </div>
  </footer>
)

export default Footer