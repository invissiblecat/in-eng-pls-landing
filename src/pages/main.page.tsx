import React from "react";
import { Header } from "../components/Header/Header";
import { Profile } from "../components/Profile/Profile";

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Profile />
    </>
  );
};
