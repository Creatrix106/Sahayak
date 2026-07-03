import React from "react";
import { CheckCircle, ShieldAlert } from "lucide-react";
import "./ResultCard.css";

const ResultCard = ({ result }) => {
  if (!result) return null;

  const {
    condition,
    confidence,
    icon = "🩺",
  status = "Analysis Complete",
  disclaimer = "This is a possibility, for confirmation consult a doctor.",
  } = result;

  return (
    <div className="result-card-container">
      <div className="result-header">
        <h2>2. Analysis Result</h2>

        <div className="result-status">
          <CheckCircle size={18} />
          <span>{status}</span>
        </div>
      </div>

      <div className="main-result-card">
        <div className="result-icon">
          <span>{icon}</span>
        </div>

        <div className="result-info">
          <p className="result-subtitle">
            Most Likely Possibility
          </p>

          <h1>{condition}</h1>

          <p className="confidence">
            Confidence: {confidence}%
          </p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${confidence}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="disclaimer-card">
        <ShieldAlert size={22} />

        <p>{disclaimer}</p>
      </div>
    </div>
  );
};

export default ResultCard;