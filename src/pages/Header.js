import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className='mb-[6rem] max-md:hidden'>

      <div className='bg-white shadow-2xl fixed w-full top-0 z-50'>

        <div className='max-w-[80%] flex mx-auto justify-between h-[6rem] items-center'>

          <div>
            LOGO
          </div>

          <nav>
            <NavLink className='font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[30px]' to='/'>Baş Səhifə</NavLink>
            <NavLink className='font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[30px]' to='about'>Şirkət Haqqında</NavLink>
            <NavLink className='font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[30px]' to='products'>Məhsullar</NavLink>
            <NavLink className='font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[30px]' to='projects'>Lahiyələr</NavLink>
            <NavLink className='font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[30px]' to='connect'>Bizimlə Əlaqə</NavLink>
          </nav>
        </div>

      </div>


    </header>
  )
}

export default Header