import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Review, ReviewProps } from "../Review/Review";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SliderNavigation } from "../SliderNavigation/SliderNavigation";
import "./ReviewSlider.sass";

import Alina from "../../assets/icons/Alina.png";
import Arina from "../../assets/icons/Arina.png";
import Ksenia from "../../assets/icons/Ksenia.png";
import Liza from "../../assets/icons/Liza.png";
import Milana from "../../assets/icons/Milana.png";

const reviews: ReviewProps[] = [
  {
    photo: Alina,
    name: "Алина",
    review:
      "С тобой обучение не в тягость, а в радость! Мне очень нравится, как ты преподносишь материал на уроках. Мы не читаем длинных скучных текстов, мало пишем во время урока. Вместо этого мы больше говорим и слушаем речь, песни на английском языке, смотрим видео, играем в различные игры. Благодаря такому формату информация воспринимается гораздо быстрее и легче, чем при заучивании. Очень удобно заниматься на интерактивных платформах, которые позволяют учить язык продуктивнее и интереснее, заниматься в любом месте. Например, ты всегда можешь повторить слова, пока куда-то едешь. Спасибо, что всегда оказываешь поддержку в изучении языка, помогаешь разобраться с непонятными вопросами. И радуешься всем, даже самым маленьким успехам ученика, что не может не мотивировать",
  },
  {
    photo: Arina,
    name: "Арина",
    review:
      "Несмотря на то, что я занимаюсь английским недавно и учу язык с нуля, мы с Алиной уже пришли к неплохим результатам. Я могу рассказать о себе, своих занятиях и увлечениях, сделать заказ в кафе, рассказать, куда мечтаю полететь отдыхать и почему именно туда. В общем, начинали мы на первом уроке с алфавита, и уже ушли достаточно далеко вперед. Независимо от того, какую цель вы ставите для себя в изучении английского языка, Алина поможет вам ее достигнуть💪🏻 Главное не забывать, что изучение языка - это совместная работа и учителя, и ученика, которая требует от вас вовлеченности и старания, как и любое дело",
  },
  {
    photo: Ksenia,
    name: "Ксения",
    review:
      "За 1,5 года занятий мой английский практически с нуля дошел до достаточно уверенного разговорного. Занятия всегда проходят легко, очень спокойно. Важно, что Алина чувствует мое настроение и лишний раз не напрягает сложными заданиями , от этого обучение всегда в удовольствие. На уроке мы всегда много говорим, записываем только новые слова или конструкции. Можем обсудить абсолютно всё, от простых бытовых вещей до рассуждений о глобальном потеплении)). Это очень расширяет словарный запас. Безусловно без собственного вклада и желания добиться результата сложно , но Алина делает всё для мотивации и всегда поддерживает! Спасибо!❤️",
  },
  {
    photo: Liza,
    name: "Лиза",
    review:
      "Хочу выразить огромную благодарность за результаты по английскому! Занятия нам очень нравятся, уроки построены очень граммотно, интерактивно, увлекающе. За год занятий я заметила колоссальный результат у ребёнка, чётко поставлено произношение, что немаловажно было для меня, успеваемость в школе стала лучше и более понятной, повысились языковые знания. Мы очень довольны занятиями! Спасибо Вам большое!",
  },
  {
    photo: Milana,
    name: "Милана",
    review:
      "Алина, добрый вечер🌸 Хотела оставить отзыв о Вашей работе: От Ваших с Миланой уроков у меня только положительные впечатления. 😊 К ребенку найден подход и установлен хороший контакт, материал объясняется доступным языком и в интересном ребенку формате. Также хочется поблагодарить за то, что Вы всегда на связи, и если возникают сложности, всегда готовы помочь. Также понравился формат занятий по скайпу, оказалось, что это очень удобно. Уровень знаний и успеваемость у ребёнка существенно повысились., появился интерес к изучению языка. Я очень довольна результатами занятий с Вами.🤗🌸🌸🌸",
  },
];

export const ReviewSlider: React.FC = () => {
  return (
    <div className="review-slider" id="reviews">
      <div className="wrapper">
        <SectionTitle title="reviews" translation="отзывы" />
        <div className="slider-wrapper">
          <Swiper spaceBetween={400} slidesPerView={1} scrollbar={{ hide: true, enabled: false }}>
            <SliderNavigation />
            {reviews.map(({ name, photo, review }) => (
              <SwiperSlide>
                <Review name={name} photo={photo} review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
