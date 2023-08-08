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
      <div className="logo-container">
        <img
          alt="logo"
          src={logo}
        />
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
