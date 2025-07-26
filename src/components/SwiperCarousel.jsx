import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Autoplay } from 'swiper/modules';


const SwiperCarousel = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true} 
        className="mySwiper"
        modules={[EffectCards]}
      >
        <SwiperSlide><img src="../../book-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../book-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../book-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../book-4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../book-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../book-6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../book-7.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperCarousel;