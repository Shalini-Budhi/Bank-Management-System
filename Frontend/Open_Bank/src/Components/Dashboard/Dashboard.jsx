import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import NavigationTabs from "./NavigationTabs";
import GreetingSection from "./GreetingSection";
import CategoryTabs from "./CategoryTabs";
import ProductCardsSection from "./ProductCardsSection";
import FavouriteLinksCard from "./FavouriteLinksCard";
import SendMoneyWidget from "./SendMoneyWidget";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  // Retrieve user name from storage if available, otherwise default to "Mannem Vamsi Krishna"
  const [userName, setUserName] = useState("Mannem Vamsi Krishna");
  const [userInitials, setUserInitials] = useState("MK");
  const [activeNavTab, setActiveNavTab] = useState("home");
  const [activeCategory, setActiveCategory] = useState("accounts");
  const [lastLoginTime, setLastLoginTime] = useState("13/08/26, 07:55 PM");

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      // If email or name stored
      const cleanName = storedUser.includes("@")
        ? storedUser.split("@")[0].replace(/[^a-zA-Z0-9 ]/g, " ")
        : storedUser;
      
      if (cleanName.trim()) {
        setUserName(cleanName);
        const parts = cleanName.trim().split(" ");
        if (parts.length >= 2) {
          setUserInitials((parts[0][0] + parts[1][0]).toUpperCase());
        } else {
          setUserInitials(cleanName.substring(0, 2).toUpperCase());
        }
      }
    }
  }, []);

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

      {/* Primary Horizontal Navigation Tabs */}
      <NavigationTabs
        activeTab={activeNavTab}
        onTabChange={(tabId) => setActiveNavTab(tabId)}
      />

      {/* Main Dashboard Content Area */}
      <main className="hdfc-main-content">
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
          {/* Left Column: Product & Account Cards */}
          <section className="hdfc-grid-left">
            <ProductCardsSection
              accountCount={2}
              actualBalance="₹ 2,45,850.00"
            />
          </section>

          {/* Right Column: Favourite Links */}
          <aside className="hdfc-grid-right">
            <FavouriteLinksCard />
          </aside>
        </div>

        {/* Bottom Section: Send Money Widget */}
        <section className="hdfc-bottom-section">
          <SendMoneyWidget onProceedTransfer={handleTransferProceed} />
        </section>
      </main>
    </div>
  );
}
