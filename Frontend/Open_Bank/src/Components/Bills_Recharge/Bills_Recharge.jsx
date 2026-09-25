import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Bills_Recharge.css";

/* ══════════════════════════════════════════════
   SVG ICONS
══════════════════════════════════════════════ */
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

/* Quick Recharge illustration — hand holding phone with tick */
function RechargeIllustration() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
      {/* Background circle */}
      <circle cx="50" cy="45" r="36" fill="#e0f2fe" />
      {/* Phone body */}
      <rect x="34" y="22" width="28" height="46" rx="5" fill="#6366f1" />
      <rect x="37" y="26" width="22" height="34" rx="3" fill="#e0e7ff" />
      {/* Green check circle on screen */}
      <circle cx="48" cy="43" r="9" fill="#22c55e" />
      <polyline points="43,43 47,47 54,39" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Home button */}
      <rect x="44" y="62" width="8" height="3" rx="1.5" fill="#818cf8" />
      {/* Hand holding phone */}
      <path d="M28 52c-3 2-5 5-4 9l2 7c1 3 4 4 6 3l14-5" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="26" cy="50" r="3" fill="#fde68a" />
      {/* Signal dots */}
      <circle cx="16" cy="30" r="2" fill="#60a5fa" />
      <circle cx="20" cy="22" r="2.5" fill="#93c5fd" />
      <circle cx="10" cy="22" r="1.5" fill="#bfdbfe" />
    </svg>
  );
}

/* SmartPay illustration */
function SmartPayIllustration() {
  return (
    <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
      <circle cx="30" cy="25" r="22" fill="#e0e7ff" />
      {/* Calendar */}
      <rect x="14" y="14" width="22" height="20" rx="3" fill="#6366f1" />
      <rect x="14" y="19" width="22" height="15" rx="0" fill="#e0e7ff" />
      <rect x="14" y="14" width="22" height="5" rx="3" fill="#4f46e5" />
      <line x1="20" y1="12" x2="20" y2="17" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="12" x2="30" y2="17" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
      {/* Grid lines */}
      <line x1="20" y1="23" x2="20" y2="30" stroke="#6366f1" strokeWidth="1" />
      <line x1="26" y1="23" x2="26" y2="30" stroke="#6366f1" strokeWidth="1" />
      <line x1="14" y1="26" x2="36" y2="26" stroke="#6366f1" strokeWidth="1" />
      {/* Green tick */}
      <circle cx="36" cy="36" r="8" fill="#22c55e" />
      <polyline points="32,36 35,39 40,32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* ══════════════════════════════════════════════
   BILL CATEGORY ICONS
══════════════════════════════════════════════ */
const BillIcons = {
  Electricity: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  MobilePrepaid: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
    </svg>
  ),
  MobilePostpaid: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <polyline points="9 22 12 18 15 22" />
    </svg>
  ),
  MutualFund: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  FASTag: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  Insurance: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

/* ══════════════════════════════════════════════
   QUICK LINKS DATA
══════════════════════════════════════════════ */
const QUICK_LINKS = [
  {
    id: "mobile-prepaid",
    label: "Mobile Prepaid Recharge",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: "electricity",
    label: "Pay Electricity Bills",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "credit-card-bill",
    label: "Pay any Credit Card Bills",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    id: "insurance",
    label: "Insurance Premium Payments",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "mutual-fund",
    label: "Set Mutual Fund SmartPay",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "fastag",
    label: "Close/Manage HDFC FAStag",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004c8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "emandates",
    label: "Manage E-mandates on Cards",
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
   BILLER CATEGORIES
══════════════════════════════════════════════ */
const BILLER_CATEGORIES = ["Popular", "Utility", "Financial", "Others", "Recharge"];

const POPULAR_BILLERS = [
  { id: "electricity", label: "Electricity", icon: BillIcons.Electricity },
  { id: "mobile-prepaid", label: "Mobile\nPrepaid", icon: BillIcons.MobilePrepaid },
  { id: "mobile-postpaid", label: "Mobile\nPostpaid", icon: BillIcons.MobilePostpaid },
  { id: "mutual-fund", label: "Mutual Fund", icon: BillIcons.MutualFund },
  { id: "fastag", label: "FASTag", icon: BillIcons.FASTag },
  { id: "insurance", label: "Insurance", icon: BillIcons.Insurance },
];

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function Bills_Recharge() {
  const [rechargeType, setRechargeType] = useState("Mobile Prepaid");
  const [mobileNumber, setMobileNumber] = useState("");
  const [billerSearch, setBillerSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Popular");

  useEffect(() => {
    async function getBillsandRechargeApi() {
      try {
        const response = await axios.get("http://localhost:3000/billsrecharge");
        console.log("Bills API response:", response);
      } catch (err) {
        // API not required for UI render
      }
    }
    getBillsandRechargeApi();
  }, []);

  const handleRechargeNow = () => {
    if (!mobileNumber.trim()) {
      alert("Please enter a mobile number.");
      return;
    }
    alert(`Recharging ${rechargeType} for: ${mobileNumber}`);
  };

  const handlePayNewBill = () => alert("Opening Pay New Bill form...");
  const handleSetUpSmartPay = () => alert("Setting up SmartPay...");
  const handleViewAll = () => alert("Viewing all bills & recharges...");

  return (
    <div className="pbr-page-wrapper">
      {/* ══ PAGE HEADER: Pay Bills + Search + Pay New Bill ══ */}
      <div className="pbr-page-header">
        <h1 className="pbr-page-title">Pay Bills</h1>

        <div className="pbr-search-bar">
          <span className="pbr-search-icon"><SearchIcon /></span>
          <input
            type="text"
            className="pbr-search-input"
            placeholder="Search biller"
            value={billerSearch}
            onChange={(e) => setBillerSearch(e.target.value)}
          />
        </div>

        <button type="button" className="pbr-pay-new-btn" onClick={handlePayNewBill}>
          <span className="pbr-plus">+</span> Pay New Bill
        </button>
      </div>

      {/* ══ TWO-COLUMN LAYOUT ══ */}
      <div className="pbr-main-grid">
        {/* ── LEFT COLUMN ── */}
        <div className="pbr-left-column">

          {/* QUICK RECHARGE CARD */}
          <div className="pbr-card pbr-quick-recharge-card">
            <div className="pbr-qr-content">
              <div className="pbr-qr-left">
                <h3 className="pbr-card-title">Quick Recharge</h3>

                {/* Radio group: Mobile Prepaid | FASTag | DTH */}
                <div className="pbr-radio-group">
                  {["Mobile Prepaid", "FASTag", "DTH"].map((type) => (
                    <label key={type} className="pbr-radio-label">
                      <input
                        type="radio"
                        name="rechargeType"
                        value={type}
                        checked={rechargeType === type}
                        onChange={() => setRechargeType(type)}
                        className="pbr-radio-input"
                      />
                      <span className="pbr-radio-custom" />
                      <span className="pbr-radio-text">{type}</span>
                    </label>
                  ))}
                </div>

                {/* Mobile Number Input */}
                <div className="pbr-input-section">
                  <label className="pbr-input-label">
                    {rechargeType === "FASTag" ? "Vehicle Number" : rechargeType === "DTH" ? "Customer ID" : "Mobile Number"}
                  </label>
                  <div className="pbr-input-row">
                    <input
                      type="text"
                      className="pbr-text-input"
                      placeholder={
                        rechargeType === "FASTag"
                          ? "Enter Vehicle Number"
                          : rechargeType === "DTH"
                          ? "Enter Customer ID"
                          : "Enter Mobile Number"
                      }
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <button
                      type="button"
                      className="pbr-recharge-now-btn"
                      onClick={handleRechargeNow}
                    >
                      Recharge Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="pbr-qr-illustration">
                <RechargeIllustration />
              </div>
            </div>
          </div>

          {/* SMARTPAY BANNER */}
          <div className="pbr-card pbr-smartpay-card">
            <div className="pbr-smartpay-left">
              <div className="pbr-smartpay-icon">
                <SmartPayIllustration />
              </div>
              <div className="pbr-smartpay-text">
                <span className="pbr-smartpay-title">Leave bill dates to SmartPay.</span>
                <span className="pbr-smartpay-sub">
                  You remember birthday and anniversary dates. Learn{" "}
                  <a href="#how-it-works" className="pbr-how-link">How it Works</a>
                </span>
              </div>
            </div>
            <button type="button" className="pbr-smartpay-btn" onClick={handleSetUpSmartPay}>
              Set Up SmartPay
            </button>
          </div>

          {/* BILLS AND RECHARGES SECTION */}
          <div className="pbr-card pbr-bills-section-card">
            <div className="pbr-bills-header">
              <h3 className="pbr-card-title">Bills and Recharges</h3>
              <button type="button" className="pbr-view-all-btn" onClick={handleViewAll}>
                View All
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="pbr-category-pills">
              {BILLER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`pbr-pill-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Biller Icons Grid */}
            <div className="pbr-billers-grid">
              {POPULAR_BILLERS.map((biller) => (
                <button
                  key={biller.id}
                  type="button"
                  className="pbr-biller-item"
                  onClick={() => alert(`Opening ${biller.label.replace("\n", " ")} biller...`)}
                >
                  <div className="pbr-biller-icon-wrap">
                    {biller.icon}
                  </div>
                  <span className="pbr-biller-label">{biller.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: QUICK LINKS ── */}
        <aside className="pbr-right-column">
          <div className="pbr-quick-links-card">
            <h2 className="pbr-quick-links-title">Quick Links</h2>
            <div className="pbr-quick-links-list">
              {QUICK_LINKS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="pbr-quick-link-row"
                  onClick={() => alert(`Opening: ${item.label}`)}
                >
                  <span className="pbr-link-icon">{item.icon}</span>
                  <span className="pbr-link-label">{item.label}</span>
                  <span className="pbr-link-chevron"><ChevronRight /></span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ══ FOOTER ══ */}
      <footer className="pbr-footer">
        <span>© Copyright HDFC Bank Ltd.</span>
        <div className="pbr-footer-links">
          <a href="#terms">Terms & Conditions</a>
          <span className="pbr-footer-sep">|</span>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}