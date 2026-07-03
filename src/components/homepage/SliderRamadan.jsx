
{/*import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image" 
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";


export default function App() {
  return (
    <>
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
        {/* <SwiperSlide>
          <div className="w-full flex justify-center py-8 bg-black">
            <Image 
            className="w-full rounded-md"
            src="/newyear.jpg"
            alt="newyear"
            width="1000"
            height="50"
            style={{
            objectFit:"contain",
          }}
        />
        <div className="p-2 bg-gradient-to-r from-red-900 to-red-700 max-w-full lg:px-3 flex justify-center ">
            <video className="w-[1200px] border-none shadow-none" controls autoPlay loop ><source src="/postercina.mp4" type="video/mp4" /></video>
          </div>
          </div>
        </SwiperSlide> 
       {/* <SwiperSlide>
        {/* <Image 
            className="w-full"
            src="/ramadan.png"
            alt="newyear"
            width="800"
            height="50"
            style={{
            objectFit:"contain",
          }}
        /> */}
       {/* </SwiperSlide>
      </Swiper>    
    </>
  );
} */}

import React from "react";
import Image from "next/image";

// STEP 1: This is just a plain list of data (not JSX!).
// Each logo is an object with a file path and a name.
// The .map() below turns this data into actual <Image> tags.
const logos = [
  { src: "/collabration/meatechlogo.png", alt: "Meatech logo" },
  { src: "/collabration/iuclogo.png", alt: "IUC logo" },
  { src: "/collabration/logoamtc.png", alt: "Tally logo" },
  { src: "/collabration/perk.png", alt: "Perk logo" },
  { src: "/collabration/stellantis.png", alt: "Stellantis logo" },
  { src: "/collabration/bamboohr.png", alt: "BambooHR logo" },
  { src: "/collabration/bny.png", alt: "BNY logo" },
];

export default function LogoSlider() {
  return (
    <div className="w-full bg-white py-16 overflow-hidden">
      <div className="relative">
        {/* left/right fade so logos don't just "cut off" at the edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* STEP 2: the moving row.
            [...logos, ...logos] just means "write the same list twice
            in a row" so the loop looks seamless (no visible jump/reset) */}
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center mx-8 md:mx-12"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                style={{ objectFit: "contain" }}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* STEP 3: the actual animation, written in plain CSS */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}