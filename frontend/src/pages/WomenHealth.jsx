import React from 'react'
import Navbar from '../components/Navbar'
import './WomenHealth.css'
const WomenHealth = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <div className="women-health-container">
        <div className="health-heading">
          <div className="health-icon"><svg
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
          </svg></div>
          <div className="health-title">
            <h2>Women's Health</h2>
            <p>Trusted information and guidance for every stage of a women's life</p>
            <p>We just redirects your to authentic articles</p>
          </div>
        </div>
        <div className="women-hero">
          <div className="hero-content">
            <h1>Your Health. Your Priority.</h1>

            <p>
              Explore reliable information on menstrual health,
              pregnancy, fertility, and more.
            </p>

            <button>Explore Topics</button>
          </div>


          <div className="hero-health-image">
            <img src="/women-health.png" alt="" />
          </div>
        </div>
        <section className="life-stage">
          <h2>Health by Life Stage</h2>

          <div className="stage-grid">
            <div className="stage-card">
              <h3>Teen Years</h3>
              <p>Understanding your body and cycles.</p>
              <span>13-19 years</span>
            </div>

            <div className="stage-card">
              <h3>Reproductive Years</h3>
              <p>Fertility, periods and relationships.</p>
              <span>20-35 years</span>
            </div>

            <div className="stage-card">
              <h3>Pregnancy & Postpartum</h3>
              <p>Care for you and your little one.</p>
              <span>All trimesters</span>
            </div>

            <div className="stage-card">
              <h3>Menopause & Beyond</h3>
              <p>Embrace this new chapter.</p>
              <span>40+ years</span>
            </div>
          </div>
        </section>
        <div className="category-grid">
          <div className="category-card">
            🌸
            <h3>Menstrual Health</h3>
            <p>Periods, hygiene, irregular cycles and PMS.</p>
          </div>

          <div className="category-card">
            🤰
            <h3>Pregnancy Care</h3>
            <p>Nutrition and care during pregnancy.</p>
          </div>

          <div className="category-card">
            👶
            <h3>Mother & Child Care</h3>
            <p>Postpartum recovery and baby care.</p>
          </div>
        </div>
        <div className="topics-card">
          <h2>Common Health Topics</h2>

          <div className="topics">
            <span>PCOS</span>
            <span>Anemia</span>
            <span>Breast Health</span>
            <span>Menopause</span>
            <span>Nutrition</span>
            <span>Mental Health</span>
          </div>
        </div>
        <div className="emergency-card">
          <h2>🚨 Seek Medical Attention If You Experience:</h2>

          <ul>
            <li>Heavy bleeding</li>
            <li>Severe abdominal pain</li>
            <li>High fever during pregnancy</li>
            <li>Difficulty breathing</li>
            <li>Persistent dizziness</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WomenHealth
