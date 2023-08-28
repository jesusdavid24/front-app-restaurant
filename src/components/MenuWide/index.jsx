import React from "react";
import { Accordion } from "@mantine/core";
import { NavLink } from "react-router-dom";
import "./index.scss";

const HomeMenuWide = () => {
  const handleMenuOpen = () => {
    onMenuOpen(!menuOpen);
  };
  const handleClick = (event) => {
    const currentElement = event.target;
    const selectedElement = document.querySelector(
      ".mantine-Accordion-label--selected"
    );
    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove("mantine-Accordion-label--selected");
      currentElement.classList.toggle("mantine-Accordion-label--selected");
    }
    currentElement == selectedElement &&
      currentElement.classList.toggle("mantine-Accordion-label--selected");
  };
  return (
    <div className="home-menu-wide">
      <Accordion
        radius="xs"
        disableChevronRotation
        transitionDuration={500}
        chevron={false}
        className="home-menu-wide__accordion">
        <Accordion.Item
          value="home"
          className="home-menu-wide__accordion__item">
          <Accordion.Control
            className="home-menu-wide__accordion__control"
            onClick={handleClick}>
            HOME
          </Accordion.Control>
          <div className="home-menu-wide__accordion__panel-box">
            <Accordion.Panel className="home-menu-wide__accordion__panel">
              Panel 1
            </Accordion.Panel>
            <Accordion.Panel className="home-menu-wide__accordion__panel">
              Panel 2
            </Accordion.Panel>
            <Accordion.Panel className="home-menu-wide__accordion__panel">
              Panel 3
            </Accordion.Panel>
          </div>
        </Accordion.Item>
        <Accordion.Item
          value="restaurant"
          className="home-menu-wide__accordion__item">
          <Accordion.Control
            className="home-menu-wide__accordion__control"
            onClick={handleClick}>
            RESTAURANT
          </Accordion.Control>
          <div className="home-menu-wide__accordion__panel-box">
            <Accordion.Panel className="home-menu-wide__accordion__panel">
              Listing
            </Accordion.Panel>
            <Accordion.Panel className="home-menu-wide__accordion__panel">
              Single Page
            </Accordion.Panel>
            <Accordion.Panel className="home-menu-wide__accordion__panel">
              Booking
            </Accordion.Panel>
          </div>
        </Accordion.Item>
        <Accordion.Item
          value="pages"
          className="home-menu-wide__accordion__item">
          <Accordion.Control
            className="home-menu-wide__accordion__control"
            onClick={handleClick}>
            PAGES
          </Accordion.Control>
          <div className="home-menu-wide__accordion__panel-box">
            <Accordion.Panel className="home-menu-wide__accordion__panel">
              <NavLink
                to="/"
                className="home-menu-wide__accordion__nav"
                onClick={handleMenuOpen}>
                Home
              </NavLink>
            </Accordion.Panel>
            <Accordion.Panel className="home-menu-wide__accordion__panel">
              <NavLink
                to="/restaurants"
                className="home-menu-wide__accordion__nav"
                onClick={handleMenuOpen}>
                Restaurants
              </NavLink>
            </Accordion.Panel>

            <Accordion.Panel className="home-menu-wide__accordion__panel">
              <NavLink
                to="/checkout"
                className="home-menu-wide__accordion__nav"
                onClick={handleMenuOpen}>
                Checkout
              </NavLink>
            </Accordion.Panel>

            <Accordion.Panel className="home-menu-wide__accordion__panel">
              <NavLink
                to="/admin"
                className="home-menu-wide__accordion__nav"
                onClick={handleMenuOpen}>
                Admin
              </NavLink>
            </Accordion.Panel>
          </div>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default HomeMenuWide;
