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
  imgStyle?: CSSProperties;
}

export const Section: React.FC<SectionProps> = ({
  title,
  translation,
  text,
  imgSrc,
  reverse,
  imgStyle,
  to,
}) => {
  return (
    <section className="section" id={to}>
      <div className="wrapper" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
        <div className="section__text">
          <FadeInOnScroll>
            <SectionTitle title={title} translation={translation} />
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.5}>
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
