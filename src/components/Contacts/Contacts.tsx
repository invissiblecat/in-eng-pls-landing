import "./Contacts.sass";

import React from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as VK } from "../../assets/icons/vk.svg";

export const Contacts: React.FC = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="wrapper">
        <SectionTitle title="contacts" translation="связаться со мной" />
        <div className="contacts__wrapper">
          <div>
            <div className="paragraph__wrapper">
              <p className="paragraph">
                Что-ж, спасибо тебе за изучение информации о моём подходе к обучению. Буду рада
                пообщаться с тобой, и, конечно же, на Английском языке! Помни, что первый урок для
                тебя будет БЕСПЛАТНЫМ.
              </p>
              <p className="paragraph">До встречи, дорогой друг!</p>
            </div>
            <div className="sns">
              <p className="paragraph__big">мои соцсети</p>
              <div className="sns__icon-list">
                <Telegram className="sns__icon" />
                <Instagram className="sns__icon" />
                <VK className="sns__icon" />
              </div>
            </div>
          </div>
          <div className="sns__phone">
            <p className="paragraph__big">8 (910) 847-23-73</p>
            <a href="tel:8-910-847-23-73">
              <button className="sns__phone-button">
                <span>позвонить</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
