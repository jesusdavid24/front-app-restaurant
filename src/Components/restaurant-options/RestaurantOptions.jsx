import React from "react";
import "./restaurantOptions.scss";

const RestaurantOptions = () => {
  const handleClick = (event) => {
    const currentElement = event.target;

    const selectedElement = document.querySelector(
      ".restaurant-options__menu__item--selected"
    );

    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove(
          "restaurant-options__menu__item--selected"
        );

      currentElement.classList.toggle(
        "restaurant-options__menu__item--selected"
      );
    }
  };
  return (
    <div className="restaurant-options">
      <ul className="restaurant-options__menu">
        <li
          className="restaurant-options__menu__item restaurant-options__menu__item--selected"
          onClick={handleClick}
        >
          Order Online
        </li>
        <li className="restaurant-options__menu__item" onClick={handleClick}>
          Overview
        </li>
        <li className="restaurant-options__menu__item" onClick={handleClick}>
          Gallery
        </li>
        <li className="restaurant-options__menu__item" onClick={handleClick}>
          Location
        </li>
        <li className="restaurant-options__menu__item" onClick={handleClick}>
          Book A Table
        </li>
        <li className="restaurant-options__menu__item" onClick={handleClick}>
          Reviews
        </li>
      </ul>
    </div>
  );
};

export default RestaurantOptions;
