import React, { useState } from "react";
import "./Fd_Rd.css";

/* ══════════════════════════════════════════════
   SVG ASSETS & ILLUSTRATIONS (Pixel-Perfect)
══════════════════════════════════════════════ */

// Piggy Bank with Coin Dropping in
function PiggyBankIcon() {
  return (
    <div className="fdrd-piggy-badge">
      <svg width="44" height="44" viewBox="0 0 54 54" fill="none">
        <circle cx="27" cy="27" r="25" fill="#fce7f3" />
        {/* Coin dropping in */}
        <ellipse cx="27" cy="11" rx="5.5" ry="3" fill="#60a5fa" />
        <path d="M21.5 11v2.5c0 1.65 2.46 3 5.5 3s5.5-1.35 5.5-3V11" fill="#3b82f6" />
        {/* Piggy body */}
        <ellipse cx="26" cy="30" rx="16" ry="12" fill="#f472b6" />
        {/* Piggy snout */}
        <ellipse cx="12" cy="31" rx="4" ry="5.5" fill="#ec4899" />
        <circle cx="11" cy="30" r="1" fill="#be185d" />
        <circle cx="11" cy="33" r="1" fill="#be185d" />
        {/* Piggy ear */}
        <path d="M19 21c-2-4 2-7 4-5s1 6-4 5z" fill="#ec4899" />
        {/* Piggy eye */}
        <circle cx="18" cy="26" r="1.5" fill="#475569" />
        {/* Feet */}
        <rect x="18" y="39" width="4.5" height="5" rx="2" fill="#db2777" />
        <rect x="29" y="39" width="4.5" height="5" rx="2" fill="#db2777" />
        {/* Tail */}
        <path d="M41 28c3 0 4 3 2 4s-3-2-2-4z" stroke="#ec4899" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

// DICGC Logo Icon
function DicgcLogo() {
  return (
    <div className="fdrd-dicgc-logo">
      <div className="fdrd-dicgc-text-block">
        <div className="fdrd-dicgc-row">
          <span className="fdrd-dicgc-letter">D</span>
          <span className="fdrd-dicgc-letter">I</span>
          <span className="fdrd-dicgc-letter">C</span>
        </div>
        <div className="fdrd-dicgc-row">
          <span className="fdrd-dicgc-letter">G</span>
          <span className="fdrd-dicgc-letter">C</span>
          <span className="fdrd-dicgc-dot"></span>
        </div>
      </div>
    </div>
  );
}

// SVG QR Code for DICGC registration verification
function QrCodeSvg() {
  return (
    <div className="fdrd-qrcode-wrap">
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
        <rect width="68" height="68" fill="#ffffff" rx="4" />
        {/* Top-Left Finder */}
        <rect x="4" y="4" width="18" height="18" fill="#0f172a" rx="2" />
        <rect x="7" y="7" width="12" height="12" fill="#ffffff" />
        <rect x="9.5" y="9.5" width="7" height="7" fill="#0f172a" />

        {/* Top-Right Finder */}
        <rect x="46" y="4" width="18" height="18" fill="#0f172a" rx="2" />
        <rect x="49" y="7" width="12" height="12" fill="#ffffff" />
        <rect x="51.5" y="9.5" width="7" height="7" fill="#0f172a" />

        {/* Bottom-Left Finder */}
        <rect x="4" y="46" width="18" height="18" fill="#0f172a" rx="2" />
        <rect x="7" y="49" width="12" height="12" fill="#ffffff" />
        <rect x="9.5" y="51.5" width="7" height="7" fill="#0f172a" />

        {/* Data Pattern Matrix Blocks */}
        <rect x="26" y="5" width="4" height="4" fill="#0f172a" />
        <rect x="34" y="5" width="4" height="7" fill="#0f172a" />
        <rect x="26" y="13" width="7" height="4" fill="#0f172a" />
        <rect x="38" y="13" width="4" height="4" fill="#0f172a" />

        <rect x="5" y="26" width="5" height="4" fill="#0f172a" />
        <rect x="14" y="26" width="8" height="4" fill="#0f172a" />
        <rect x="26" y="22" width="4" height="8" fill="#0f172a" />
        <rect x="34" y="22" width="8" height="4" fill="#0f172a" />
        <rect x="46" y="26" width="6" height="4" fill="#0f172a" />
        <rect x="56" y="26" width="7" height="4" fill="#0f172a" />

        <rect x="10" y="34" width="5" height="7" fill="#0f172a" />
        <rect x="19" y="34" width="4" height="4" fill="#0f172a" />
        <rect x="27" y="34" width="7" height="7" fill="#0f172a" />
        <rect x="38" y="30" width="5" height="8" fill="#0f172a" />
        <rect x="47" y="34" width="4" height="7" fill="#0f172a" />
        <rect x="55" y="34" width="8" height="4" fill="#0f172a" />

        <rect x="26" y="45" width="5" height="8" fill="#0f172a" />
        <rect x="35" y="45" width="6" height="4" fill="#0f172a" />
        <rect x="45" y="45" width="5" height="7" fill="#0f172a" />
        <rect x="54" y="45" width="8" height="4" fill="#0f172a" />

        <rect x="26" y="57" width="8" height="6" fill="#0f172a" />
        <rect x="38" y="53" width="4" height="10" fill="#0f172a" />
        <rect x="46" y="56" width="16" height="7" fill="#0f172a" />
      </svg>
    </div>
  );
}

// Person Looking with Magnifying Glass (Empty State Illustration for Fixed Deposits)
function EmptyStateDepositIllustration() {
  return (
    <div className="fdrd-empty-ill-wrap">
      <svg width="150" height="120" viewBox="0 0 150 120" fill="none">
        {/* Background cloud / aura */}
        <ellipse cx="75" cy="65" rx="55" ry="40" fill="#e0f2fe" opacity="0.6" />

        {/* Question Mark */}
        <text x="96" y="36" fontSize="22" fontWeight="bold" fill="#818cf8" fontFamily="sans-serif">?</text>

        {/* Person Head & Face */}
        <circle cx="72" cy="46" r="14" fill="#fde047" />
        {/* Hair - blue stylish curls */}
        <path d="M60 42c0-8 6-14 14-14s14 4 14 11c-3-2-8-2-12 1-3 2-6 2-10 1-3 0-5 1-6 1z" fill="#2563eb" />
        {/* Glasses */}
        <rect x="65" y="44" width="6" height="5" rx="1.5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
        <rect x="74" y="44" width="6" height="5" rx="1.5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
        <line x1="71" y1="46" x2="74" y2="46" stroke="#1e293b" strokeWidth="1.5" />
        {/* Nose & Beard */}
        <path d="M72 47v3h2" stroke="#1e293b" strokeWidth="1.2" fill="none" />
        <path d="M66 52c2 4 8 4 11 0" fill="#2563eb" />

        {/* Body / Striped blue shirt */}
        <path d="M52 82c2-18 10-22 21-22s19 4 21 22" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
        <line x1="60" y1="63" x2="57" y2="82" stroke="#bfdbfe" strokeWidth="2" />
        <line x1="67" y1="61" x2="65" y2="82" stroke="#bfdbfe" strokeWidth="2" />
        <line x1="73" y1="60" x2="73" y2="82" stroke="#bfdbfe" strokeWidth="2" />
        <line x1="80" y1="61" x2="82" y2="82" stroke="#bfdbfe" strokeWidth="2" />
        <line x1="87" y1="63" x2="90" y2="82" stroke="#bfdbfe" strokeWidth="2" />

        {/* Hand on chin */}
        <path d="M70 54c0 3 3 7 7 7" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />

        {/* Magnifying Glass */}
        <circle cx="56" cy="85" r="9" stroke="#1d4ed8" strokeWidth="3" fill="#ffffff" fillOpacity="0.7" />
        <line x1="63" y1="92" x2="73" y2="102" stroke="#1d4ed8" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════
   QUICK LINKS DATA & ICONS
══════════════════════════════════════════════ */
const QUICK_LINKS = [
  {
    id: "open-new",
    label: "Open a New Deposit",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 2L2 7h20L12 2z" />
      </svg>
    ),
  },
  {
    id: "fd-summary",
    label: "Download FD Summary",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="12" y2="18" />
        <line x1="15" y1="15" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    id: "rd-summary",
    label: "Download RD Summary",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "flexi-summary",
    label: "Download Flexi RD Summary",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15h6M9 11h6" />
      </svg>
    ),
  },
  {
    id: "interest-rates",
    label: "View Interest Rates",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="9" y1="15" x2="15" y2="9" />
        <circle cx="9.5" cy="9.5" r="1.5" fill="#004c8f" />
        <circle cx="14.5" cy="14.5" r="1.5" fill="#004c8f" />
      </svg>
    ),
  },
  {
    id: "calculator",
    label: "FD Calculator",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="8.01" y2="10" strokeWidth="3" />
        <line x1="12" y1="10" x2="12.01" y2="10" strokeWidth="3" />
        <line x1="16" y1="10" x2="16.01" y2="10" strokeWidth="3" />
        <line x1="8" y1="14" x2="8.01" y2="14" strokeWidth="3" />
        <line x1="12" y1="14" x2="12.01" y2="14" strokeWidth="3" />
        <line x1="16" y1="14" x2="16.01" y2="14" strokeWidth="3" />
        <line x1="8" y1="18" x2="8.01" y2="18" strokeWidth="3" />
        <line x1="12" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
  {
    id: "interest-certificate",
    label: "Download Interest Certificate",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════
   MAIN FD_RD / DEPOSITS COMPONENT
══════════════════════════════════════════════ */
export default function Fd_Rd() {
  // Top Sub-Tabs: "fixed", "recurring", "flexi"
  const [activeDepositTab, setActiveDepositTab] = useState("recurring");

  // Inner Sub-Tabs for Fixed Deposits: "nre-nro", "fcnr"
  const [activeInnerTab, setActiveInnerTab] = useState("nre-nro");

  // Dynamic Content configuration per sub-tab
  const tabConfigs = {
    fixed: {
      promoTitle: "Book a new Deposit instantly!",
      promoSubtitle: "You won't believe how easy it is",
    },
    recurring: {
      promoTitle: "Book a new RD instantly!",
      promoSubtitle: "Grab your savings through Systematic Deposits",
    },
    flexi: {
      promoTitle: "Book a Flexi RD instantly!",
      promoSubtitle: "Live life with passion. Meet your goals with a Flexi RD. Open one today",
    },
  };

  const currentConfig = tabConfigs[activeDepositTab] || tabConfigs.recurring;

  const handleOpenNow = () => {
    alert(`Starting application for ${currentConfig.promoTitle}`);
  };

  const handleQuickLinkClick = (linkId, label) => {
    alert(`Opening "${label}"...`);
  };

  return (
    <div className="fdrd-page-wrapper">
      {/* ── Page Header: Deposits ── */}
      <h1 className="fdrd-page-heading">Deposits</h1>

      {/* ── Top Sub-Tab Navigation Bar ── */}
      <div className="fdrd-subtabs-nav">
        <button
          type="button"
          className={`fdrd-subtab-btn ${activeDepositTab === "fixed" ? "active" : ""}`}
          onClick={() => setActiveDepositTab("fixed")}
        >
          Fixed Deposits
        </button>
        <button
          type="button"
          className={`fdrd-subtab-btn ${activeDepositTab === "recurring" ? "active" : ""}`}
          onClick={() => setActiveDepositTab("recurring")}
        >
          Recurring Deposits
        </button>
        <button
          type="button"
          className={`fdrd-subtab-btn ${activeDepositTab === "flexi" ? "active" : ""}`}
          onClick={() => setActiveDepositTab("flexi")}
        >
          Flexi RD
        </button>
      </div>

      {/* ── Two-Column Main Layout ── */}
      <div className="fdrd-main-grid">
        {/* ── LEFT COLUMN ── */}
        <div className="fdrd-left-column">
          
          {/* Specific to Fixed Deposits tab: Inner Sub-Tabs & Empty State Card */}
          {activeDepositTab === "fixed" && (
            <div className="fdrd-fd-container-card">
              {/* Inner Tabs (NRE/NRO | FCNR) */}
              <div className="fdrd-inner-tabs-row">
                <button
                  type="button"
                  className={`fdrd-inner-tab-btn ${activeInnerTab === "nre-nro" ? "active" : ""}`}
                  onClick={() => setActiveInnerTab("nre-nro")}
                >
                  NRE/NRO
                </button>
                <button
                  type="button"
                  className={`fdrd-inner-tab-btn ${activeInnerTab === "fcnr" ? "active" : ""}`}
                  onClick={() => setActiveInnerTab("fcnr")}
                >
                  FCNR
                </button>
              </div>

              {/* Empty State Message */}
              <div className="fdrd-empty-state-content">
                <EmptyStateDepositIllustration />
                <p className="fdrd-empty-state-text">
                  There are no active Deposits linked to your account.
                </p>
              </div>
            </div>
          )}

          {/* Yellow Promo Banner (Present in all 3 tabs with tab-specific text) */}
          <div className="fdrd-promo-banner">
            <div className="fdrd-promo-left">
              <PiggyBankIcon />
              <div className="fdrd-promo-info">
                <h3 className="fdrd-promo-title">{currentConfig.promoTitle}</h3>
                <p className="fdrd-promo-sub">{currentConfig.promoSubtitle}</p>
              </div>
            </div>
            <button
              type="button"
              className="fdrd-open-now-btn"
              onClick={handleOpenNow}
            >
              Open Now
            </button>
          </div>

          {/* DICGC Protection Banner */}
          <div className="fdrd-dicgc-banner">
            <div className="fdrd-dicgc-left">
              <DicgcLogo />
              <div className="fdrd-dicgc-details">
                <h4 className="fdrd-dicgc-title">Protecting the interest of all depositors</h4>
                <p className="fdrd-dicgc-subtitle">
                  DICGC now covers upto INR 5 Lakhs per depositors per bank
                </p>
                <div className="fdrd-dicgc-meta">
                  <span className="fdrd-dicgc-registered">HDFC Bank is registered with DICGC</span>
                  <a
                    href="https://www.dicgc.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fdrd-dicgc-link"
                  >
                    https://www.dicgc.org.in
                  </a>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="fdrd-dicgc-qr-section">
              <QrCodeSvg />
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: QUICK LINKS ── */}
        <aside className="fdrd-right-column">
          <div className="fdrd-quick-links-card">
            <h2 className="fdrd-quick-links-title">Quick Links</h2>

            <div className="fdrd-quick-links-list">
              {QUICK_LINKS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="fdrd-quick-link-row"
                  onClick={() => handleQuickLinkClick(item.id, item.label)}
                >
                  <span className="fdrd-link-icon">{item.icon}</span>
                  <span className="fdrd-link-label">{item.label}</span>
                  <span className="fdrd-link-chevron">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ── Page Footer ── */}
      <footer className="fdrd-footer">
        <div className="fdrd-footer-left">
          © Copyright HDFC Bank Ltd.
        </div>
        <div className="fdrd-footer-right">
          <a href="#terms">Terms & Conditions</a>
          <span className="fdrd-footer-divider">|</span>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
