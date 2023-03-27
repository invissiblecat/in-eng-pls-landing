import "./CollapsibleList.sass";

import React from "react";
import { Collapsible } from "../Collapsible/Collapsible";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ServiceSection } from "../ServiceSection/ServiceSection";

interface CollapsibleListProps {}

export const CollapsibleList: React.FC<CollapsibleListProps> = ({}) => {
  return (
    <div className="collapsible-list">
      <div className="wrapper">
        <SectionTitle title="services" translation="услуги" />
        <div className="collapsible-list-items">
          <Collapsible title="Программа «Индивидуальный»">
            <ServiceSection
              description="Занятия по индивидуальному плану один на один с преподавателем"
              // price={"3 000"}
              // minutes={60}
            />
          </Collapsible>
          <Collapsible title="Программа «Парное»">
            <ServiceSection
              description="Занятия вдвоем, подберу вам собеседника или можете позвать с собой подругу / друга"
              price={"3 000"}
              minutes={60}
            />
          </Collapsible>
          <Collapsible title="Программа «Групповое»">
            <ServiceSection
              description="Групповые Занятия в мини-группе (3-4 человека)"

              // price={"3 000"}
              // minutes={60}
            />
          </Collapsible>
          <Collapsible
            title="Консультации для педагогов"
            contentOpenStyle={{ borderBottom: "2px solid #3b3b3b" }}
            last
          >
            <ServiceSection description="Консультации для педагогов"></ServiceSection>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};
