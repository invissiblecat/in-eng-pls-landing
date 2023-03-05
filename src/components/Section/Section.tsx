import React from "react";
import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./Section.sass";

export interface SectionProps {
  title: string;
  translation: string;
  imgSrc: string;
  text: string;
  reverse?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, translation, text, imgSrc, reverse }) => {
  return (
    <section className="section">
      <div className="wrapper" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
        <div className="section__text">
          <FadeInOnScroll>
            <SectionTitle title={title} translation={translation} />
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.5}>
            <p className="section__description">{text}</p>
          </FadeInOnScroll>
        </div>
        <img className="section__img" src={imgSrc} alt={title} />
      </div>
    </section>
  );
};
