import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

// Icons
import { ImQuotesLeft } from "react-icons/im";
import { FaStar } from "react-icons/fa";


// -------------- array of testimonials -------------
const testimonialList = [
  {
    id: 1,
    title:
      "The service was absolutely outstanding. The dentist was extremely gentle, professional, and took the time to explain every step of the procedure in a calm and reassuring manner. I felt completely at ease throughout my visit.",
    name: "Grace Okafor",
    rating: 5,
  },
  {
    id: 2,
    title:
      "I came in for a routine cleaning, and the entire experience was smooth, comfortable, and stress-free. The team handled everything with such care and professionalism. I highly recommend this clinic to anyone looking for quality dental care.",
    name: "David Emmanuel",
    rating: 5,
  },
  {
    id: 3,
    title:
      "From the moment I stepped in, the staff were warm, friendly, and very welcoming. My dental treatment was completely painless and surprisingly quick. Truly a great service, and I’m happy with the whole experience.",
    name: "Aisha Bello",
    rating: 4,
  },
  {
    id: 4,
    title:
      "This dental team is incredibly professional and detail-oriented. They restored my confidence with a beautifully done tooth filling that looks and feels completely natural. I’m really impressed with their work.",
    name: "John Adeyemi",
    rating: 5,
  },
  {
    id: 5,
    title:
      "The clinic is spotless, modern, and very comfortable. The dentist was patient, skilled, and answered all my questions clearly. I felt safe and well taken care of from start to finish. Excellent service overall.",
    name: "Ngozi Iheanacho",
    rating: 5,
  },
  {
    id: 6,
    title:
      "I brought my child in for treatment, and the experience was truly exceptional. The staff knew exactly how to handle children with empathy and care. My child was relaxed and happy throughout the process.",
    name: "Fatima Musa",
    rating: 5,
  },
  {
    id: 7,
    title:
      "I did a teeth whitening session, and the results were amazing. My smile is noticeably brighter, and the procedure was fast and painless. I’m very satisfied and grateful for the excellent service.",
    name: "Samuel Olorunfemi",
    rating: 4,
  },
  {
    id: 8,
    title:
      "My tooth extraction was surprisingly smooth and completely painless. The dentist made me feel relaxed, informed, and comfortable throughout the procedure. I couldn’t have asked for a better experience.",
    name: "Chidera Nwankwo",
    rating: 5,
  },
  {
    id: 9,
    title:
      "The customer service here is outstanding. I received prompt attention, excellent care, and clear communication at every stage. I’m definitely returning for my future dental checkups.",
    name: "Blessing Adeola",
    rating: 4,
  },
  {
    id: 10,
    title:
      "This clinic truly cares about their patients. From the booking process to the actual treatment, everything was smooth, organized, and handled with exceptional professionalism. I had a wonderful experience overall.",
    name: "Michael Thomas",
    rating: 5,
  },
];




const Testimonials = () => {
  return (
    <section id='' className="bg-[#bbebd3]">
      <div className="px-4 md:px-6 lg:px-6 xl:px-10 max-w-7xl mx-auto py-16">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h4 className="uppercase tracking-wide text-black">
            Testimonials
          </h4>
          <h2 className="text-[30px] md:text-[40px] font-semibold leading-tight text-black mb-10">
            What Our <span className="text-[#28C870]">Patients</span> Are Saying
          </h2>
        </div>

        <Swiper
  className="flex"
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  autoplay={{ delay: 3000 }}
  loop={true}
  pagination={{
    clickable: true,
    el: ".custom-pagination",
  }}
  breakpoints={{
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
  }}
>
  {testimonialList.map((item) => (
    <SwiperSlide key={item.id} className="h-full">
      <div
        className="
          bg-white rounded-2xl p-6 shadow-lg mx-2
          flex flex-col justify-between
          h-full
        "
      >
        <ImQuotesLeft className="text-[#bbebd3] text-[48px] mb-3" />

        <p className="text-[20px] text-black leading-relaxed mb-4">
          {item.title}
        </p>

        <div className="flex gap-1 mb-2">
          {[...Array(item.rating)].map((_, i) => (
            <FaStar key={i} className="text-[#28C870] text-[18px]" />
          ))}
        </div>

        <h4 className="font-semibold text-black text-[15px]">
          — {item.name}
        </h4>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>

      {/* Animation classes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }

          .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            background-color: #8f8f8f !important;
            opacity: 1 !important;
            margin: 0 6px !important;
          }

          .swiper-pagination-bullet-active {
            background-color: #28C870 !important;
            transform: scale(1.3);
          }
        `}
      </style>
    </section>   
  );
};

export default Testimonials;
