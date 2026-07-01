import React from "react";
import Navbar from "../components/Navbar.jsx";
import "./Home.css";
import { Link } from "react-router-dom";
import SahayakAI from "../components/SahayakAI/SahayakAI.jsx";


const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="hero-section">
        <div className="hero-text">
          <div className="hero-bar">
            <div className="hero-icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="Blue"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>ai</title>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="icon"
                      fill="navy"
                      transform="translate(64.000000, 64.000000)"
                    >
                      {" "}
                      <path
                        d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"
                        id="Combined-Shape"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h4>AI Powered</h4>
            </div>
            <div className="dot"></div>
            <div className="hero-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(0, 188, 41, 0.8)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield-check-icon lucide-shield-check"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <h4>Private</h4>
            </div>
            <div className="dot"></div>
            <div className="hero-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(255, 22, 131)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart-icon lucide-heart"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
              <h4>Reliable</h4>
            </div>
          </div>
          <div className="hero-title">
            <h1>
              Smarter Health Begins with <br />
              <span>Understanding.</span>
            </h1>
            <p>
              Sahayak uses AI to simplify te medical reports, assess symptoms
              and educate women about reproductive health in simple words.
            </p>
          </div>
          <div className="CTA">
            <Link>
              <div className="get-start">
                <h4>Get Started</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="blue"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right-icon lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>

            <div className="safe-data">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-lock-icon lucide-lock"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <p>
                <b>Your data is safe</b>We do not store any personal data.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="./hero-image.jpg" alt="Hero-image" />
        </div>
      </div>

      <div className="hero-divider">
        <div className="dash"></div>
        <div className="divider-text">
          <h3>
            Explore Sahayak's <span> 3 Modes</span>
          </h3>
        </div>
        <div className="dash"></div>
      </div>

      <div className="hero-card-container">
        <div id="simplifier" className="card">
          <div className="upper-card">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
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
            <div className="card-desc">
              <h4>1. Report Simplifier</h4>
              <p>
                Upload your medical reports and get easy-to-understand summaries
                with highlighten key concerns
              </p>
            </div>
          </div>
          <div className="lower-card">
            <Link to="/report-simplifier">
              <div className="try">
                <h4>Try now</h4>

              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-icon lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div id="analyser" className="card">
          <div className="upper-card">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
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
            <div className="card-desc">
              <h4>2. Symptom Analyser </h4>
              <p>
                Enter your symptoms and get AI-powered possivity analysis with
                recommended test and advices.
              </p>
            </div>
          </div>
          <div className="lower-card">
            <Link to="/symptom-analyser">
              <div className="try">
                <h4>Try now</h4>

              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-icon lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div id="women" className="card">
          <div className="upper-card">
            <div className="card-icon">
              <svg
                fill="#5c00befd"
                height="40px"
                width="40px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M398.165,442.261 c-1.024-1.6-2.453-2.923-4.203-3.819l-56.491-28.224c-5.227-3.179-14.613-25.963-21.312-51.072 c12.8-5.461,36.757-16.277,50.667-26.155c4.181-2.965,5.653-8.491,3.52-13.163c-0.171-0.384-18.048-40.192-18.048-109.696 c0-82.837-35.584-124.843-105.792-124.843c-2.816,0-5.547,1.131-7.552,3.115l-6.571,6.571 c-35.84,2.859-72.661,39.147-72.661,115.136c0,69.504-17.856,109.312-18.048,109.696c-2.133,4.672-0.661,10.197,3.52,13.163 c13.909,9.877,37.867,20.693,50.667,26.155c-6.699,25.088-16,47.851-20.715,50.731L118.059,438.4 c-1.749,0.875-3.2,2.197-4.224,3.797c-56.085-42.923-92.501-110.336-92.501-186.261c0-129.387,105.28-234.667,234.667-234.667 s234.667,105.28,234.667,234.667C490.667,331.925,454.251,399.339,398.165,442.261z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="card-desc">
              <h4>3. Women's Health</h4>
              <p>
                Access trusted information on menstrual health, pregnancy, child
                care and more. All in simple words
              </p>
            </div>
          </div>
          <div className="lower-card">
            <Link to="/women-health">
              <div className="try">
                <h4>Explore More</h4>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-icon lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
    {/* <SahayakAI/> */}

      </div>
    </div>
  );
};

export default Home;
