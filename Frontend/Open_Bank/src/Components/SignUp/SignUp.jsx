import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const fields = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
  },
  {
    name: "mobile",
    label: "Mobile Number",
    type: "tel",
    placeholder: "Enter 10-digit mobile number",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "pan",
    label: "PAN Number",
    type: "text",
    placeholder: "Enter PAN number",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Create a password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
  },
];

const initialForm = {
  fullName: "",
  dob: "",
  gender: "",
  mobile: "",
  email: "",
  pan: "",
  address: "",
  accountType: "Savings",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);
  const [createdAccount, setCreatedAccount] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleProceedToLogin = () => {
    const accNum = createdAccount?.accountNumber;
    setCreatedAccount(null);
    navigate("/", { state: { accountNumber: accNum } });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please check and try again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Backend Response", data);

      if (response.ok) {
        const accNumber = data.accountNumber || data.user?.accountNumber;

        // Show alert as requested
        alert(
          `Account created successfully!\n\nYour Account Number is: ${accNumber}`
        );

        if (accNumber) {
          localStorage.setItem("lastRegisteredAccount", accNumber);
        }

        // Set account creation details for bank modal confirmation
        setCreatedAccount({
          accountNumber: accNumber,
          fullName: data.user?.fullName || formData.fullName,
          accountType: data.user?.accountType || formData.accountType,
          email: data.user?.email || formData.email,
          mobile: data.user?.mobile || formData.mobile,
        });

        setFormData(initialForm);
      } else {
        alert(data.message || "Registration Failed");
      }
    } catch (error) {
      console.error("SignUp Error:", error);
      alert("Unable to connect to server. Please try again.");
    }
  };


  return (
    <div className="register-page">
      <div className="register-container">

        {/* Left Section */}
        <div className="register-left">
          <div className="register-left-content">
            <h1>Welcome to OpenBank</h1>

            <p className="left-title">
              Secure Banking. Simple Banking.
            </p>

            <p className="left-desc">
              Create your NetBanking account and enjoy secure,
              fast, and convenient banking services anytime, anywhere.
            </p>

            <div className="benefits">
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Secure NetBanking with 256-bit SSL</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>24/7 Instant Account Access</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Zero-fee Fund Transfers & UPI</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Manage Cards & Fixed Deposits Online</span>
              </div>
            </div>
          </div>

          <div className="left-footer-note">
            🛡️ Protected by Bank-grade Multi-factor Security
          </div>
        </div>

        {/* Right Section */}
        <div className="register-right">

          <div className="register-header">
            <h2>Create Your Account</h2>
            <p>Register for OpenBank NetBanking in a few simple steps</p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Dynamic Input Fields */}
            <div className="form-grid">

              {fields.map((field) => (
                <div className="form-group" key={field.name}>

                  <label htmlFor={field.name}>
                    {field.label}
                  </label>

                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                  />

                </div>
              ))}

              {/* Gender */}
              <div className="form-group">
                <label htmlFor="gender">
                  Gender
                </label>

                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Account Type */}
              <div className="form-group">
                <label htmlFor="accountType">
                  Account Type
                </label>

                <select
                  id="accountType"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  required
                >
                  <option value="Savings">
                    Savings Account
                  </option>

                  <option value="Current">
                    Current Account
                  </option>

                  <option value="Salary">
                    Salary Account
                  </option>
                </select>
              </div>

            </div>

            {/* Terms */}
            <div className="terms">
              <input
                id="termsCheck"
                type="checkbox"
                required
              />

              <label htmlFor="termsCheck">
                I agree to the Terms &amp; Conditions and Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              className="register-button"
            >
              Create Account
            </button>

          </form>

          <div className="login-link">
            Already have an account?
            <button
              type="button"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </div>

        </div>
      </div>

      {/* ================= ACCOUNT CREATED SUCCESS MODAL ================= */}
      {createdAccount && (
        <div className="account-success-backdrop">
          <div className="account-success-modal">
            <div className="success-badge-icon">✓</div>
            <h2 className="success-modal-title">Account Created Successfully!</h2>
            <p className="success-modal-subtitle">
              Welcome to OpenBank. Your NetBanking account has been generated.
            </p>

            <div className="bank-account-card">
              <div className="card-top-row">
                <span className="card-bank-name">OpenBank NetBanking</span>
                <span className="card-acc-type">{createdAccount.accountType}</span>
              </div>

              <div className="card-number-section">
                <span className="card-number-label">Account Number</span>
                <div className="card-number-display">
                  <span className="account-digits">{createdAccount.accountNumber}</span>
                  <button
                    type="button"
                    className="copy-acc-btn"
                    onClick={() => handleCopy(createdAccount.accountNumber)}
                    title="Copy Account Number"
                  >
                    {copied ? "Copied! ✓" : "Copy 📋"}
                  </button>
                </div>
              </div>

              <div className="card-bottom-row">
                <div>
                  <span className="card-detail-label">Account Holder</span>
                  <p className="card-detail-val">{createdAccount.fullName}</p>
                </div>
                <div>
                  <span className="card-detail-label">Registered Mobile</span>
                  <p className="card-detail-val">{createdAccount.mobile}</p>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="proceed-login-btn"
                onClick={handleProceedToLogin}
              >
                Proceed to NetBanking Login →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;