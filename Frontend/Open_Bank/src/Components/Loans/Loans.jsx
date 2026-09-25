import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Loans.css";

/* ══════════════════════════════════════════════
   SVG ICONS (inline – no image dependencies)
══════════════════════════════════════════════ */
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* Person holding magnifying glass over a document — "no loans" illustration */
function NoLoanIllustration() {
  return (
    <div className="loans-empty-ill">
      <svg width="160" height="130" viewBox="0 0 160 130" fill="none">
        {/* Soft blue background aura */}
        <ellipse cx="78" cy="78" rx="62" ry="45" fill="#e0f2fe" opacity="0.5" />

        {/* Document / paper */}
        <rect x="48" y="28" width="56" height="70" rx="5" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
        {/* Document lines */}
        <line x1="58" y1="44" x2="94" y2="44" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="58" y1="54" x2="94" y2="54" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="58" y1="64" x2="82" y2="64" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
        {/* Document header bar */}
        <rect x="48" y="28" width="56" height="10" rx="5" fill="#3b82f6" opacity="0.8" />

        {/* Question mark on doc */}
        <text x="90" y="26" fontSize="18" fontWeight="bold" fill="#818cf8" fontFamily="sans-serif">?</text>

        {/* Person head */}
        <circle cx="85" cy="42" r="13" fill="#fde047" />
        {/* Hair – blue stylish */}
        <path d="M73 38c0-7 5-12 12-12s12 4 12 10c-3-2-7-2-10 1-3 2-5 2-8 1-2 0-5 0-6 0z" fill="#2563eb" />
        {/* Glasses frames */}
        <rect x="78" y="40" width="6" height="5" rx="1.5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
        <rect x="86" y="40" width="6" height="5" rx="1.5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
        <line x1="84" y1="42" x2="86" y2="42" stroke="#1e293b" strokeWidth="1.5" />
        {/* Nose */}
        <path d="M85 43v2h2" stroke="#1e293b" strokeWidth="1.2" fill="none" />
        {/* Beard / chin */}
        <path d="M80 48c2 4 8 4 10 0" fill="#2563eb" />

        {/* Body – striped white shirt */}
        <path d="M66 96c2-17 9-20 19-20s17 3 19 20" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
        <line x1="73" y1="79" x2="71" y2="96" stroke="#bfdbfe" strokeWidth="1.5" />
        <line x1="79" y1="77" x2="78" y2="96" stroke="#bfdbfe" strokeWidth="1.5" />
        <line x1="85" y1="76" x2="85" y2="96" stroke="#bfdbfe" strokeWidth="1.5" />
        <line x1="91" y1="77" x2="93" y2="96" stroke="#bfdbfe" strokeWidth="1.5" />
        <line x1="97" y1="79" x2="100" y2="96" stroke="#bfdbfe" strokeWidth="1.5" />

        {/* Arm holding magnifying glass */}
        <path d="M76 52c0 4-3 10-8 12" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />

        {/* Magnifying glass */}
        <circle cx="60" cy="88" r="11" stroke="#1d4ed8" strokeWidth="3" fill="#eff6ff" />
        <line x1="69" y1="97" x2="80" y2="108" stroke="#1d4ed8" strokeWidth="3.5" strokeLinecap="round" />
        {/* Lens glint */}
        <circle cx="56" cy="84" r="2.5" fill="#bfdbfe" opacity="0.8" />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════
   QUICK LINKS DATA
══════════════════════════════════════════════ */
const QUICK_LINKS = [
  {
    id: "link-loan",
    label: "Link Loan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    id: "interest-cert",
    label: "Interest Certificate",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: "personal-loan",
    label: "Apply for Personal Loan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "business-loan",
    label: "Apply for Business Loan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "car-loan",
    label: "Apply for Car Loan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    id: "home-loan",
    label: "Apply for Home Loan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "two-wheeler",
    label: "Apply for 2 Wheeler Loan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 0 0-1 1v5l-3 3" />
        <path d="M9.5 9l6.5 8" />
      </svg>
    ),
  },
  {
    id: "gold-loan",
    label: "Apply for Gold Loan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: "lap",
    label: "Apply for Loan Against Property",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <rect x="9" y="14" width="6" height="8" />
      </svg>
    ),
  },
  {
    id: "credit-card-loan",
    label: "Apply for Credit Card Loan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    id: "digital-lending",
    label: "Digital Lending - Important Links",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════
   MAIN COMPONENT: Loans
══════════════════════════════════════════════ */
export default function Loans() {
  // "activeLoan" or "closedLoan"
  const [activeLoanTab, setActiveLoanTab] = useState("activeLoan");

  useEffect(() => {
    async function getLoansApi() {
      try {
        const response = await axios.get("http://localhost:3000/loans");
        console.log("Loans API response:", response);
      } catch (err) {
        // UI renders independently of API
      }
    }
    getLoansApi();
  }, []);

  const handleApplyNow = () => alert("Redirecting to loan application...");
  const handleLinkLoan = () => alert("Linking an existing loan...");
  const handleApplyForLoan = () => alert("Opening loan application form...");

  return (
    <div className="loans-page-wrapper">

      {/* ══ PAGE HEADER: Loans + Apply Now ══ */}
      <div className="loans-page-header">
        <h1 className="loans-page-title">Loans</h1>
        <button type="button" className="loans-apply-now-btn" onClick={handleApplyNow}>
          Apply Now
        </button>
      </div>

      {/* ══ TWO-COLUMN LAYOUT ══ */}
      <div className="loans-main-grid">

        {/* ── LEFT COLUMN ── */}
        <div className="loans-left-column">
          <div className="loans-main-card">

            {/* Active / Closed Loan Tabs — only shown when there are loans */}
            {/* We show them but keep empty state for Active tab */}
            {/* (Uncomment tab bar below if you want tab switching UI) */}
            {/*
            <div className="loans-inner-tabs">
              <button className={`loans-inner-tab ${activeLoanTab === "activeLoan" ? "active" : ""}`} onClick={() => setActiveLoanTab("activeLoan")}>Active Loan</button>
              <button className={`loans-inner-tab ${activeLoanTab === "closedLoan" ? "active" : ""}`} onClick={() => setActiveLoanTab("closedLoan")}>Closed Loan</button>
            </div>
            */}

            {/* ── NO LOANS EMPTY STATE (matches screenshot exactly) ── */}
            <div className="loans-empty-state">
              <NoLoanIllustration />

              <h3 className="loans-empty-title">You've no loans!</h3>
              <p className="loans-empty-sub">
                Start applying for loans from here and feel free to also link any
                ongoing loans and track them.
              </p>

              <div className="loans-empty-actions">
                <button
                  type="button"
                  className="loans-link-btn"
                  onClick={handleLinkLoan}
                >
                  Link Loan
                </button>
                <button
                  type="button"
                  className="loans-apply-btn"
                  onClick={handleApplyForLoan}
                >
                  Apply for Loan
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ── RIGHT COLUMN: Quick Links ── */}
        <aside className="loans-right-column">
          <div className="loans-quick-links-card">
            <h2 className="loans-quick-links-title">Quick Links</h2>

            <div className="loans-quick-links-list">
              {QUICK_LINKS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="loans-quick-link-row"
                  onClick={() => alert(`Opening: ${item.label}`)}
                >
                  <span className="loans-link-icon">{item.icon}</span>
                  <span className="loans-link-label">{item.label}</span>
                  <span className="loans-link-chevron"><ChevronRight /></span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ══ FOOTER ══ */}
      <footer className="loans-footer">
        <span>© Copyright HDFC Bank Ltd.</span>
        <div className="loans-footer-links">
          <a href="#terms">Terms & Conditions</a>
          <span className="loans-footer-sep">|</span>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
