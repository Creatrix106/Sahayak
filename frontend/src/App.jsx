import { Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./pages/Home";
import ReportSimplifier from "./pages/ReportSimplifier.jsx";
import SymptomAnalyzer from "./pages/SymptomAnalyzer";
import WomenHealth from "./pages/WomenHealth";

import SahayakAI from "./components/SahayakAI/SahayakAI.jsx";
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <>
    <ThemeToggle/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report-simplifier" element={<ReportSimplifier/>} />
      <Route path="/symptom-analyser" element={<SymptomAnalyzer />} />
      <Route path="/women-health" element={<WomenHealth />} />
    </Routes>
    <SahayakAI/>
    </>
  );
}

export default App;