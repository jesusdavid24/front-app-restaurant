import React from "react";
import "./index.scss";

const FilterBox = ({ handleBoxAndMenuOpen }) => {
  const handleClick = (event) => {
    const currentElement = event.target;

    const selectedElement = document.querySelector(".box-list__item--selected");

    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove("box-list__item--selected");

      currentElement.classList.toggle("box-list__item--selected");
    }
  };

  const handleMenuOpen = (event) => {
    handleBoxAndMenuOpen(event);
  };

  return (
    <div className="filters">
      <div className="filters__buttons">
        <h2>Filter</h2>
        <i
          className="bi bi-caret-down-fill filters__buttons__icon"
          id="filter-box-open-button"
          onClick={handleMenuOpen}
        />
      </div>

      <div className="filters__buttons__box">
        <ul className="filters__buttons__box-list">
          <li
            id="all"
            className="box-list__item box-list__item--selected"
            onClick={handleClick}
          >
            All
          </li>
          <li id="popular" className="box-list__item" onClick={handleClick}>
            Popular
          </li>
          <li id="latest" className="box-list__item" onClick={handleClick}>
            Latest
          </li>
          <li id="trend" className="box-list__item" onClick={handleClick}>
            Trend
          </li>
        </ul>
      </div>

      <div className="filters__menu-box">
        <h2>Latest Filter</h2>
        <img
          src="/src/assets/icons/filters-menu.png"
          id="filter-menu-open-button"
          className="filters__menu-box__button"
          onClick={handleMenuOpen}
        />
      </div>
    </div>
  );
};

export default FilterBox;
