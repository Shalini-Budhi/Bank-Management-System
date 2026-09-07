import React from "react";
import "./FavouriteLinksCard.css";

const defaultLinks = [
  {
    id: "stmt",
    title: "Account Statement",
    iconType: "statement",
  },
  {
    id: "fd",
    title: "Open FD",
    iconType: "shield",
  },
  {
    id: "summary",
    title: "Download FD Summary",
    iconType: "document",
  },
  {
    id: "od",
    title: "Sweep-in / OD against FD",
    iconType: "rupee",
  },
  {
    id: "casa",
    title: "CASA Interest Certificate",
    iconType: "certificate",
  },
];

export default function FavouriteLinksCard({
  links = defaultLinks,
  onLinkClick,
  onAddEditLinks,
}) {
  const renderIcon = (type) => {
    switch (type) {
      case "statement":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      case "shield":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        );
      case "document":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="12" y2="14" />
            <circle cx="15" cy="15" r="2" />
          </svg>
        );
      case "rupee":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 8h8M8 12h5.5a2.5 2.5 0 0 0 0-5H8M11 12l5 6" />
          </svg>
        );
      case "certificate":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <circle cx="8" cy="10" r="2" />
            <line x1="12" y1="9" x2="18" y2="9" />
            <line x1="12" y1="12" x2="16" y2="12" />
            <path d="M7 18v3l3-2 3 2v-3" />
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 14 14" />
          </svg>
        );
    }
  };

  return (
    <div className="hdfc-fav-links-card">
      <h2 className="hdfc-fav-links-header">My Favourite Links</h2>

      <div className="hdfc-fav-links-list">
        {links.map((link) => (
          <button
            key={link.id}
            className="hdfc-fav-link-item"
            onClick={() => (onLinkClick ? onLinkClick(link) : alert(`Opening ${link.title}...`))}
          >
            <div className="hdfc-fav-link-left">
              <span className="hdfc-fav-link-icon">{renderIcon(link.iconType)}</span>
              <span className="hdfc-fav-link-title">{link.title}</span>
            </div>
            <svg
              className="hdfc-fav-link-chevron"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64748b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        ))}
      </div>

      <div className="hdfc-fav-links-footer">
        <button
          className="hdfc-add-edit-btn"
          onClick={onAddEditLinks || (() => alert("Opening Add & Edit Links modal..."))}
        >
          Add &amp; Edit Links
        </button>
      </div>
    </div>
  );
}
