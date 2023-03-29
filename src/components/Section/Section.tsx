import React, { ReactNode } from "react";
import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./Section.sass";

export interface SectionProps {
  title: string;
  translation: string;
  imgSrc: string;
  text: ReactNode;
  to: string;
  reverse?: boolean;
  titleDelay?: number;
  descDelay?: number;
}

export const Section: React.FC<SectionProps> = ({
  title,
  translation,
  text,
  imgSrc,
  reverse,
  to,
  titleDelay = 0,
  descDelay = 0.5,
}) => {
  return (
    <section className="section" id={to}>
      <div className="wrapper" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
        <div className="section__text">
          <FadeInOnScroll delay={titleDelay}>
            <SectionTitle title={title} translation={translation} />
          </FadeInOnScroll>
          <FadeInOnScroll delay={descDelay}>
            <p className="section__description">{text}</p>
          </FadeInOnScroll>
        </div>
        <img
          className={reverse ? "section__img__reverse" : "section__img"}
          src={imgSrc}
          alt={title}
          style={{ transform: "translateY(50%)" }}
        />
      </div>
    </section>
  );
};
