import React from "react";
import RestaurantSlider from "../../components/restaurant-slider/RestaurantSlider";
import RestaurantOptions from "../../components/restaurant-options/RestaurantOptions";
import OrderOnline from "../../components/order-online/OrderOnline";
import Overview from "../../components/overview/Overview";
import Booking from "../../components/booking/Booking";
import Reviews from "../../components/reviews/Reviews";
import RestaurantsCarousel from "../../components/restaurants-carousel/RestaurantsCarousel";
import AlwaysFirst from "../../components/always-first/AlwaysFirst";
import "./singleRestaurant.scss";

const SingleRestaurant = () => {
  return (
    <div className="single-restaurant">
      <RestaurantSlider />
      <div className="single-restaurant__principal flex row">
        <div className="single-restaurant__principal__option-selection">
          <RestaurantOptions />
          <div className="single-restaurant__principal__options-box">
            <div
              id="order"
              className="single-restaurant__principal__options-box__election"
            >
              <OrderOnline />
            </div>
            <div
              id="overview"
              className="single-restaurant__principal__options-box__election single-restaurant__principal__options-box__election--inactive"
            >
              <Overview />
            </div>
            {/*
            <div className="single-restaurant__principal__options-box__election--inactive">
              <Gallery />
            </div>
            <div className="single-restaurant__principal__options-box__election--inactive">
              <Location />
            </div> */}
            <div
              id="booking"
              className="single-restaurant__principal__options-box__election single-restaurant__principal__options-box__election--inactive"
            >
              <Booking />
            </div>
            <div
              id="reviews"
              className="single-restaurant__principal__options-box__election single-restaurant__principal__options-box__election--inactive"
            >
              <Reviews />
            </div>
          </div>
          <div className="single-restaurant__principal__carousel">
            <RestaurantsCarousel />
          </div>
        </div>
        <div className="single-restaurant__principal__cart flex column">
          {/* <div className="single-restaurant__principal__cart>
          <CartItems />
          </div> */}
          <div className="single-restaurant__principal__offers">
            <AlwaysFirst />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRestaurant;
