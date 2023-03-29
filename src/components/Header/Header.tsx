import React from "react";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/icons/logo.svg";
import "./Header.sass";

interface HeaderProps {}

export const values: { title: string; to: string }[] = [
  {
    title: "обо мне",
    to: "about",
  },
  {
    title: "образование",
    to: "education",
  },
  {
    title: "услуги",
    to: "services",
  },
  {
    title: "отзывы",
    to: "reviews",
  },
  {
    title: "контакты",
    to: "contacts",
  },
];

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header" id="header">
      <div className="wrapper__wide">
        <a href="/">
          <img src={Logo} className="header__logo" alt="IN ENGLISH PLS" />
        </a>
        <div className="header__nav">
          {values.map(({ title, to }, i) => (
            <HashLink to={`/#${to}`} className="header__nav-item" key={i}>
              {title}
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  );
};
