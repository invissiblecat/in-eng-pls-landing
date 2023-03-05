import React from "react";
import ProfilePic from "../../assets/icons/profile.png";
import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll";
import "./Profile.sass";

export const Profile: React.FC = () => {
  return (
    <div className="profile">
      <div className="wrapper">
        <FadeInOnScroll delay={1}>
          <h1 className="profile__title">sherenkova alina</h1>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <img className="profile__img" src={ProfilePic} alt="sherenkova alina" />
        </FadeInOnScroll>
      </div>
    </div>
  );
};
