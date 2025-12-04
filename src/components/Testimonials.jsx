import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "../data/data";
const Testimonials = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold ">What our happy client say</h1>
        <p className="text-gray-700">
          Things that make it the best place to start trading
        </p>
      </div>
      {/* Swiper */}
      <div className="mt-16">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="testmonials-swiper"
        >
          {testimonials.map((items, index) => (
            <SwiperSlide key={items.id}>
              <div className="flex flex-col items-center gap-4">
                <img className="rounded-full" src={items.image} alt="" />
                <h2 className="text-xl font-bold">{items.name}</h2>
                <p className="text-center">{items.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* custom button */}
      <div className="mt-16 mb-12 flex justify-center gap-4">
        <button class=" w-12 h-12 swiper-button-prev-custom rounded-full border border-gray-200 flex justify-center items-center text-gray-800 hover:text-gray-500">
          <FaChevronLeft className="w-8 h-8" />
        </button>
        <button class=" w-12 h-12 swiper-button-next-custom rounded-full border border-gray-200 flex justify-center items-center text-gray-800 hover:text-gray-500">
          <FaChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;