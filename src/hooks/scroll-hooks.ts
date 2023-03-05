import { useEffect } from "react";

export const useScrollValue = () => {
  useEffect(() => {
    const onScroll = () => {
      document.body.style.setProperty(
        "--scroll",
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString()
      );
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
};
