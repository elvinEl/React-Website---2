import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineYoutube } from 'react-icons/ai'

function Footer() {
    return (
        <div className='bg-black'>

            <div className='text-white grid grid-cols-2 max-w-[70%] mx-auto py-[60px] gap-16 max-lg:gird max-lg:grid-cols-1 max-md:max-w-full'>



                <div className='flex justify-between max-md:flex-col max-md:align-center'>

                    <div className='max-md:flex max-md:justify-center max-md:items-center max-md:flex-col max-md:mb-4'>

                        <div>
                            LOGO
                        </div>

                        <div className='flex gap-4'>

                            <a className='bg-white rounded-full px-2 py-2 hover:rotate-180 duration-500 max-md:hover:rotate-0' target='_blank' href="https://www.instagram.com/">
                                <span className='text-[15px] text-yellow-500'>
                                    <BsInstagram />
                                </span>
                            </a>

                            <a className='bg-white rounded-full px-2 py-2 hover:rotate-180 duration-500 max-md:hover:rotate-0' target='_blank' href="https://www.facebook.com/">
                                <span className='text-[15px] text-yellow-500'>
                                    <BsFacebook />
                                </span>
                            </a>

                            <a className='bg-white rounded-full px-2 py-2 hover:rotate-180 duration-500 max-md:hover:rotate-0' target='_blank' href="https://www.youtube.com/">
                                <span className='text-[15px] text-yellow-500'>
                                    <AiOutlineYoutube />
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className='text-end max-md:text-center'>
                        <p className='text-[28px] hover:text-[#ffffff7a] duration-1000 max-md:text-[18px]'>
                            <a href="tel:(+99412)4655555">
                                (+99410) 555 55 55
                            </a>
                        </p>

                        <p className='text-[13px] text-[#ffffff7a] mb-[0.2rem] duration-1000 underline hover:no-underline  hover:text-white '>
                            <a href="tel:(+99412)4655555">(+99412) 465 55 55</a>
                        </p>
                        <p className='text-[13px] text-[#ffffff7a] mb-[0.2rem] duration-1000 underline hover:no-underline  hover:text-white'>
                            <a href="tel:(+99412)4655555">(+99412) 465 55 55</a>
                        </p>
                        <p className='text-[13px] text-[#ffffff7a] mb-[0.2rem] duration-1000 underline hover:no-underline  hover:text-white'>
                            <a href="tel:(+99412)4655555">0551111212</a>
                        </p>
                        <p className='text-white text-[12px] mt-[1rem]'>
                            3 İsmayıl Qutqaşınlı, Bakı
                        </p>
                    </div>

                </div>

                <div>
                    <p className='text-[28px]  hover:text-[#ffffff7a] duration-1000 max-md:flex max-md:justify-center max-md:items-center max-md:text-[18px]'>NAVİQASİYA</p>

                    <div className='grid grid-cols-3 mt-[2rem] max-md:text-[13px] max-md:text-center'>
                        <NavLink className='underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000' to='/'>Baş Səhifə</NavLink>
                        <NavLink className='underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000' to='/about'>Şirkət Haqqında</NavLink>
                        <NavLink className='underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000' to='/products'>Məhsullar</NavLink>
                        <NavLink className='underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000' to='/projects'>Lahiyələr</NavLink>
                        <NavLink className='underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000' to='/connect'>Bizimlə Əlaqə</NavLink>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer