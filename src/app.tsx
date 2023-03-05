import React from "react";
import { useScrollValue } from "./hooks/scroll-hooks";
import { MainPage } from "./pages/main.page";

export const App: React.FC = () => {
  useScrollValue();
  return (
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  );
};
