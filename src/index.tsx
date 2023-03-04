import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/main.page";
import "./styles/styles.sass";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
