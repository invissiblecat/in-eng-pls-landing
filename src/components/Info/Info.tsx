import clsx from "clsx";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

import "./Info.sass";

export const Info: FC = () => {
  const [triggered, setTriggered] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const observerCallback = useCallback<IntersectionObserverCallback>(([{ isIntersecting }]) => {
    console.log({ isIntersecting, triggered });
    if (!triggered && isIntersecting) {
      setTriggered(true);
    }
  }, []);

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
    <div className="info" ref={ref}>
      <div className="wrapper">
        <p className={clsx("paragraph", "big")}>
          я помогу перебороть страх говорения, стать более свободным, наконец разобраться с
          грамматикой и увеличить словарный запас
        </p>
        <p className={clsx("paragraph", "big")}>
          в комфортной и дружеской атмосфере я проведу вас в мир английского языка
        </p>
        <div className={triggered ? "line-animated" : "line"}></div>

        <div className={clsx("paragraph", "small")}>
          <p className="english">английский</p>
          <p className="easy"> - это просто</p>
        </div>
      </div>
    </div>
  );
};
