import React from 'react'
import home_1 from "../../images/home_1.jpg"
import home_2 from "../../images/home_2.jpg"
import home_3 from "../../images/home_4.jpg"

// ------ import swiper js ------------
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ----------- react schedule icon ----------
import { RiCalendarScheduleLine } from "react-icons/ri";

// ------------ import from react-dom ----------
import { useNavigate } from 'react-router-dom';

const images = [
  home_1,
  home_2,
  home_3,

];


const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className=''>
      <div className='w-full h-screen relative'>
        <Swiper modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4000, disableOnInteraction: false}}
          loop={true}
          effect='fade'
          className='h-full'
        >
          {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className='w-full h-full bg-cover bg-center flex items-center justify-center relative pt-16 lg:pt-36'
                    style={{backgroundImage: `url(${src})`}}
                > 
                  <div className='absolute inset-0 bg-black bg-opacity-60'></div>
                  <div className='px-4 md:px-6 lg:px-6 xl:px-10 max-w-7xl grid grid-cols-1 lg:grid-cols-2'>
                    <div className='z-10'>
                      <h1 className='text-white text-[35px] sm md:text-[40px] lg:text-[48px] xl:text-[55px] font-bold leading-tight'>
                      <span className='text-[#28C870]'>OTARU Dental Clinic</span> — Your Journey to a Priceless Smile Starts Here</h1>
                      <h4 className='text-white text-[17px] lg:text-[18px] xl:text-[20px] mt-6'>Experience modern dental care with a personal touch at OTARU Dental Clinic. Serving Abuja, 
                      we are dedicated to creating confident, healthy smiles through expert, compassionate care</h4>
                      <button onClick={() => navigate('/booking')} className='bg-[#28C870] mt-6 px-6 py-3 rounded-3xl text-white uppercase font-medium text-[14px]
                       flex  items-center gap-1 transition-all duration-300 transform hover:scale-95'>
                          Schedule Appointment <RiCalendarScheduleLine />
                      </button>
                    </div>
                  </div>
                
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Hero