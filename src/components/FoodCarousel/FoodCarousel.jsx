import React from "react";
import { Carousel } from "@mantine/carousel";
import { cuisines } from "../../assets/data/cuisines";

import "./foodCarousel.scss";

const FoodCarousel = () => {
  return (
    <Carousel
      align="end"
      withControls={false}
      dragFree
      loop
      className="carousel"
    >
      {cuisines.map((item) => {
        return (
          <Carousel.Slide key={item.id}>
            <div className="carousel__restaurant">
              <img src={item.image} className="carousel__restaurant__image" />
              <h2 className="carousel__restaurant__cuisine">{item.cuisine}</h2>
              <h2 className="carousel__restaurant__number">
                {item.number} Restaurants
              </h2>
            </div>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

export default FoodCarousel;
