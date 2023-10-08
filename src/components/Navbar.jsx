import React, { useState } from 'react'
import { navbarLinks } from '../content'
import { logo } from '../assets'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'


const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false)

  return (
    <nav className='w-full flex fixed bg-primary-white justify-between items-center px-[2rem] py-3 z-10'>
      <div className='flex items-center gap-[0.875rem]'>
        <img src={logo} alt='logo' className='w-[2rem] h-[2rem]' />
        <span>GrandVist Tours</span>
      </div>

      <ul className='sm:flex hidden gap-3'>
        {navbarLinks.map(navbarLink => (
          <li key={navbarLink.id} className='text-[0.9rem] cursor-pointer transition duration-200 hover:text-primary-green'>
            <a href={`#${navbarLink.id}`}>{navbarLink.text}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex'>
          <AiOutlineMenu className='text-[1.3rem]' onClick={() => setToogleMenu(true)} />

          <div className={`${toogleMenu ? 'left-0' : 'left-[-1000px]'} transition-all flex flex-col p-10 items-center w-[100vw] h-[100vh] absolute top-0 left-[50%] 
          translate-x-[-50%] bg-primary-white border-2 border-primary-black`}>
            <BsChevronLeft className='bg-primary-white py-1 px-2 self-start font-bold text-[3rem]' onClick={() => setToogleMenu(false)} />
            <ul className='flex flex-col items-center gap-10'>
              {navbarLinks.map(navbarLink => (
                <li key={navbarLink.id} className='hover:text-primary-green text-[2rem]'>
                  <a href={`#${navbarLink.id}`} onClick={() => setToogleMenu(false)}>{navbarLink.text}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar