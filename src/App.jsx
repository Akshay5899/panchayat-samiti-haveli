import { useState, useEffect } from "react"
import { Helmet } from 'react-helmet-async'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Test from "./pages/test";

import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import LeadersSection from "./components/LeadersSection"
import MembersSection from "./components/MembersSection"
import OnlineServices from "./components/OnlineServices"
import GovSection from "./components/GovSection"
import DynamicPage from "./pages/DynamicPage"
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrollToTop";
import Sitemap from "./pages/Sitemap";
import RtiDocuments from "./pages/RtiDocuments";

function Home() {
  return (
    <>
      <Helmet>
        <title>पंचायत समिती पुणे - अधिकृत संकेतस्थळ</title>
        <meta name="description" content="पंचायत समिती पुणे अधिकृत संकेतस्थळ - विभाग, सेवा, मार्गदर्शन आणि संपर्क माहिती." />
        <meta name="keywords" content="पंचायत समिती पुणे, ग्रामपंचायत, सरकारी योजना, संपर्क, विभाग" />
        <meta property="og:title" content="पंचायत समिती पुणे - अधिकृत संकेतस्थळ" />
        <meta property="og:description" content="पंचायत समिती पुणे अधिकृत संकेतस्थळ - विभाग, सेवा, मार्गदर्शन आणि संपर्क माहिती." />
        <meta property="og:url" content="https://panchayat-samiti-pune.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://panchayat-samiti-pune.com/" />
      </Helmet>
      <Hero />

      <div className="about-leaders-section">
        <AboutSection />
        <LeadersSection />
      </div>

      <MembersSection />
      <OnlineServices />
      <GovSection />
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    // Get initial path from current location and decode URI if needed
    return decodeURI(window.location.pathname);
  });

  useEffect(() => {
    // Listen for all navigation changes
    const handleStateChange = () => {
      setCurrentPath(decodeURI(window.location.pathname));
    };

    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', handleStateChange);
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleStateChange);

    return () => {
      window.removeEventListener('popstate', handleStateChange);
      window.removeEventListener('hashchange', handleStateChange);
    };
  }, []);

  const renderPage = () => {
    if (currentPath === '/') {
      return <Home />
    } else if (currentPath === '/search') {
      return <Search />
    } else if (currentPath === '/साइटमॅप') {
      return <Sitemap />
    } else if (currentPath === '/माहिती-अधिकार/माहितीचा-अधिकार-कागदपत्रे') {
      return <RtiDocuments />
    } else if (currentPath === '/निर्देशिका') {
      return <Test />
    } else {
      // Handle dynamic pages
      return <DynamicPage />
    }
  }

  return (
    <>
      <Header />

      {renderPage()}

      <Footer />

      <ScrollToTop/>
    </>
  )
}

export default App