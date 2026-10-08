import React from "react";
import Seo from "../components/Seo";

// Same data (English + Marathi)
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

const Search = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q") || "";

  const results = searchData.filter((item) =>
    normalizeString(item).includes(normalizeString(query))
  );

  const pageTitle = query ? `शोध परिणाम: "${query}" - पंचायत समिती हवेली` : "शोध - पंचायत समिती हवेली";
  const description = query ? `पंचायत समिती हवेली मध्ये "${query}" साठी शोध परिणाम.` : "पंचायत समिती हवेली मध्ये माहिती शोधा.";

  return (
    <>
      <Seo
        title={pageTitle}
        description={description}
        keywords="शोध, पंचायत समिती हवेली, ग्रामीण विकास"
        url={`https://panchayat-samiti-pune.com/search?q=${encodeURIComponent(query)}`}
        noindex={true}
      />
      <div className="container mt-4">
        <h2>Search Results for: "{query}"</h2>
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {results.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Search;