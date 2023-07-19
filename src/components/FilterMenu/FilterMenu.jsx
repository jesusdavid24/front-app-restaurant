import React, { useState, useEffect } from "react";
import { Accordion } from "@mantine/core";

import "./filterMenu.scss";

const FilterMenu = () => {
   const [boxOpen, setBoxOpen] = useState(false);
   const [filterMenuOpen, setFilterMenuOpen] = useState(false);

   const menuUrl = "/src/assets/icons/filters-menu.png";

   useEffect(() => {
      if (filterMenuOpen) {
         document.body.classList.add("menu-open");
      } else {
         document.body.classList.remove("menu-open");
      }
   }, [filterMenuOpen]);

   const handleClick = (event) => {
      const currentElement = event.target;

      const selectedElement = document.querySelector(".list__item--selected");

      if (currentElement !== selectedElement) {
         selectedElement &&
            selectedElement.classList.remove("list__item--selected");

         currentElement.classList.toggle("list__item--selected");
      }
   };

   const handleBoxOpen = () => {
      setBoxOpen(!boxOpen);
   };
   const handleFilterMenuOpen = () => {
      setFilterMenuOpen(!filterMenuOpen);
   };

   return (
      <div className="filters-type-container">
         <div className="filter-box">
            <h2>Filter</h2>
            <i className="bi bi-caret-down-fill" onClick={handleBoxOpen}></i>
         </div>
         {boxOpen && (
            <div className="box">
               <ul className="box__list">
                  <li
                     id="all"
                     className="list__item list__item--selected"
                     onClick={handleClick}>
                     All
                  </li>
                  <li id="popular" className="list__item" onClick={handleClick}>
                     Popular
                  </li>
                  <li id="latest" className="list__item" onClick={handleClick}>
                     Latest
                  </li>
                  <li id="trend" className="list__item" onClick={handleClick}>
                     Trend
                  </li>
               </ul>
            </div>
         )}
         <div className="filter-menu">
            <h2>Latest Filter</h2>
            <img
               src="/src/assets/icons/filters-menu.png"
               className="menu-icon"
               onClick={handleFilterMenuOpen}
            />
            {filterMenuOpen && (
               <nav className="filter__menu">
                  <div className="back-button-container">
                     <button
                        className="filter__close-button"
                        onClick={handleFilterMenuOpen}>
                        Back
                     </button>
                  </div>
                  <Accordion
                     chevron={
                        <img
                           src="/src/assets/icons/filters-menu.png"
                           className="menu-icon"
                        />
                     }
                     disableChevronRotation
                     defaultValue={["latest"]}
                     radius="xs"
                     transitionDuration={500}>
                     <Accordion.Item value="latest">
                        <Accordion.Control className="filter-menu__main-control">
                           Latest Filter
                        </Accordion.Control>
                        <Accordion.Panel>
                           <Accordion
                              chevron={<i className="bi bi-plus" />}
                              disableChevronRotation
                              defaultValue={["popular"]}
                              transitionDuration={500}
                              className="accordion-container">
                              <Accordion.Item value="popular">
                                 <Accordion.Control className="filter-menu__control">
                                    Popular
                                 </Accordion.Control>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Free Delivery
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Reached In 20 Min
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Pure Veg
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Non Veg
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                              </Accordion.Item>
                           </Accordion>
                        </Accordion.Panel>

                        <Accordion.Panel>
                           <Accordion
                              chevron={<i className="bi bi-plus" />}
                              disableChevronRotation
                              defaultValue={["cuisines"]}
                              transitionDuration={800}>
                              <Accordion.Item value="cuisines">
                                 <Accordion.Control className="filter-menu__control">
                                    Cuisines
                                 </Accordion.Control>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">Asian</h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          SeaFood
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Italian
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">Pizza</h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Western
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Chinese
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Dessert
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                              </Accordion.Item>
                           </Accordion>
                        </Accordion.Panel>

                        <Accordion.Panel>
                           <Accordion
                              chevron={<i className="bi bi-plus" />}
                              disableChevronRotation
                              defaultValue={["star"]}
                              transitionDuration={500}>
                              <Accordion.Item value="star">
                                 <Accordion.Control className="filter-menu__control">
                                    Star Category
                                 </Accordion.Control>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          <span className="subMenu__stars">
                                             ★★★★★
                                          </span>
                                          (4025)
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          <span className="subMenu__stars">
                                             ★★★★☆
                                          </span>
                                          (2012)
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          <span className="subMenu__stars">
                                             ★★★☆☆
                                          </span>
                                          (25)
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />

                                       <h2 className="subMenu__title">
                                          <span className="subMenu__stars">
                                             ★★☆☆☆
                                          </span>
                                          (1)
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                              </Accordion.Item>
                           </Accordion>
                        </Accordion.Panel>

                        <Accordion.Panel>
                           <Accordion
                              chevron={<i className="bi bi-plus" />}
                              disableChevronRotation
                              defaultValue={["cost"]}
                              transitionDuration={500}>
                              <Accordion.Item value="cost">
                                 <Accordion.Control className="filter-menu__control">
                                    Cost For Two
                                 </Accordion.Control>
                                 <Accordion.Panel>Home</Accordion.Panel>
                                 <Accordion.Panel>Our Vehical</Accordion.Panel>
                              </Accordion.Item>
                           </Accordion>
                        </Accordion.Panel>

                        <Accordion.Panel>
                           <Accordion
                              chevron={<i className="bi bi-plus" />}
                              disableChevronRotation
                              defaultValue={["delivery"]}
                              transitionDuration={500}>
                              <Accordion.Item value="delivery">
                                 <Accordion.Control className="filter-menu__control">
                                    Delivery Time
                                 </Accordion.Control>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Upto 20 Minutes
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Upto 30 Minutes
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Upto 45 Minutes
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="subMenu__container">
                                       <input
                                          type="checkbox"
                                          className="submenu__checkbox"
                                       />
                                       <h2 className="subMenu__title">
                                          Upto 60 Minutes
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                              </Accordion.Item>
                           </Accordion>
                        </Accordion.Panel>
                     </Accordion.Item>
                  </Accordion>

                  <div className="help-button-container">
                     <button className="help-button">
                        <i className="bi bi-info-circle" />
                        Need Help
                     </button>
                     <h2 className="telephone"> 856 - 215 - 211 </h2>
                     <h2 className="schedule">
                        Monday to Friday 9.00am - 7.30pm
                     </h2>
                  </div>
               </nav>
            )}
         </div>
      </div>
   );
};

export default FilterMenu;
