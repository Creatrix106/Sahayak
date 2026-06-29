import React from "react";
import { Info } from "lucide-react";
import "./OtherConditionsPlaceholder.css";

const OtherConditionsPlaceholder = () => {
  return (
    <div className="other-conditions-card">
      <h3>3. Other Possible Conditions</h3>

      <div className="other-placeholder">
        <Info size={18} />
        <span>
          Other possible conditions will appear here after analysis.
        </span>
      </div>
    </div>
  );
};

export default OtherConditionsPlaceholder;