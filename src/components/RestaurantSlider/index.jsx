import { Carousel } from "@mantine/carousel";
import "./index.scss";

const RestaurantSlider = () => {
  return (
    <div className="restaurant-slider">
      <div className="restaurant-slider__box">
        <img
          src="/img/restuarant-list.png"
          className="restaurant-slider__box__img"
        />
        <h2 className="restaurant-slider__box__name">Italian Restro</h2>
        <h3 className="restaurant-slider__box__cuisine">
          Fast Food, Cafe, Italian
        </h3>
        <div className="restaurant-slider__box__inner-box">
          <h3 className="restaurant-slider__box__rating">4.5 Rating</h3>|
          <h3 className="restaurant-slider__box__time">30 mins</h3>|
          <h3 className="restaurant-slider__box__cost">$25 for 2</h3>
        </div>
      </div>
      <Carousel
        withControls={false}
        loop
        className="restaurant-slider__carousel"
      >
        <Carousel.Slide className="restaurant-slider__carousel__slide">
          <img
            src="/img/italian1.jpg"
            className="restaurant-slider__carousel__slide__img"
          />
        </Carousel.Slide>
        <Carousel.Slide className="restaurant-slider__carousel__slide">
          <img
            src="/img/italian2.jpg"
            className="restaurant-slider__carousel__slide__img"
          />
        </Carousel.Slide>
        <Carousel.Slide className="restaurant-slider__carousel__slide">
          <img
            src="/img/italian3.jpg"
            className="restaurant-slider__carousel__slide__img"
          />
        </Carousel.Slide>
        <Carousel.Slide className="restaurant-slider__carousel__slide">
          <img
            src="/img/1.jpg"
            className="restaurant-slider__carousel__slide__img"
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};
export default RestaurantSlider;
