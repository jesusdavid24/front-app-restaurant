import React, { useState } from "react";
import Header from "../components/Header/Header";
import LocationForm from "../components/LocationForm/LocationForm";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import RestaurantsList from "../components/RestaurantsList/RestaurantsList";
import Footer from "../components/Footer/Footer";

const ListRestaurants = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const handleMenuOpen = (newValue) => {
      setMenuOpen(newValue);
   };
   return (
      <>
         <Header menuOpen={menuOpen} onMenuOpen={setMenuOpen} />
         <LocationForm menuOpen={menuOpen} />
         <FilterMenu />
         <RestaurantsList />
         <Footer />
      </>
   );
};

export default ListRestaurants;
