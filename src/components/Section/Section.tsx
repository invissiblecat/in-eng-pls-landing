import React from "react";
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
          <SectionTitle title={title} translation={translation} />
          <p className="section__description">{text}</p>
        </div>
        <img className="section__img" src={imgSrc} alt={title} />
      </div>
    </section>
  );
};
