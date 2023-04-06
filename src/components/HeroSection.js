import { t } from "i18next";
import React from "react";
import Slider from "react-slick";

function HeroSection() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="max-w-[80%]  mx-auto relative max-md:max-w-full">
      <Slider {...settings}>
        <div>
          <img src="./assets/hero-img/yangin.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/hero-img/izolyasiya.jpg" alt="" />
        </div>
        <div className="w-full">
          <img src="./assets/hero-img/havalandirma.jpg" alt="" />
        </div>
      </Slider>

      <div className="max-w-[80%] mt-[1rem] mx-auto max-lg:max-w-full max-md:max-w-[90%]">

        <div className="grid cursor-pointer grid-cols-5 gap-4 max-lg:grid-cols-2  max-md:grid-cols-1">
          <div className="box bg-white px-5 py-5 hover:shadow-lg duration-500 shadow-xl ">
            <div className="flex justify-center items-center flex-col">
              <img className="w-[60px]" src="./assets/img-icon/i1.png" alt="" />
              <span className="font-bold text-center">{t('İsitmə sistemləri')} </span>
            </div>
          </div>
          <div className="box bg-white px-5 py-5 hover:shadow-lg duration-500 shadow-xl ">
            <div className="flex justify-center items-center flex-col">
              <img className="w-[60px]" src="./assets/img-icon/i2.png" alt="" />
              <span className="font-bold text-center">{t('Soyutma sistemləri')}</span>
            </div>
          </div>
          <div className="box bg-white px-5 py-5 hover:shadow-lg duration-500 shadow-xl ">
            <div className="flex justify-center items-center flex-col">
              <img className="w-[60px]" src="./assets/img-icon/i3.png" alt="" />
              <span className="font-bold text-center">{t('Havalandırma sistemləri')} </span>
            </div>
          </div>
          <div className="box bg-white px-5 py-5 hover:shadow-lg duration-500 shadow-xl ">
            <div className="flex justify-center items-center flex-col">
              <img className="w-[60px]" src="./assets/img-icon/i4.png" alt="" />
              <span className="font-bold text-center">{t('Elektrik sistemləri')} </span>
            </div>
          </div>
          <div className="box bg-white px-5 py-5 hover:shadow-lg duration-500 shadow-xl ">
            <div className="flex justify-center items-center flex-col">
              <img className="w-[60px]" src="./assets/img-icon/i5.png" alt="" />
              <span className="font-bold text-center">{t('İzolyasiya və qablama')} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
