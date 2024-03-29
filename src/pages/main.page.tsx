import React from "react";
import About from "../assets/icons/about.jpg";
import Edu from "../assets/icons/edu.jpg";
import { CollapsibleList } from "../components/CollapsibleList/CollapsibleList";
import { Contacts } from "../components/Contacts/Contacts";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Info } from "../components/Info/Info";
import { List } from "../components/List/List";
import { Profile } from "../components/Profile/Profile";
import { ReviewSlider } from "../components/ReviewSlider/ReviewSlider";
import { Section, SectionProps } from "../components/Section/Section";

const aboutProps: SectionProps = {
  title: "about me",
  translation: "немного о себе",
  text: "Привет! Меня зовут Алина, и я уже 8 лет даю своим студентам инструмент для достижения цели. Изучение языка\u00A0-\u00A0это\u00A0возможность открыться миру, быть свободными в\u00A0передвижении, жить жизнью мечты, комфортно себя чувствовать\u00A0в\u00A0путешествиях, запрашивать высокий чек на свои услуги",
  imgSrc: About,
  to: "about",
};

const educationProps: SectionProps = {
  title: "education",
  translation: "образование",
  text: (
    <>
      ТвГУ факультет иностранных языков&nbsp;и&nbsp;международной
      коммуникации&nbsp;по&nbsp;направлению «теория&nbsp;и&nbsp;методика преподавания»&nbsp;-
      бакалавр. <br /> <br /> ТвГУ факультет иностранных языков и международной коммуникации по
      направлению «управление международными проектами» - магистр. <br />
      <br /> Постоянно прохожу обучение по методике преподавания, посещаю вебинары и встречи для
      педагогов
    </>
  ),
  imgSrc: Edu,
  to: "education",
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
        to={aboutProps.to}
      />
      <List />
      <Section
        title={educationProps.title}
        translation={educationProps.translation}
        text={educationProps.text}
        imgSrc={educationProps.imgSrc}
        to={educationProps.to}
        reverse
      />
      <CollapsibleList />
      <ReviewSlider />
      <Info />
      <Contacts />
      <Footer />
    </>
  );
};
