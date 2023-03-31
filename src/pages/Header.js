import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import { AiOutlineAlignLeft } from 'react-icons/ai'


function Header() {
  const [mobile, setMobile] = useState(false)
  return (
    <header className='mb-[6rem]'>

      <div className='bg-white shadow-2xl fixed w-full top-0 z-50'>

        <div className='max-w-[80%] flex mx-auto justify-between h-[6rem] items-center'>

          <div className='max-w-[85px] max-lg:max-w-[80px] max-md:max-w-[75px]'>
            <a href="/">
              <img src='./assets/logo/logo.jpg' alt="" />
            </a>
          </div>

          <nav className='navbar '>
            <ul className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
              <NavLink className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full     font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px]' to='/'>
                Əsas Səhifə
              </NavLink>
              <NavLink className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full  font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px]' to='about'>
                Haqqımızda
              </NavLink>
              <NavLink className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full  font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px]' to='products'>Məhsullar</NavLink>
              <NavLink className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full  font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px]' to='projects'>Layihələr</NavLink>
              <NavLink className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full  font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px]' to='connect'>Bizimlə Əlaqə</NavLink>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
              {mobile ? <IoMdClose /> : <AiOutlineAlignLeft />}

            </button>
          </nav>
        </div>

      </div>


    </header>
  )
}

export default Header