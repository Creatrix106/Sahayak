import React, { useRef } from "react";
import "./UploadBox.css";
const UploadBox = ({
  file,
  setFile,
  onAnalyse }) => {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setSummary(null);
    }
  };


  return (
    <div className="upload-box">
      <div className="upload-heading">
        <h3>1. Upload Your Report</h3>
      </div>
      <div className="drop-zone" id="drop-zone">
        <span className="drop-zone__prompt">
          Drag & drop your report here or click to browse
        </span>
        <input
          type="file"
          name="reportFile"
          id="file-input"
          className="drop-zone__input"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </div>
      {file && (
        <div className="file-preview">
          <div className="file-card">
            <div className="file-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="purple"
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
            <div className="file-info">
              <div className="file-text">
                <h4>{file.name}</h4>
                <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
                <p>Type: {file.type || "Unknown"}</p>
              </div>
            </div>
            <button
              id="close-file"
              onClick={() => {
                setFile(null);
                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
            </button>
          </div>
          <button
            id="start-analyse"
            onClick={onAnalyse}
          >
            Simplify Report
          </button>
        </div>
      )}

      <div className="confidential">
        <div className="confidential-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#5a00c8"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shield-check-icon lucide-shield-check"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div className="confidential-text">
          <h4>Secure & Confidential</h4>
          <p>your reports are processed secretly and never stored</p>
        </div>
      </div>
    </div>
  );
};

export default UploadBox;
