import React from "react";
import "./GreetingSection.css";

export default function GreetingSection({
  userName = "Mannem Vamsi Krishna",
  lastLogin = "13/08/26, 07:55 PM",
  onSpecialOffersClick,
}) {
  return (
    <div className="hdfc-greeting-section">
      <div className="hdfc-greeting-left">
        <h1 className="hdfc-greeting-title">Welcome, {userName}</h1>
        <p className="hdfc-greeting-subtitle">
          Last logged in at {lastLogin}
        </p>
      </div>

      <div className="hdfc-greeting-right">
        <button
          className="hdfc-special-offers-btn"
          onClick={onSpecialOffersClick}
        >
          <div className="hdfc-gift-icon-container">
            <span className="hdfc-gift-emoji">🎁</span>
          </div>
          <span className="hdfc-offers-text">Special offers for you!</span>
          <svg
            className="hdfc-offers-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
