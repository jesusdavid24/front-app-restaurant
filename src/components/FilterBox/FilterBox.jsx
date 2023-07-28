import React, { useState, useEffect } from "react";
import FilterMenu from "../FilterMenu/FilterMenu";
import "./filterBox.scss";

const FilterBox = () => {
   const [boxOpen, setBoxOpen] = useState(false);
   const [filterMenuOpen, setFilterMenuOpen] = useState(false);

   useEffect(() => {
      if (filterMenuOpen) {
         document.body.classList.add("menu-open");
      } else {
         document.body.classList.remove("menu-open");
      }
   }, [filterMenuOpen]);

   const handleClick = (event) => {
      const currentElement = event.target;

      const selectedElement = document.querySelector(
         ".box-list__item--selected"
      );

      if (currentElement !== selectedElement) {
         selectedElement &&
            selectedElement.classList.remove("box-list__item--selected");

         currentElement.classList.toggle("box-list__item--selected");
      }
   };

   const handleBoxOpen = () => {
      setBoxOpen(!boxOpen);
   };

   const handleFilterMenuOpen = (event) => {
      setFilterMenuOpen(!filterMenuOpen);
   };

   return (
      <div className="filters">
         <div className="filters__buttons">
            <h2>Filter</h2>
            <i
               className="bi bi-caret-down-fill filters__buttons__icon"
               onClick={handleBoxOpen}
            />
         </div>
         <div className="filters__menu-box">
            <h2>Latest Filter</h2>
            <img
               src="/src/assets/icons/filters-menu.png"
               className="filters__menu-box__button"
               onClick={handleFilterMenuOpen}
            />
            {boxOpen && (
               <div className="filters__buttons__box">
                  <ul className="filters__buttons__box-list">
                     <li
                        id="all"
                        className="box-list__item box-list__item--selected"
                        onClick={handleClick}>
                        All
                     </li>
                     <li
                        id="popular"
                        className="box-list__item"
                        onClick={handleClick}>
                        Popular
                     </li>
                     <li
                        id="latest"
                        className="box-list__item"
                        onClick={handleClick}>
                        Latest
                     </li>
                     <li
                        id="trend"
                        className="box-list__item"
                        onClick={handleClick}>
                        Trend
                     </li>
                  </ul>
               </div>
            )}
            {filterMenuOpen && (
               <FilterMenu
                  filterMenuOpen={filterMenuOpen}
                  onFilterMenuOpen={handleFilterMenuOpen}
               />
            )}
         </div>
      </div>
   );
};

export default FilterBox;
