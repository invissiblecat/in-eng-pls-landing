import { FC, PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState } from "react";
const initialTransform = "translateY(50%)";
const initialOpacity = "0";

interface FadeInOnScrollProps extends PropsWithChildren {
  delay?: number;
  repeatable?: boolean;
  fromBottom?: boolean;
}

export const FadeInOnScroll: FC<FadeInOnScrollProps> = ({
  delay = 0,
  repeatable,
  fromBottom,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(initialOpacity);
  const [transitionDelay, setTransitionDelay] = useState<string>(delay + "s");
  const [transform, setTransform] = useState(fromBottom ? initialTransform : undefined);

  const observerCallback = useCallback<IntersectionObserverCallback>(
    ([{ isIntersecting, target }]) => {
      console.log({ isIntersecting, target });

      if (isIntersecting) {
        setOpacity("1");
        setTransitionDelay(delay + "s");
      }
      if (!isIntersecting && repeatable) {
        setOpacity(initialOpacity);
        setTransitionDelay("0s");
      }

      if (isIntersecting && fromBottom) {
        setTransform("translateY(0)");
      }
      if (!isIntersecting && fromBottom && repeatable) {
        setTransform(initialTransform);
      }
    },
    [delay, fromBottom, repeatable]
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
    <div
      ref={ref}
      style={{
        transition: "all 1s ease",
        transform,
        opacity,
        transitionDelay,
      }}
    >
      {children}
    </div>
  );
};
