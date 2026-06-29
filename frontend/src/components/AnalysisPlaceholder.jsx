import React from "react";
import "./AnalysisPlaceholder.css";
import {
  Search,
  ShieldPlus,
  ClipboardList,
  TestTube,
  MessageCircleMore,
} from "lucide-react";

const AnalysisPlaceholder = () => {
  return (
    <div className="analysis-card">
      <h3>2. Analysis Result</h3>

      <div className="analysis-placeholder">
        <div className="analysis-icon">
          <Search size={55} />
        </div>

        <h2>Ready to Analyze</h2>

        <p>
          Enter your symptoms above and click
          <br />
          <span>"Analyze Symptoms"</span> to receive:
        </p>

        <div className="analysis-features">
          <div className="feature">
            <ShieldPlus size={18} />
            <span>Possible conditions</span>
          </div>

          <div className="feature">
            <ClipboardList size={18} />
            <span>Recommended next steps</span>
          </div>

          <div className="feature">
            <TestTube size={18} />
            <span>Suggested tests</span>
          </div>

          <div className="feature">
            <MessageCircleMore size={18} />
            <span>AI health assistant guidance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPlaceholder;