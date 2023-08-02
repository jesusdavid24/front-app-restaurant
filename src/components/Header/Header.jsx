import { useState, useEffect } from "react";
import HomeMenu from "../home-menu/HomeMenu";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const handleMenuOpen = (event) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-background">
          <img
            id="logo"
            src="/src/assets/icons/logo.png"
            className="header__logo"
          />
        </div>
        <h1 id="logo" className="header__title">
          RICA
        </h1>
      </div>
      <div className="buttons-container">
        <button className="header__open-menu" onClick={handleMenuOpen}>
          <i className="bi bi-list" />
        </button>
        <Link to="/login" className="header__profile-menu">
          <i className="bi bi-person-fill" />
        </Link>
        <button className="header__settings-menu">
          <i className="bi bi-gear-fill" />
        </button>
        {menuOpen && (
          <HomeMenu menuOpen={menuOpen} onMenuOpen={handleMenuOpen} />
        )}
      </div>
    </header>
  );
};

export default Header;
