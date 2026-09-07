import React, { useState } from "react";
import "./NavigationTabs.css";

const defaultTabs = [
  { id: "home", label: "Home", hasDropdown: false },
  { id: "accounts", label: "Accounts", hasDropdown: false },
  { id: "send-money", label: "Send Money", hasDropdown: false },
  { id: "cards", label: "Cards", hasDropdown: true },
  { id: "fdrd", label: "FD/RD", hasDropdown: true },
  { id: "bills", label: "Bills & Recharges", hasDropdown: false },
  { id: "loans", label: "Loans", hasDropdown: false },
  { id: "invest", label: "Invest", hasDropdown: true },
  { id: "insure", label: "Insure", hasDropdown: false },
];

export default function NavigationTabs({
  tabs = defaultTabs,
  activeTab = "home",
  onTabChange,
}) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
    if (onTabChange) onTabChange(tabId);
  };

  return (
    <nav className="hdfc-nav-bar">
      <ul className="hdfc-nav-list">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <li key={tab.id} className="hdfc-nav-item">
              <button
                className={`hdfc-nav-link ${isActive ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className="hdfc-nav-text">{tab.label}</span>
                {tab.hasDropdown && (
                  <svg
                    className="hdfc-dropdown-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
                {isActive && <div className="hdfc-active-indicator" />}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
