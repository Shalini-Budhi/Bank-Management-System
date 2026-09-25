import React, { useState } from "react";
import "./SendMoney.css";

/* ── Quick Links data ── */
const quickLinksData = [
  {
    id: "transfer-limit",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Customise Transfer Limit",
  },
  {
    id: "txn-history",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Check Transaction History",
  },
  {
    id: "schedule-transfer",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: "Schedule a Transfer",
  },
  {
    id: "branch-locator",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "Open Bank Branch/ATM Locator",
  },
  {
    id: "primary-account",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Manage Primary Account",
  },
  {
    id: "demand-draft",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    label: "Request Demand Draft",
  },
  {
    id: "forex",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "Foreign Currency Inward Remittance",
  },
];

/* ── One-Time Transfer options ── */
const oneTimeOptions = [
  {
    id: "mobile",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile Number",
    subtitle: "Mobile number + Bank Name",
  },
  {
    id: "bank-account",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Bank Account",
    subtitle: "Via NEFT/IMPS/Internal transfer",
  },
];

/* ── Main Component ── */
export default function SendMoney() {
  const [searchPayee, setSearchPayee] = useState("");
  const [activeOneTime, setActiveOneTime] = useState(null);

  return (
    <div className="sm-page">
      <h2 className="sm-page-title">Send Money</h2>

      <div className="sm-layout">
        {/* ── LEFT COLUMN ── */}
        <div className="sm-left-col">

          {/* Card 1 — Payee Search */}
          <div className="sm-card">
            {/* To label + search */}
            <div className="sm-to-label">To</div>
            <div className="sm-search-box">
              <input
                type="text"
                className="sm-search-input"
                placeholder="Type Payee Name / Bank Account / Credit Card / Mobile Number"
                value={searchPayee}
                onChange={(e) => setSearchPayee(e.target.value)}
              />
            </div>
            <p className="sm-accounts-link">My Open Bank Accounts / Other Payees</p>

            {/* Favourite Payees */}
            <div className="sm-fav-section">
              <h4 className="sm-fav-title">Favourite Payee(0)</h4>
              <div className="sm-fav-add-wrap">
                <button className="sm-add-fav-btn" title="Add New Favourite">
                  <span className="sm-add-fav-plus">+</span>
                </button>
                <p className="sm-add-fav-label">Add New Favourite</p>
              </div>
            </div>

            <div className="sm-card-divider" />

            {/* Bottom Buttons */}
            <div className="sm-bottom-btns">
              <button className="sm-btn sm-btn-outline">Add Payee</button>
              <button className="sm-btn sm-btn-ghost">View Payees</button>
            </div>
          </div>

          {/* Card 2 — One Time Transfer */}
          <div className="sm-card sm-one-time-card">
            <div className="sm-ott-header">
              <h4 className="sm-ott-title">One Time Transfer</h4>
              <span className="sm-ott-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                NEW
              </span>
            </div>
            <p className="sm-ott-desc">
              You can send up to ₹10,000 per day without adding a payee.
            </p>

            <div className="sm-ott-options">
              {oneTimeOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`sm-ott-option ${activeOneTime === opt.id ? "sm-ott-option--active" : ""}`}
                  onClick={() => setActiveOneTime(opt.id)}
                >
                  <span className="sm-ott-icon">{opt.icon}</span>
                  <div className="sm-ott-text">
                    <span className="sm-ott-opt-title">{opt.title}</span>
                    <span className="sm-ott-opt-sub">{opt.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Quick Links ── */}
        <aside className="sm-right-col">
          <div className="sm-ql-card">
            <h3 className="sm-ql-title">Quick Links</h3>
            <div className="sm-ql-list">
              {quickLinksData.map((link) => (
                <button key={link.id} className="sm-ql-row">
                  <span className="sm-ql-icon">{link.icon}</span>
                  <span className="sm-ql-label">{link.label}</span>
                  <span className="sm-ql-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
