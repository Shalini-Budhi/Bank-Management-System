import React, { useState } from "react";
import "./SendMoneyWidget.css";

const defaultFromAccounts = [
  { id: "1", label: "Select an A/c", value: "" },
  { id: "2", label: "501004829103 - Savings (₹ 2,45,850.00)", value: "501004829103" },
  { id: "3", label: "502008492019 - Current (₹ 1,12,300.00)", value: "502008492019" },
];

const defaultToOptions = [
  { id: "1", label: "Own Accounts / Other Accounts", value: "own_other" },
  { id: "2", label: "Own Account - 502008492019", value: "own_502008492019" },
  { id: "3", label: "Registered Payee - Rajesh Kumar", value: "payee_rajesh" },
  { id: "4", label: "Registered Payee - Priya Sharma", value: "payee_priya" },
];

export default function SendMoneyWidget({
  onProceedTransfer,
  onOneTimeTransfer,
  onAddPayee,
}) {
  const [transferType, setTransferType] = useState("Domestic");
  const [toAccount, setToAccount] = useState("own_other");
  const [fromAccount, setFromAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleProceed = (e) => {
    e.preventDefault();
    if (!fromAccount) {
      alert("Please select a 'From' Account to proceed.");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (onProceedTransfer) {
      onProceedTransfer({ transferType, toAccount, fromAccount, amount });
    } else {
      alert(`Transfer of ₹${amount} initiated successfully from A/c ${fromAccount}!`);
    }
  };

  return (
    <div className="hdfc-send-money-card">
      {/* Top Header of Card */}
      <div className="hdfc-send-money-header">
        <div className="hdfc-send-money-header-left">
          <h2 className="hdfc-send-money-title">Send Money</h2>
          <div className="hdfc-transfer-type-selector">
            <select
              value={transferType}
              onChange={(e) => setTransferType(e.target.value)}
              className="hdfc-transfer-select"
            >
              <option value="Domestic">Domestic</option>
              <option value="International">International</option>
            </select>
            <svg
              className="hdfc-select-chevron"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#475569"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        <div className="hdfc-send-money-header-right">
          <button
            type="button"
            className="hdfc-link-action"
            onClick={onOneTimeTransfer || (() => alert("Opening One Time Transfer..."))}
          >
            <span>One Time Transfer</span>
            <svg
              width="14"
              height="14"
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

          <button
            type="button"
            className="hdfc-add-payee-btn"
            onClick={onAddPayee || (() => alert("Opening Add Payee form..."))}
          >
            <div className="hdfc-payee-avatar-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="hdfc-add-payee-text">Add Payee</span>
            <svg
              width="14"
              height="14"
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

      {/* Form Controls Row */}
      <form onSubmit={handleProceed} className="hdfc-send-money-form">
        <div className="hdfc-form-grid">
          {/* To Field */}
          <div className="hdfc-form-group">
            <label className="hdfc-form-label">To</label>
            <div className="hdfc-input-wrapper">
              <select
                className="hdfc-form-select"
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
              >
                {defaultToOptions.map((opt) => (
                  <option key={opt.id} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg
                className="hdfc-field-chevron"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748b"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* From Field */}
          <div className="hdfc-form-group">
            <label className="hdfc-form-label">From</label>
            <div className="hdfc-input-wrapper">
              <select
                className="hdfc-form-select"
                value={fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
              >
                {defaultFromAccounts.map((opt) => (
                  <option key={opt.id} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg
                className="hdfc-field-chevron"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748b"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Amount Field */}
          <div className="hdfc-form-group">
            <label className="hdfc-form-label">Amount</label>
            <div className="hdfc-amount-input-wrapper">
              <span className="hdfc-currency-symbol">₹</span>
              <input
                type="number"
                step="0.01"
                min="0"
                className="hdfc-amount-input"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Proceed Button */}
          <div className="hdfc-form-group hdfc-btn-group">
            <button type="submit" className="hdfc-proceed-btn">
              Proceed
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
