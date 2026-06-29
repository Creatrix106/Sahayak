import { CheckCircle, Loader2 } from "lucide-react";
import './AnalysisLoader.css';

const AnalysisLoader = ({ currentStep }) => {
  const steps = [
    "Reading file...",
    "Extracting information...",
    "Understanding medical terms...",
    "Generating summary..."
  ];

  return (
    <div className="analysis-loader">

      {steps.map((step, index) => (
        <div className="loader-step" key={index}>
          <div className="loader-left">
            <div
              className={`loader-dot ${
                index <= currentStep ? "active" : ""
              }`}
            />

            {index !== steps.length - 1 && (
              <div className="loader-line"></div>
            )}
          </div>

          <p>{step}</p>

          <div className="loader-icon">
            {index < currentStep ? (
              <CheckCircle
                size={200}
                color="#22c55e"
              />
              
            ) : index === currentStep ? (
              <Loader2
                size={24}
                className="spinning"
                color="#3b82f6"
              />
             
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalysisLoader;