import React from "react";
import LocationForm from "../components/LocationForm/LocationForm";
import FilterBox from "../components/FilterBox/FilterBox";
import RestaurantsList from "../components/RestaurantsList/RestaurantsList";

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
