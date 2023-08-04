import React from "react";
import LocationForm from "../components/LocationForm/LocationForm";
import FoodCarousel from "../components/FoodCarousel/FoodCarousel";
import Promos from "../components/Promos/Promos";
import BookingPath from "../components/BookingPath/BookingPath";
import ButtonsFilters from "../components/ButtonsFilters/ButtonsFilters";
import RestaurantsList from "../components/RestaurantsList/RestaurantsList";
import Store from "../components/Store/Store";

const Home = () => {
  return (
    <>
      <LocationForm />
      <FoodCarousel />
      <Promos />
      <BookingPath />
      <ButtonsFilters />
      <RestaurantsList />
      <Store />
    </>
  );
};

export default Home;
