import React, { CSSProperties, ReactNode } from "react";
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
  style?: CSSProperties;
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
  style,
}) => {
  return (
    <section className="section" id={to}>
      <div className="wrapper" style={{ ...style, flexDirection: reverse ? "row-reverse" : "row" }}>
        <div className="section__text">
          <FadeInOnScroll delay={titleDelay} className="section__title">
            <SectionTitle title={title} translation={translation} />
          </FadeInOnScroll>
          <FadeInOnScroll delay={descDelay}>
            <p className={reverse ? "section__description__reverse" : "section__description"}>
              {text}
            </p>
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll>
          <img
            className={reverse ? "section__img__reverse" : "section__img"}
            src={imgSrc}
            alt={title}
          />
        </FadeInOnScroll>
      </div>
    </section>
  );
};
