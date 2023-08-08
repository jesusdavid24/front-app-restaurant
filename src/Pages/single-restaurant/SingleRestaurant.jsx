import React from "react";
import RestaurantCarousel from "../../components/RestaurantCarousel/RestaurantCarousel";
import RestaurantOptions from "../../components/RestaurantOptions/RestaurantOptions";
import OrderOnline from "../../components/OrderOnLine/OrderOnline";
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
