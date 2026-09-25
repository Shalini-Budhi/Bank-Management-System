import React, { useState } from "react";
import "./MyCards.css";

const CARD_TABS = [
  { id: "credit", label: "Credit Cards" },
  { id: "debit", label: "Debit Cards" },
  { id: "forex", label: "Forex Cards" },
  { id: "prepaid", label: "Prepaid Cards" },
];

/* Quick links per sub-tab */
const QUICK_LINKS = {
  credit: [
    { id: "loan-on-card", label: "Get a Loan on Card" },
    { id: "pay-cc-bill", label: "Pay Other Credit Card Bill" },
    { id: "buy-forex", label: "Buy Forex Card" },
    { id: "buy-gift", label: "Buy Gift Card" },
    { id: "egift-plus", label: "Buy e-Gift Plus Card" },
    { id: "referral", label: "Credit Card Referral Rewards" },
    { id: "dispute", label: "Raise Dispute and Report Fraud" },
  ],
  debit: [
    { id: "apply-debit", label: "Apply For Debit Card", badge: null },
    { id: "debit-emi", label: "Debit Card EMI", badge: "NEW" },
    { id: "apply-credit", label: "Apply For Credit Card" },
    { id: "pay-cc-bill", label: "Pay Other Credit Card Bill" },
    { id: "buy-forex", label: "Buy Forex Card" },
    { id: "buy-gift", label: "Buy Gift Card" },
    { id: "egift-plus", label: "Buy e-Gift Plus Card" },
    { id: "dispute", label: "Raise Dispute and Report Fraud" },
  ],
  forex: [
    { id: "apply-credit", label: "Apply For Credit Card" },
    { id: "buy-forex", label: "Buy Forex Card" },
    { id: "buy-gift", label: "Buy Gift Card" },
    { id: "egift-plus", label: "Buy e-Gift Plus Card" },
    { id: "debit-emi", label: "Debit Card EMI", badge: "NEW" },
    { id: "pay-cc-bill", label: "Pay Other Credit Card Bill" },
  ],
  prepaid: [
    { id: "apply-credit", label: "Apply For Credit Card" },
    { id: "buy-forex", label: "Buy Forex Card" },
    { id: "buy-gift", label: "Buy Gift Card" },
    { id: "egift-plus", label: "Buy e-Gift Plus Card" },
    { id: "debit-emi", label: "Debit Card EMI", badge: "NEW" },
    { id: "pay-cc-bill", label: "Pay Other Credit Card Bill" },
  ],
};

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const ChevronUp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ══════════════════════════════════════════════
   VISA CARD VISUAL
══════════════════════════════════════════════ */
function VisaCardVisual({ holderName, cardNumber, label, amount }) {
  return (
    <div className="mycard-visa-card">
      {/* Card shimmer effect */}
      <div className="mycard-visa-shine" />

      {/* Top row */}
      <div className="mycard-visa-top">
        <div className="mycard-visa-chip">
          <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
            <rect width="28" height="22" rx="4" fill="#d4a843" />
            <rect x="9" y="0" width="10" height="22" fill="#c09430" opacity="0.4" />
            <rect x="0" y="7" width="28" height="8" fill="#c09430" opacity="0.4" />
            <rect x="9" y="7" width="10" height="8" rx="1" fill="#b8882a" />
          </svg>
        </div>
        <div className="mycard-visa-logo">VISA</div>
      </div>

      {/* Card number */}
      <div className="mycard-visa-number">{cardNumber}</div>

      {/* Bottom row */}
      <div className="mycard-visa-bottom">
        <div>
          <div className="mycard-visa-label-text">{label}</div>
          <div className="mycard-visa-amount">{amount}</div>
        </div>
      </div>
      <div className="mycard-visa-holder">{holderName}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   QUICK LINKS SIDEBAR
══════════════════════════════════════════════ */
function QuickLinksSidebar({ links }) {
  return (
    <aside className="mycard-ql-sidebar">
      <div className="mycard-ql-card">
        <h3 className="mycard-ql-title">Quick Links</h3>
        <div className="mycard-ql-list">
          {links.map((link) => (
            <button key={link.id} className="mycard-ql-row">
              <span className="mycard-ql-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </span>
              <span className="mycard-ql-label">{link.label}</span>
              {link.badge && <span className="mycard-ql-badge">{link.badge}</span>}
              <span className="mycard-ql-arrow"><ChevronRight /></span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════════════
   BOTTOM ACTIONS ROW
══════════════════════════════════════════════ */
function CardActionsRow({ actions }) {
  return (
    <div className="mycard-actions-row">
      {actions.map((action) => (
        <button key={action.id} className="mycard-action-item">
          <span className="mycard-action-icon">{action.icon}</span>
          <span className="mycard-action-title">{action.title}</span>
          {action.subtitle && (
            <span className="mycard-action-subtitle">{action.subtitle}</span>
          )}
        </button>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════
   CREDIT CARDS TAB
══════════════════════════════════════════════ */
function CreditCardsTab() {
  const [isOpen, setIsOpen] = useState(true);

  const creditActions = [
    {
      id: "urgent",
      title: "Urgent Support",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
    {
      id: "manage",
      title: "Manage Card",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      id: "pin",
      title: "Set/Reset PIN",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mycard-tab-content">
      {/* Accordion */}
      <div className="mycard-accordion">
        <button className="mycard-accordion-header" onClick={() => setIsOpen(!isOpen)}>
          <span className="mycard-accordion-title">Active Cards</span>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

        {isOpen && (
          <div className="mycard-accordion-body">
            <div className="mycard-card-section-header">
              <span className="mycard-card-product-name">VISA MONEYBACK PLUS</span>
              <button className="mycard-view-summary-btn">View Summary</button>
            </div>

            <div className="mycard-credit-layout">
              {/* Visa Card */}
              <VisaCardVisual
                holderName="MANNEM VAMSI KRISHNA"
                cardNumber="4632 02** **** 4539"
                label="Available Limit"
                amount="₹40,393.53"
              />

              {/* Billing Summary */}
              <div className="mycard-billing-summary">
                <h4 className="mycard-billing-title">Billing Summary</h4>

                <div className="mycard-billing-row">
                  <div className="mycard-billing-item">
                    <span className="mycard-billing-label">Upcoming Payment</span>
                    <div className="mycard-billing-value-row">
                      <span className="mycard-billing-value">₹0.00</span>
                      <span className="mycard-billing-badge mycard-billing-badge--paid">FULLY PAID</span>
                    </div>
                  </div>
                </div>

                <div className="mycard-billing-divider" />

                <div className="mycard-billing-item">
                  <span className="mycard-billing-label">Total Outstanding</span>
                  <div className="mycard-billing-value-row">
                    <span className="mycard-billing-value">₹21,606.47</span>
                    <button className="mycard-convert-emi-btn">Convert to EMI</button>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mycard-cta-row">
                  <button className="mycard-cta-btn mycard-cta-btn--outline">Get Statement</button>
                  <button className="mycard-cta-btn mycard-cta-btn--primary">Pay Now</button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <CardActionsRow actions={creditActions} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   DEBIT CARDS TAB
══════════════════════════════════════════════ */
function DebitCardsTab() {
  const [isOpen, setIsOpen] = useState(true);

  const debitActions = [
    {
      id: "urgent",
      title: "Urgent Support",
      subtitle: "Block & Report Fraud",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
    {
      id: "manage",
      title: "Manage Limits",
      subtitle: "Card Settings",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      ),
    },
    {
      id: "pin",
      title: "Set/Reset PIN",
      subtitle: "Update PIN details",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mycard-tab-content">
      <div className="mycard-accordion">
        <button className="mycard-accordion-header" onClick={() => setIsOpen(!isOpen)}>
          <span className="mycard-accordion-title">Active Cards</span>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

        {isOpen && (
          <div className="mycard-accordion-body">
            <div className="mycard-card-section-header">
              <span className="mycard-card-product-name">VISA Millennia Debit Card</span>
            </div>

            <div className="mycard-debit-layout">
              {/* Visa Card */}
              <VisaCardVisual
                holderName="MANNEM VAMSI KRISHNA"
                cardNumber="4355 **** **** 4805"
                label="Savings Account"
                amount="Millennia"
              />

              {/* Debit Info Panel */}
              <div className="mycard-debit-info">
                <div className="mycard-debit-info-block">
                  <span className="mycard-debit-info-label">Redeemable Reward Points</span>
                  <div className="mycard-debit-points-row">
                    <span className="mycard-debit-points">0 Point(s)</span>
                    <button className="mycard-earn-points-btn">Ways to Earn Reward Points</button>
                  </div>
                </div>

                <div className="mycard-debit-divider" />

                <div className="mycard-debit-info-block">
                  <span className="mycard-debit-info-label">Linked to Account</span>
                  <div className="mycard-debit-linked-row">
                    <span className="mycard-debit-linked-acc">**** *** ***56 61</span>
                    <button className="mycard-earn-points-btn">Link Another Account</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Upgrade Banner */}
            <div className="mycard-upgrade-banner">
              <span className="mycard-upgrade-icon">🎉</span>
              <span className="mycard-upgrade-text">You are eligible for an upgrade</span>
              <button className="mycard-upgrade-btn">Upgrade Now</button>
            </div>

            {/* Bottom Actions */}
            <CardActionsRow actions={debitActions} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   FOREX CARDS TAB
══════════════════════════════════════════════ */
function ForexCardsTab() {
  return (
    <div className="mycard-tab-content">
      <PromoCard
        title="Unleash the power of Forex Cards"
        desc="Experience seamless global travel with our Forex Cards, your ultimate travel partner."
        btnLabel="Apply Now"
        btnClass="mycard-promo-btn--primary"
        illustration={<CardEnvelopeIllustration />}
      />
      <PromoCard
        title="Explore Gift Cards or Reloadable Prepaid Cards"
        desc="Delight your loved ones with our Giftplus Card or track your daily expenses effortlessly through Reloadable Prepaid Card."
        btnLabel="Explore Prepaid Cards"
        btnClass="mycard-promo-btn--outline"
        illustration={<WalletIllustration />}
        compact
      />
    </div>
  );
}

/* ══════════════════════════════════════════════
   PREPAID CARDS TAB
══════════════════════════════════════════════ */
function PrepaidCardsTab() {
  return (
    <div className="mycard-tab-content">
      <PromoCard
        title="Explore Gift Cards or Reloadable Prepaid Cards"
        desc="Delight your loved ones with our Giftplus Card or track your daily expenses effortlessly through Reloadable Prepaid Card."
        btnLabel="Apply Now"
        btnClass="mycard-promo-btn--primary"
        illustration={<CardEnvelopeIllustration />}
      />
      <PromoCard
        title="Unleash the power of Forex Cards"
        desc="Experience seamless global travel with our Forex Cards, your ultimate travel partner."
        btnLabel="Explore Forex Cards"
        btnClass="mycard-promo-btn--outline"
        illustration={<WalletIllustration />}
        compact
      />
    </div>
  );
}

/* ══════════════════════════════════════════════
   PROMO CARD (Forex / Prepaid)
══════════════════════════════════════════════ */
function PromoCard({ title, desc, btnLabel, btnClass, illustration, compact }) {
  return (
    <div className={`mycard-promo-card ${compact ? "mycard-promo-card--compact" : ""}`}>
      <div className="mycard-promo-text">
        <h3 className="mycard-promo-title">{title}</h3>
        <p className="mycard-promo-desc">{desc}</p>
        <button className={`mycard-promo-btn ${btnClass}`}>{btnLabel}</button>
      </div>
      <div className="mycard-promo-illustration">{illustration}</div>
    </div>
  );
}

/* ── Card Envelope Illustration ── */
function CardEnvelopeIllustration() {
  return (
    <svg width="120" height="110" viewBox="0 0 120 110" fill="none">
      {/* Background circle */}
      <circle cx="70" cy="55" r="50" fill="#e8eeff" />
      {/* Envelope body */}
      <rect x="20" y="40" width="70" height="50" rx="6" fill="#c7cef5" />
      {/* Envelope flap */}
      <path d="M20 46 L55 68 L90 46" stroke="#a0a8e8" strokeWidth="2" fill="none" />
      {/* Cards peeking out */}
      <rect x="35" y="20" width="42" height="28" rx="4" fill="#3b5bdb" transform="rotate(-8 35 20)" />
      <rect x="40" y="16" width="42" height="28" rx="4" fill="#4c6ef5" transform="rotate(-2 40 16)" />
      <rect x="30" y="12" width="42" height="28" rx="4" fill="#5c7cfa" transform="rotate(4 30 12)" />
      {/* VISA text on top card */}
      <text x="48" y="28" fontSize="7" fontWeight="bold" fill="white" transform="rotate(4 48 28)" fontFamily="Arial">VISA</text>
      {/* Stars */}
      <circle cx="18" cy="22" r="3" fill="#f59e0b" />
      <circle cx="100" cy="18" r="2" fill="#f59e0b" />
      <circle cx="108" cy="38" r="3" fill="#818cf8" />
    </svg>
  );
}

/* ── Wallet Illustration ── */
function WalletIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="36" fill="#e0e7ff" />
      <rect x="15" y="28" width="50" height="30" rx="6" fill="#6366f1" />
      <rect x="15" y="28" width="50" height="12" rx="4" fill="#4f46e5" />
      <circle cx="52" cy="43" r="6" fill="#a5b4fc" />
      <circle cx="52" cy="43" r="3" fill="#e0e7ff" />
    </svg>
  );
}

/* ══════════════════════════════════════════════
   MAIN MyCards COMPONENT
══════════════════════════════════════════════ */
const TAB_COMPONENTS = {
  credit: CreditCardsTab,
  debit: DebitCardsTab,
  forex: ForexCardsTab,
  prepaid: PrepaidCardsTab,
};

export default function MyCards() {
  const [activeCardTab, setActiveCardTab] = useState("credit");

  const ActiveTabComponent = TAB_COMPONENTS[activeCardTab];

  return (
    <div className="mycard-page">
      <h2 className="mycard-page-title">My Cards</h2>

      <div className="mycard-layout">
        {/* ── LEFT COLUMN ── */}
        <div className="mycard-left-col">
          {/* Sub-tab navigation */}
          <nav className="mycard-subtab-nav">
            {CARD_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`mycard-subtab-btn ${activeCardTab === tab.id ? "mycard-subtab-btn--active" : ""}`}
                onClick={() => setActiveCardTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Tab Content */}
          <ActiveTabComponent />
        </div>

        {/* ── RIGHT COLUMN ── */}
        <QuickLinksSidebar links={QUICK_LINKS[activeCardTab]} />
      </div>
    </div>
  );
}
