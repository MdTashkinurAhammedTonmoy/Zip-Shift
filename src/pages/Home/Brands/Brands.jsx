import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import star_people from '../../../assets/brands/start_people.png'
import { Autoplay } from "swiper/modules";

const brandLogos = [amazon_vector,amazon,casio,moonstar,randstad,star,star_people]

const Brands = () => {
  return (
    <div className="mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-[#03373D]">We've helped thousands of sales teams</h2>
      </div>
      <Swiper
      slidesPerView={4}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
    >
        {
            brandLogos.map((logo,index)=> <SwiperSlide key={index}>
                <img src={logo} alt="" />
            </SwiperSlide>)
        }

      
      
    </Swiper>
    </div>
  );
};

export default Brands;
