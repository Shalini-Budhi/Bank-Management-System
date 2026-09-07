import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./NetBankingLoginForm.css";

export default function NetBankingLoginForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const [customerID, setCustomerID] = useState(
    location.state?.accountNumber ||
      localStorage.getItem("lastRegisteredAccount") ||
      "",
  );
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("Personal Banking");
  const [loading, setLoading] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);


  const tabs = ["Personal Banking", "Credit Cards/Loans Only"];

  const footerLinks = [
    "Terms and Conditions",
    "Privacy Policy",
    "Compatible Browsers",
  ];

  // Handle Login submission
  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    if (!customerID.trim()) {
      alert("Please enter your Customer ID / User ID");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your Password");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("http://localhost:3000/login", {
        CustomerID: customerID,
        Password: password,
      });

      console.log("Login Successful:", response.data);

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "userName",
          response.data?.CustomerID || customerID,
        );

        if (response.data?.access_token) {
          localStorage.setItem("access_token", response.data.access_token);
        }

        // Navigate to Dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      console.warn("API login attempt finished with note:", error);

      // Fallback for development if backend server is not running
      if (
        !error.response ||
        error.code === "ERR_NETWORK" ||
        error.message?.includes("Network Error")
      ) {
        console.log("Server not reachable, proceeding with demo login session");
        localStorage.setItem("userName", customerID);
        navigate("/dashboard");
      } else {
        alert(
          error.response?.data?.message ||
            "Invalid Customer ID or Password. Please try again.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="netbanking-wrapper">
      {/*  LEFT SECTION: INTRODUCING KAVACH*/}
      <div className="kavach-hero-section">
        <div className="kavach-header">
          <h1 className="kavach-title">
            Introducing <span className="kavach-badge-logo">K</span>{" "}
            <strong>KAVACH</strong>
          </h1>
          <p className="kavach-subtitle">A new way to login and verify!</p>
        </div>

        {/* Mockup Stage */}
        <div className="kavach-stage">
          {/* Step 1 Indicator */}
          <div className="step-indicator step-1">
            <span className="step-badge-num">1</span>
            <span className="step-badge-text">Open QR on Desktop</span>
          </div>

          {/* Step 2 Indicator */}
          <div className="step-indicator step-2">
            <span className="step-badge-num">2</span>
            <span className="step-badge-text">Scan through Mobile App</span>
          </div>

          <div className="mockup-grid">
            {/* Desktop Mockup */}
            <div className="desktop-monitor">
              <div className="monitor-screen">
                <div className="screen-left-decor">
                  <span className="mini-logo-text">
                    Introducing 🛡️ KAVACH:
                    <br />A new way to login and verify
                  </span>
                  <div className="mini-cards-stack">
                    <div className="mini-card-layer c1"></div>
                    <div className="mini-card-layer c2"></div>
                  </div>
                </div>

                <div className="screen-right-preview">
                  <div className="mini-form-header">Welcome to NetBanking</div>
                  <div className="mini-input-bar"></div>
                  <div
                    className="mini-input-bar"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              {/* Floating Banner 1 */}
              <div className="floating-desktop-card">
                <div className="floating-phone-icon">📱</div>
                <div className="floating-card-texts">
                  <div className="floating-card-title">
                    Login without Password{" "}
                    <span className="mini-new-tag">NEW</span>
                  </div>
                  <div className="floating-card-sub">
                    Scan using your Open Bank App secured with Kavach
                  </div>
                </div>
              </div>

              {/* Floating QR Modal Card */}
              <div className="floating-qr-card">
                <div className="qr-card-title">Login via QR Code</div>
                <div className="qr-code-graphic">
                  {/* High Quality Detailed QR SVG */}
                  <svg
                    viewBox="0 0 100 100"
                    width="100%"
                    height="100%"
                    fill="#1d4ed8"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="30"
                      height="30"
                      fill="none"
                      stroke="#1d4ed8"
                      strokeWidth="4"
                    />
                    <rect x="8" y="8" width="14" height="14" />
                    <rect
                      x="70"
                      y="0"
                      width="30"
                      height="30"
                      fill="none"
                      stroke="#1d4ed8"
                      strokeWidth="4"
                    />
                    <rect x="78" y="8" width="14" height="14" />
                    <rect
                      x="0"
                      y="70"
                      width="30"
                      height="30"
                      fill="none"
                      stroke="#1d4ed8"
                      strokeWidth="4"
                    />
                    <rect x="8" y="78" width="14" height="14" />

                    {/* QR Matrix Dots */}
                    <rect x="36" y="6" width="6" height="6" />
                    <rect x="48" y="6" width="6" height="6" />
                    <rect x="42" y="16" width="6" height="6" />
                    <rect x="54" y="16" width="6" height="6" />
                    <rect x="6" y="36" width="6" height="6" />
                    <rect x="18" y="42" width="6" height="6" />
                    <rect x="6" y="54" width="6" height="6" />
                    <rect x="76" y="36" width="6" height="6" />
                    <rect x="88" y="44" width="6" height="6" />
                    <rect x="36" y="76" width="6" height="6" />
                    <rect x="48" y="84" width="6" height="6" />
                    <rect x="60" y="76" width="6" height="6" />
                    <rect x="76" y="76" width="6" height="6" />
                    <rect x="88" y="84" width="6" height="6" />
                  </svg>
                  <div className="qr-shield-center">K</div>
                </div>
                <div className="qr-card-trouble">
                  Trouble scanning the QR Code?
                </div>
              </div>
            </div>

            {/* Connecting Curved Dotted Arrow */}
            <svg className="connector-line-svg" viewBox="0 0 140 120">
              <path
                d="M 10 10 Q 70 20 70 80 T 130 110"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Floating Scan Round Badge */}
            <div className="scan-round-btn-container">
              <button
                className="scan-round-btn"
                onClick={() => setShowQrModal(true)}
                title="Scan QR"
              >
                ⛶
              </button>
              <span className="scan-round-label">Scan QR</span>
            </div>

            {/* Mobile Phone Mockup */}
            <div className="mobile-device-container">
              <div className="mobile-inner-screen">
                <div className="mobile-top-bar">
                  <div className="mobile-bank-logo">
                    <span style={{ color: "#ed1c24" }}>■</span> OPEN BANK
                  </div>
                  <span>10:15</span>
                </div>

                <div className="mobile-user-greeting">
                  <div className="greeting-small">Hello,</div>
                  <div className="greeting-name">Deepak</div>
                </div>

                <div className="mobile-scanner-view">⛶</div>

                <div className="mobile-actions-row">
                  <div className="mobile-action-item">
                    💰
                    <br />
                    Accounts
                  </div>
                  <div className="mobile-action-item">
                    ⚡<br />
                    Pay/Bill
                  </div>
                  <div className="mobile-action-item">
                    📦
                    <br />
                    Products
                  </div>
                </div>

                <button
                  className="mobile-fingerprint-btn"
                  onClick={() => setShowQrModal(true)}
                >
                  Login using Fingerprint
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Know More Action */}
        <button
          className="know-more-bottom-btn"
          onClick={() =>
            alert(
              "KAVACH is Open Bank's multi-factor passwordless authentication technology.",
            )
          }
        >
          Know More
        </button>
      </div>

      {/* =========================================================
          RIGHT SECTION: LOGIN FORM
      ========================================================= */}
      <div className="login-portal-section">
        <div className="login-portal-container">
          {/* Header */}
          <div className="portal-header">
            <h2 className="portal-title">Welcome to NetBanking</h2>
            <div className="made-digital-row">
              <span className="made-digital-label">MADE DIGITAL BY</span>
              <div className="bank-brand-logos">
                <div className="openbank-login-brand-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="6" fill="#0284c7" />
                    <path d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 16.14 7.86 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 10.8 19.2 9.7 18.65 8.7" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="3.2" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.2" />
                    <circle cx="18.5" cy="5.5" r="2.2" fill="#38bdf8" />
                  </svg>
                  <span>OPEN BANK</span>
                </div>
                <div className="now-brand-badge">
                  n<span>o</span>w
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="portal-tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`portal-tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Passwordless Quick Card */}
          <div
            className="passwordless-feature-card"
            onClick={() => setShowQrModal(true)}
          >
            <div className="phone-icon-box">📱</div>
            <div className="feature-texts">
              <div className="feature-heading-row">
                <span className="feature-heading">Login without Password</span>
                <span className="new-green-badge">NEW</span>
              </div>
              <p className="feature-description">
                Scan using your Open Bank App secured with Kavach
              </p>
            </div>
            <div className="feature-arrow-icon">→</div>
          </div>

          {/* Green CTA Button */}
          <button
            className="scan-qr-cta-btn"
            onClick={() => setShowQrModal(true)}
            type="button"
          >
            Click here to Scan QR Code. It's secure & faster!
          </button>

          {/* Or Divider */}
          <div className="or-divider-row">
            <span>Or</span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            {/* Customer ID */}
            <div className="login-field-group">
              <label className="login-field-label">Customer ID/User ID</label>
              <div className="input-with-icon-wrapper">
                <input
                  type="text"
                  className="portal-text-input"
                  value={customerID}
                  onChange={(e) => setCustomerID(e.target.value)}
                  placeholder=""
                  autoFocus
                  required
                />
                <button
                  type="button"
                  className="virtual-keyboard-btn"
                  title="Virtual Keyboard"
                >
                  ⌨
                </button>
              </div>
              <button
                type="button"
                className="get-customer-id-link"
                onClick={() =>
                  alert(
                    "Please check your Welcome Kit, Passbook, or Chequebook for your Customer ID.",
                  )
                }
              >
                Get Customer ID
              </button>
            </div>

            {/* Password */}
            <div className="login-field-group">
              <label className="login-field-label">Password</label>
              <div className="input-with-icon-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="portal-text-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  required
                />
                <button
                  type="button"
                  className="virtual-keyboard-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Hide Password" : "Show Password"}
                >
                  {showPassword ? "👁️" : "🔒"}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="portal-login-submit-btn"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Register Prompt */}
          <div className="register-account-prompt">
            <span>Not registered for NetBanking?</span>
            <button
              type="button"
              className="register-now-link"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Register Now
            </button>
          </div>

          {/* Security Guarantee Box */}
          <div className="security-assurance-card">
            <div className="digicert-logo-wrapper">
              <div className="digicert-circle-icon">✓</div>
              <div className="digicert-badge-text">
                <span className="digicert-name">digicert</span>
                <span className="digicert-sub">SECURED</span>
              </div>
            </div>
            <div className="security-message-block">
              <p className="security-message-title">
                Your security is our priority
              </p>
              <button
                type="button"
                className="security-know-more-link"
                onClick={() =>
                  alert(
                    "256-bit SSL encrypted connection guaranteed by DigiCert.",
                  )
                }
              >
                Know More
              </button>
            </div>
          </div>

          {/* Footer Legal Links */}
          <footer className="portal-legal-footer">
            <span>© Copyright Open Bank Ltd.</span>
            {footerLinks.map((link, idx) => (
              <React.Fragment key={link}>
                <span className="footer-bullet-separator">|</span>
                <span className="footer-nav-link">{link}</span>
              </React.Fragment>
            ))}
          </footer>
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE QR MODAL POPUP (KAVACH LOGIN)
      ========================================================= */}
      {showQrModal && (
        <div
          className="qr-modal-backdrop"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="qr-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="qr-modal-close-btn"
              onClick={() => setShowQrModal(false)}
            >
              ✕
            </button>
            <h3 style={{ margin: "0 0 8px", color: "#0f172a" }}>
              Scan QR with Open Bank Mobile App
            </h3>
            <p
              style={{ fontSize: "12px", color: "#64748b", margin: "0 0 16px" }}
            >
              Open your Mobile Banking App and tap on the QR scanner icon to log
              in instantly.
            </p>
            <div
              className="qr-code-graphic"
              style={{ width: "160px", height: "160px" }}
            >
              <svg
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
                fill="#1d4ed8"
              >
                <rect
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="4"
                />
                <rect x="8" y="8" width="14" height="14" />
                <rect
                  x="70"
                  y="0"
                  width="30"
                  height="30"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="4"
                />
                <rect x="78" y="8" width="14" height="14" />
                <rect
                  x="0"
                  y="70"
                  width="30"
                  height="30"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="4"
                />
                <rect x="8" y="78" width="14" height="14" />
                <rect x="36" y="6" width="6" height="6" />
                <rect x="48" y="6" width="6" height="6" />
                <rect x="42" y="16" width="6" height="6" />
                <rect x="54" y="16" width="6" height="6" />
                <rect x="6" y="36" width="6" height="6" />
                <rect x="18" y="42" width="6" height="6" />
                <rect x="6" y="54" width="6" height="6" />
                <rect x="76" y="36" width="6" height="6" />
                <rect x="88" y="44" width="6" height="6" />
                <rect x="36" y="76" width="6" height="6" />
                <rect x="48" y="84" width="6" height="6" />
                <rect x="60" y="76" width="6" height="6" />
                <rect x="76" y="76" width="6" height="6" />
                <rect x="88" y="84" width="6" height="6" />
              </svg>
              <div
                className="qr-shield-center"
                style={{ width: "32px", height: "32px", fontSize: "16px" }}
              >
                K
              </div>
            </div>
            <button
              className="portal-login-submit-btn"
              style={{ marginTop: "16px" }}
              onClick={() => {
                setShowQrModal(false);
                localStorage.setItem("userName", "Deepak (QR Login)");
                navigate("/dashboard");
              }}
            >
              Simulate Instant QR Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
