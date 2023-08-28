import React from "react";
import { Accordion } from "@mantine/core";
import { Link } from "react-router-dom";
import "./index.scss";

const HomeMenu = ({ menuOpen, onMenuOpen }) => {
  return (
    <nav className="home-menu">
      <div className="home-menu__back">
        <button className="home-menu__back__button">
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

        <Accordion.Item value="pages" className="home-menu__accordion__item">
          <Accordion.Control className="home-menu__accordion__control">
            PAGES
          </Accordion.Control>
          <Accordion.Panel className="home-menu__accordion__panel">
            <Link
              to="/"
              className="home-menu__accordion__nav"
            >
              Home
            </Link>
          </Accordion.Panel>
          <Accordion.Panel className="home-menu__accordion__panel">
            <Link
              to="/restaurants"
              className="home-menu__accordion__nav"
            >
              Restaurants
            </Link>
          </Accordion.Panel>

          <Accordion.Panel className="home-menu__accordion__panel">
            <Link
              to="/checkout"
              className="home-menu__accordion__nav"
            >
              Checkout
            </Link>
          </Accordion.Panel>

          <Accordion.Panel className="home-menu__accordion__panel">
            <Link
              to="/admin"
              className="home-menu__accordion__nav"
            >
              Admin
            </Link>
          </Accordion.Panel>

        </Accordion.Item>
      </Accordion>
    </nav>
  );
};

export default HomeMenu;
