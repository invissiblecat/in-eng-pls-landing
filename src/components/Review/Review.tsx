import "./Review.sass";

import React from "react";

export interface ReviewProps {
  photo: string;
  name: string;
  review: string;
}

export const Review: React.FC<ReviewProps> = ({ photo, name, review }) => {
  return (
    <div className="review">
      <div className="reviewer-info">
        <img src={photo} alt="reviewer" className="reviewer-info__photo" />
        <span className="reviewer-info__name">{name}</span>
      </div>
      <p className="review-text">{review}</p>
    </div>
  );
};
