import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SliderNavigation } from "../SliderNavigation/SliderNavigation";
import "./ReviewSlider.sass";

export const ReviewSlider: React.FC = () => {
  return (
    <div className="review-slider">
      <div className="wrapper">
        <SectionTitle title="reviews" translation="отзывы" />
        <Swiper
          spaceBetween={1000}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
        >
          <SliderNavigation />
          <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide 2</SwiperSlide>
          <SwiperSlide>slide 3</SwiperSlide>
          <SwiperSlide>slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
