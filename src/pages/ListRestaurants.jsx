import React from "react";
import LocationForm from "../components/location-form/LocationForm";
import FilterBox from "../components/filter-box/FilterBox";
import RestaurantsList from "../components/restaurants-list/RestaurantsList";

const ListRestaurants = () => {
  return (
    <>
      <LocationForm />
      <FilterBox />
      <RestaurantsList />
    </>
  );
};

export default ListRestaurants;
