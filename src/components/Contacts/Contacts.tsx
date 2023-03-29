import "./Contacts.sass";

import clsx from "clsx";
import React from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as VK } from "../../assets/icons/vk.svg";

export const Contacts: React.FC = () => {
  return (
    <div className="contacts">
      <div className="wrapper">
        <SectionTitle title="contacts" translation="связаться со мной" />
        <div className={clsx("paragraph", "wrapper")}>
          <div className={clsx("paragraph", "wrapper", "text")}>
            <p className="paragraph">
              Что-ж, спасибо тебе, что изучил информацию о моём подходе к обучению. Буду рада
              пообщаться с тобой, и, конечно же, на Английском языке! Помни, что первый урок для
              тебя будет БЕСПЛАТНЫМ.
            </p>
            <p className="paragraph">До встречи, дорогой друг!</p>
          </div>
          <div className="number">
            <p className={clsx("paragraph", "big")}>8 (910) 847-23-73</p>
          </div>
        </div>
        <div className={clsx("sns", "wrapper")}>
          <div className="sns">
            <p className={clsx("paragraph", "big")}>мои соцсети</p>
            <div className="icons">
              <Telegram className={clsx("sns", "icon")} />
              <Instagram className={clsx("sns", "icon")} />
              <VK className={clsx("sns", "icon")} />
            </div>
          </div>
          <div className={clsx("sns", "phone")}>
            <a href="tel:8-910-847-23-73">
              <button className={clsx("phone", "button")}>позвонить</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
