import React from "react";
import "./restaurantsFilters.scss";

const RestaurantsFilters = () => {
   const handleClick = (event) => {
      const currentElement = event.target;

      const selectedElement = document.querySelector(
         ".filters-box__filter--selected"
      );

      if (currentElement !== selectedElement) {
         selectedElement &&
            selectedElement.classList.remove("filters-box__filter--selected");

         currentElement.classList.toggle("filters-box__filter--selected");
      }
   };

   return (
      <div className="filters-container">
         <h1 className="filters__title">Popular Restaurant</h1>
         <div className="filters-box">
            <button
               id="1"
               className="filters-box__filter filters-box__filter--selected"
               onClick={handleClick}>
               All
            </button>
            <button
               id="2"
               className="filters-box__filter"
               onClick={handleClick}>
               Popular
            </button>
            <button
               id="3"
               className="filters-box__filter"
               onClick={handleClick}>
               Latest
            </button>
            <button
               id="4"
               className="filters-box__filter"
               onClick={handleClick}>
               Trend
            </button>
         </div>
      </div>
   );
};

export default RestaurantsFilters;
