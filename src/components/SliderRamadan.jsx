import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>
        <div className=" flex justify-center">
      <Image
          className="w-full"
          src="/posterpanjang.jpg"
          alt="ramadan"
          width="1500"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div>
        </h3>
      </div>
      <div>
        <h3>
        <div className=" flex justify-center">
      <Image
          className="w-full"
          src="/ramadan.jpg"
          alt="ramadan"
          width="1500"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div>
        </h3>
      </div>
      
    </Slider>
  );
};

export default AutoSlider;