import React, { useState } from "react";
import "./HeaderNav.css";

export default function HeaderNav({
  userName = "Mannem Vamsi Krishna",
  userInitials = "MK",
  onLogout,
  onSearch,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="hdfc-header-nav">
      {/* Brand Logo */}
      <div className="hdfc-brand">
        <div className="hdfc-logo-box">
          <div className="openbank-logo-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="6" fill="url(#openBankGrad)" />
              <defs>
                <linearGradient id="openBankGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#0369a1" />
                </linearGradient>
              </defs>
              <path
                d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 16.14 7.86 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 10.8 19.2 9.7 18.65 8.7"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="3.2" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.2" />
              <circle cx="18.5" cy="5.5" r="2.2" fill="#38bdf8" />
            </svg>
          </div>
          <span className="hdfc-brand-text">OPEN BANK</span>
        </div>
      </div>

      {/* Center Search Input */}
      <div className="hdfc-search-container">
        <div className="hdfc-search-wrapper">
          <svg
            className="hdfc-search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6b7280"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="hdfc-search-input"
            placeholder='Search "Download Statement", "Reset Password" etc'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Right Navigation Actions */}
      <div className="hdfc-nav-actions">
        <button className="hdfc-action-link" title="Services & Support">
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="10" r="0.5" fill="currentColor" />
            <circle cx="8" cy="10" r="0.5" fill="currentColor" />
            <circle cx="16" cy="10" r="0.5" fill="currentColor" />
          </svg>
          <span>Services & Support</span>
        </button>

        <span className="hdfc-divider"></span>

        <button className="hdfc-icon-btn" title="Notifications">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        <button
          className="hdfc-icon-btn"
          title="Logout / Power"
          onClick={onLogout}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
            <line x1="12" y1="2" x2="12" y2="12" />
          </svg>
        </button>

        <button className="hdfc-icon-btn" title="Menu">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className="hdfc-user-avatar" title={userName}>
          <span>{userInitials}</span>
        </div>
      </div>
    </header>
  );
}
