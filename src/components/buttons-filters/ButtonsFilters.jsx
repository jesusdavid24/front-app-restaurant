import React from "react";
import "./buttonsFilters.scss";

const ButtonsFilters = () => {
  const handleClick = (event) => {
    const currentElement = event.target;

    const selectedElement = document.querySelector(
      ".buttons-filters__box__button--selected"
    );

    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove(
          "buttons-filters__box__button--selected"
        );

      currentElement.classList.toggle(
        "buttons-filters__box__button--selected"
      );
    }
  };

  return (
    <div className="buttons-filters">
      <h1 className="buttons-filters__title">Popular Restaurant</h1>
      <div className="buttons-filters__box">
        <button
          id="1"
          className="buttons-filters__box__button buttons-filters__box__button--selected"
          onClick={handleClick}>
          All
        </button>
        <button
          id="2"
          className="buttons-filters__box__button"
          onClick={handleClick}>
          Popular
        </button>
        <button
          id="3"
          className="buttons-filters__box__button"
          onClick={handleClick}>
          Latest
        </button>
        <button
          id="4"
          className="buttons-filters__box__button"
          onClick={handleClick}>
          Trend
        </button>
      </div>
    </div>
  );
};

export default ButtonsFilters;
