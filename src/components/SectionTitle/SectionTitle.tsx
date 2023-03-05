import React from "react";
import "./SectionTitle.sass";

interface SectionProps {
  title: string;
  translation: string;
}

export const SectionTitle: React.FC<SectionProps> = ({ title, translation }) => {
  return (
    <div className="section-title">
      <h2 className="section-title__title">{title}</h2>
      <h3 className="section-title__translation">{translation}</h3>
    </div>
  );
};
