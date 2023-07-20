import React from "react";
import { Carousel } from "@mantine/carousel";
import { cuisines } from "../../assets/data/cuisines";

import "./foodCarousel.scss";

const FoodCarousel = () => {
   return (
      <Carousel withControls={false} dragFree loop>
         {cuisines.map((item) => {
            return (
               <Carousel.Slide key={item.id}>
                  <div className="carousel-restaurant">
                     <img
                        src={item.image}
                        className="carousel-restaurant__image"
                     />
                     <h2 className="carousel-restaurant__cuisine">
                        {item.cuisine}
                     </h2>
                     <h2 className="carousel-restaurant__number">
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
