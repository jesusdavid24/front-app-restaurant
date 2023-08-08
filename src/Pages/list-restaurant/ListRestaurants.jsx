import React from "react";
import LocationForm from "../../components/location-form/LocationForm";
import FilterBox from "../../components/filter-box/FilterBox";
import FilterMenu from "../../components/filter-menu/FilterMenu";
import RestaurantsList from "../../components/restaurants-list/RestaurantsList";
import "./listRestaurant.scss";

const ListRestaurants = () => {
  const handleBoxAndMenuOpen = (event) => {
    const id = event.target.id;
    const buttonsBox = document.querySelector(".filters__buttons__box");
    const menuBox = document.querySelector(
      ".restaurants-page__menu-list__filter-menu"
    );

    id == "filter-box-open-button" &&
      buttonsBox.classList.toggle("filters__buttons__box--active");

    id == "filter-menu-open-button" &&
      (menuBox.classList.toggle(
        "restaurants-page__menu-list__filter-menu--active"
      ),
        document.body.classList.toggle("menu-open"));
  };

  return (
    <div className="restaurants-page">
      <LocationForm />
      <div className="restaurants-page__menu-container">
        <div className="restaurants-page__filter-box">
          <FilterBox handleBoxAndMenuOpen={handleBoxAndMenuOpen} />
        </div>
        <div className="restaurants-page__menu-list">
          <div className="restaurants-page__menu-list__filter-menu">
            <FilterMenu handleBoxAndMenuOpen={handleBoxAndMenuOpen} />
          </div>
          <div className="restaurants-page__menu-list__list">
            <RestaurantsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRestaurants;
