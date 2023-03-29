import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import Otziv1 from "../../assets/icons/otziv1.png";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SliderNavigation } from "../SliderNavigation/SliderNavigation";
import "./ReviewSlider.sass";

export const ReviewSlider: React.FC = () => {
  return (
    <div className="review-slider">
      <div className="wrapper">
        <div className="slider-wrapper">
          <SectionTitle title="reviews" translation="отзывы" />
          <Swiper
            spaceBetween={700}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
          >
            <SliderNavigation />
            <SwiperSlide>
              <img className="swiper-img" src={Otziv1} alt="review" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-img" src={Otziv1} alt="review" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-img" src={Otziv1} alt="review" />
            </SwiperSlide>
            <SwiperSlide>slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
