import React from "react";
import Restaurantcard from "../RestaurantCard/Restaurantcard";
import { restaurants } from "../../assets/data/restaurants";
import "./restaurantsList.scss";

const RestaurantsList = () => {
   const handleFilterClick = (event) => {
      const currentElement = event.target;

      const selectedElement = document.querySelector(
         ".restaurants-list__buttons--selected"
      );

      if (currentElement !== selectedElement) {
         selectedElement &&
            selectedElement.classList.remove(
               "restaurants-list__buttons--selected"
            );

         currentElement.classList.toggle("restaurants-list__buttons--selected");
      }
   };

   return (
      <div className="restaurants-container">
         <div className="restaurants__cards">
            {restaurants.map((restaurant) => {
               return (
                  <Restaurantcard
                     key={restaurant.id}
                     id={restaurant.id}
                     image={restaurant.image}
                     name={restaurant.name}
                     rating={restaurant.rating}
                     type={restaurant.type}
                     open={restaurant.open}
                     close={restaurant.close}
                     cost={restaurant.cost}
                     howMany={restaurant.howMany}
                  />
               );
            })}
         </div>
         <div className="restaurants-list__buttons-container">
            <button className="restaurants-list__arrow-buttons">
               <img
                  src="../src/assets/icons/left-arrow.png"
                  className="restaurants-list__arrow"
               />
            </button>
            <button
               id="5"
               className="restaurants-list__buttons restaurants-list__buttons--selected"
               onClick={handleFilterClick}>
               1
            </button>
            <button
               id="6"
               className="restaurants-list__buttons"
               onClick={handleFilterClick}>
               2
            </button>
            <button
               id="7"
               className="restaurants-list__buttons"
               onClick={handleFilterClick}>
               3
            </button>
            <button className="restaurants-list__arrow-buttons">
               <img
                  src="../src/assets/icons/right-arrow.png"
                  className="restaurants-list__arrow"
               />
            </button>
         </div>
      </div>
   );
};

export default RestaurantsList;
