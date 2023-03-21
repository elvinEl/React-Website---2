import React from 'react'
import Slider from "react-slick";
import Categories from './categories/Categories';

function HeroSection() {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
    };

    return (
        <div className='max-w-[80%]  mx-auto relative max-md:max-w-full'>
            <Slider {...settings}>
                <div>
                    <img src="./assets/yangin.jpg" alt="" />
                </div>
                <div>
                    <img src="./assets/izolyasiya.jpg" alt="" />
                </div>
            </Slider>

            <div className='max-w-[80%] mt-[1rem] mx-auto max-lg:max-w-full max-md:max-w-[90%]'>
                <Categories />
            </div>
        </div>
    )
}

export default HeroSection