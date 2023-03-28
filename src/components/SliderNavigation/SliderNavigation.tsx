import clsx from "clsx";
import { FC } from "react";
import { useSwiper } from "swiper/react";

import { ReactComponent as LongArrow } from "../../assets/icons/long-arrow.svg";
import "./SliderNavigation.sass";

export const SliderNavigation: FC = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-navigation">
      <LongArrow className={clsx("arrow", "previous")} onClick={() => swiper.slidePrev()} />
      <LongArrow className={clsx("arrow", "next")} onClick={() => swiper.slideNext()} />
    </div>
  );
};
