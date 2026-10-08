import LanguageSwitch from "./LanguageSwitch";
import Translator from "./Translator";
import SideMenu from "./SideMenu";
import { menuItems } from "../data/menu";
import SearchPopup from "./SearchPopup";
import "./header.css";
import { useState, useRef } from "react";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef();

  const handleOpenSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);

  // ✅ Navbar toggle
  const toggleMenu = () => {
    menuRef.current.classList.toggle("show");
  };

  // ✅ Close navbar
  const closeMenu = () => {
    if (menuRef.current.classList.contains("show")) {
      menuRef.current.classList.remove("show");
    }
  };

  // ✅ Toggle submenu (icon click)
  const handleToggleSubmenu = (e, key) => {
    if (window.innerWidth < 1200) {
      e.preventDefault();
      e.stopPropagation();
      setOpenMenu(openMenu === key ? null : key);
    }
  };

  // ✅ Navigate function - use History API for smooth navigation without page reload
  const navigate = (path) => {
    if (path && path !== '#' && path !== '') {
      // Ensure path starts with /
      const fullPath = path.startsWith('/') ? path : '/' + path;
      const encodedPath = encodeURI(fullPath);

      // Use History API to change URL without reloading page
      window.history.pushState({ path: fullPath }, '', encodedPath);
      
      // Trigger a custom event so App component knows to update
      window.dispatchEvent(new PopStateEvent('popstate', { state: { path: fullPath } }));
    }
  };

  // ✅ Recursive Menu
  const renderMenu = (items, parentKey = "") =>
    items.map((item, idx) => {
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      const key = parentKey + idx;

      return (
        <li
          key={key}
          className={`nav-item dropdown ${
            parentKey ? "dropdown-submenu" : ""
          } ${openMenu === key ? "mobile-open" : ""}`}
        >
          <div className="d-flex justify-content-between align-items-center">

            {/* TEXT CLICK → NAVIGATE */}
            <a
              href={item.path || "#"}
              className="nav-link flex-grow-1"
              onClick={(e) => {
                e.preventDefault();
                navigate(item.path);
                if (window.innerWidth < 1200) closeMenu();
              }}
            >
              {item.name}
            </a>

            {/* ICON CLICK → OPEN SUBMENU */}
            {hasSubmenu && (
              <i
                className={`bi ${
                  parentKey
                    ? "bi-caret-right-fill"
                    : "bi-caret-down-fill"
                } ms-2`}
                onClick={(e) => handleToggleSubmenu(e, key)}
                style={{ cursor: "pointer", color: "white" }}
              ></i>
            )}
          </div>

          {/* SUBMENU */}
          {hasSubmenu && (
            <ul className="dropdown-menu">
              {renderMenu(item.submenu, key + "-")}
            </ul>
          )}
        </li>
      );
    });

  return (
    <header>
      {/* Top Bar */}
      <div className="gov-bar">
        <div className="container top-h g-3 d-flex justify-content-between align-items-center">
          <div className="gov-text">
            <a href="https://maharashtra.gov.in/" target="_blank">
              महाराष्ट्र शासन | GOVERNMENT OF MAHARASHTRA
            </a>
          </div>

          <div className="gov-icons">
            <i
              className="bi bi-search"
              onClick={handleOpenSearch}
              style={{ cursor: "pointer" }}
            ></i>

            <span className="divider"></span>

            <a href="/साइटमॅप" target="_blank">
              <i className="bi bi-diagram-3"></i>
            </a>

            <span className="divider"></span>

            <a href="#" target="_blank">
              <i className="bi bi-gear"></i>
            </a>

            <span className="divider"></span>

            <Translator />
            <div className="header-right">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="top-header container-fluid">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <a href="/">
              <img src="/images/emblem.png" className="emblem" alt="Emblem" />
            </a>

            <div className="g-3">
              <a href="/" className="sitetitle">
                <h6 className="marathi-title">पंचायत समिती हवेली</h6>
              </a>
              <a href="/" className="sitetitle">
                <h2 className="site-title">Panchayat Samiti Haveli</h2>
              </a>
            </div>
          </div>

          <div className="d-flex gap-3">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="/images/logo1.png" className="gov-logo" alt="" />
            </a>

            <a
              href="https://www.digitalindia.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/logo2.png" className="gov-logo" alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="main-nav">
        <div className="container menu-all">
          <nav className="navbar navbar-expand-xl">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="menu"
              ref={menuRef}
            >
              <ul className="navbar-nav m-auto">
                {renderMenu(menuItems)}
              </ul>
            </div>
          </nav>

          <SideMenu />
        </div>
      </div>

      {/* Search */}
      {showSearch && <SearchPopup onClose={handleCloseSearch} />}
    </header>
  );
}

export default Header;