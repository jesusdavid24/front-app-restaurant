import CardsRestaurants from "../Restaurant";
import { Carousel } from "@mantine/carousel";
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
              <CardsRestaurants
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
