import React, { useState, useEffect } from "react";
import HomeMenu from "../home-menu/HomeMenu";
import HomeMenuWide from "../home-menu-wide/HomeMenuWide";
import "./header.scss";
import { Link } from "react-router-dom";

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
      <div className="header__logo-container">
        <Link to="/">
          <img
            id="logo"
            src="/src/assets/img/logo2.png"
            className="header__logo-container__logo"
          />
        </Link>
      </div>

      <div className="header__menu-container">
        <div className="header__menu-container__row-menu">
          <HomeMenuWide />
        </div>
        <button
          className="header__menu-container__button"
          onClick={handleMenuOpen}
        >
          <i className="bi bi-list" />
        </button>
      </div>

      <div className="header__buttons-container">
        <select className="header__buttons-container__currency">
          <option value="usd">USD</option>
          <option value="cop">COP</option>
          <option value="eur">EUR</option>
        </select>

        <select className="header__buttons-container__language">
          <option value="eng">ENG</option>
          <option value="spa">ESP</option>
          <option value="ita">ITA</option>
        </select>

        <button className="header__buttons-container__profile">
          <Link to="/login">
            <i className="bi bi-person-fill" />
          </Link>
        </button>

        <button className="header__buttons-container__settings">
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
