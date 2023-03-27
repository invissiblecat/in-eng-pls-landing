import clsx from "clsx";
import React, { CSSProperties, PropsWithChildren, useState } from "react";
import Plus from "../../assets/icons/plus.svg";
import "./Collapsible.sass";

interface CollapsibleProps extends PropsWithChildren {
  title: string;
  contentOpenStyle?: CSSProperties;

  last?: boolean;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  contentOpenStyle,
  last = false,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="collapsible"
      onClick={() => {
        setOpen((state) => !state);
      }}
    >
      <div>
        <div className={clsx("collapsible__header", { open, last })}>
          <p>{title}</p>
          <img className={clsx("collapsible__header__img", { open })} src={Plus} alt="plus" />
        </div>
        <div className={clsx("collapsible__content", { open, last })}>{children}</div>
      </div>
    </div>
  );
};
