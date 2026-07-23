import React, { useEffect, useState } from "react";
import "./GovSection.css";

/* 🔼 Top Logos */
const topLogos = [
  { img: "/images/home-bottom/top-logo-1.png", link: "https://aaplesarkar.mahaonline.gov.in/", alt: "आपले सरकार महाऑनलाइन" },
  { img: "/images/home-bottom/top-logo-2.png", link: "https://rtionline.maharashtra.gov.in/", alt: "RTI ऑनलाइन महाराष्ट्र" },
  { img: "/images/home-bottom/top-logo-3.png", link: "#", alt: "सरकारी योजना लोगो" },
  { img: "/images/home-bottom/top-logo-4.png", link: "https://zppunecessyojana.com/Dashboard.aspx", alt: "ZP पुणे शौचालय योजना" },
  { img: "/images/home-bottom/top-logo-5.png", link: "https://sbm.gov.in/sbmgdashboard/", alt: "स्वच्छ भारत मिशन" },
  { img: "/images/home-bottom/top-logo-6.png", link: "https://nreganarep.nic.in/netnrega/nrega_ataglance/At_a_glance.aspx", alt: "MNREGA" },
  { img: "/images/home-bottom/top-logo-7.png", link: "https://pmayg.dord.gov.in/netiay/PBIDashboard/PMAYGDashboard.aspx", alt: "प्रधानमंत्री आवास योजना" },
  { img: "/images/home-bottom/top-logo-8.png", link: "https://ejalshakti.gov.in/jjmreport/JJMIndia.aspx", alt: "जल जीवन मिशन" }
];

/* 🔽 Bottom Logos */
const bottomLogos = [
  { img: "/images/home-bottom/logo1.png", link: "https://data.gov.in/", alt: "डेटा गव्हर्नमेंट ऑफ इंडिया" },
  { img: "/images/home-bottom/logo2.png", link: "https://www.makeinindia.com/", alt: "मेक इन इंडिया" },
  { img: "/images/home-bottom/logo3.png", link: "https://incredibleindia.org/", alt: "इन्क्रेडिबल इंडिया" },
  { img: "/images/home-bottom/logo4.png", link: "https://www.digitalindia.gov.in/", alt: "डिजिटल इंडिया" },
  { img: "/images/home-bottom/logo5.png", link: "https://pmnrf.gov.in/en/", alt: "प्रधानमंत्री राष्ट्रीय राहत कोष" },
  { img: "/images/home-bottom/logo6.png", link: "https://www.pmindia.gov.in/en/", alt: "प्रधानमंत्री इंडिया" },
  { img: "/images/home-bottom/logo7.png", link: "#", alt: "सरकारी लोगो" }
];

const GovSection = () => {
  const [startTop, setStartTop] = useState(0);
  const [startBottom, setStartBottom] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);

  /* ✅ Responsive logic */
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 576) {
        setItemsToShow(2);
      } else if (window.innerWidth < 992) {
        setItemsToShow(4);
      } else {
        setItemsToShow(6);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);

    return () => window.removeEventListener("resize", updateItems);
  }, []);

  /* ✅ Auto sliding */
  useEffect(() => {
    const topInterval = setInterval(() => {
      setStartTop((prev) => (prev + 1) % topLogos.length);
    }, 2000);

    const bottomInterval = setInterval(() => {
      setStartBottom((prev) => (prev + 1) % bottomLogos.length);
    }, 2500);

    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
  }, []);

  /* ✅ Visible items */
  const getVisible = (arr, start) => {
    const result = [];
    for (let i = 0; i < itemsToShow; i++) {
      result.push(arr[(start + i) % arr.length]);
    }
    return result;
  };

  const visibleTop = getVisible(topLogos, startTop);
  const visibleBottom = getVisible(bottomLogos, startBottom);

  return (
    <section className="gov-section">

      {/* 🔼 Top Slider */}
      <div className="top-logos container">
        {visibleTop.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.img} alt={item.alt} />
          </a>
        ))}
      </div>

      {/* 🗺 Map + Video */}
      <div className="content-row container">
        <div className="map-box">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23369.17802104422!2d73.876306!3d18.519596000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c045520fa195%3A0x6ebdca3f809f137e!2sNew%20Zilla%20Parishad%2C%20Pune!5e1!3m2!1sen!2sin!4v1773478395140!5m2!1sen!2sin"
          />
        </div>

        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="video"
            allowFullScreen
          />
        </div>
      </div>

      {/* 🔽 Bottom Slider */}
      <div className="bottom-logos container">
        {visibleBottom.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.img} alt={item.alt} />
          </a>
        ))}
      </div>

    </section>
  );
};

export default GovSection;