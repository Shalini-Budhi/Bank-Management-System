import React, { useState } from "react";
import "./ProductCardsSection.css";

export default function ProductCardsSection({
  accountCount = 2,
  actualBalance = "₹ 2,45,850.00",
  onGetStatement,
  onOpenDemat,
  onApplyLoan,
}) {
  const [showBalance, setShowBalance] = useState(false);

  const toggleShowBalance = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <div className="hdfc-products-section">
      {/* Show Balance Toggle Header */}
      <div className="hdfc-balance-toggle-container">
        <span className="hdfc-balance-toggle-label">Show Balance</span>
        <button
          type="button"
          className={`hdfc-toggle-switch ${showBalance ? "active" : ""}`}
          onClick={toggleShowBalance}
          aria-label="Toggle show balance"
        >
          <span className="hdfc-toggle-handle"></span>
        </button>
      </div>

      {/* 3 Action Cards Grid */}
      <div className="hdfc-product-cards-grid">
        {/* Card 1: Savings Accounts (White Card) */}
        <div className="hdfc-card-white">
          <div className="hdfc-card-top-row">
            <div className="hdfc-card-icon-circle-blue">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4338ca"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Hands holding money icon */}
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" opacity="0.2"/>
                <path d="M7 11.5a4.5 4.5 0 0 1 9 0" />
                <path d="M12 11.5v6" />
                <path d="M9.5 14.5h5" />
                <path d="M4 17.5c1.5 2.5 4.5 3.5 8 3.5s6.5-1 8-3.5" />
              </svg>
            </div>
            <button className="hdfc-card-arrow-btn" aria-label="View Savings Accounts Details">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="hdfc-card-body">
            <span className="hdfc-card-subtitle">{accountCount} Savings Accounts</span>
            <div className="hdfc-card-amount">
              {showBalance ? actualBalance : "XXXXXXXX"}
            </div>
          </div>

          <div className="hdfc-card-footer">
            <button
              className="hdfc-btn-primary"
              onClick={onGetStatement || (() => alert("Opening Account Statement..."))}
            >
              Get Statement
            </button>
          </div>
        </div>

        {/* Card 2: Demat & Trading (Purple Gradient Card) */}
        <div className="hdfc-card-purple">
          <div className="hdfc-card-top-row">
            <div className="hdfc-card-icon-box-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4338ca"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Stock chart trending up */}
                <rect x="2" y="3" width="20" height="18" rx="4" stroke="#4338ca" fill="none"/>
                <polyline points="6 15 10 10 14 13 18 8" />
                <polyline points="15 8 18 8 18 11" />
              </svg>
            </div>
            <button className="hdfc-card-arrow-btn-white" aria-label="Open Demat Account Link">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="hdfc-card-body">
            <h3 className="hdfc-promo-title">
              Open Demat &amp; Trading Acc in few clicks
            </h3>
          </div>

          <div className="hdfc-card-footer">
            <button
              className="hdfc-btn-secondary"
              onClick={onOpenDemat || (() => alert("Redirecting to Demat & Trading Account Application..."))}
            >
              Open Demat Account
            </button>
          </div>
        </div>

        {/* Card 3: Personal Loan (Purple Gradient Card) */}
        <div className="hdfc-card-purple">
          <div className="hdfc-card-top-row">
            <div className="hdfc-card-icon-box-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4338ca"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Rupee bag with person */}
                <circle cx="12" cy="7" r="3" />
                <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
                <circle cx="12" cy="11" r="5" fill="#f8fafc" stroke="#4338ca" />
                <path d="M10.5 9.5h3M10.5 11h3M12 9.5v3M10.5 12.5l2.5 1.5" stroke="#4338ca" strokeWidth="1.2"/>
              </svg>
            </div>
            <button className="hdfc-card-arrow-btn-white" aria-label="Apply for Personal Loan Link">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="hdfc-card-body">
            <h3 className="hdfc-promo-title">
              Don't let your personal loan offer get away
            </h3>
          </div>

          <div className="hdfc-card-footer">
            <button
              className="hdfc-btn-secondary"
              onClick={onApplyLoan || (() => alert("Applying for instant personal loan..."))}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
