import React from "react";
import Restaurantcard from "../restaurant-card/Restaurantcard";
import { Carousel } from "@mantine/carousel";
import { restaurants } from "../../assets/data/restaurants";
import "./index.scss";

const RestaurantsCarousel = () => {
  return (
    <div className="order-restaurants">
      <Carousel
        align="end"
        withControls={false}
        loop
        className="order-restaurants__carousel"
      >
        {restaurants.map((restaurant) => {
          return (
            <Carousel.Slide
              key={restaurant.id}
              className="order-restaurants__carousel__slide"
            >
              <Restaurantcard
                id={restaurant.id}
                image={restaurant.image}
                name={restaurant.name}
                rating={restaurant.rating}
                type={restaurant.type}
                open={restaurant.open}
                close={restaurant.close}
                cost={restaurant.cost}
                howMany={restaurant.howMany}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default RestaurantsCarousel;
