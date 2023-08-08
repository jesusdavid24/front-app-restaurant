import React from "react";
import { Accordion } from "@mantine/core";
import { NavLink } from "react-router-dom";

import "./homeMenu.scss";

const HomeMenu = ({ menuOpen, onMenuOpen }) => {
  const handleMenuOpen = () => {
    onMenuOpen(!menuOpen);
  };

  return (
    <nav className="home-menu">
      <div className="home-menu__back">
        <button
          className="home-menu__back__button"
          onClick={handleMenuOpen}>
          BACK
          <i className="bi-chevron-right home-menu__back__button__icon" />
        </button>
      </div>
      <Accordion
        radius="xs"
        disableChevronRotation
        transitionDuration={500}
        chevron={<i className="bi-plus home-menu__accordion__chevron" />}
        className="home-menu__accordion">
        <Accordion.Item value="home" className="home-menu__accordion__item">
          <Accordion.Control className="home-menu__accordion__control">
            HOME
          </Accordion.Control>
          <Accordion.Panel className="home-menu__accordion__panel">
            Panel 1
          </Accordion.Panel>
          <Accordion.Panel className="home-menu__accordion__panel">
            Panel 2
          </Accordion.Panel>
          <Accordion.Panel className="home-menu__accordion__panel">
            Panel 3
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item
          value="restaurant"
          className="home-menu__accordion__item">
          <Accordion.Control className="home-menu__accordion__control">
            RESTAURANT
          </Accordion.Control>
          <Accordion.Panel className="home-menu__accordion__panel">
            Listing
          </Accordion.Panel>
          <Accordion.Panel className="home-menu__accordion__panel">
            Single Page
          </Accordion.Panel>
          <Accordion.Panel className="home-menu__accordion__panel">
            Booking
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item
          value="pages"
          className="home-menu__accordion__item">
          <Accordion.Control className="home-menu__accordion__control">
            PAGES
          </Accordion.Control>
          <Accordion.Panel className="home-menu__accordion__panel">
            <NavLink
              to="/"
              className="home-menu__accordion__nav"
              onClick={handleMenuOpen}>
              Home
            </NavLink>
          </Accordion.Panel>
          <Accordion.Panel className="home-menu__accordion__panel">
            <NavLink
              to="/restaurants"
              className="home-menu__accordion__nav"
              onClick={handleMenuOpen}>
              Restaurants
            </NavLink>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </nav>
  );
};

export default HomeMenu;
