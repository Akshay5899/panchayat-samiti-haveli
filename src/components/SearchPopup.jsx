import React, { useState, useEffect, useRef } from "react";
import "./SearchPopup.css";

const searchData = [
  "Pune Panchayat",
  "Government Projects",
  "Public Notices",
  "Office Directory",
  "Employee List",
  "Citizen Services",
  "जिल्हा परिषद सदस्य संख्या – 75",
  "सार्वजनिक सूचना",
  "मंत्रालयीन योजना",
];

const normalizeString = (str) =>
  str
    .normalize("NFC")
    .replace(/[-–—]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const SearchPopup = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const normalizedQuery = normalizeString(query);
  const results = query.trim()
    ? searchData.filter((item) => normalizeString(item).includes(normalizedQuery))
    : [];

  // Navigate to search page
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onClose();
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            autoFocus
          />
          <button type="submit">Go</button>
        </form>

        {results.length > 0 && (
          <ul className="search-results">
            {results.map((item, idx) => (
              <li
                key={idx}
                onClick={() => {
                  window.location.href = `/search?q=${encodeURIComponent(item)}`;
                  onClose();
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPopup;