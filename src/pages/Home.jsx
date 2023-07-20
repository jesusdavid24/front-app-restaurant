import React, { useState } from "react";
import Header from "../components/Header/Header";
import LocationForm from "../components/LocationForm/LocationForm";
import FoodCarousel from "../components/FoodCarousel/FoodCarousel";
import Promos from "../components/Promos/Promos";
import BookingPath from "../components/BookingPath/BookingPath";
import ButtonsFilters from "../components/ButtonsFilters/ButtonsFilters";
import RestaurantsList from "../components/RestaurantsList/RestaurantsList";
import Store from "../components/Store/Store";
import Footer from "../components/Footer/Footer";

const Home = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const handleMenuOpen = (newValue) => {
      setMenuOpen(newValue);
   };

   return (
      <>
         <Header menuOpen={menuOpen} onMenuOpen={setMenuOpen} />
         <LocationForm menuOpen={menuOpen} />
         <FoodCarousel />
         <Promos />
         <BookingPath />
         <ButtonsFilters />
         <RestaurantsList />
         <Store />
         <Footer />
      </>
   );
};

export default Home;
