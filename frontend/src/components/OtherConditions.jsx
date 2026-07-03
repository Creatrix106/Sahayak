import React from "react";
import {
  Stethoscope,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import "./OtherConditionsCard.css";

const OtherConditions = ({
  conditions = [],
}) => {
  return (
    <div className="other-card">
      <h2>3. Other Conditions To Consider</h2>

      <div className="conditions-list">
        {conditions.map((condition, index) => {
          const name =
            typeof condition === "string"
              ? condition
              : condition.name;

          const description =
            typeof condition === "string"
              ? "Similar symptoms detected"
              : condition.description;

          return (
            <div
              className="condition-item"
              key={index}
            >
              <div className="condition-left">
                <div className="condition-icon">
                  <Stethoscope size={22} />
                </div>

                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>

              <ChevronRight
                size={22}
                className="arrow"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherConditions;