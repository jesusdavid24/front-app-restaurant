import { useState, useEffect } from "react";
import HomeMenu from "../home-menu/HomeMenu";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-tab.png"
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
      <div className="header__container">
        <div className="header__container__img">
          <img
            alt="logo"
            src={logo}
          />
        </div>
        <div className="header__container__buttons">
          <button className="header__container__buttons__open-menu" onClick={handleMenuOpen}>
            <i className="bi bi-list" />
          </button>
          <Link to="/login" className="header__container__buttons__profile-menu">
            <i className="bi bi-person-fill" />
          </Link>
          <button className="header__container__buttons__settings-menu">
            <i className="bi bi-gear-fill" />
          </button>
          {menuOpen && (
            <HomeMenu menuOpen={menuOpen} onMenuOpen={handleMenuOpen} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
