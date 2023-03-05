import React from "react";
import Flag from "../../assets/icons/flag.png";
import LearnIsEasy from "../../assets/icons/learn-is-easy.svg";
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
        <FadeInOnScroll delay={2}>
          <div className="profile__badge">
            <img className="profile__badge__flag" src={Flag} alt="flag"></img>
            <img
              className="profile__badge__title"
              src={LearnIsEasy}
              alt="учить английский это просто"
            ></img>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};
