import React from "react";
import About from "../assets/icons/about.png";
import { Header } from "../components/Header/Header";
import { Profile } from "../components/Profile/Profile";
import { Section, SectionProps } from "../components/Section/Section";

const aboutProps: SectionProps = {
  title: "about me",
  translation: "немного о себе",
  text: "Привет! Меня зовут Алина, и я уже 8 лет даю своим студентам инструмент для достижения цели. Изучение языка - это возможность открыться миру, быть свободными в передвижении, жить жизнью мечты, комфортно себя чувствовать в путешествиях, запрашивать высокий чек на свои услуги",
  imgSrc: About,
};

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Profile />
      <Section
        title={aboutProps.title}
        translation={aboutProps.translation}
        text={aboutProps.text}
        imgSrc={aboutProps.imgSrc}
      />
    </>
  );
};
