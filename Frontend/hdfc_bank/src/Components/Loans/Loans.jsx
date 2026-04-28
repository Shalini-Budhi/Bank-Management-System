import { useState } from "react";
import "./Loans.css";

export default function Loans() {
  // QUICK LINKS CARD
  function QuickLinksCard() {
    const quickLinks = [
      {
        id: 1,
        title: "Link Loan",
        icon: "/icons/loanTab_icons/Mutual_Funds.svg",
      },
      {
        id: 2,
        title: "Loan Against Securities",
        icon: "/icons/loanTab_icons/security.svg",
      },
      {
        id: 3,
        title: "Interest Certificate",
        icon: "/icons/loanTab_icons/certificate.svg",
      },
      {
        id: 4,
        title: "Apply for Personal Loan",
        icon: "/icons/loanTab_icons/idcard.svg",
      },
      {
        id: 5,
        title: "Apply for Business Loan",
        icon: "/icons/loanTab_icons/business_Bag.svg",
      },
      {
        id: 6,
        title: "Apply for Car Loan",
        icon: "/icons/loanTab_icons/car.svg",
      },
      {
        id: 7,
        title: "Apply for Home Loan",
        icon: "/icons/loanTab_icons/home.svg",
      },
      {
        id: 8,
        title: "Apply for 2 Wheeler Loan",
        icon: "/icons/loanTab_icons/bike.svg",
      },
      {
        id: 9,
        title: "Apply for Gold Loan",
        icon: "/icons/loanTab_icons/gold.svg",
      },
      {
        id: 10,
        title: "Apply for Loan Against Property",
        icon: "/icons/loanTab_icons/homeAndBuilding.svg",
      },
      {
        id: 11,
        title: "Apply for Credit Card Loan",
        icon: "/icons/loanTab_icons/credit_card.svg",
      },
      {
        id: 12,
        title: "Digital Lending - Important Links",
        icon: "/icons/loanTab_icons/document.svg",
      },
    ];

    return (
      <>
        <div className="quick-link-container">
          <h4>Quick Links</h4>
          <div>
            {quickLinks.map((item) => (
              <div className="quick-link-item">
                <div key={item.id} className="quick-link-image-and-text">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="quick-link-icon"
                  />
                  <p className="quick-link-title">{item.title}</p>
                </div>
                <img
                  src="/icons/loanTab_icons/right_arrow.svg"
                  alt="quick-link-right-arrow"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  // ACTIVE & CLOSED LOANS CARD
  function ActiveAndClosedLoanCard() {
    const [activeLoanTab, setActiveLoanTab] = useState("activeLoan");

    function ActiveLoans() {
      return (
        <>
          <div className="active-loan-card ">
            <img src="/icons/loanTab_icons/noactiveLoan.png" alt="" />
            <h3>You've no active loans!</h3>

            <p>
              Start applying for loans from here and feel free to also link any
              ongoing loans and track them.
            </p>
            <div className="active-loan-card-btn-container">
              <button className="active-loan-apply-btn">Link Loan</button>
              <button className="active-loan-apply-btn">Apply for Loan</button>
            </div>
          </div>
        </>
      );
    }
    function ClosedLoans() {
      return (
        <>
          <div>closed Loans</div>
        </>
      );
    }

    const tabs = {
      activeLoan: <ActiveLoans />,
      closedLoan: <ClosedLoans />,
    };

    return (
      <>
        <div className="active-closed-container">
          <button
            className={`activeAndClosedloan-button ${
              activeLoanTab === "activeLoan" ? "active" : ""
            }`}
            onClick={() => setActiveLoanTab("activeLoan")}
          >
            Active Loan
          </button>
          <button
            className={`activeAndClosedloan-button ${
              activeLoanTab === "closedLoan" ? "active" : ""
            }`}
            onClick={() => setActiveLoanTab("closedLoan")}
          >
            Closed Loan
          </button>
        </div>
        <div>{tabs[activeLoanTab]}</div>
      </>
    );
  }

  return (
    <>
      <div className="loan-header">
        <div className="col-8 loans-apply">
          <h4>Loans</h4>
          <button className=" loan-apply-btn">Apply Now</button>
        </div>
      </div>
     
       <div className="loan-content container">
    

      <div className="loan-container ">
        <div className="row g-4">
          <div className="col-8">
            <div className="card">
              <ActiveAndClosedLoanCard />
            </div>
          </div>
          {/* Quick Links Card*/}
          <div className="col-4 quick-links-container card">
            <QuickLinksCard />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
