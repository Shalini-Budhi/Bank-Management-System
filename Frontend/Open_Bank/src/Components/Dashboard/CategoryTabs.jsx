import React, { useState } from "react";
import "./CategoryTabs.css";

const defaultCategories = [
  {
    id: "accounts",
    title: "Accounts",
    subtitle: "Savings, Current etc",
    hasDetails: true,
  },
  { id: "cards", title: "Cards", hasDetails: false },
  { id: "fdrd", title: "FD/RD/Flexi-RD", hasDetails: false },
  { id: "loans", title: "Loans", hasDetails: false },
  { id: "invest", title: "Invest", hasDetails: false },
  { id: "insure", title: "Insure", hasDetails: false },
];

export default function CategoryTabs({
  categories = defaultCategories,
  activeCategory = "accounts",
  onCategoryChange,
}) {
  const [selected, setSelected] = useState(activeCategory);

  const handleSelect = (id) => {
    setSelected(id);
    if (onCategoryChange) onCategoryChange(id);
  };

  return (
    <div className="hdfc-category-section">
      <div className="hdfc-category-list">
        {categories.map((cat) => {
          const isActive = selected === cat.id;

          if (isActive) {
            return (
              <div key={cat.id} className="hdfc-category-active-wrapper">
                <button
                  className="hdfc-category-card-active"
                  onClick={() => handleSelect(cat.id)}
                >
                  <div className="hdfc-category-icon-box">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Money sack / accounts icon */}
                      <path
                        d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="7"
                        y="9"
                        width="14"
                        height="10"
                        rx="2"
                        fill="#0284c7"
                        stroke="#38bdf8"
                        strokeWidth="2"
                      />
                      <circle cx="14" cy="14" r="2" fill="#fbbf24" />
                    </svg>
                  </div>
                  <div className="hdfc-category-info">
                    <span className="hdfc-category-title-active">
                      {cat.title}
                    </span>
                    <span className="hdfc-category-sub-active">
                      {cat.subtitle || "Overview & Details"}
                    </span>
                  </div>
                </button>
                {/* Downward Pointer Triangle */}
                <div className="hdfc-active-pointer"></div>
              </div>
            );
          }

          return (
            <button
              key={cat.id}
              className="hdfc-category-pill-inactive"
              onClick={() => handleSelect(cat.id)}
            >
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
