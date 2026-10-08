import { menuItems } from "../data/menu"; // import your menu
import "../styles/sitemap.css";
import BannerAll from "../components/BannerAll";
import Seo from "../components/Seo";

function Sitemap() {
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
      <Seo
        title="साइटमॅप"
        description="पंचायत समिती हवेली संकेतस्थळाचे संपूर्ण साइटमॅप - सर्व पृष्ठे आणि विभाग येथे शोधा."
        keywords="साइटमॅप, पंचायत समिती हवेली, विभाग, पृष्ठे"
        url="https://panchayat-samiti-pune.com/साइटमॅप"
      />
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
