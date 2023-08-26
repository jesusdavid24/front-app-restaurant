import React from 'react';
import LocationForm from '../../components/LocationForm';
import FoodCarousel from '../../components/FoodCarousel';
import Promos from '../../components/Promos';
import BookingPath from '../../components/BookingPath';
import ButtonsFilters from '../../components/ButtonsFilters';
import RestaurantsList from '../../components/RestaurantsList';
import { RestaurantsProvider } from '../../store/RestaurantsContext';
import Store from '../../components/Store';

const Home = () => {
  return (
    <>
      <RestaurantsProvider>
        <LocationForm />
        <FoodCarousel />
        <Promos />
        <BookingPath />
        <ButtonsFilters />
        <RestaurantsList />
        <Store />
      </RestaurantsProvider>
    </>
  );
};

export default Home;
