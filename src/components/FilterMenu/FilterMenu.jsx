import React, { useState, useEffect } from "react";
import { Accordion } from "@mantine/core";
import MenuSlider from "../MenuSlider/MenuSlider";

import "./filterMenu.scss";

const FilterMenu = () => {
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
   const handleFilterMenuOpen = () => {
      setFilterMenuOpen(!filterMenuOpen);
   };

   return (
      <div className="filters">
         <div className="filters__buttons">
            <h2>Filter</h2>
            <i
               className="bi bi-caret-down-fill filters__buttons__icon"
               onClick={handleBoxOpen}></i>
         </div>
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
         <div className="filters__menu-box">
            <h2>Latest Filter</h2>
            <img
               src="/src/assets/icons/filters-menu.png"
               className="filters__menu-box__button"
               onClick={handleFilterMenuOpen}
            />
            {filterMenuOpen && (
               <nav className="filters__menu">
                  <div className="filters__menu__back">
                     <button
                        className="filters__menu__back__button"
                        onClick={handleFilterMenuOpen}>
                        Back
                     </button>
                  </div>
                  <Accordion
                     chevron={
                        <img
                           src="/src/assets/icons/filters-menu.png"
                           className="filters__menu-box__button"
                        />
                     }
                     disableChevronRotation
                     defaultValue={["latest"]}
                     radius="xs"
                     transitionDuration={1000}>
                     <Accordion.Item value="latest">
                        <Accordion.Control className="filters__menu__main-control">
                           Latest Filter
                        </Accordion.Control>
                        <Accordion.Panel>
                           <Accordion
                              chevron={
                                 <i className="bi bi-dash filters__menu__sub-menu__close" />
                              }
                              disableChevronRotation
                              defaultValue={["popular"]}
                              transitionDuration={500}>
                              <Accordion.Item value="popular">
                                 <Accordion.Control className="filters__menu__sub-control">
                                    Popular
                                 </Accordion.Control>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Free Delivery
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Reached In 20 Min
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Pure Veg
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Non Veg
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                              </Accordion.Item>
                           </Accordion>
                        </Accordion.Panel>

                        <Accordion.Panel>
                           <Accordion
                              chevron={
                                 <i className="bi bi-dash filters__menu__sub-menu__close" />
                              }
                              disableChevronRotation
                              defaultValue={["cuisines"]}
                              transitionDuration={800}>
                              <Accordion.Item value="cuisines">
                                 <Accordion.Control className="filters__menu__sub-control">
                                    Cuisines
                                 </Accordion.Control>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Asian
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          SeaFood
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Italian
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Pizza
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Western
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Chinese
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Dessert
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                              </Accordion.Item>
                           </Accordion>
                        </Accordion.Panel>

                        <Accordion.Panel>
                           <Accordion
                              chevron={
                                 <i className="bi bi-dash filters__menu__sub-menu__close" />
                              }
                              disableChevronRotation
                              defaultValue={["star"]}
                              transitionDuration={500}>
                              <Accordion.Item value="star">
                                 <Accordion.Control className="filters__menu__sub-control">
                                    Star Category
                                 </Accordion.Control>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          <span className="filters__menu__sub-menu__stars">
                                             ★★★★★
                                          </span>
                                          (4025)
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          <span className="filters__menu__sub-menu__stars">
                                             ★★★★☆
                                          </span>
                                          (2012)
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          <span className="filters__menu__sub-menu__stars">
                                             ★★★☆☆
                                          </span>
                                          (25)
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />

                                       <h2 className="filters__menu__sub-menu__title">
                                          <span className="filters__menu__sub-menu__stars">
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
                              chevron={
                                 <i className="bi bi-dash filters__menu__sub-menu__close" />
                              }
                              disableChevronRotation
                              defaultValue={["cost"]}
                              transitionDuration={500}>
                              <Accordion.Item value="cost">
                                 <Accordion.Control className="filters__menu__sub-control">
                                    Cost For Two
                                 </Accordion.Control>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu__slider">
                                       <MenuSlider />
                                    </div>
                                 </Accordion.Panel>
                              </Accordion.Item>
                           </Accordion>
                        </Accordion.Panel>

                        <Accordion.Panel>
                           <Accordion
                              chevron={
                                 <i className="bi bi-dash filters__menu__sub-menu__close" />
                              }
                              disableChevronRotation
                              defaultValue={["delivery"]}
                              transitionDuration={500}>
                              <Accordion.Item value="delivery">
                                 <Accordion.Control className="filters__menu__sub-control">
                                    Delivery Time
                                 </Accordion.Control>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Upto 20 Minutes
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Upto 30 Minutes
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Upto 45 Minutes
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                                 <Accordion.Panel>
                                    <div className="filters__menu__sub-menu">
                                       <input
                                          type="checkbox"
                                          className="filters__menu__sub-menu__checkbox"
                                       />
                                       <h2 className="filters__menu__sub-menu__title">
                                          Upto 60 Minutes
                                       </h2>
                                    </div>
                                 </Accordion.Panel>
                              </Accordion.Item>
                           </Accordion>
                        </Accordion.Panel>
                     </Accordion.Item>
                  </Accordion>

                  <div className="filters__menu__help-box">
                     <button className="filters__menu__help-box__button">
                        <i className="bi bi-info-circle filters__menu__help-box__icon" />
                        Need Help
                     </button>
                     <h2 className="filters__menu__help-box__telephone">
                        856 - 215 - 211
                     </h2>
                     <h2 className="filters__menu__help-box__schedule">
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
