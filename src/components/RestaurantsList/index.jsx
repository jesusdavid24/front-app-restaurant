import React from "react";
import Restaurantcard from "../RestaurantsCards";
import { restaurants } from "../../assets/data/restaurants";
import "./index.scss";

const RestaurantsList = () => {
  const handleFilterClick = (event) => {
    const currentElement = event.target;
    const selectedElement = document.querySelector(
      ".restaurants-list__navigate__numbers--selected"
    );
    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove(
          "restaurants-list__navigate__numbers--selected"
        );
      currentElement.classList.toggle(
        "restaurants-list__navigate__numbers--selected"
      );
    }
  };
  return (
    <div className="restaurants-list">
      <div className="restaurants-list__cards">
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
      <div className="restaurants-list__navigate">
        <button className="restaurants-list__navigate__arrows">
          <img
            src="/icons/left-arrow.png"
            className="restaurants-list__navigate__arrow-icon"
          />
        </button>
        <button
          id="5"
          className="restaurants-list__navigate__numbers restaurants-list__navigate__numbers--selected"
          onClick={handleFilterClick}>
          1
        </button>
        <button
          id="6"
          className="restaurants-list__navigate__numbers"
          onClick={handleFilterClick}>
          2
        </button>
        <button
          id="7"
          className="restaurants-list__navigate__numbers"
          onClick={handleFilterClick}>
          3
        </button>
        <button className="restaurants-list__navigate__arrows">
          <img
            src="/icons/right-arrow.png"
            className="restaurants-list__navigate__arrow-icon"
          />
        </button>
      </div>
    </div>
  );
};
export default RestaurantsList;
