import React from "react";
import About from "../assets/icons/about.png";
import Edu from "../assets/icons/edu.png";
import { CollapsibleList } from "../components/CollapsibleList/CollapsibleList";
import { Header } from "../components/Header/Header";
import { List } from "../components/List/List";
import { Profile } from "../components/Profile/Profile";
import { Section, SectionProps } from "../components/Section/Section";

const aboutProps: SectionProps = {
  title: "about me",
  translation: "немного о себе",
  text: "Привет! Меня зовут Алина, и я уже 8 лет даю своим студентам инструмент для достижения цели. Изучение языка - это возможность открыться миру, быть свободными в передвижении, жить жизнью мечты, комфортно себя чувствовать в путешествиях, запрашивать высокий чек на свои услуги",
  imgSrc: About,
};

const educationProps: SectionProps = {
  title: "education",
  translation: "образование",
  text: (
    <>
      ТвГУ факультет иностранных языков и международной коммуникации по направлению «теория и
      методика преподавания»- бакалавр. <br /> <br /> ТвГУ факультет иностранных языков и
      международной коммуникации по направлению «управление международными проектами» - магистр.{" "}
      <br />
      <br /> Постоянно прохожу обучение по методике преподавания, посещаю вебинары и встречи для
      педагогов"
    </>
  ),
  imgSrc: Edu,
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
      <List />
      <Section
        title={educationProps.title}
        translation={educationProps.translation}
        text={educationProps.text}
        imgSrc={educationProps.imgSrc}
        reverse
      />
      <CollapsibleList />
    </>
  );
};
