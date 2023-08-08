import React from "react";
import RestaurantCarousel from "../../components/restaurant-carousel/RestaurantCarousel";
import RestaurantOptions from "../../components/restaurant-options/RestaurantOptions";
import OrderOnline from "../../components/order-online/OrderOnline";
import "./singleRestaurant.scss";

const SingleRestaurant = () => {
  return (
    <div className="single-restaurant">
      <RestaurantCarousel />
      <RestaurantOptions />
      <OrderOnline />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SingleRestaurant;
