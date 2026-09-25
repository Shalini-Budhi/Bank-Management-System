import React, { useState } from "react";
import { useNavigation } from "../../context/NavigationContext";
import "./Invest.css";

const SUB_TABS = [
  { id: "demat", label: "Demat" },
  { id: "mf", label: "Mutual Funds" },
  { id: "rbi", label: "RBI Bonds" },
  { id: "ipo", label: "IPO through ASBA" },
  { id: "nps", label: "NPS" },
];

export default function Invest() {
  const { navigateTo, userName } = useNavigation();
  const [activeTab, setActiveTab] = useState("demat");
  const [investmentType, setInvestmentType] = useState("Repatriable Investment");

  return (
    <div className="inv-container">
      {/* ── TOP HERO HEADER (Dark Blue Theme) ── */}
      <div className="inv-hero-header">
        <div className="inv-hero-top">
          <div className="inv-title-wrap">
            <h1 className="inv-title">Invest</h1>
            <p className="inv-subtitle">Build and manage your wealth effortlessly</p>
          </div>
          <button className="inv-dashboard-btn" onClick={() => navigateTo("home")}>
            ← Dashboard
          </button>
        </div>

        {/* ── SUB-TABS NAVIGATION ── */}
        <div className="inv-sub-tabs">
          {SUB_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`inv-sub-tab ${activeTab === tab.id ? "inv-sub-tab--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="inv-content-wrapper">

        {/* ════════════════════════════════════════════════════
            1. DEMAT TAB
        ════════════════════════════════════════════════════ */}
        {activeTab === "demat" && (
          <div className="inv-grid-layout">
            {/* Left Column: Demat Offer Banner */}
            <div className="inv-left-col">
              <div className="inv-demat-banner">
                <div className="inv-banner-illustration">
                  <div className="inv-phone-mockup">
                    <span className="inv-phone-screen">📈</span>
                  </div>
                </div>
                <div className="inv-banner-text">
                  <h2>Open a Demat Account Today!</h2>
                  <p>A safe and seamless mode to store &amp; keep track of your investments.</p>
                </div>
                <button
                  className="inv-apply-btn"
                  onClick={() => alert("Opening Demat Account Application...")}
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Right Column: Quick Links & HDFC SKY */}
            <div className="inv-right-col">
              {/* Quick Links Card */}
              <div className="inv-card inv-quick-links-card">
                <h3 className="inv-card-header">Quick Links</h3>
                <ul className="inv-link-list">
                  <li onClick={() => alert("Redirecting to HDFC Securities...")}>
                    <span className="inv-link-left">
                      <span className="inv-icon">📈</span> Trade at HDFC Securities
                    </span>
                    <span className="inv-chevron">›</span>
                  </li>
                  <li onClick={() => alert("Requesting Demat Account...")}>
                    <span className="inv-link-left">
                      <span className="inv-icon">📉</span> Request to Open Demat Account
                    </span>
                    <span className="inv-chevron">›</span>
                  </li>
                  <li onClick={() => alert("Opening Settlement Calendar Master...")}>
                    <span className="inv-link-left">
                      <span className="inv-icon">📅</span> Settlement Calendar Master
                    </span>
                    <span className="inv-chevron">›</span>
                  </li>
                  <li onClick={() => alert("Opening Regulatory Notifications...")}>
                    <span className="inv-link-left">
                      <span className="inv-icon">🔔</span> Important Regulatory Notification
                    </span>
                    <span className="inv-chevron">›</span>
                  </li>
                  <li onClick={() => alert("Opening List of Holidays...")}>
                    <span className="inv-link-left">
                      <span className="inv-icon">🗓️</span> View List of Holidays
                    </span>
                    <span className="inv-chevron">›</span>
                  </li>
                  <li onClick={() => alert("Opening Advance Portfolio Tracker...")}>
                    <span className="inv-link-left">
                      <span className="inv-icon">📊</span> View Advance Portfolio Tracker
                    </span>
                    <span className="inv-chevron">›</span>
                  </li>
                </ul>
              </div>

              {/* HDFC SKY Purple Promo Banner */}
              <div className="inv-sky-banner">
                <div className="inv-sky-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <span className="inv-sky-tag">Investing with Experts</span>
                <h3 className="inv-sky-title">
                  Invest in MFs, Stocks &amp; SIPs on HDFC SKY
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════
            2. MUTUAL FUNDS TAB
        ════════════════════════════════════════════════════ */}
        {activeTab === "mf" && (
          <div className="inv-grid-layout">
            {/* Left Column: Mutual Funds Card */}
            <div className="inv-left-col">
              <div className="inv-card inv-mf-card">
                <div className="inv-mf-content">
                  <div className="inv-mf-info">
                    <h2>Want to Invest in Mutual Funds?</h2>
                    <p>No more waiting. Start your exciting investment journey today.</p>
                    <button
                      className="inv-btn-primary"
                      onClick={() => alert("Starting Mutual Fund investment journey...")}
                    >
                      Get Started
                    </button>
                  </div>
                  <div className="inv-mf-graphic">
                    <div className="inv-id-badge">
                      <div className="inv-badge-avatar">👤</div>
                      <div className="inv-badge-lines">
                        <span className="inv-line-long"></span>
                        <span className="inv-line-short"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="inv-disclaimer">
                HDFC Bank Limited is an AMFI Registered Mutual Fund Distributor (ARN 0005) and SIF Distributor, APMI Registered PMS Distributor.
              </p>
            </div>

            {/* Right Column: Quick Links & HDFC SKY */}
            <div className="inv-right-col">
              <div className="inv-card inv-quick-links-card">
                <h3 className="inv-card-header">Quick Links</h3>
                <ul className="inv-link-list">
                  <li onClick={() => alert("Opening New ISA Account...")}>
                    <span className="inv-link-left">
                      <span className="inv-icon">👤</span> Open New ISA Account
                    </span>
                    <span className="inv-chevron">›</span>
                  </li>
                </ul>
              </div>

              {/* HDFC SKY MF Promo Banner */}
              <div className="inv-sky-banner">
                <div className="inv-sky-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <span className="inv-sky-tag">Start MF SIP from ₹500!</span>
                <h3 className="inv-sky-title">
                  Invest in MFs on HDFC SKY, track others too here
                </h3>
                <button className="inv-sky-outline-btn" onClick={() => alert("Opening Free HDFC SKY A/C...")}>
                  Open Free A/C
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════
            3. RBI BONDS TAB
        ════════════════════════════════════════════════════ */}
        {activeTab === "rbi" && (
          <div className="inv-single-card-layout">
            <div className="inv-card inv-rbi-card">
              <div className="inv-rbi-left">
                <h2>Floating Rate Savings Bonds, 2020 (Taxable)</h2>
                <p className="inv-rbi-subtitle">
                  Get secure returns with investments starting at just ₹1,000.00
                </p>

                <div className="inv-rbi-highlights">
                  <div className="inv-rbi-item">• <strong>Better returns</strong> than deposit</div>
                  <div className="inv-rbi-item">• <strong>Half Yearly</strong> interest payment</div>
                  <div className="inv-rbi-item">• <strong>7 years</strong> lock-in period</div>
                  <div className="inv-rbi-item">• <strong>Risk-free</strong> Investment</div>
                </div>

                <button
                  className="inv-btn-primary"
                  onClick={() => alert("Proceeding to invest in RBI Floating Rate Savings Bonds...")}
                >
                  Invest in Bonds
                </button>
              </div>

              <div className="inv-rbi-right">
                <div className="inv-money-bag-illustration">
                  <span className="inv-coin inv-coin-1">🪙</span>
                  <div className="inv-bag-shape">
                    <span className="inv-lock-icon">🔒</span>
                  </div>
                  <span className="inv-coin inv-coin-2">🪙</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════
            4. IPO THROUGH ASBA TAB
        ════════════════════════════════════════════════════ */}
        {activeTab === "ipo" && (
          <div className="inv-grid-layout">
            {/* Left Column: ASBA Form */}
            <div className="inv-left-col">
              <div className="inv-card inv-ipo-card">
                <h2>Select your investment type and account to invest in IPO</h2>

                <div className="inv-form-group">
                  <label className="inv-form-label">Investment Type</label>
                  <select
                    className="inv-select"
                    value={investmentType}
                    onChange={(e) => setInvestmentType(e.target.value)}
                  >
                    <option value="Repatriable Investment">Repatriable Investment</option>
                    <option value="Non-Repatriable Investment">Non-Repatriable Investment</option>
                  </select>
                </div>

                <div className="inv-account-selector-box">
                  <div className="inv-acc-info">
                    <div className="inv-acc-name-row">
                      <span className="inv-acc-type">NRE Savings A/C</span>
                      <span className="inv-acc-num">• **** **** **56 61</span>
                    </div>
                    <div className="inv-acc-holder">{userName.toUpperCase() || "MANNEM VAMSI KRISHNA"}</div>
                  </div>
                  <div className="inv-acc-bal-wrap">
                    <div className="inv-acc-bal">₹14,835.04</div>
                    <div className="inv-acc-bal-label">Available Balance</div>
                  </div>
                </div>

                <p className="inv-info-text">
                  For more information please <a href="#info" onClick={(e) => { e.preventDefault(); alert("Opening IPO Information portal..."); }}>click here.</a>
                </p>

                <div className="inv-action-row">
                  <button className="inv-btn-text" onClick={() => navigateTo("home")}>
                    Cancel
                  </button>
                  <button
                    className="inv-btn-primary"
                    onClick={() => alert(`Proceeding with IPO application for account ****5661 (${investmentType})`)}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: HDFC SKY IPO Banner */}
            <div className="inv-right-col">
              <div className="inv-sky-banner">
                <div className="inv-sky-icon">
                  <span className="inv-ipo-badge-text">IPO</span>
                </div>
                <span className="inv-sky-tag">Stay IPO-ready!</span>
                <h3 className="inv-sky-title">
                  Get alerts &amp; IPO analysis on HDFC SKY
                </h3>
                <button className="inv-sky-outline-btn" onClick={() => alert("Opening Free HDFC SKY A/C...")}>
                  Open Free A/C
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════
            5. NPS TAB
        ════════════════════════════════════════════════════ */}
        {activeTab === "nps" && (
          <div className="inv-single-card-layout">
            <div className="inv-card inv-nps-card">
              <div className="inv-nps-left">
                <h2>NPS Scheme - National Pension System</h2>
                <p className="inv-nps-desc">
                  The National Pension System (NPS) is a government-backed retirement savings scheme that supports security in one's working years by enabling individuals to save consistently throughout their careers and accumulate a significant retirement fund over time. While retiring from work, NPS offers a combination of one-time.
                </p>

                <div className="inv-nps-btn-group">
                  <button
                    className="inv-btn-link"
                    onClick={() => alert("Opening NPS Account details...")}
                  >
                    View Account Details
                  </button>
                  <button
                    className="inv-btn-outline"
                    onClick={() => alert("Redirecting to NPS contribution portal...")}
                  >
                    Contribute Now
                  </button>
                  <button
                    className="inv-btn-primary"
                    onClick={() => alert("Opening NPS online application form...")}
                  >
                    Apply Online
                  </button>
                </div>
              </div>

              <div className="inv-nps-right">
                <div className="inv-money-bag-illustration">
                  <span className="inv-coin inv-coin-1">🪙</span>
                  <div className="inv-bag-shape">
                    <span className="inv-lock-icon">🔒</span>
                  </div>
                  <span className="inv-coin inv-coin-2">🪙</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ── FOOTER ── */}
      <footer className="inv-footer">
        <span>© Copyright HDFC Bank Ltd.</span>
        <div className="inv-footer-links">
          <a href="#terms" onClick={(e) => e.preventDefault()}>Terms &amp; Conditions</a>
          <span className="inv-footer-sep">|</span>
          <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
