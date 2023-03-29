import React from "react";
import Flag from "../../assets/icons/flag.png";
import LearnIsEasy from "../../assets/icons/learn-is-easy.svg";
import ProfilePic from "../../assets/icons/profile.png";
import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll";

import "./Profile.sass";

export const Profile: React.FC = () => {
  return (
    <div className="profile" id="profile">
      <div className="wrapper">
        <FadeInOnScroll className="profile__title">
          <h1>sherenkova alina</h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={1} className="profile__img-wrapper">
          <img className="profile__img" src={ProfilePic} alt="sherenkova alina" />
          <FadeInOnScroll delay={1.5} className="profile__badge">
            <img className="profile__badge__flag" src={Flag} alt="flag"></img>
            <img
              className="profile__badge__title"
              src={LearnIsEasy}
              alt="учить английский это просто"
            />
          </FadeInOnScroll>
        </FadeInOnScroll>
      </div>
    </div>
  );
};
