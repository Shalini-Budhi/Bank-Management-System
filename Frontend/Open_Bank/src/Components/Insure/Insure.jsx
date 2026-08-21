import React, { useState } from "react";
import "./Insure.css";

import mediclaim from "../../Images/Mediclaim.jpg";
import protectlife from "../../Images/ProtectLife.png";
import instantinsurance from "../../Images/InstantInsurance.png";
import socialsecurity from "../../Images/SocialSecurity.jpg";
import vehicle from "../../Images/vehicle.jpg";
import travel from "../../Images/Travel.jpg";

const categories = [
  "All Insurances",
  "Life Insurance",
  "Health & Accident",
  "Instant Insurance",
  "Social Security Schemes",
  "Vehicle",
  "Travel",
];

// Cards Data
const insureData = [
  {
    id: 1,
    title: "Mediclaim",
    category: "Health & Accident",
    image: mediclaim,
    points: [
      "Covers hospitalisation, day-care, and pre/post-treatment expenses.",
      "Includes AYUSH treatments and cashless benefits.",
      "Stay protected during medical emergencies.",
    ],
  },
  {
    id: 2,
    title: "Protect Life & Grow Wealth",
    category: "Life Insurance",
    image: protectlife,
    points: [
      "Plan your financial goals with savings options.",
      "Protect your family from uncertainties.",
      "Based on life stage and income.",
    ],
  },
  {
    id: 3,
    title: "Instant Insurance",
    category: "Instant Insurance",
    image: instantinsurance,
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
    image: socialsecurity,
    points: [
      "Instant Policy Issuance.",
      "No Documentation & No Medicals.",
      "Short & Quick Journey.",
    ],
  },
  {
    id: 5,
    title: "Vehicle",
    category: "Vehicle",
    image: vehicle,
    points: [
      "Instant Policy Issuance.",
      "No Documentation & No Medicals.",
      "Short & Quick Journey.",
    ],
  },
  {
    id: 6,
    title: "Travel",
    category: "Travel",
    image: travel,
    points: [
      "Instant Policy Issuance.",
      "No Documentation & No Medicals.",
      "Short & Quick Journey.",
    ],
  },
];

function Insure() {
  const [activeTab, setActiveTab] = useState("All Insurances");
  const [mainTab, setMainTab] = useState("Purchase Policy");

  const filteredData =
    activeTab === "All Insurances"
      ? insureData
      : insureData.filter((item) => item.category === activeTab);

  return (
    <div className="insurance-container">
      {/* HEADER */}
      <div className="insurance-header">
        <h2>Insurance</h2>
        <button className="renew-btn">Renew Policy</button>
      </div>

      {/* TABS */}
      <div className="main-tabs">
        <span
          className={mainTab === "Purchase Policy" ? "active-main" : ""}
          onClick={() => setMainTab("Purchase Policy")}
        >
          Purchase Policy
        </span>

        <span
          className={mainTab === "Active Policies" ? "active-main" : ""}
          onClick={() => setMainTab("Active Policies")}
        >
          Active Policies
        </span>
      </div>

      {/* CATEGORY */}
      <div className="tabs">
        {categories.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

    {/* Cards */}
      <div className="card-grid">
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="card-content">
              <h3>{item.title}</h3>

              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <button className="explore-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Insure;
