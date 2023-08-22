import React from 'react';
import { Carousel } from '@mantine/carousel';
import './index.scss';

const RestaurantCarousel = () => {
  return (
    <div className='restaurant-carousel'>
      <div className='restaurant-carousel__box'>
        <img
          src='../src/assets/img/logo-tab.png'
          className='restaurant-carousel__box__img'
        />
        <h2 className='restaurant-carousel__box__name'>Italian Restro</h2>
        <h3 className='restaurant-carousel__box__cusine'>
          Fast Food, Cafe, Italian
        </h3>
        <div className='restaurant-carousel__box__inner-box'>
          <h3 className='restaurant-carousel__box__rating'>4.5 Rating</h3>|
          <h3 className='restaurant-carousel__box__time'>30 mins</h3>|
          <h3 className='restaurant-carousel__box__cost'>$25 for 2</h3>
        </div>
      </div>
      <Carousel
        withControls={false}
        loop
        className='restaurant-carousel__carousel'>
        <Carousel.Slide className='restaurant-carousel__carousel__slide'>
          <img
            src='../src/assets/img/italian1.jpg'
            className='restaurant-carousel__carousel__slide__img'
          />
        </Carousel.Slide>
        <Carousel.Slide className='restaurant-carousel__carousel__slide'>
          <img
            src='../src/assets/img/italian2.jpg'
            className='restaurant-carousel__carousel__slide__img'
          />
        </Carousel.Slide>
        <Carousel.Slide className='restaurant-carousel__carousel__slide'>
          <img
            src='../src/assets/img/1.jpg'
            className='restaurant-carousel__carousel__slide__img'
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default RestaurantCarousel;
