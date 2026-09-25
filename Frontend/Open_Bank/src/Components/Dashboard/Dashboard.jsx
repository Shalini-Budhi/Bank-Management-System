import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../../context/NavigationContext";
import HeaderNav from "./HeaderNav";
import NavigationTabs from "./NavigationTabs";
import GreetingSection from "./GreetingSection";
import CategoryTabs from "./CategoryTabs";
import ProductCardsSection from "./ProductCardsSection";
import FavouriteLinksCard from "./FavouriteLinksCard";
import SendMoneyWidget from "./SendMoneyWidget";
import Accounts from "../Accounts/Accounts";
import SendMoney from "../SendMoney/SendMoney";
import MyCards from "../Cards/MyCards";
import Fd_Rd from "../Fd_Rd/Fd_Rd";
import Bills_Recharge from "../Bills_Recharge/Bills_Recharge";
import Loans from "../Loans/Loans";
import Insure from "../Insure/Insure";
import Invest from "../Invest/Invest";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const { activeNavTab, navigateTo, userName, userInitials, lastLoginTime } = useNavigation();

  const [activeCategory, setActiveCategory] = useState("accounts");

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const handleSpecialOffers = () => {
    alert("🎉 Exclusive pre-approved Credit Card & Personal Loan offers are available for your account!");
  };

  const handleTransferProceed = (data) => {
    alert(`Transfer of ₹${data.amount} to '${data.toAccount}' from '${data.fromAccount}' (${data.transferType}) is submitted for processing!`);
  };

  /* ── Render the correct page based on active nav tab ── */
  const renderContent = () => {
    switch (activeNavTab) {
      case "accounts":
        return <Accounts />;
      case "send-money":
        return <SendMoney />;
      case "cards":
        return <MyCards />;
      case "fdrd":
        return <Fd_Rd />;
      case "bills":
        return <Bills_Recharge />;
      case "loans":
        return <Loans />;
      case "insure":
        return <Insure />;
      case "invest":
        return <Invest />;
      default:
        return (
          <>
            {/* User Greeting and Special Offers Banner */}
            <GreetingSection
              userName={userName}
              lastLogin={lastLoginTime}
              onSpecialOffersClick={handleSpecialOffers}
            />

            {/* Category Switcher Pills */}
            <CategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={(catId) => setActiveCategory(catId)}
            />

            {/* Main Content Grid (Products Left + Favourite Links Right) */}
            <div className="hdfc-dashboard-grid">
              <section className="hdfc-grid-left">
                <ProductCardsSection
                  accountCount={2}
                  actualBalance="₹ 2,45,850.00"
                />
              </section>
              <aside className="hdfc-grid-right">
                <FavouriteLinksCard />
              </aside>
            </div>

            {/* Bottom Section: Send Money Widget */}
            <section className="hdfc-bottom-section">
              <SendMoneyWidget onProceedTransfer={handleTransferProceed} />
            </section>
          </>
        );
    }
  };

  return (
    <div className="hdfc-dashboard-container">
      {/* Subtle Background Watermark Graphic */}
      <div className="hdfc-bg-watermark">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hdfc-watermark-svg"
        >
          <path
            d="M50 250C120 150 220 120 320 170C420 220 480 320 500 450"
            stroke="rgba(255, 255, 255, 0.03)"
            strokeWidth="12"
          />
          <path
            d="M100 280C170 180 270 150 370 200C470 250 500 350 520 480"
            stroke="rgba(255, 255, 255, 0.04)"
            strokeWidth="20"
          />
          <circle
            cx="400"
            cy="150"
            r="180"
            stroke="rgba(255, 255, 255, 0.025)"
            strokeWidth="35"
          />
          <circle
            cx="420"
            cy="120"
            r="260"
            stroke="rgba(56, 189, 248, 0.03)"
            strokeWidth="20"
          />
        </svg>
      </div>

      {/* Top Header Navbar */}
      <HeaderNav
        userName={userName}
        userInitials={userInitials}
        onLogout={handleLogout}
        onSearch={handleSearch}
      />

      {/* Primary Horizontal Navigation Tabs — driven by Context */}
      <NavigationTabs />

      {/* Main Dashboard Content Area */}
      <main className="hdfc-main-content">
        {renderContent()}
      </main>
    </div>
  );
}
