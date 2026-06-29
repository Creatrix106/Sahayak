import React from "react";
import "./SummaryBox.css";
import AnalysisLoader from "../components/AnalysisLoader.jsx";

const SumarryBox = ({ loading }) => {
  return (
    <div className="summary-container">
      <div className="summary-title">
        <h3>2. Report Summary</h3>
      </div>
      {loading ? (
        <AnalysisLoader currentStep={2}/>
      ) : (
        <>
          <div className="summary-icon">
            <img src="./report.png" alt="" />
          </div>
          <div className="icon-text">
            <h4>Your summary report will appear here</h4>
            <p>Upload your report and our AI will analyse it to provide</p>
          </div>
          <h2>Your summary report will appear here</h2>
          <div className="provide-list">
            <div className="list">
              <div className="list-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#674cff"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-icon lucide-circle-check"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="list-text">Easy-to-understand summary</div>
            </div>
            <div className="list">
              <div className="list-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#674cff"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-icon lucide-circle-check"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="list-text">Key findings and important values</div>
            </div>
            <div className="list">
              <div className="list-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#674cff"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-icon lucide-circle-check"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="list-text">Concering pointers (if any)</div>
            </div>
            <div className="list">
              <div className="list-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#674cff"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-icon lucide-circle-check"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="list-text">General advice and next step</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SumarryBox;
