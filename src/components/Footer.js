import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { t } from "i18next";
import { useTranslation } from "react-i18next";


function Footer() {
  useState(() => {
    window.scrollTo(0, 0);
  });

const { t, i18n } = useTranslation();


  return (
    <>
      <div>
        <div className="bg-black">
          <div className="text-white grid grid-cols-2 max-w-[70%] mx-auto py-[60px] gap-16 max-lg:gird max-lg:grid-cols-1 max-md:max-w-full">
            <div className="flex justify-between max-md:flex-col max-md:align-center">
              <div className="flex justify-between items-center flex-col max-md:flex max-md:gap-4 max-md:justify-center max-md:items-center max-md:flex-col max-md:mb-4">
                <div className="max-w-[75px] max-lg:max-w-[70px] max-md:max-w-[65px]" >
                  <a href="/">
                    <img src="../assets/logo/logo.white.jpg" alt="" />
                  </a>
                </div>

                <div className="flex gap-4" >
                  <a
                    className="bg-white rounded-full px-2 py-2 hover:rotate-180 duration-500 max-md:hover:rotate-0"
                    target="_blank"
                    href="https://www.instagram.com/rm.technic/?igshid=YmMyMTA2M2Y%3D"
                  >
                    <span className="text-[20px] text-yellow-500">
                      <BsInstagram />
                    </span>
                  </a>

                  <a
                    className="bg-white rounded-full px-2 py-2 hover:rotate-180 duration-500 max-md:hover:rotate-0"
                    target="_blank"
                    href="https://www.facebook.com/people/RM-Technic/pfbid02eGq1W6hWQHK2rQq3vTMncbNP2Ph2BELxXebsaZHKk7Tucy9xavfanfy9f7qeWKAel/?mibextid=LQQJ4d"
                  >
                    <span className="text-[20px] text-yellow-500">
                      <BsFacebook />
                    </span>
                  </a>

                
                </div>
              </div>

              <div className="text-end max-md:text-center">
                <p className="text-[28px] hover:text-[#ffffff7a] duration-1000 max-md:text-[18px]">
                  <a href="#">
                    {
                      t('Əlaqə Nömrələri')
                    }
                    </a>
                </p>

                <div className="mt-[2rem]" >
                  <p className="text-[13px] text-[#ffffff7a] mb-[0.2rem] duration-1000 underline hover:no-underline  hover:text-white ">
                    <a href="tel:(+99470)2091646">(+99470)2091646</a>
                  </p>
                  <p className="text-[13px] text-[#ffffff7a] mb-[0.2rem] duration-1000 underline hover:no-underline  hover:text-white">
                    <a href="tel:(+99455)2824800">(+99455)2824800</a>
                  </p>
                </div>

                <p className="text-[#ffffff7a] duration-1000 underline hover:no-underline text-[13px] mt-[1rem]  hover:text-white">
             {t('Xırdalan şəhəri, Heydər Əliyev pr. 167 AAAF Park yaşayış massivi küçə 22 bina 11')}   
                </p>
              </div>
            </div>

            <div >
              <p className="text-[28px]  hover:text-[#ffffff7a] duration-1000 max-md:flex max-md:justify-center max-md:items-center max-md:text-[18px]">
            {
              t('Naviqasiya')
            }
                
              </p>

              <div className="grid grid-cols-3 mt-[2rem] max-md:text-[13px] max-md:text-center">
                <NavLink
                  className="underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000"
                  to="/"
                >
                  {
                    t('Əsas_Səhifə')
                  }
                </NavLink>
                <NavLink
                  className="underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000"
                  to="/about"
                >
                  {
                    t('Haqqımızda')
                  }
                  
                </NavLink>
                <NavLink
                  className="underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000"
                  to="/products"
                >
                  {
                    t('Məhsullar')
                  }
                  
                </NavLink>
                <NavLink
                  className="underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000"
                  to="/projects"
                >
                  {
                    t('Layihələr')
                  }
                </NavLink>
                <NavLink
                  className="underline hover:no-underline text-[#ffffff7a]  hover:text-white duration-1000"
                  to="/connect"
                >
                  {
                    t('Bizimlə Əlaqə')
                  }
                  
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex justify-center gap-3 p-4 font-light items-center mx-auto max-w-[60%]" >
          <span className="text-[14px] max-md:text-[10px]">
            Site created in 2023 by{" "}
          </span>
          <div className="w-[70px]" >
            <a target="_blank" href="https://www.dsr.az/">
              <img src="./assets/logo/dsr.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
