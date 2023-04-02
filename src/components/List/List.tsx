import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./List.sass";

const values = [
  "свободно заговорить на английском",
  "использовать язык для работы и учёбы за границей",
  "переехать за границу и чувствовать\u00A0себя\u00A0комфортно",
  "путешествовать",
  "больше зарабатывать",
];

export const List: React.FC = () => {
  const [triggered, setTriggered] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const observerCallback = useCallback<IntersectionObserverCallback>(
    ([{ isIntersecting }]) => {
      if (!triggered && isIntersecting) {
        setTriggered(true);
      }
    },
    [triggered]
  );

  const observer = useMemo(
    () => new IntersectionObserver(observerCallback, { threshold: 1 }),
    [observerCallback]
  );

  useEffect(() => {
    if (!ref.current) return;

    observer.observe(ref.current);
  }, [ref, observer]);

  useEffect(() => {
    return () => observer.disconnect();
  }, [observer]);

  return (
    <div className="list">
      <div className="wrapper">
        <h4 ref={ref} className="list__title">
          за 8 лет я помогла своим ученикам
        </h4>
        {values.map((value, i) => (
          <div className={triggered ? "list__item line-animation" : "list__item"} key={i}>
            <div className="list__item-number">{i + 1}</div>
            <div className="list__item-value">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
