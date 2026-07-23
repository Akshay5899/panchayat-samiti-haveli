import { menuItems } from "../data/menu"; // import your menu
import "../styles/sitemap.css";
import BannerAll from "../components/BannerAll";
import { Helmet } from 'react-helmet-async';

function Sitemap({ title }) {
  const renderSitemap = (items, isTopLevel = false) => {
    return (
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.path ? (
              <a className={isTopLevel ? "top-level-link" : ""} href={item.path}>
                {item.name}
              </a>
            ) : (
              <span className={isTopLevel ? "top-level-link" : ""}>
                {item.name}
              </span>
            )}
            {item.submenu && renderSitemap(item.submenu, false)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Helmet>
        <title>साइटमॅप - पंचायत समिती पुणे</title>
        <meta name="description" content="पंचायत समिती पुणे संकेतस्थळाचे संपूर्ण साइटमॅप - सर्व पृष्ठे आणि विभाग येथे शोधा." />
        <meta name="keywords" content="साइटमॅप, पंचायत समिती पुणे, विभाग, पृष्ठे" />
        <meta property="og:title" content="साइटमॅप - पंचायत समिती पुणे" />
        <meta property="og:description" content="पंचायत समिती पुणे संकेतस्थळाचे संपूर्ण साइटमॅप - सर्व पृष्ठे आणि विभाग येथे शोधा." />
        <meta property="og:url" content="https://panchayat-samiti-pune.com/साइटमॅप" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://panchayat-samiti-pune.com/साइटमॅप" />
      </Helmet>
      <BannerAll />
      <div className="sitemap-page">
        <div className="container">
          <h1>साइटमॅप</h1>
          {renderSitemap(menuItems, true)}
        </div>
      </div>
    </>
  );
}

export default Sitemap;
