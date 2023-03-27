import React, { FC } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import About from "../../assets/icons/about.png";
import Edu from "../../assets/icons/edu.png";
import Logo from "../../assets/icons/logo.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./ReviewSlider.sass";

export const ReviewSlider: React.FC = () => {
  return (
    <div className="review-slider">
      <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log("slide change")}>
        <Img></Img>
        <SwiperSlide>
          <img className="swiper-img" src={About} alt="alt" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={Edu} alt="alt" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export const Img: FC = () => {
  const swiper = useSwiper();
  return <img src={Logo} style={{ cursor: "pointer" }} onClick={() => swiper.slideNext()}></img>;
};
