import React from "react";
import { Carousel } from "@mantine/carousel";
import { types } from "../../assets/data/types";

import "./foodCarousel.scss";

const FoodCarousel = () => {
   return (
      <Carousel withControls={false} dragFree loop>
         {types.map((item) => {
            return (
               <Carousel.Slide key={item.id}>
                  <div className="restaurant-container">
                     <img src={item.image} className="restaurant-img" />
                     <h2 className="restaurant-type">{item.type}</h2>
                     <h2 className="restaurant-number">
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
