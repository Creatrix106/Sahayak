import React from "react";
import Navbar from "../components/Navbar.jsx";
import "./Home.css";
import { Link } from "react-router-dom";

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="none">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const ReportIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const StethoscopeIcon = ({ color = 'white', size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3"/>
    <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
);

const ShieldIcon = ({ color = '#5a6ef5', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const SparkleIcon = ({ color = '#5a6ef5', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
  </svg>
);

const UsersIcon = ({ color = '#5a6ef5', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

const HeartPulseIcon = ({ color = '#e05fa5', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    <polyline points="8 12 10 14 14 10"/>
  </svg>
);

const ArrowRightIcon = ({ color = 'white', size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const LockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b7ab8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3d4466" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);

const CPUIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5a6ef5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);

const PrivateIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34c47c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const ReliableIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e05fa5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

/* ─── REPORT CARD ILLUSTRATION ───────────────── */
const ReportIllustration = () => (
  <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Document */}
    <rect x="20" y="10" width="72" height="90" rx="8" fill="#e8e6ff" stroke="#c4bef5" strokeWidth="1.5"/>
    <rect x="32" y="26" width="48" height="5" rx="2.5" fill="#9f97e8"/>
    <rect x="32" y="37" width="40" height="4" rx="2" fill="#c4bef5"/>
    <rect x="32" y="48" width="44" height="4" rx="2" fill="#c4bef5"/>
    <rect x="32" y="59" width="36" height="4" rx="2" fill="#c4bef5"/>
    {/* Bar chart */}
    <rect x="32" y="72" width="8" height="16" rx="2" fill="#7c6ee0" opacity="0.7"/>
    <rect x="44" y="80" width="8" height="8" rx="2" fill="#7c6ee0" opacity="0.5"/>
    <rect x="56" y="68" width="8" height="20" rx="2" fill="#7c6ee0" opacity="0.9"/>
    {/* Sparkle */}
    <text x="76" y="22" fontSize="14" fill="#a78bfa">✦</text>
    <text x="86" y="38" fontSize="8" fill="#c4bef5">✦</text>
    {/* Magnifier */}
    <circle cx="86" cy="88" r="22" fill="#3d2fc0" opacity="0.08"/>
    <circle cx="86" cy="88" r="18" fill="none" stroke="#4f3de0" strokeWidth="3"/>
    <line x1="99" y1="101" x2="110" y2="112" stroke="#4f3de0" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="86" cy="88" r="10" fill="#7c6ee0" opacity="0.18"/>
  </svg>
);

/* ─── SYMPTOM CARD ILLUSTRATION ──────────────── */
const SymptomIllustration = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Clipboard */}
    <rect x="18" y="22" width="66" height="82" rx="8" fill="#d4f5e5" stroke="#82ddb0" strokeWidth="1.5"/>
    <rect x="38" y="14" width="26" height="16" rx="5" fill="#82ddb0"/>
    <rect x="44" y="14" width="14" height="4" rx="2" fill="#ffffff" opacity="0.7"/>
    {/* Checkmarks */}
    <rect x="30" y="46" width="40" height="6" rx="3" fill="#82ddb0" opacity="0.6"/>
    <polyline points="30,49 33,52 40,45" stroke="#1a9e5c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="30" y="60" width="36" height="6" rx="3" fill="#82ddb0" opacity="0.6"/>
    <polyline points="30,63 33,66 40,59" stroke="#1a9e5c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="30" y="74" width="44" height="6" rx="3" fill="#82ddb0" opacity="0.6"/>
    <polyline points="30,77 33,80 40,73" stroke="#1a9e5c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Shield with cross */}
    <circle cx="88" cy="96" r="22" fill="#1a9e5c" opacity="0.12"/>
    <path d="M88 76c0 0-14 5-14 16v8l14 6 14-6v-8c0-11-14-16-14-16z" fill="#2cbe74" opacity="0.3"/>
    <path d="M88 78c0 0-12 4.5-12 14v7l12 5.2 12-5.2v-7c0-9.5-12-14-12-14z" fill="none" stroke="#1a9e5c" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="88" y1="90" x2="88" y2="102" stroke="#1a9e5c" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="82" y1="96" x2="94" y2="96" stroke="#1a9e5c" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);


const Home = () => {
  const features = [
    {
      icon: <ShieldIcon color="#5a6ef5" size={22} />,
      bg: '#f0f1ff',
      title: 'Private & Secure',
      desc: 'Your data is encrypted and kept completely private.',
    },
    {
      icon: <SparkleIcon color="#5a6ef5" size={22} />,
      bg: '#f0f1ff',
      title: 'AI Powered',
      desc: 'Advanced AI models deliver accurate and reliable insights.',
    },
    {
      icon: <UsersIcon color="#5a6ef5" size={22} />,
      bg: '#f0f1ff',
      title: 'Built for Everyone',
      desc: 'Simple, understandable and designed for real people.',
    },
    {
      icon: <HeartPulseIcon color="#e05fa5" size={22} />,
      bg: '#fff0f7',
      title: 'Health First',
      desc: 'Empowering you with knowledge for a healthier tomorrow.',
    },
  ];
  return (
    <div className="main-container">
      <Navbar />
      <div className="hero-section">
        <div className="hero-text">
          <div className="hero-badges">
          <span className="badge">
            <CPUIcon />
            AI Powered
          </span>
          <span className="badge-dot">•</span>
          <span className="badge">
            <PrivateIcon />
            Private
          </span>
          <span className="badge-dot">•</span>
          <span className="badge">
            <ReliableIcon />
            Reliable
          </span>
        </div>
          <div className="hero-title">
            <h1>
              Smarter Health Begins with <br />
              <span>Understanding.</span>
            </h1>
            <p>
              Sahayak uses AI to simplify te medical reports, assess symptoms
              and provide clear health insights in simple words.
            </p>
          </div>
          
        </div>
        <div className="hero-image">
          <img src="./hero-image.png" alt="Hero-image" />
        </div>
      </div>
      <section className="core-modes-section">
      <h3 className="section-heading">
        <span className="section-heading-line" />
        <div className="divide-title">
           Explore Sahayak's
          </div>
        
        {' '}
        <span className="section-heading-highlight">2 Core Modes</span>
        <span className="section-heading-line" />
      </h3>

      <div className="core-modes-grid">
        {/* Report Simplifier Card */}
        <div className="mode-card mode-card-report">
          <div className="mode-card-inner">
            <div className="mode-card-content">
              <div className="mode-card-icon-wrap mode-card-icon-wrap-report">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5a3de8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="mode-card-number">1. Report Simplifier</div>
              <p className="mode-card-desc">
                Upload your medical reports and get easy-to-understand summaries with highlighted key concerns.
              </p>
              <a href="#" className="try-now-link try-now-link-report">
                Try now &nbsp;→
              </a>
            </div>
            <div className="mode-card-illustration">
              <ReportIllustration />
            </div>
          </div>
          {/* Sparkle decoration */}
          <span style={{ position: 'absolute', top: 20, right: 26, color: '#a78bfa', fontSize: 18, opacity: 0.7 }}>✦</span>
        </div>

        {/* Symptom Analyser Card */}
        <div className="mode-card mode-card-symptom">
          <div className="mode-card-inner">
            <div className="mode-card-content">
              <div className="mode-card-icon-wrap mode-card-icon-wrap-symptom">
                <StethoscopeIcon color="#1a9e5c" size={26} />
              </div>
              <div className="mode-card-number">2. Symptom Analyser</div>
              <p className="mode-card-desc">
                Enter your symptoms and get AI-powered possibility analysis with recommended tests and next steps.
              </p>
              <a href="#" className="try-now-link try-now-link-symptom">
                Try now &nbsp;→
              </a>
            </div>
            <div className="mode-card-illustration">
              <SymptomIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="features-strip">
      {features.map((f, i) => (
        <div className="feature-item" key={i}>
          <div className="feature-icon-wrap" style={{ background: f.bg }}>
            {f.icon}
          </div>
          <div className="feature-text">
            <strong>{f.title}</strong>
            <span>{f.desc}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
