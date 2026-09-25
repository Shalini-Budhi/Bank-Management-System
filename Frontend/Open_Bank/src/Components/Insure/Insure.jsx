import React, { useState } from "react";
import { useNavigation } from "../../context/NavigationContext";
import "./Insure.css";

import mediclaimImg from "../../Images/Mediclaim.jpg";
import protectLifeImg from "../../Images/ProtectLife.png";
import instantInsImg from "../../Images/InstantInsurance.png";
import socialSecImg from "../../Images/SocialSecurity.jpg";
import vehicleImg from "../../Images/vehicle.jpg";
import travelImg from "../../Images/Travel.jpg";

const CATEGORIES = [
  "All Insurances",
  "Life Insurance",
  "Health & Accident",
  "Instant Insurance",
  "Social Security Schemes",
  "Vehicle",
  "Travel",
];

const INSURE_CARDS = [
  {
    id: 1,
    title: "Mediclaim",
    category: "Health & Accident",
    image: mediclaimImg,
    points: [
      "Covers hospitalisation, day-care, and pre/post-treatment expenses.",
      "Includes AYUSH treatments and cashless hospitalisation benefits.",
      "Stay protected during medical emergencies without financial stress.",
    ],
  },
  {
    id: 2,
    title: "Protect Life & Grow Wealth",
    category: "Life Insurance",
    image: protectLifeImg,
    points: [
      "Plan your financial goals with a range of savings options with life cover.",
      "Protect yourself and your family from life's uncertainties with HDFC Bank's wide range of Life Insurance products - based on your life stage, your requirement, and your inve...",
    ],
  },
  {
    id: 3,
    title: "Instant Insurance",
    category: "Instant Insurance",
    image: instantInsImg,
    points: [
      "Instant Policy Issuance.",
      "No Documentation & No Medicals.",
      "Short & Quick Journey.",
    ],
  },
  {
    id: 4,
    title: "Social Security Schemes",
    category: "Social Security Schemes",
    image: socialSecImg,
    points: [
      "PMJJBY – Life cover at just ₹436/year.",
      "PMSBY – Accident cover at ₹20/year.",
      "APY – Pension scheme for unorganised sector.",
    ],
  },
  {
    id: 5,
    title: "Vehicle Insurance",
    category: "Vehicle",
    image: vehicleImg,
    points: [
      "Covers third-party liabilities.",
      "Own-damage & theft protection.",
      "Cashless claims at network garages.",
    ],
  },
  {
    id: 6,
    title: "Travel Insurance",
    category: "Travel",
    image: travelImg,
    points: [
      "Trip cancellation & delay coverage.",
      "Medical emergency abroad.",
      "Lost baggage & passport assistance.",
    ],
  },
];

const INITIAL_POLICIES = [
  {
    id: "POL-2024-HLT-001",
    name: "Mediclaim Policy",
    type: "Health & Accident",
    premium: "₹ 4,999 / yr",
    renewalDate: "15 Jan 2025",
    status: "Active",
    statusColor: "#16a34a",
  },
  {
    id: "POL-2023-VEH-045",
    name: "Vehicle Insurance",
    type: "Vehicle",
    premium: "₹ 3,200 / yr",
    renewalDate: "30 Mar 2025",
    status: "Active",
    statusColor: "#16a34a",
  },
  {
    id: "POL-2022-LFE-012",
    name: "Term Life Plan",
    type: "Life Insurance",
    premium: "₹ 9,999 / yr",
    renewalDate: "01 Apr 2025",
    status: "Renewal Due",
    statusColor: "#ea580c",
  },
];

export default function Insure() {
  const { navigateTo } = useNavigation();
  const [mainTab, setMainTab] = useState("purchase"); // "purchase" | "active"
  const [activeCategory, setActiveCategory] = useState("All Insurances");
  const [activePolicies, setActivePolicies] = useState(INITIAL_POLICIES);

  // Filter cards based on selected category
  const filteredCards = INSURE_CARDS.filter(
    (card) => activeCategory === "All Insurances" || card.category === activeCategory
  );

  const handleExplore = (card) => {
    alert(`📋 Exploring "${card.title}" insurance policy options...`);
  };

  const handleRenewClick = () => {
    setMainTab("active");
  };

  return (
    <div className="ins-page-container">
      <div className="ins-main-card">
        {/* ── TOP HEADER ── */}
        <div className="ins-header">
          <h1 className="ins-title">Insurance</h1>
          <div className="ins-header-right">
            <button className="ins-renew-btn" onClick={handleRenewClick}>
              Renew Policy
            </button>
            <button className="ins-back-btn" onClick={() => navigateTo("home")}>
              ← Dashboard
            </button>
          </div>
        </div>

        {/* ── MAIN TABS (Purchase Policy | Active Policies) ── */}
        <div className="ins-main-tabs">
          <button
            className={`ins-main-tab ${mainTab === "purchase" ? "ins-main-tab--active" : ""}`}
            onClick={() => setMainTab("purchase")}
          >
            Purchase Policy
          </button>
          <button
            className={`ins-main-tab ${mainTab === "active" ? "ins-main-tab--active" : ""}`}
            onClick={() => setMainTab("active")}
          >
            Active Policies
            <span className="ins-tab-badge">{activePolicies.length}</span>
          </button>
        </div>

        {/* ════════════════════════════════════════════════════
            PURCHASE POLICY TAB
        ════════════════════════════════════════════════════ */}
        {mainTab === "purchase" && (
          <>
            {/* CATEGORY PILLS BAR */}
            <div className="ins-category-pills-wrap">
              <div className="ins-category-pills">
                {CATEGORIES.map((cat, idx) => (
                  <button
                    key={idx}
                    className={`ins-pill ${activeCategory === cat ? "ins-pill--active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <button className="ins-pill-scroll-btn" title="Scroll right">
                ›
              </button>
            </div>

            {/* PRODUCT CARDS GRID (3 Columns per row) */}
            <div className="ins-cards-grid">
              {filteredCards.map((card) => (
                <div key={card.id} className="ins-card">
                  {/* Image Header */}
                  <div className="ins-card-img-container">
                    <img src={card.image} alt={card.title} className="ins-card-img" />
                  </div>

                  {/* Card Content Body */}
                  <div className="ins-card-content">
                    <h3 className="ins-card-title">{card.title}</h3>
                    <ul className="ins-card-bullets">
                      {card.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>

                    {/* Explore Full Width Button */}
                    <button
                      className="ins-explore-btn"
                      onClick={() => handleExplore(card)}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ════════════════════════════════════════════════════
            ACTIVE POLICIES TAB
        ════════════════════════════════════════════════════ */}
        {mainTab === "active" && (
          <div className="ins-active-policies-section">
            <h3 className="ins-section-title">Your Active Insurance Policies</h3>
            <div className="ins-policies-list">
              {activePolicies.map((pol) => (
                <div key={pol.id} className="ins-policy-row">
                  <div className="ins-policy-info">
                    <span className="ins-policy-id">{pol.id}</span>
                    <h4 className="ins-policy-name">{pol.name}</h4>
                    <span className="ins-policy-type">{pol.type}</span>
                  </div>
                  <div className="ins-policy-meta">
                    <span className="ins-policy-status" style={{ color: pol.statusColor }}>
                      ● {pol.status}
                    </span>
                    <span className="ins-policy-premium">{pol.premium}</span>
                    <span className="ins-policy-renewal">Renewal: {pol.renewalDate}</span>
                  </div>
                  <div className="ins-policy-actions">
                    <button
                      className="ins-renew-now-btn"
                      onClick={() => alert(`Renewing policy ${pol.id}...`)}
                    >
                      Renew Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
