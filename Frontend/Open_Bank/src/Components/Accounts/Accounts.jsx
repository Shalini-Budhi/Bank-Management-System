import React, { useState } from "react";
import "./Accounts.css";

const quickLinksData = [
  {
    id: "cash-cheque",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    label: "Cash, Cheque & Demand Draft",
  },
  {
    id: "open-savings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "Open a Savings Account",
  },
  {
    id: "foreign-currency",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "Foreign Currency Inward Remittance",
  },
  {
    id: "open-deposit",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    label: "Open a Deposit",
  },
  {
    id: "fd-rates",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: "View FD Interest Rates",
  },
  {
    id: "safe-deposit",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    label: "Safe Deposit Lockers",
  },
  {
    id: "e-statements",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    label: "Manage e-Statements",
  },
  {
    id: "debit-cards",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    label: "My Debit Cards",
  },
  {
    id: "interest-cert",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    label: "Download Interest Certificate",
  },
  {
    id: "primary-account",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Manage Primary Account",
  },
  {
    id: "trade-net",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    label: "Trade On Net",
  },
];

const accountsData = [
  {
    id: 1,
    type: "NRE Savings A/c",
    maskedNumber: "**** **** **56 61",
    holderName: "MANNEM VAMSI KRISHNA",
    balance: "14,835.04",
    balanceLabel: "Available Balance",
  },
  {
    id: 2,
    type: "NRO Savings A/c",
    maskedNumber: "**** **** **27 10",
    holderName: "MANNEM VAMSI KRISHNA",
    balance: "88,929.64",
    balanceLabel: "Available Balance",
  },
];

function AccountCard({ account }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="acct-card">
      <div className="acct-card-left">
        <div className="acct-icon-wrap">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Card background */}
            <rect width="44" height="44" rx="10" fill="#ddeeff" />
            {/* Subtle inner border */}
            <rect x="0.5" y="0.5" width="43" height="43" rx="9.5" stroke="#b3d4f5" strokeWidth="1" />
            {/* Head */}
            <circle cx="22" cy="16" r="6.5" fill="#5b99d4" />
            {/* Collar / neck */}
            <rect x="19" y="21.5" width="6" height="3" rx="1" fill="#4a8ec2" />
            {/* Vest / body — blue shirt shape */}
            <path d="M10 38 C10 30 15 27 19 26 L22 29 L25 26 C29 27 34 30 34 38 Z" fill="#3a7bbf" />
            {/* Vest lapels / white shirt inner */}
            <path d="M22 29 L20.5 34 L22 36 L23.5 34 Z" fill="#c8e0f8" />
            {/* Vest buttons row */}
            <circle cx="22" cy="31" r="1" fill="#2563a8" />
            <circle cx="22" cy="34" r="1" fill="#2563a8" />
          </svg>
        </div>
        <div className="acct-info">
          <div className="acct-type-row">
            <span className="acct-type-label">{account.type}</span>
            <span className="acct-masked-num">{account.maskedNumber}</span>
            <button className="acct-edit-btn" title="Edit">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>
          <div className="acct-holder-name">{account.holderName}</div>
        </div>
      </div>

      <div className="acct-card-right">
        <div className="acct-balance">
          {isVisible ? `₹${account.balance}` : "₹ ••••••"}
        </div>
        <div className="acct-balance-label-row">
          <span className="acct-balance-label">{account.balanceLabel}</span>
          <button
            className="acct-eye-btn"
            onClick={() => setIsVisible(!isVisible)}
            title={isVisible ? "Hide balance" : "Show balance"}
          >
            {isVisible ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <button className="acct-arrow-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

function QuickLinkRow({ link }) {
  return (
    <button className="ql-row">
      <span className="ql-icon">{link.icon}</span>
      <span className="ql-label">{link.label}</span>
      <span className="ql-arrow">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>
    </button>
  );
}

export default function Accounts() {
  const totalBalance = "₹1,03,764.68";

  return (
    <div className="acct-page">
      <h2 className="acct-page-title">Accounts</h2>

      <div className="acct-layout">
        {/* LEFT COLUMN */}
        <div className="acct-left-col">
          <div className="acct-main-card">
            <div className="acct-total-balance-block">
              <span className="acct-total-label">Total Available Balance</span>
              <span className="acct-total-amount">{totalBalance}</span>
            </div>

            <div className="acct-cards-divider" />

            <div className="acct-list">
              {accountsData.map((acct) => (
                <AccountCard key={acct.id} account={acct} />
              ))}
            </div>
          </div>

          {/* DICGC Banner */}
          <div className="acct-dicgc-banner">
            <div className="dicgc-logo-block">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" stroke="#1a7a4a" strokeWidth="3" fill="white" />
                <circle cx="32" cy="32" r="22" stroke="#1a7a4a" strokeWidth="2" fill="none" />
                <text x="32" y="26" textAnchor="middle" fontWeight="900" fontSize="10" fill="#1a7a4a" fontFamily="Arial">DIC</text>
                <text x="32" y="40" textAnchor="middle" fontWeight="900" fontSize="10" fill="#e65c00" fontFamily="Arial">GC</text>
                <circle cx="14" cy="32" r="5" fill="#6ec6a3" />
                <circle cx="50" cy="32" r="5" fill="#6ec6a3" />
              </svg>
            </div>
            <div className="dicgc-text-block">
              <p className="dicgc-title">Protecting the interest of all depositors</p>
              <p className="dicgc-desc">DICGC now covers upto INR 5 Lakhs per depositors per bank</p>
              <p className="dicgc-registered">
                <strong>Open Bank is registered with DICGC</strong>
              </p>
              <a href="https://www.dicgc.org.in" target="_blank" rel="noreferrer" className="dicgc-url">
                https://www.dicgc.org.in
              </a>
            </div>
            <div className="dicgc-qr-block">
              <svg width="76" height="76" viewBox="0 0 76 76">
                <rect width="76" height="76" rx="4" fill="#fff" stroke="#ddd" strokeWidth="1" />
                <rect x="6" y="6" width="22" height="22" rx="2" fill="#222" />
                <rect x="9" y="9" width="16" height="16" rx="1" fill="#fff" />
                <rect x="12" y="12" width="10" height="10" rx="1" fill="#222" />
                <rect x="48" y="6" width="22" height="22" rx="2" fill="#222" />
                <rect x="51" y="9" width="16" height="16" rx="1" fill="#fff" />
                <rect x="54" y="12" width="10" height="10" rx="1" fill="#222" />
                <rect x="6" y="48" width="22" height="22" rx="2" fill="#222" />
                <rect x="9" y="51" width="16" height="16" rx="1" fill="#fff" />
                <rect x="12" y="54" width="10" height="10" rx="1" fill="#222" />
                <rect x="32" y="6" width="8" height="8" fill="#222" />
                <rect x="32" y="16" width="8" height="8" fill="#222" />
                <rect x="6" y="32" width="8" height="8" fill="#222" />
                <rect x="16" y="32" width="8" height="8" fill="#222" />
                <rect x="32" y="32" width="12" height="12" rx="2" fill="#222" />
                <rect x="48" y="32" width="8" height="8" fill="#222" />
                <rect x="60" y="32" width="8" height="8" fill="#222" />
                <rect x="48" y="42" width="8" height="8" fill="#222" />
                <rect x="60" y="42" width="8" height="8" fill="#222" />
                <rect x="32" y="48" width="8" height="8" fill="#222" />
                <rect x="42" y="48" width="8" height="8" fill="#222" />
                <rect x="32" y="60" width="8" height="8" fill="#222" />
                <rect x="48" y="60" width="8" height="8" fill="#222" />
                <rect x="60" y="60" width="8" height="8" fill="#222" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <aside className="acct-right-col">
          <div className="ql-card">
            <h3 className="ql-title">Quick Links</h3>
            <div className="ql-list">
              {quickLinksData.map((link) => (
                <QuickLinkRow key={link.id} link={link} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
