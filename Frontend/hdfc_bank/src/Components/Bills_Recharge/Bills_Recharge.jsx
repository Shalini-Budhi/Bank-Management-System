import React, { useState } from "react";
import "./Bills_Recharge.css";

function Bills_Recharge() {
  const billsData = [
    {
      id: 1,
      type: "Mobile Prepaid",
      number: "9676004508",
      provider: "Airtel",
    },
  ];

  const quickLinks = [
    "Mobile Prepaid Recharge",
    "Pay Electricity Bills",
    "Pay any Credit Card Bills",
    "Insurance Premium Payments",
    "Set Mutual Fund SmartPay",
    "Close/Manage FASTag",
    "Manage E-mandates",
  ];

  const [filter, setFilter] = useState("All");
  const [mobile, setMobile] = useState("");
  const [category, setCategory] = useState("Mobile Prepaid");

  return (
    <div className="pay-container">
      {/* HEADER */}
      <div className="header">
        <h3>Pay Bills</h3>

        <input
          className="search"
          type="text"
          placeholder="Search biller"
        />

        <button className="pay-btn">+ Pay New Bill</button>
      </div>

      <div className="main">
        {/* LEFT SECTION */}
        <div className="left">

          {/* My Bills */}
          <div className="pay-card">
            <div className="card-header">
              <h3>My Bills (1)</h3>
              <span>View All</span>
            </div>

            {/* Filters */}
            <div className="filters">
              {["All", "Smartpay", "Recharge"].map((item) => (
                <button
                  key={item}
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Bills */}
            <div className="bills">
              {billsData.map((bill) => (
                <div key={bill.id} className="bill-card">
                  <p>{bill.type}</p>
                  <h4>{bill.number}</h4>
                  <small>{bill.provider}</small>
                  <button className="recharge-btn">Recharge</button>
                </div>
              ))}

              <div className="add-card">
                <h4>+ Pay New Bill</h4>
                <p>
                  Earn up to ₹1,800 cashback by paying your bills. Pay and start
                  saving!
                </p>
              </div>
            </div>
          </div>

          {/* Quick Recharge */}
          <div className="quick-card">
            <h3>Quick Recharge</h3>

            {/* RADIO BUTTONS */}
            <div className="radio-group">
              {["Mobile Prepaid", "FASTag", "DTH"].map((item) => (
                <label key={item}>
                  <input
                    type="radio"
                    value={item}
                    checked={category === item}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  {item}
                </label>
              ))}
            </div>

            <p className="label">Mobile Number</p>

            <div className="recharge-row">
              <input
                type="text"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />

              <button className="recharge-now">Recharge Now</button>
            </div>
          </div>

        </div> {/* ✅ LEFT CLOSED PROPERLY */}

        {/* RIGHT SECTION */}
        <div className="right">
          <div className="quick-link-card">
            <h3>Quick Links</h3>

            {quickLinks.map((link, index) => (
              <div key={index} className="link-item">
                {link}
                <span>›</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Bills_Recharge;