import "./ServiceSection.sass";

import React, { ReactNode } from "react";

interface ServiceSectionProps {
  description: ReactNode;
  price?: string;
  minutes?: number;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ description, price, minutes }) => {
  return (
    <div className="service-section">
      <div className="service-section__description">{description}</div>
      <div className="service-section__price">
        {minutes && price && (
          <div className="price-time-info">
            <div className="price-time-info__title">цена: </div>
            <div className="price-time-info__body">
              {price} рублей ({minutes} минут)
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
