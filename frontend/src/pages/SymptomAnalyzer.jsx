import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./SymptomAnalyzer.css";
import AnalysisPlaceholder from "../components/AnalysisPlaceHolder";
import AnalysisLoader from "../components/AnalysisLoader.jsx";
import ResultCard from "../components/ResultCard.jsx";
import OtherConditionsPlaceholder from "../components/OtherConditionsPlaceholder.jsx";

const SymptomAnalyzer = () => {
  const [symptoms, setSymptoms] = useState([
    "Fever",
    "Headache",
    "Body ache",
    "Chills",
    "Nausea",
  ]);
  const [input, setInput] = useState("");
  const addSymptom = () => {
    if (
      input.trim() &&
      !symptoms.includes(input.trim()) &&
      symptoms.length < 20
    ) {
      setSymptoms([...symptoms, input.trim()]);
      setInput("");
    }
  };

  const removeSymptom = (index) => {
    setSymptoms(symptoms.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSymptom();
    }
  };
  return (
    <div className="main-container">
      <Navbar />
      <div className="symptom-analyser-container">
        <div className="analyser-heading">
          <div className="analyser-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#19a400c5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-stethoscope-icon lucide-stethoscope"
            >
              <path d="M11 2v2" />
              <path d="M5 2v2" />
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
              <path d="M8 15a6 6 0 0 0 12 0v-3" />
              <circle cx="20" cy="10" r="2" />
            </svg>
          </div>
          <div className="analyser-title">
            <h2>Symptom Analyser</h2>
            <p>Enter your symptoms and get AI powered possible analysis.</p>
          </div>
        </div>
        <div className="symptom-selection">
          <div className="symptom-card">
            <h3>1. Enter Your Symptoms</h3>

            <div className="input-box">
              <input
                type="text"
                placeholder="Describe your symptoms..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <div className="tags">
                {symptoms.map((symptom, index) => (
                  <div className="tag" key={index}>
                    {symptom}
                    <span onClick={() => removeSymptom(index)}>×</span>
                  </div>
                ))}

                {symptoms.length < 20 && (
                  <button className="add-btn" onClick={addSymptom}>
                    + Add more
                  </button>
                )}
              </div>

              <p className="count">{symptoms.length} / 20 symptoms</p>
            </div>

            <div className="bottom-section">
              <div className="tip">
                💡 Tip: Enter specific symptoms for more accurate results.
              </div>

              <button className="analyse-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sparkles-icon lucide-sparkles"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>{" "}
                Analyze Symptoms
              </button>
            </div>
          </div>
        </div>
        <div className="result-section">
          {/* {loading ? (
            <AnalysisLoader />
          ) : result ? (
            <ResultCard data={result} />
          ) : (
            <AnalysisPlaceholder />
          )} */}
          <AnalysisPlaceholder />

          {/* {conditions.length > 0 ? (
            <OtherConditions conditions={conditions} />
          ) : (
            <OtherConditionsPlaceholder />
          )} */}
          <OtherConditionsPlaceholder />
        </div>
        <div className="recommendations-section">
          <div className="recommendation-card">
            <h3>4. Recommended Next Steps</h3>

            <div className="step-card">
              <div className="step-icon">🛏️</div>
              <div>
                <h4>Rest & Hydration</h4>
                <p>Get plenty of rest and drink lots of fluids.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-icon">📋</div>
              <div>
                <h4>Monitor Symptoms</h4>
                <p>Keep track of your fever and other symptoms.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-icon">🩺</div>
              <div>
                <h4>Consult a Doctor</h4>
                <p>If symptoms persist or worsen, seek medical help.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-icon">🧪</div>
              <div>
                <h4>Suggested Tests</h4>
                <p>Blood test, CBC, Platelet count.</p>
              </div>
            </div>

          </div>

          <div className="warning-card">
            <h3>⚠️ When to Seek Immediate Help</h3>

            <ul>
              <li>High fever (above 102°F) for more than 2 days</li>
              <li>Severe abdominal pain</li>
              <li>Persistent vomiting</li>
              <li>Bleeding or bruising</li>
              <li>Difficulty breathing</li>
            </ul>

            <button className="emergency-btn">📞 Emergency? Call Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomAnalyzer;
