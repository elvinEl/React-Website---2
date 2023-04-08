import { t } from "i18next";
import React from "react";
import Slider from "react-slick";
import Categories from "./categories/Categories";

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
    <div className="max-w-[80%] object-cover  mx-auto relative max-md:max-w-full">
      <Slider {...settings}>
        <div>
          <img className="w-[100%]" src="./assets/hero-img/yangin.jpg" alt="" />
        </div>
        <div className="w-fit">
          <img src="./assets/hero-img/h5.jpg" alt="" />
        </div> <div className="w-fit">
          <img src="./assets/hero-img/h6.jpg" alt="" />
        </div>
        <div className="w-[100%]">
          <img src="./assets/hero-img/havalandirma.jpg" alt="" />
        </div>
       
      </Slider>

      <div className="max-w-[80%] max-xl:max-w-full mt-[1rem] mx-auto max-lg:max-w-full max-md:max-w-[90%]">
      <Categories/>
      </div>
    </div>
  );
}

export default HeroSection;
