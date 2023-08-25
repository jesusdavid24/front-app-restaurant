import { Carousel } from '@mantine/carousel';
import './index.scss';

const RestaurantSlider = ({ restaurant }) => {
  const sliderImages = [
    '/img/italian1.jpg',
    '/img/italian2.jpg',
    '/img/italian3.jpg',
    '/img/1.jpg',
  ];

  return (
    <div className='restaurant-slider'>
      <div className='restaurant-slider__box'>
        <img src={restaurant.logo} className='restaurant-slider__box__img' />
        <h2 className='restaurant-slider__box__name'>{restaurant.title}</h2>
        <h3 className='restaurant-slider__box__cuisine'>
          {restaurant.cuisines.join(', ')}
        </h3>
        <div className='restaurant-slider__box__inner-box'>
          <h3 className='restaurant-slider__box__rating'>
            {restaurant.rating} Rating
          </h3>
          |
          <h3 className='restaurant-slider__box__time'>
            {restaurant.delivery_time} mins
          </h3>
          |
          <h3 className='restaurant-slider__box__cost'>
            ${restaurant.cost_two} for 2
          </h3>
        </div>
      </div>

      <Carousel
        withControls={false}
        loop
        className='restaurant-slider__carousel'>
        {sliderImages.map((img, index) => (
          <Carousel.Slide
            key={index}
            className='restaurant-slider__carousel__slide'>
            <img
              src={img}
              className='restaurant-slider__carousel__slide__img'
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
export default RestaurantSlider;
