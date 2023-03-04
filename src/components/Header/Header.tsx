import React from "react";
import Logo from "../../assets/icons/logo.svg";
import "./Header.sass";

interface HeaderProps {}

const values: { title: string }[] = [
  {
    title: "обо мне",
  },
  {
    title: "образование",
  },
  {
    title: "услуги",
  },
  {
    title: "отзывы",
  },
  {
    title: "контакты",
  },
];

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <img src={Logo} className="header__logo" alt="IN ENGLISH PLS" />
        <div className="header__nav">
          {values.map(({ title }) => (
            <nav className="header__nav-item">{title}</nav>
          ))}
        </div>
      </div>
    </div>
  );
};
