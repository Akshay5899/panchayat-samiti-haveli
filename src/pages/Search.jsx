import React from "react";
import { Helmet } from 'react-helmet-async';

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

  const pageTitle = query ? `शोध परिणाम: "${query}" - पंचायत समिती पुणे` : "शोध - पंचायत समिती पुणे";
  const description = query ? `पंचायत समिती पुणे मध्ये "${query}" साठी शोध परिणाम.` : "पंचायत समिती पुणे मध्ये माहिती शोधा.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="शोध, पंचायत समिती पुणे, ग्रामीण विकास" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content={`https://panchayat-samiti-pune.com/search?q=${encodeURIComponent(query)}`} />
        <link rel="canonical" href={`https://panchayat-samiti-pune.com/search?q=${encodeURIComponent(query)}`} />
      </Helmet>
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