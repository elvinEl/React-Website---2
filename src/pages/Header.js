import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignLeft } from "react-icons/ai";

// Translation
import { getI18n, useTranslation } from "react-i18next";

function Header() {

  // Scroll
  const [navbar,setNavbar] = useState(false )

  const changeBackground = () =>{
   if(window.scrollY >= 120){
    setNavbar(true)
   }else{
    setNavbar(false)
   }
  }
  window.addEventListener('scroll',changeBackground)
// 

  const { t, i18n } = useTranslation();
  const changeSelect = (option) => {
    i18n.changeLanguage(option.target.value);
  };

  // Responsive Mobile Menu state
  const [mobile, setMobile] = useState(false);
  return (
    <header className="mb-[6rem] fixed top-0 z-[99] w-full text-white">
     
      <div  className={navbar ? 'navbar-active' : 'navbar1'}>
        <div className="max-w-[80%] flex mx-auto justify-between h-[6rem] items-center">
          <div className="max-w-[85px] max-lg:max-w-[80px] max-md:max-w-[75px]">
            <a href="/">
              <img src="./assets/logo/logo.jpg" alt="" />
            </a>
          </div>

          <nav className="flex ">
            <ul
              className={mobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setMobile(false)}
            >
              <NavLink
                className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full     font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px] max-md:text-[24px]'
                to="/"
              >
                {t("Əsas_Səhifə")}
              </NavLink>
              <NavLink
                className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full  font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px] max-md:text-[24px]'
                to="about"
              >
                {t("Haqqımızda")}
              </NavLink>
              <NavLink
                className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full  font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px] max-md:text-[24px]'
                to="products"
              >
                {t("Məhsullar")}
              </NavLink>
              <NavLink
                className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full  font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px] max-md:text-[24px]'
                to="projects"
              >
                {t("Layihələr")}
              </NavLink>
              <NavLink
                className='relative no-underline after:content-[""] after:absolute after:bg-blue-500 after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-full  font-bold text-sm hover:text-gray-500 transition-all px-[10px] py-[20px] max-md:text-[24px]'
                to="connect"
              >
                {t("Bizimlə Əlaqə")}
            
              </NavLink>
            </ul>
            <button
              className="mobile-menu-icon"
              onClick={() => setMobile(!mobile)}
            >
              {mobile ? <IoMdClose /> : <AiOutlineAlignLeft />}
            </button>
            
            
            <select value={i18n.language} className="select-option" onChange={changeSelect}>
            <option value="az">Az</option>
          <option value="ru">Ru</option>
          </select>

          
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
