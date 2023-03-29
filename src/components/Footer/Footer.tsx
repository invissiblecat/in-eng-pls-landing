import React from "react";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/icons/logo.svg";
import Up from "../../assets/icons/up.svg";
import { values } from "../Header/Header";
import "./Footer.sass";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="wrapper__wide">
        <a href="/">
          <img src={Logo} className="header__logo" alt="IN ENGLISH PLS" />
        </a>
        <div className="footer__nav">
          {values.map(({ title, to }, i) => (
            <HashLink to={`/#${to}`} className="header__nav-item" key={i}>
              {title}
            </HashLink>
          ))}
        </div>
        <HashLink to="/#header" className="footer__up">
          <p className="footer__up-text">наверх</p>
          <img className="footer__up-img" src={Up} alt="up" />
        </HashLink>
      </div>
    </div>
  );
};
