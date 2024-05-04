
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image" 
import { Autoplay } from 'swiper/modules';


import "swiper/css";
import "swiper/css/autoplay";




export default function App() {
  return (
    <>
    <div>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image 
         className="w-full"
         src="/posterpanjang.jpg"
         alt="posterpanjang"
         width="100"
         height="80"
         style={{
           objectFit:"contain",
         }}
       />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
         className="w-full"
         src="/aviationposter.jpg"
         alt="aviationposter"
         width="100"
         height="80"
         style={{
           objectFit:"contain",
         }}
       />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
         className="w-full"
         src="/dhumyposter.jpg"
         alt="dhumyposter"
         width="100"
         height="80"
         style={{
           objectFit:"contain",
         }}
       />
        </SwiperSlide>
      </Swiper>
      </div>
      
    </>
  );
}




      