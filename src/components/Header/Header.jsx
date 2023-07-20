import React, { useState, useEffect } from "react";
import "./header.scss";

const Header = ({ menuOpen, onMenuOpen }) => {
   useEffect(() => {
      if (menuOpen) {
         document.body.classList.add("menu-open");
      } else {
         document.body.classList.remove("menu-open");
      }
   }, [menuOpen]);

   const handleMenu = (event) => {
      onMenuOpen(!menuOpen);
   };

   // const handlePage = (event) => {
   //    const id = event.target.id;
   //    setMenu(!menu);

   //    id == "productsPage" && handleViewPage("products");
   //    id == "contactPage" && handleViewPage("contact");
   //    id == "logo" && (handleViewPage("products"), setMenu(false));
   // };

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
            <button className="header__open-menu" onClick={handleMenu}>
               <i className="bi bi-list"></i>
            </button>
            <button className="header__profile-menu">
               <i className="bi bi-person-fill"></i>
            </button>
            <button className="header__settings-menu">
               <i className="bi bi-gear-fill"></i>
            </button>
            {menuOpen && (
               <nav className="header__menu open">
                  <div className="back-button">
                     <button
                        className="header__close-menu"
                        onClick={handleMenu}>
                        BACK
                        <i
                           className="bi bi-chevron-right"
                           style={{ fontWeight: "700" }}></i>
                     </button>
                  </div>
                  <ul>
                     <li className="normalLi">
                        HOME <i className="bi bi-plus header-menu__plus"></i>
                     </li>
                     <li className="menu-containerLi">
                        <div className="row">
                           RESTAURANT{" "}
                           <i className="bi bi-dash header-menu__dash"></i>
                        </div>
                        <ul className="containedUl">
                           <li className="containedLi">
                              Listing{" "}
                              <i className="bi bi-plus header-menu__plus"></i>
                           </li>
                           <li className="containedLi">
                              Single Page{" "}
                              <i className="bi bi-plus header-menu__plus"></i>
                           </li>
                           <li className="containedLi">
                              Booking{" "}
                              <i className="bi bi-plus header-menu__plus"></i>
                           </li>
                        </ul>
                     </li>
                     <li className="normalLi">
                        PAGES <i className="bi bi-plus header-menu__plus"></i>
                     </li>
                  </ul>
               </nav>
            )}
         </div>
      </header>
   );
};

export default Header;
