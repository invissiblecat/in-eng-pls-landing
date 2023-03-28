import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import About from "../../assets/icons/about.png";
import Edu from "../../assets/icons/edu.png";

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
          <SwiperSlide>
            <img className="swiper-img" src={About} alt="alt" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-img" src={Edu} alt="alt" />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
