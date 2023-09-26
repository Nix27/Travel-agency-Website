import React, { useState } from 'react'
import { navbarLinks } from '../content'
import { logo } from '../assets'
import { AiOutlineMenu } from 'react-icons/ai'


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

          <div className={`${toogleMenu ? 'top-5' : 'top-[-500px]'} transition-all flex justify-center items-center w-[250px] h-[300px] absolute left-[50%] 
          translate-x-[-50%] bg-primary-white border-2 border-primary-black`}>
            <ul className='flex flex-col items-center gap-5'>
              {navbarLinks.map(navbarLink => (
                <li key={navbarLink.id} className='hover:text-primary-green'>
                  <a href={`#${navbarLink.id}`} onClick={() => setToogleMenu(false)}>{navbarLink.text}</a>
                </li>
              ))}
            </ul>
            <button className='absolute bg-primary-white border-2 py-1 px-2 border-primary-black rounded-[50%] left-[232px] top-[-10px]'
            onClick={() => setToogleMenu(false)}>X</button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar