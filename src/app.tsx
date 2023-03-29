import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useScrollValue } from "./hooks/scroll-hooks";
import { MainPage } from "./pages/main.page";

export const App: React.FC = () => {
  useScrollValue();
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback="loading">
          <MainPage />
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
};
