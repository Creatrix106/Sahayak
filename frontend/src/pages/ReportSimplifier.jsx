import React from "react";
import Navbar from "../components/Navbar";
import "./ReportSimplifier.css";
import { useState } from "react";

import UploadBox from "../components/UploadBox.jsx";
import SummaryBox from '../components/SumarryBox.jsx'

const ReportSimplifier = () => {
  const [file, setFile] = useState(null);
  const [reportSummary, setReportSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="main-container">
      <Navbar />
      <div className="report-container">
        <div className="report-header">
          <div className="header-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ac00ef"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-file-text-icon lucide-file-text"
            >
              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
              <path d="M14 2v5a1 1 0 0 0 1 1h5" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </div>
          <div className="report-header-text">
          <h2>Report Simplifier</h2>
          <p>Upload your medical report and get easy to understand summaries.</p>
          </div>
        </div>
        <div className="report-card-container">
        <UploadBox setLoading={setLoading}/>
        <SummaryBox  loading={loading} />
        </div>
      </div>    
    </div>
  );
};

export default ReportSimplifier;
