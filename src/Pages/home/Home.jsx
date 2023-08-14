import React from "react";
import LocationForm from "../../components/location-form/LocationForm";
import FoodCarousel from "../../components/food-carousel/FoodCarousel";
import Promos from "../../components/promos/Promos";
import BookingPath from "../../components/booking-path/BookingPath";
import ButtonsFilters from "../../components/buttons-filters/ButtonsFilters";
import RestaurantsList from "../../components/restaurants-list/RestaurantsList";
import Store from "../../components/store/Store";

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
